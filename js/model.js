// Interactive 3D lunch box (procedural, approx. 23 × 16 × 10.5 cm; 1 unit = 1 cm)
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const explorer = document.getElementById('explorer');
const stage = document.getElementById('stage');
const canvas = document.getElementById('lunchbox-3d');
const hotspotLayer = document.getElementById('hotspots');
const partBox = document.getElementById('part');
const partsList = document.getElementById('parts-list');
const btnExplode = document.getElementById('btn-explode');
const btnHeat = document.getElementById('btn-heat');
const tempEl = document.getElementById('temp');
const tempBar = document.getElementById('tempbar');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const COLOURS = {
  pearl:   { body: 0xEDECE7, trim: 0xBFC4CA },
  nature:  { body: 0x8BAE9A, trim: 0xC9CDD2 },
  city:    { body: 0x2D5476, trim: 0xC9CDD2 },
  glamour: { body: 0xE2B9B3, trim: 0xC9CDD2 },
};

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
} catch (e) {
  renderer = null;
}

if (renderer) init();

function init() {
  explorer.classList.add('has-3d');
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 500);
  camera.position.set(36, 42, 44);

  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(20, 40, 25);
  scene.add(key, new THREE.AmbientLight(0xffffff, 0.25));

  // ---------- helpers ----------
  const rr = (w, h, r, P = THREE.Shape) => {
    const s = new P(), x = -w / 2, y = -h / 2;
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
    return s;
  };
  const ring = (ow, oh, or, iw, ih, ir, depth, bevel = 0) => {
    const s = rr(ow, oh, or);
    s.holes.push(rr(iw, ih, ir, THREE.Path));
    const g = new THREE.ExtrudeGeometry(s, {
      depth, curveSegments: 14,
      bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 4,
    });
    g.rotateX(-Math.PI / 2);
    return g;
  };
  const plate = (w, h, r, depth) => {
    const g = new THREE.ExtrudeGeometry(rr(w, h, r), { depth, bevelEnabled: false, curveSegments: 14 });
    g.rotateX(-Math.PI / 2);
    return g;
  };
  const anchor = (parent, x, y, z) => { const o = new THREE.Object3D(); o.position.set(x, y, z); parent.add(o); return o; };

  // ---------- materials ----------
  const bodyMat = new THREE.MeshStandardMaterial({ color: COLOURS.nature.body, roughness: 0.55, metalness: 0 });
  const trimMat = new THREE.MeshStandardMaterial({ color: COLOURS.nature.trim, roughness: 0.5 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xc8ced6, metalness: 1, roughness: 0.18, side: THREE.DoubleSide });
  const heaterMat = new THREE.MeshStandardMaterial({ color: 0x3a3f47, roughness: 0.7, emissive: 0xff6a10, emissiveIntensity: 0 });
  const clearMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.25, transparent: true, opacity: 0.55, depthWrite: false });
  const cableMat = new THREE.MeshStandardMaterial({ color: 0x1b1d21, roughness: 0.6 });
  const ledMat = new THREE.MeshStandardMaterial({ color: 0x334033, emissive: 0x35e06a, emissiveIntensity: 0 });
  const ringMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xff7a1a, emissiveIntensity: 0 });

  const root = new THREE.Group();
  scene.add(root);

  // ---------- body (open shell + heating base) ----------
  const body = new THREE.Group();
  root.add(body);
  const walls = new THREE.Mesh(ring(22.6, 15.6, 3.2, 21.2, 14.2, 2.6, 6.9, 0.6), bodyMat);
  walls.position.y = 0.6;
  body.add(walls);
  const floor = new THREE.Mesh(plate(22.6, 15.6, 3.2, 0.8), bodyMat);
  floor.position.y = 0.1;
  body.add(floor);
  const heater = new THREE.Mesh(plate(19.5, 12.4, 2, 0.2), heaterMat);
  heater.position.y = 0.9;
  body.add(heater);
  const button = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.4, 32), trimMat);
  button.rotation.x = Math.PI / 2; button.position.set(0, 2.4, 8.75);
  body.add(button);
  const btnRing = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.12, 8, 40), ringMat);
  btnRing.position.set(0, 2.4, 8.8);
  body.add(btnRing);
  [-1, 1].forEach((s) => {
    const h = new THREE.Mesh(new RoundedBoxGeometry(1, 2.4, 5.5, 3, 0.4), trimMat);
    h.position.set(s * 12, 5.6, 0);
    body.add(h);
  });

  // ---------- INOX tray with food ----------
  const tray = new THREE.Group();
  root.add(tray);
  const trayWalls = new THREE.Mesh(ring(20.6, 13.6, 2.4, 20, 13, 2.1, 6), steelMat);
  tray.add(trayWalls);
  const trayFloor = new THREE.Mesh(plate(20.6, 13.6, 2.4, 0.2), steelMat);
  tray.add(trayFloor);
  const lip = new THREE.Mesh(ring(21.4, 14.4, 2.8, 20, 13, 2.1, 0.25), steelMat);
  lip.position.y = 6;
  tray.add(lip);

  const food = new THREE.Group();
  const foodPiece = (geo, color, x, y, z, s = 1) => {
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.8 }));
    m.position.set(x, y, z); m.scale.setScalar(s); food.add(m); return m;
  };
  const rice = foodPiece(new THREE.SphereGeometry(4, 24, 16), 0xf3eadb, -6, 1.6, -2);
  rice.scale.set(1, 0.55, 1.1);
  const sphere = new THREE.SphereGeometry(1, 16, 12);
  [[-8, 3.2, 3], [-6.5, 3.4, 4.5], [-4.6, 3.1, 3.4], [-3.5, 3.0, -4.6]].forEach(([x, y, z]) => foodPiece(sphere, 0x3f8a3a, x, y, z, 1.3));
  [[-2.8, 2.9, 1.5], [-1.6, 2.8, -1], [-8.6, 2.7, -4.8]].forEach(([x, y, z]) => foodPiece(sphere, 0xd8432b, x, y, z, 1.05));
  [[-5.8, 3.4, -0.8], [-3.6, 3.3, 3.8], [-7.6, 3.2, 0.6]].forEach(([x, y, z], i) => {
    const c = foodPiece(new RoundedBoxGeometry(4, 0.9, 1.7, 2, 0.35), 0xd8a868, x, y, z);
    c.rotation.y = 0.5 + i * 0.7; c.rotation.z = 0.12;
  });
  food.position.y = 1;
  tray.add(food);

  // 0.5 L side container with lid
  const side = new THREE.Group();
  tray.add(side);
  const sideBox = new THREE.Mesh(new RoundedBoxGeometry(8.2, 4.2, 12, 4, 0.9), clearMat);
  sideBox.position.y = 2.3;
  side.add(sideBox);
  const sideLid = new THREE.Mesh(new RoundedBoxGeometry(8.6, 0.5, 12.4, 3, 0.22), new THREE.MeshStandardMaterial({ color: 0xf2f4f6, roughness: 0.4 }));
  sideLid.position.y = 4.6;
  side.add(sideLid);
  side.position.set(5.3, 0.4, 0);

  // ---------- lid ----------
  const lid = new THREE.Group();
  root.add(lid);
  const lidShell = new THREE.Mesh(new RoundedBoxGeometry(23.8, 2.3, 16.8, 5, 1.05), bodyMat);
  lidShell.position.y = 1.15;
  lid.add(lidShell);
  const topPlate = new THREE.Mesh(new RoundedBoxGeometry(15, 0.4, 9.6, 3, 0.18), trimMat);
  topPlate.position.y = 2.35;
  lid.add(topPlate);
  const vent = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.5, 32), trimMat);
  vent.position.set(6.3, 2.6, 0);
  lid.add(vent);
  const latch = new THREE.Mesh(new RoundedBoxGeometry(7.4, 3.6, 0.9, 3, 0.4), trimMat);
  latch.position.set(0, -0.6, 8.75);
  lid.add(latch);
  [-1, 1].forEach((s) => {
    const clip = new THREE.Mesh(new RoundedBoxGeometry(0.9, 3.4, 4, 3, 0.35), trimMat);
    clip.position.set(s * 12.25, -0.5, 0);
    lid.add(clip);
  });

  // ---------- car cable & plug ----------
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(11.8, 1.6, -4.5), new THREE.Vector3(15, 0.6, -6),
    new THREE.Vector3(20, 0.4, -2), new THREE.Vector3(21, 0.4, 5), new THREE.Vector3(18, 1.1, 10.5),
  ]);
  const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 64, 0.33, 10), cableMat);
  root.add(cable);
  const plug = new THREE.Group();
  plug.position.set(18, 1.2, 10.5);
  root.add(plug);
  const plugBody = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 0.95, 6, 28), cableMat);
  plugBody.rotation.x = Math.PI / 2; plugBody.position.z = 3;
  plug.add(plugBody);
  const plugTip = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 16), steelMat);
  plugTip.rotation.x = Math.PI / 2; plugTip.position.z = 6.5;
  plug.add(plugTip);
  const led = new THREE.Mesh(new THREE.TorusGeometry(1.08, 0.14, 8, 32), ledMat);
  led.position.z = 1.2;
  plug.add(led);

  // ---------- soft ground shadow ----------
  const sc = document.createElement('canvas'); sc.width = sc.height = 128;
  const sx = sc.getContext('2d');
  const grad = sx.createRadialGradient(64, 64, 4, 64, 64, 64);
  grad.addColorStop(0, 'rgba(10,26,51,.32)'); grad.addColorStop(1, 'rgba(10,26,51,0)');
  sx.fillStyle = grad; sx.fillRect(0, 0, 128, 128);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(40, 30), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.02;
  root.add(shadow);

  // ---------- steam ----------
  const stc = document.createElement('canvas'); stc.width = stc.height = 64;
  const stx = stc.getContext('2d');
  const sg = stx.createRadialGradient(32, 32, 2, 32, 32, 32);
  sg.addColorStop(0, 'rgba(255,255,255,.9)'); sg.addColorStop(1, 'rgba(255,255,255,0)');
  stx.fillStyle = sg; stx.fillRect(0, 0, 64, 64);
  const steamTex = new THREE.CanvasTexture(stc);
  const steam = [];
  for (let i = 0; i < 16; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: steamTex, transparent: true, opacity: 0, depthWrite: false }));
    s.userData.seed = Math.random();
    scene.add(s); steam.push(s);
  }

  // ---------- parts & hotspots ----------
  const PARTS = [
    { id: 'lid', label: 'Lid & steam vent', tag: 'clips shut', anchor: anchor(lid, 0, 3, 0),
      text: 'Clips keep the lid closed on rough roads. Keep the vent open while heating.' },
    { id: 'side', label: '0.5 L container with lid', tag: '0.5 L', anchor: anchor(side, 0, 5.2, 0), exploded: true,
      text: 'For a side dish, salad or dessert, kept apart from the main meal.' },
    { id: 'tray', label: '1.1 L INOX container', tag: 'dishwasher safe', anchor: anchor(tray, -6, 6.4, 6.8), exploded: true,
      text: 'Removable stainless steel. Lifts out for washing and goes in the dishwasher. Spare containers and lids available.' },
    { id: 'heater', label: 'Heating base · 60 W', tag: 'up to 60°C', anchor: anchor(body, 0, 2.4, 9.2),
      text: 'Heats the meal up to 60°C in about 20 min. Give it a bit longer on a cold day or with food from the fridge.' },
    { id: 'cable', label: '12/24 V car cable + 230 V cable', tag: 'both included', anchor: anchor(plug, 0, 1.6, 3),
      text: 'Plugs into the car’s 12V socket (24 V in trucks). The 230 V cable is for the mains at the accommodation.' },
  ];

  let selected = null;
  const listButtons = {};
  PARTS.forEach((p) => {
    const hs = document.createElement('button');
    hs.className = 'hotspot';
    hs.type = 'button';
    hs.setAttribute('aria-label', p.label);
    hs.setAttribute('aria-pressed', 'false');
    hs.addEventListener('click', () => select(p.id));
    hotspotLayer.appendChild(hs);
    p.el = hs;

    const li = document.createElement('li');
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML = `${p.label}<span>${p.tag}</span>`;
    b.addEventListener('click', () => select(p.id));
    li.appendChild(b); partsList.appendChild(li);
    listButtons[p.id] = b;
  });

  function select(id) {
    const p = PARTS.find((x) => x.id === id);
    selected = id;
    if (p.exploded && !exploded) setExploded(true);
    PARTS.forEach((x) => {
      x.el.setAttribute('aria-pressed', String(x.id === id));
      listButtons[x.id].setAttribute('aria-pressed', String(x.id === id));
    });
    partBox.querySelector('.part__title').textContent = p.label;
    partBox.querySelector('.part__text').textContent = p.text;
    partBox.classList.remove('is-swap'); void partBox.offsetWidth; partBox.classList.add('is-swap');
  }

  // ---------- state ----------
  let exploded = false, explodeT = 0;
  let heating = false, temp = 5;
  const setExploded = (v) => {
    exploded = v;
    btnExplode.setAttribute('aria-pressed', String(v));
    btnExplode.textContent = v ? 'Put it together' : 'Take it apart';
  };
  btnExplode.addEventListener('click', () => setExploded(!exploded));
  btnHeat.addEventListener('click', () => {
    heating = !heating;
    btnHeat.setAttribute('aria-pressed', String(heating));
    btnHeat.textContent = heating ? 'Unplug' : 'Plug in & heat';
    if (heating) select('heater');
  });
  window.addEventListener('lunchbox:colour', (e) => {
    const c = COLOURS[e.detail];
    if (!c) return;
    bodyMat.color.setHex(c.body);
    trimMat.color.setHex(c.trim);
  });

  // ---------- controls ----------
  const controls = new OrbitControls(camera, canvas);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.minPolarAngle = 0.25;
  controls.maxPolarAngle = 1.42;
  controls.autoRotate = !reduce;
  controls.autoRotateSpeed = 0.6;
  controls.target.set(2, 5, 0);
  canvas.style.touchAction = 'pan-y'; // let vertical swipes scroll the page
  controls.addEventListener('start', () => { controls.autoRotate = false; });

  // ---------- size ----------
  let w = 1, h = 1;
  const resize = () => {
    w = stage.clientWidth; h = stage.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(stage);
  resize();

  // ---------- loop (only while visible) ----------
  let visible = false;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(stage);

  const clock = new THREE.Clock();
  const v = new THREE.Vector3();
  const off = new THREE.Vector3();
  const ventPos = new THREE.Vector3();

  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!visible) return;
    const t = clock.elapsedTime;

    // explode easing
    explodeT += ((exploded ? 1 : 0) - explodeT) * Math.min(1, dt * (reduce ? 30 : 4.5));
    const e = explodeT;
    lid.position.y = 8.1 + e * 15;
    lid.rotation.x = -e * 0.12;
    tray.position.y = 1.15 + e * 7.5;
    side.position.y = 0.4 + e * 5.5;
    side.position.x = 5.3 + e * 1.5;

    // heating
    const target = heating ? 60 : 5;
    const rate = heating ? 11 : 6; // °C per second (sped up)
    temp += Math.sign(target - temp) * Math.min(Math.abs(target - temp), rate * dt);
    const heat = (temp - 5) / 55;
    heaterMat.emissiveIntensity = heat * (1.6 + Math.sin(t * 3) * 0.2);
    ringMat.emissiveIntensity = heating ? 1.2 : 0;
    ledMat.emissiveIntensity = heating ? 1.5 : 0;
    tempEl.textContent = Math.round(temp);
    tempBar.style.width = `${heat * 100}%`;

    // steam from the vent (closed) or from the food (open)
    if (e > 0.5) tray.localToWorld(ventPos.set(-5.5, 6, 0));
    else lid.localToWorld(ventPos.set(6.3, 2.8, 0));
    steam.forEach((s, i) => {
      const life = (t * 0.35 + s.userData.seed) % 1;
      s.position.set(ventPos.x + Math.sin((life + i) * 5) * 1.2, ventPos.y + life * 9, ventPos.z + Math.cos(i) * 1.2);
      s.scale.setScalar(2 + life * 4);
      s.material.opacity = Math.max(0, heat - 0.45) * 1.4 * Math.sin(life * Math.PI) * 0.7;
    });

    // camera framing follows the explode state
    controls.target.y = 5 + e * 7;
    controls.update();
    const baseR = camera.aspect < 1 ? 98 : 74;
    off.copy(camera.position).sub(controls.target).setLength(baseR + e * 22);
    camera.position.copy(controls.target).add(off);

    renderer.render(scene, camera);

    // hotspots
    PARTS.forEach((p) => {
      p.anchor.getWorldPosition(v);
      v.project(camera);
      const hidden = (p.exploded && e < 0.85) || v.z > 1;
      p.el.classList.toggle('is-hidden', hidden);
      p.el.tabIndex = hidden ? -1 : 0;
      p.el.style.transform = `translate(${(v.x * 0.5 + 0.5) * w}px, ${(-v.y * 0.5 + 0.5) * h}px)`;
    });
  });
}
