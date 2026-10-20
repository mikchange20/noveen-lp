// Copy for the 4 dynamic sections (4 Why, 5 How, 7 FAQ, 8 CTA + form), per language and audience.
// EN is the source. IS goes into LUNCHEE_COPY.is with the same shape; any missing audience falls back to EN.
window.LUNCHEE_COPY = {
  en: {
    ui: {
      sending: 'Sending...',
      ok: 'Thank you! We will get back to you shortly.',
      err: 'Something went wrong. Please try again or email us.',
      name: 'Full name', company: 'Company', email: 'Email', phone: 'Phone', message: 'Message',
      placeholder: 'Photo coming soon',
      faq: 'Questions'
    },
    rentals: {
      title: 'Lunchee for car rentals in Iceland',
      cta: 'Request partner offer',
      why: {
        h: 'Your margins are under pressure. Your extras list doesn’t have to be.',
        lead: 'The new per-kilometre road charge eats into every rental. Extras don’t need a new car.',
        items: [
          ['coins', 'New revenue, no new car.', 'Add one line to your extras list. Same fleet, more money.'],
          ['tool', 'Zero setup.', 'No installation, no training. The 12V socket is already in every car.'],
          ['star', 'Better reviews.', 'Iceland is expensive and guests know it. A hot lunch by a waterfall instead of a pricey stop is the thing they remember – and write about.']
        ]
      },
      how: {
        h: 'Two easy ways to offer it.',
        kind: 'rentals',
        cards: [
          { h: 'Rent it as an extra', p: 'Next to the child seat and Wi-Fi. Charge per day or per rental, your call.',
            mock: { title: 'Extras for your trip', type: 'check', rows: ['Child seat', 'Wi-Fi hotspot', 'Car-powered lunch box <em>+ thermal bag</em>'] } },
          { h: 'Include it in premium packages', p: 'Camper, 4x4, all-inclusive. Raise the value of the package, and its price.',
            mock: { title: 'Camper package includes', type: 'list', rows: ['Bedding &amp; kitchen kit', 'Unlimited mileage', 'Car-powered lunch box'] } }
        ]
      },
      faq: [
        ['What if a customer loses or breaks it?', 'Add it to your damage price list, like a child seat or Wi-Fi device.'],
        ['Hygiene between customers?', 'Take out the INOX container and put it in the dishwasher. Spare containers and lids are available.'],
        ['Will it work in my cars?', 'Yes – 12V in cars and campers, 24V in vans. The 230V cable for the hotel or cabin is in the box.'],
        ['Can customers handle it?', 'Pack it, plug it in, drive. Easier than a Wi-Fi hotspot.']
      ],
      form: {
        h: 'Take a few units <span class="accent">for a test.</span>',
        lead: 'Winter is quieter – the right time to go into the 2027 season with a new extra. We’ll run the numbers for your fleet.',
        button: 'Request partner offer',
        fields: [
          { name: 'fleet_size', label: 'Fleet size (vehicles)', type: 'number', placeholder: 'e.g. 120' },
          { name: 'units', label: 'Units interested in', type: 'number', placeholder: 'e.g. 50' }
        ]
      }
    },

    crews: {
      title: 'Lunchee for work crews in Iceland',
      cta: 'Get a crew offer',
      why: {
        h: 'Hot lunch at the job site. Not 40 minutes away.',
        lead: 'Outside town, lunch means a cold sandwich in the van or a long drive to the nearest station. In winter it’s dark and freezing on top of that.',
        items: [
          ['flame', 'Warm food in the cold.', 'A proper hot meal keeps the crew going through a long day outside.'],
          ['clock', 'No driving for lunch.', 'The break is spent eating, not on the road to the nearest N1.'],
          ['truck', 'Runs on any vehicle.', '12V in pickups and vans, 24V in trucks. Plug in on the way to site.']
        ]
      },
      how: {
        h: 'Plug it in on the way. Lunch is ready when the break starts.',
        kind: 'crews',
        photo: 'Lunch box on the dashboard / seat of a work van at a roadwork site',
        timeline: [['07:30', 'Plug in on the way to site'], ['11:40', 'It heats while you work'], ['12:00', 'Break. Lunch is hot.']],
        p: 'Each worker brings food from home in their own box. Mix colours so everyone knows which one is theirs.',
        names: ['Jón', 'Sigga', 'Kári', 'Anna']
      },
      faq: [
        ['Will it survive site conditions?', 'Solid build, removable steel container, thermal bag for transport.'],
        ['Can we order for the whole crew?', 'Yes – mix colours in one order, so every worker has their own.'],
        ['Does it work in trucks and machines?', '12V and 24V cables are both in the box.'],
        ['Warranty?', '30 months.']
      ],
      form: {
        h: 'Get your crew <span class="accent">a hot lunch.</span>',
        lead: 'Tell us how many people work outside and we’ll prepare an offer.',
        button: 'Get a crew offer',
        fields: [
          { name: 'workers', label: 'Number of workers', type: 'number', placeholder: 'e.g. 25' }
        ]
      }
    },

    drivers: {
      title: 'Lunchee for drivers and fleets in Iceland',
      cta: 'Get a fleet offer',
      why: {
        h: 'Your break, your food – ready when you stop.',
        lead: 'Tour drivers wait an hour at Gullfoss or Jökulsárlón where food is the priciest. Long-haul drivers go 200 km in the east without a single station. Taxi shifts don’t wait for lunch.',
        items: [
          ['plug', 'Heats while you drive.', 'Plug into 12V or 24V and the meal is hot when you park.'],
          ['wallet', 'Cheaper than station food.', 'Bring food from home instead of paying tourist prices every day.'],
          ['truck', 'Cars, buses and trucks.', 'One box for 12V and 24V – works in every vehicle in the fleet.']
        ]
      },
      how: {
        h: 'Three drivers, one lunch box.',
        kind: 'drivers',
        cards: [
          ['bus', 'Tour bus / super jeep', 'Guests at the waterfall, your lunch heats in the cab.'],
          ['truck', 'Long-haul truck', 'Reykjavík to Akureyri with a hot meal on the way.'],
          ['taxi', 'Taxi', 'Eat between rides, not at the gas station.']
        ],
        photo: 'Lunch box plugged in inside a bus or truck cab'
      },
      faq: [
        ['Does it work on 24V?', 'Yes, the 24V cable is in the box.'],
        ['How long in winter?', 'About 20 minutes; give it a bit longer with cold food on a freezing day.'],
        ['Can we order for the whole fleet?', 'Yes – mix colours in one order.'],
        ['Warranty?', '30 months.']
      ],
      form: {
        h: 'Equip your <span class="accent">drivers.</span>',
        lead: 'For bus operators, taxi companies and haulage firms.',
        button: 'Get a fleet offer',
        fields: [
          { name: 'vehicle_type', label: 'Vehicle type', type: 'choice', multiple: true, options: ['Car', 'Bus', 'Truck'] },
          { name: 'drivers', label: 'Number of drivers', type: 'number', placeholder: 'e.g. 40' }
        ]
      }
    },

    stores: {
      title: 'Lunchee for stores in Iceland',
      cta: 'Become a reseller',
      why: {
        h: 'The Christmas gift for every Icelander who lives in their car.',
        lead: 'Summer house trips, ptarmigan hunting, fishing, long drives – Icelanders spend their lives on the road. This is a product for them, not a kitchen gadget.',
        items: [
          ['gift', 'Ready for the gift season.', 'A practical gift for dads, hunters and drivers.'],
          ['box', 'Local stock in Iceland.', 'Short delivery, no importing on your side.'],
          ['image', 'Ready-made materials.', 'Product photos and descriptions for your shelf and online store.']
        ]
      },
      how: {
        h: 'On your shelf and in your online store.',
        kind: 'stores',
        shelf: 'In store',
        online: 'Online',
        product: 'Lunchee electric lunch box',
        productSub: '12/24 V car + 230 V · thermal bag included',
        badge: 'New',
        stock: 'In stock'
      },
      faq: [
        ['Minimum order?', 'Let’s talk – we start small with new partners.'],
        ['Delivery?', 'From local stock in Iceland.'],
        ['Can I mix colours?', 'Yes, all four colours in one order.'],
        ['Product materials?', 'Packshots, descriptions and specs ready to use.']
      ],
      form: {
        h: 'Put Lunchee <span class="accent">on your shelf.</span>',
        lead: 'Tell us about your store and we’ll send a reseller offer.',
        button: 'Become a reseller',
        companyLabel: 'Store / company',
        fields: [
          { name: 'store_type', label: 'Where do you sell?', type: 'choice', options: ['Physical store', 'Online', 'Both'] }
        ]
      }
    }
  },

  // Icelandic – to be filled in and checked by a native speaker. Same shape as `en` (ui + 4 audiences).
  is: {}
};
