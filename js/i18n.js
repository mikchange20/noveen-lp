// EN/PL language switch. English lives in the HTML; Polish strings are applied on top and can be reverted.
(() => {
  const OPEN = 'Poproś o ofertę partnerską';
  // [selector, mode, polish]. Modes: html (innerHTML), rest (everything after first child element),
  // text1 (first text node), attr:<name> (attribute)
  const D = [
    ['.nav__logo', 'attr:aria-label', "N'OVEEN - strona główna"],
    ['.nav .btn', 'html', OPEN],
    ['.hero__title .line:nth-child(1)', 'html', 'Twoi klienci i tak jedzą w trasie.'],
    ['.hero__title .hot', 'html', 'Niech zapłacą Ci za&nbsp;to.'],
    ['.hero__sub', 'html', 'Elektryczny lunch box zasilany z gniazda w samochodzie. Ciepły posiłek w 20 minut, w dowolnym miejscu na Islandii. <strong>Dla Ciebie: nowy dodatek, który zarabia od pierwszego wynajmu.</strong>'],
    ['.hero__actions .btn', 'html', OPEN],
    ['.hero__photo img', 'attr:alt', 'Podróżniczka je ciepły posiłek z lunch boxa obok samochodu na islandzkiej drodze'],

    ['.what__head .eyebrow', 'html', 'Lunchee - elektryczny lunch box'],
    ['.what__head h2', 'html', 'Co to jest - w 10&nbsp;sekund.'],
    ['.what__leader', 'html', 'Lunchee jest liderem polskiego rynku elektrycznych lunch boxów.'],
    ['.what__product > img', 'attr:alt', 'Otwarty lunch box z ciepłym posiłkiem'],
    ['.kit span:nth-child(1)', 'rest', 'Torba termiczna'],
    ['.kit span:nth-child(2)', 'rest', 'Kable 12/24 V + 230 V'],
    ['.kit span:nth-child(3)', 'rest', 'Pojemnik INOX 1,1 L'],
    ['.point:nth-child(1) h3', 'html', 'Zasilanie sieciowe i samochodowe'],
    ['.point:nth-child(1) p', 'html', 'Kable 230V i 12/24V w zestawie!'],
    ['.point:nth-child(2) h3', 'html', 'Szybko podgrzewa posiłki'],
    ['.point:nth-child(2) p', 'html', 'w krótkim czasie: 60°C w 20 minut!'],
    ['.point:nth-child(3) h3', 'html', 'Wnętrze ze stali INOX'],
    ['.point:nth-child(3) p', 'html', 'Można myć w zmywarce'],
    ['.point:nth-child(4) h3', 'html', 'Torba termiczna w zestawie'],
    ['.point:nth-child(4) p', 'html', 'Chroni i utrzymuje temperaturę. Jest w niej też miejsce na napój lub owoc.'],
    ['.colours__head h3', 'html', 'Wybierz jeden z 4 kolorów.'],
    ['.colours__head p', 'html', 'Te same parametry w każdym kolorze. Mieszaj je w jednym zamówieniu.'],
    ['.specs summary', 'html', 'Pełna specyfikacja urządzenia'],
    ['.specs tr:nth-child(1) th', 'html', 'Zasilanie'],
    ['.specs tr:nth-child(1) td', 'html', '12 V auto / 24 V ciężarówka / 230 V sieć'],
    ['.specs tr:nth-child(2) th', 'html', 'Moc'],
    ['.specs tr:nth-child(3) th', 'html', 'Podgrzewanie'],
    ['.specs tr:nth-child(3) td', 'html', 'Do 60°C w ok. 20 min'],
    ['.specs tr:nth-child(4) th', 'html', 'Pojemnik główny'],
    ['.specs tr:nth-child(4) td', 'html', '1,1 L INOX, wyjmowany'],
    ['.specs tr:nth-child(5) th', 'html', 'Pojemnik dodatkowy'],
    ['.specs tr:nth-child(5) td', 'html', '0,5 L z pokrywką'],
    ['.specs tr:nth-child(6) th', 'html', 'Wymiary'],
    ['.specs tr:nth-child(6) td', 'html', '23 × 16 × 10,5 cm'],
    ['.specs tr:nth-child(7) th', 'html', 'Waga'],
    ['.specs tr:nth-child(7) td', 'html', '0,63 kg'],
    ['.specs tr:nth-child(8) th', 'html', 'Materiały'],
    ['.specs tr:nth-child(8) td', 'html', 'Bez BPA'],
    ['.specs tr:nth-child(9) th', 'html', 'Zmywarka'],
    ['.specs tr:nth-child(9) td', 'html', 'Pojemniki można myć w zmywarce'],
    ['.specs h4', 'html', 'W zestawie'],
    ['.inbox li:nth-child(1)', 'rest', 'Lunch box z pojemnikiem INOX 1,1 L'],
    ['.inbox li:nth-child(2)', 'rest', 'Pojemnik 0,5 L z pokrywką'],
    ['.inbox li:nth-child(3)', 'rest', 'Metalowa łyżka i widelec'],
    ['.inbox li:nth-child(4)', 'rest', 'Kabel 230 V · kabel samochodowy 12/24 V'],
    ['.inbox li:nth-child(5)', 'rest', 'Torba termiczna'],

    ['.steps5__title', 'html', '<b>Ciepły posiłek</b> w 5 prostych krokach'],
    ['.steps5__list li:nth-child(1) img', 'attr:alt', 'Lunch box z posiłkiem w środku'],
    ['.steps5__list li:nth-child(1) p', 'html', 'Włóż posiłek <b>do lunch boxa</b>'],
    ['.steps5__list li:nth-child(2) img', 'attr:alt', 'Lunch box zapakowany w torbę termiczną'],
    ['.steps5__list li:nth-child(2) p', 'html', 'Zapakuj go <b>do torby termicznej</b>'],
    ['.steps5__list li:nth-child(3) img', 'attr:alt', 'Lunch box podłączony do prądu'],
    ['.steps5__list li:nth-child(3) p', 'html', '<b>Podłącz do zasilania</b> gdziekolwiek'],
    ['.steps5__list li:nth-child(4) img', 'attr:alt', 'Lunch box się nagrzewa'],
    ['.steps5__list li:nth-child(4) p', 'html', '<b>Poczekaj około 20 minut</b>'],
    ['.steps5__list li:nth-child(5) img', 'attr:alt', 'Gorący posiłek gotowy w lunch boxie'],
    ['.steps5__list li:nth-child(5) p', 'html', 'Twój <b>ciepły i smaczny posiłek</b> jest gotowy!'],
    ['.steps5__note', 'html', 'Dzięki <b>standardowemu zasilaniu 230V</b> i <b>samochodowemu 12/24V</b> urządzenie działa w każdych warunkach!'],

    ['.why__head h2', 'html', 'Dlaczego się opłaca.'],
    ['.why__list li:nth-child(1) h3', 'html', 'Mała inwestycja, szybki zwrot.'],
    ['.why__list li:nth-child(1) p', 'html', 'Zarabia za każdym razem, gdy wyjeżdża z samochodem.'],
    ['.why__list li:nth-child(2) h3', 'html', 'Nowy przychód, bez nowego auta.'],
    ['.why__list li:nth-child(2) p', 'html', 'Dodaj jedną pozycję do listy dodatków. Ta sama flota, więcej pieniędzy.'],
    ['.why__list li:nth-child(3) h3', 'html', 'Zero konfiguracji.'],
    ['.why__list li:nth-child(3) p', 'html', 'Bez montażu. Bez szkoleń. Gniazdo 12V jest już w samochodzie.'],
    ['.why__list li:nth-child(4) h3', 'html', 'Lepsze opinie.'],
    ['.why__list li:nth-child(4) p', 'html', 'Klienci zapominają, jakim autem jechali. Pamiętają ciepły lunch przy wodospadzie. I o tym piszą.'],
    ['.why__list li:nth-child(5) h3', 'html', 'Wyróżnij się.'],
    ['.why__list li:nth-child(5) p', 'html', 'Każdy oferuje fotelik dziecięcy i Wi-Fi. Ciepły lunch w aucie pokazuje klientom, że jesteś inny.'],

    ['.models__head h2', 'html', 'Dwa sposoby, by na tym zarabiać.'],
    ['.model-card:nth-child(1) h3', 'html', 'Wynajmuj jako dodatek.'],
    ['.model-card:nth-child(1) > p', 'html', 'Obok fotelika dziecięcego i Wi-Fi. Klienci zaznaczają go przy rezerwacji. Opłata za dzień lub za wynajem - Ty decydujesz.'],
    ['.model-card:nth-child(1) .mock__title', 'html', 'Dodatki do Twojej podróży'],
    ['.model-card:nth-child(1) label:nth-of-type(1)', 'rest', 'Fotelik dziecięcy'],
    ['.model-card:nth-child(1) label:nth-of-type(2)', 'rest', 'Hotspot Wi-Fi'],
    ['.model-card:nth-child(1) label:nth-of-type(3)', 'rest', 'Lunch box zasilany z auta <em>+ torba termiczna</em>'],
    ['.model-card:nth-child(2) h3', 'html', 'Dołącz do pakietów premium.'],
    ['.model-card:nth-child(2) > p', 'html', 'Camper, 4x4, all-inclusive. Podnieś wartość pakietu - i jego cenę.'],
    ['.model-card:nth-child(2) .mock__title', 'html', 'Pakiet Camper obejmuje'],
    ['.model-card:nth-child(2) .mock__line:nth-of-type(2)', 'html', 'Pościel i wyposażenie kuchenne'],
    ['.model-card:nth-child(2) .mock__line:nth-of-type(3)', 'html', 'Nielimitowany przebieg'],
    ['.model-card:nth-child(2) .mock__line--on', 'html', 'Lunch box zasilany z auta'],

    ['.us__head h2', 'html', 'Dlaczego zamawiać u nas.'],
    ['.us__list li:nth-child(1)', 'rest', '<strong>Lokalny partner na Islandii.</strong> Zamawiasz tutaj, nie z zagranicy.'],
    ['.us__list li:nth-child(2)', 'rest', '<strong>Mieszaj kolory w jednym zamówieniu:</strong> Pearl, Nature, City, Glamour.'],
    ['.us__list li:nth-child(3)', 'rest', '<strong>Części zamienne:</strong> pojemniki i pokrywki dostępne osobno.'],
    ['.us__list li:nth-child(4)', 'rest', '<strong>Zacznij od małej skali.</strong> Przetestuj na swoich klientach, potem skaluj.'],

    ['.cta__inner h2', 'html', 'Weź kilka sztuk <span class="hot-text">na test.</span>'],
    ['.cta__inner > p:not(.cta__contact)', 'html', 'Zima jest spokojniejsza. To idealny czas, by wejść w sezon 2027 z nowym dodatkiem. Policzymy, ile to da dla Twojej floty.'],
    ['.cta__inner .btn', 'html', OPEN],

    ['.faq__head h2', 'html', 'Pytania, które pewnie masz.'],
    ['.qa:nth-child(1) summary', 'html', 'Co jeśli klient zgubi lub zniszczy lunch box?'],
    ['.qa:nth-child(1) p', 'html', 'Dodaj go do swojego cennika szkód, tak jak fotelik dziecięcy czy urządzenie Wi-Fi.'],
    ['.qa:nth-child(2) summary', 'html', 'A higiena między klientami?'],
    ['.qa:nth-child(2) p', 'html', 'Wyjmij pojemnik INOX i włóż go do zmywarki. Zapasowe pojemniki i pokrywki są dostępne osobno.'],
    ['.qa:nth-child(3) summary', 'html', 'Czy zadziała w moich samochodach?'],
    ['.qa:nth-child(3) p', 'html', 'Tak. 12V w osobówkach i kamperach, 24V w vanach. Kabel 230V do hotelu lub domku też jest w zestawie.'],
    ['.qa:nth-child(4) summary', 'html', 'Co jeśli się zepsuje?'],
    ['.qa:nth-child(4) p', 'html', '30 miesięcy gwarancji.'],
    ['.qa:nth-child(5) summary', 'html', 'Czy klienci dadzą radę go obsłużyć?'],
    ['.qa:nth-child(5) p', 'html', 'Zapakuj, podłącz, jedź. Prościej niż hotspot Wi-Fi.'],

    ['.foot p', 'html', "N'OVEEN Lunchee elektryczny lunch box"],

    ['.modal__close', 'attr:aria-label', 'Zamknij'],
    ['#pf-title', 'html', OPEN],
    ['.modal__lead', 'html', 'Opowiedz nam trochę o swojej flocie. Wrócimy z ofertą partnerską.'],
    ['.modal__grid label:nth-child(1)', 'text1', 'Imię i nazwisko'],
    ['.modal__grid label:nth-child(2)', 'text1', 'Firma'],
    ['.modal__grid label:nth-child(3)', 'text1', 'Email'],
    ['.modal__grid label:nth-child(4)', 'text1', 'Telefon'],
    ['.modal__grid label:nth-child(5)', 'text1', 'Wielkość floty (pojazdy)'],
    ['.modal__grid label:nth-child(5) input', 'attr:placeholder', 'np. 120'],
    ['.modal__grid label:nth-child(6)', 'text1', 'Zainteresowana liczba sztuk'],
    ['.modal__grid label:nth-child(6) input', 'attr:placeholder', 'np. 50'],
    ['.modal__full', 'text1', 'Wiadomość'],
    ['.modal .btn[type=submit]', 'html', 'Wyślij zapytanie'],
  ];
  const META = { title: "N'OVEEN Lunch Box dla wypożyczalni samochodów", desc: 'Twoi klienci i tak jedzą w trasie. Niech zapłacą Ci za to. Elektryczny lunch box zasilany z samochodu dla flot wypożyczalni na Islandii.' };
  const MSG = {
    en: { sending: 'Sending...', ok: 'Thank you! We will get back to you shortly.', err: 'Something went wrong. Please try again.' },
    pl: { sending: 'Wysyłanie...', ok: 'Dziękujemy! Wkrótce się odezwiemy.', err: 'Coś poszło nie tak. Spróbuj ponownie.' },
  };

  const restNodes = (el) => { const f = el.firstElementChild; const out = []; for (let n = f ? f.nextSibling : el.firstChild; n; n = n.nextSibling) out.push(n); return out; };
  const text1 = (el) => [...el.childNodes].find((n) => n.nodeType === 3 && n.data.trim());
  const items = D.map(([sel, mode, pl]) => {
    const el = document.querySelector(sel);
    if (!el) { console.warn('i18n: no match', sel); return null; }
    let en;
    if (mode === 'html') en = el.innerHTML;
    else if (mode === 'rest') en = restNodes(el).map((n) => (n.nodeType === 3 ? n.data : n.outerHTML)).join('');
    else if (mode === 'text1') en = text1(el).data;
    else en = el.getAttribute(mode.slice(5));
    return { el, mode, en, pl };
  }).filter(Boolean);
  const metaDesc = document.querySelector('meta[name=description]');
  const enMeta = { title: document.title, desc: metaDesc && metaDesc.content };

  const put = ({ el, mode, en, pl }, lang) => {
    const v = lang === 'pl' ? pl : en;
    if (mode === 'html') el.innerHTML = v;
    else if (mode === 'rest') { restNodes(el).forEach((n) => n.remove()); el.insertAdjacentHTML('beforeend', v); }
    else if (mode === 'text1') text1(el).data = v;
    else el.setAttribute(mode.slice(5), v);
  };

  const buttons = document.querySelectorAll('[data-lang]');
  const apply = (lang) => {
    items.forEach((it) => put(it, lang));
    document.documentElement.lang = lang;
    document.title = lang === 'pl' ? META.title : enMeta.title;
    if (metaDesc) metaDesc.content = lang === 'pl' ? META.desc : enMeta.desc;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    window.noveenMsg = MSG[lang];
    try { localStorage.setItem('noveen-lang', lang); } catch (e) { /* storage unavailable */ }
  };

  window.noveenMsg = MSG.en;
  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.lang)));
  let start = new URLSearchParams(location.search).get('lang');
  if (!start) { try { start = localStorage.getItem('noveen-lang'); } catch (e) { /* storage unavailable */ } }
  if (start === 'pl') apply('pl');
})();
