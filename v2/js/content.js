// Copy for the 4 dynamic sections (4 Why, 5 How, 7 FAQ, 8 CTA + form), per language and audience.
// EN is the source; PL is ready. IS goes into LUNCHEE_COPY.is with the same shape; any missing audience falls back to EN.
window.LUNCHEE_COPY = {
  en: {
    ui: {
      sending: 'Sending...',
      ok: 'Thank you! We will get back to you shortly.',
      err: 'Something went wrong. Please try again or email us.',
      name: 'Full name', company: 'Company', email: 'Email', phone: 'Phone', message: 'Message',
      placeholder: 'Photo coming soon',
      faq: 'Questions you probably have.',
      tagline: 'a hot meal anywhere you drive'
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
        h: 'The Christmas gift | for every Icelander who lives in their car.',
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
        badge: 'Gift idea',
        stock: 'In stock'
      },
      faq: [
        ['Minimum order?', 'Let’s talk – we start small with new partners.'],
        ['Delivery?', 'From local stock in Iceland.'],
        ['Can I mix colours?', 'Yes, all four colours in one order.'],
        ['Product materials?', 'Packshots, descriptions and specs ready to use.'],
        ['When should I order for Christmas?', 'The earlier the better – ideally in November, so the stock and the Christmas materials are in your store before December.']
      ],
      form: {
        h: 'Put Lunchee <span class="accent">on your shelf.</span>',
        lead: 'Tell us about your store and we’ll send a reseller offer – with the Christmas campaign kit.',
        xmas: {
          pill: 'Christmas gift campaign',
          h: '13 Yule Lads. | One gift everyone will actually use.',
          lead: 'Icelanders spend the holidays on the road – to family, to the summer house, to the hunt. Lunchee is the practical gift for all of them. Here is a ready-made Christmas campaign for your store.',
          countdown: 'days to Christmas Eve',
          greeting: 'Gleðileg jól!',
          guideH: 'Gift guide for your customers',
          guide: [
            ['nature', 'For the hunter', 'A hot lunch on the heath during ptarmigan season.'],
            ['pearl', 'For the summer-house family', 'Weekend at the bústaður, dinner already in the car.'],
            ['city', 'For the long-haul driver', 'Reykjavík–Akureyri with a real meal on the way.'],
            ['glamour', 'For the one who has everything', 'Something they don’t have yet – and will use every day.']
          ],
          kitH: 'Your Christmas campaign kit',
          kit: [
            ['gift', 'Gift-ready set', 'Lunch box, thermal bag and cutlery in one box – a complete gift, no extras needed.'],
            ['image', 'Shelf & window materials', 'Christmas shelf talker, poster and gift tags in Icelandic and English.'],
            ['star', 'Social media pack', 'Ready posts and stories for Advent – just add your store name.']
          ],
          planH: 'Your Christmas plan',
          plan: [
            ['Now – November', 'Order and get the campaign materials.'],
            ['From 1 December', 'On the shelf with the Christmas display.'],
            ['12–24 December', 'Yule Lads season – peak gift shopping.']
          ],
          cta: 'Join the Christmas campaign',
          snowOn: 'Snow: on',
          snowOff: 'Snow: off'
        },
        button: 'Become a reseller',
        companyLabel: 'Store / company',
        fields: [
          { name: 'store_type', label: 'Where do you sell?', type: 'choice', options: ['Physical store', 'Online', 'Both'] }
        ]
      }
    }
  },

  pl: {
    ui: {
      sending: 'Wysyłanie...',
      ok: 'Dziękujemy! Wkrótce się odezwiemy.',
      err: 'Coś poszło nie tak. Spróbuj ponownie albo napisz do nas maila.',
      name: 'Imię i nazwisko', company: 'Firma', email: 'E-mail', phone: 'Telefon', message: 'Wiadomość',
      placeholder: 'Zdjęcie wkrótce',
      faq: 'Pytania, które pewnie masz.',
      tagline: 'ciepły posiłek, gdziekolwiek jedziesz'
    },
    rentals: {
      title: 'Lunchee dla wypożyczalni samochodów na Islandii',
      cta: 'Poproś o ofertę partnerską',
      why: {
        h: 'Marże topnieją. Twoja lista dodatków może zarabiać więcej.',
        lead: 'Nowa opłata drogowa za każdy przejechany kilometr zjada zysk z każdego wynajmu. Dodatki nie wymagają nowego auta.',
        items: [
          ['coins', 'Nowy przychód, bez nowego auta.', 'Dopisz jedną pozycję do listy dodatków. Ta sama flota, więcej pieniędzy.'],
          ['tool', 'Zero wdrożenia.', 'Bez montażu, bez szkoleń. Gniazdo 12V jest już w każdym aucie.'],
          ['star', 'Lepsze opinie.', 'Islandia jest droga i klienci o tym wiedzą. Ciepły lunch przy wodospadzie zamiast drogiego postoju – to zapamiętają i o tym napiszą.']
        ]
      },
      how: {
        h: 'Dwa proste sposoby, żeby to zaoferować.',
        kind: 'rentals',
        cards: [
          { h: 'Wynajem jako dodatek', p: 'Obok fotelika i Wi-Fi. Opłata za dzień albo za cały wynajem – Ty decydujesz.',
            mock: { title: 'Dodatki do podróży', type: 'check', rows: ['Fotelik dziecięcy', 'Hotspot Wi-Fi', 'Elektryczny Lunchbox <em>+ torba termiczna</em>'] } },
          { h: 'W pakietach premium', p: 'Kamper, 4x4, all-inclusive. Podnieś wartość pakietu – i jego cenę.',
            mock: { title: 'Pakiet kamper zawiera', type: 'list', rows: ['Pościel i zestaw kuchenny', 'Bez limitu kilometrów', 'Elektryczny Lunchbox'] } }
        ]
      },
      faq: [
        ['Co jeśli klient go zgubi albo zepsuje?', 'Dopisz go do cennika szkód, tak jak fotelik czy urządzenie Wi-Fi.'],
        ['A higiena między klientami?', 'Wyjmij pojemnik INOX i włóż go do zmywarki. Zapasowe pojemniki i pokrywki są dostępne.'],
        ['Czy zadziała w moich autach?', 'Tak – 12V w osobówkach i kamperach, 24V w busach. Kabel 230V do hotelu czy domku jest w zestawie.'],
        ['Czy klienci sobie poradzą?', 'Spakuj, podłącz, jedź. Prościej niż hotspot Wi-Fi.']
      ],
      form: {
        h: 'Weź kilka sztuk <span class="accent">na test.</span>',
        lead: 'Zima jest spokojniejsza – to dobry moment, żeby wejść w sezon 2027 z nowym dodatkiem. Policzymy to dla Twojej floty.',
        button: 'Poproś o ofertę partnerską',
        fields: [
          { name: 'fleet_size', label: 'Wielkość floty (pojazdy)', type: 'number', placeholder: 'np. 120' },
          { name: 'units', label: 'Ile sztuk Cię interesuje', type: 'number', placeholder: 'np. 50' }
        ]
      }
    },

    crews: {
      title: 'Lunchee dla ekip pracujących w terenie na Islandii',
      cta: 'Oferta dla ekipy',
      why: {
        h: 'Ciepły lunch na budowie. Nie 40 minut drogi stąd.',
        lead: 'Poza miastem lunch to zimna kanapka w busie albo długi dojazd do najbliższej stacji. Zimą do tego ciemno i mróz.',
        items: [
          ['flame', 'Ciepłe jedzenie w zimnie.', 'Porządny ciepły posiłek daje ekipie siłę na długi dzień na zewnątrz.'],
          ['clock', 'Bez jeżdżenia na obiad.', 'Przerwa jest na jedzenie, nie na dojazd do najbliższej stacji N1.'],
          ['truck', 'Działa w każdym pojeździe.', '12V w pickupach i busach, 24V w ciężarówkach. Podłączasz po drodze na budowę.']
        ]
      },
      how: {
        h: 'Podłącz po drodze. Lunch jest gotowy, kiedy zaczyna się przerwa.',
        kind: 'crews',
        photo: 'Lunchbox na desce rozdzielczej / siedzeniu busa przy robotach drogowych',
        timeline: [['07:30', 'Podłączasz po drodze na budowę'], ['11:40', 'Grzeje się, kiedy pracujesz'], ['12:00', 'Przerwa. Lunch jest ciepły.']],
        p: 'Każdy przynosi jedzenie z domu we własnym lunchboxie. Weźcie różne kolory, żeby każdy wiedział, który jest jego.',
        names: ['Jón', 'Sigga', 'Kári', 'Anna']
      },
      faq: [
        ['Czy przetrwa warunki na budowie?', 'Solidna konstrukcja, wyjmowany stalowy pojemnik, torba termiczna do transportu.'],
        ['Czy możemy zamówić dla całej ekipy?', 'Tak – różne kolory w jednym zamówieniu, żeby każdy miał swój.'],
        ['Czy działa w ciężarówkach i maszynach?', 'Kable 12V i 24V są w zestawie.'],
        ['Gwarancja?', '30 miesięcy.']
      ],
      form: {
        h: 'Ciepły lunch <span class="accent">dla Twojej ekipy.</span>',
        lead: 'Napisz, ile osób pracuje u Ciebie w terenie, a przygotujemy ofertę.',
        button: 'Poproś o ofertę dla ekipy',
        fields: [
          { name: 'workers', label: 'Liczba pracowników', type: 'number', placeholder: 'np. 25' }
        ]
      }
    },

    drivers: {
      title: 'Lunchee dla kierowców i flot na Islandii',
      cta: 'Oferta dla floty',
      why: {
        h: 'Twoja przerwa, Twoje jedzenie – gotowe, kiedy się zatrzymasz.',
        lead: 'Kierowcy wycieczek czekają godzinę przy Gullfoss czy Jökulsárlón, gdzie jedzenie jest najdroższe. Kierowcy w trasie robią na wschodzie 200 km bez ani jednej stacji. Zmiana w taksówce nie czeka na lunch.',
        items: [
          ['plug', 'Grzeje się w trakcie jazdy.', 'Podłącz do 12V lub 24V – posiłek jest ciepły, kiedy parkujesz.'],
          ['wallet', 'Taniej niż jedzenie na stacji.', 'Bierzesz jedzenie z domu, zamiast codziennie płacić turystyczne ceny.'],
          ['truck', 'Osobówki, autobusy i ciężarówki.', 'Jeden lunchbox na 12V i 24V – działa w każdym pojeździe floty.']
        ]
      },
      how: {
        h: 'Trzech kierowców, jeden lunchbox.',
        kind: 'drivers',
        cards: [
          ['bus', 'Autokar / super jeep', 'Turyści przy wodospadzie, a Twój lunch grzeje się w kabinie.'],
          ['truck', 'Ciężarówka w trasie', 'Z Reykjavíku do Akureyri z ciepłym posiłkiem po drodze.'],
          ['taxi', 'Taksówka', 'Jesz między kursami, a nie na stacji benzynowej.']
        ],
        photo: 'Lunchbox podłączony w kabinie autobusu lub ciężarówki'
      },
      faq: [
        ['Czy działa na 24V?', 'Tak, kabel 24V jest w zestawie.'],
        ['Ile to trwa zimą?', 'Około 20 minut; przy zimnym jedzeniu w mroźny dzień trochę dłużej.'],
        ['Czy możemy zamówić dla całej floty?', 'Tak – różne kolory w jednym zamówieniu.'],
        ['Gwarancja?', '30 miesięcy.']
      ],
      form: {
        h: 'Wyposaż swoich <span class="accent">kierowców.</span>',
        lead: 'Dla przewoźników autobusowych, firm taksówkowych i firm transportowych.',
        button: 'Poproś o ofertę dla floty',
        fields: [
          { name: 'vehicle_type', label: 'Rodzaj pojazdów', type: 'choice', multiple: true, options: ['Osobowe', 'Autobusy', 'Ciężarówki'] },
          { name: 'drivers', label: 'Liczba kierowców', type: 'number', placeholder: 'np. 40' }
        ]
      }
    },

    stores: {
      title: 'Lunchee dla sklepów na Islandii',
      cta: 'Zostań sprzedawcą',
      why: {
        h: 'Prezent pod choinkę | dla każdego Islandczyka, który żyje w samochodzie.',
        lead: 'Wyjazdy do domku letniskowego, polowania na pardwy, wędkowanie, długie trasy – Islandczycy spędzają życie w drodze. To produkt dla nich, a nie kuchenny gadżet.',
        items: [
          ['gift', 'Gotowy na sezon prezentowy.', 'Praktyczny prezent dla ojców, myśliwych i kierowców.'],
          ['box', 'Lokalny magazyn na Islandii.', 'Krótka dostawa, bez importu po Twojej stronie.'],
          ['image', 'Gotowe materiały.', 'Zdjęcia produktu i opisy na półkę i do sklepu internetowego.']
        ]
      },
      how: {
        h: 'Na Twojej półce i w Twoim sklepie internetowym.',
        kind: 'stores',
        shelf: 'W sklepie',
        online: 'Online',
        product: 'Elektryczny lunchbox Lunchee',
        productSub: '12/24 V auto + 230 V · torba termiczna w zestawie',
        badge: 'Pomysł na prezent',
        stock: 'Dostępny'
      },
      faq: [
        ['Minimalne zamówienie?', 'Porozmawiajmy – z nowymi partnerami zaczynamy od małych ilości.'],
        ['Dostawa?', 'Z lokalnego magazynu na Islandii.'],
        ['Czy mogę mieszać kolory?', 'Tak, wszystkie cztery kolory w jednym zamówieniu.'],
        ['Materiały produktowe?', 'Packshoty, opisy i specyfikacja gotowe do użycia.'],
        ['Kiedy zamówić na święta?', 'Im wcześniej, tym lepiej – najlepiej w listopadzie, żeby towar i świąteczne materiały były w sklepie przed grudniem.']
      ],
      form: {
        h: 'Postaw Lunchee <span class="accent">na swojej półce.</span>',
        lead: 'Napisz kilka słów o swoim sklepie, a wyślemy ofertę dla sprzedawców – razem ze świątecznym zestawem kampanii.',
        xmas: {
          pill: 'Świąteczna kampania prezentowa',
          h: '13 islandzkich Mikołajów. | Jeden prezent, którego każdy naprawdę użyje.',
          lead: 'Islandczycy spędzają święta w drodze – do rodziny, do domku letniskowego, na polowanie. Lunchee to praktyczny prezent dla nich wszystkich. Oto gotowa świąteczna kampania dla Twojego sklepu.',
          countdown: 'dni do Wigilii',
          greeting: 'Gleðileg jól!',
          guideH: 'Przewodnik prezentowy dla Twoich klientów',
          guide: [
            ['nature', 'Dla myśliwego', 'Ciepły lunch na wrzosowisku w sezonie na pardwy.'],
            ['pearl', 'Dla rodziny z domkiem letniskowym', 'Weekend w bústaður, obiad już w samochodzie.'],
            ['city', 'Dla kierowcy w trasie', 'Reykjavík–Akureyri z prawdziwym posiłkiem po drodze.'],
            ['glamour', 'Dla kogoś, kto ma wszystko', 'Coś, czego jeszcze nie ma – i będzie używać codziennie.']
          ],
          kitH: 'Twój świąteczny zestaw kampanii',
          kit: [
            ['gift', 'Gotowy zestaw prezentowy', 'Lunchbox, torba termiczna i sztućce w jednym pudełku – kompletny prezent, bez dokupowania.'],
            ['image', 'Materiały na półkę i witrynę', 'Świąteczny wobbler, plakat i zawieszki prezentowe po islandzku i angielsku.'],
            ['star', 'Pakiet do social mediów', 'Gotowe posty i stories na Adwent – wystarczy dodać nazwę sklepu.']
          ],
          planH: 'Twój świąteczny plan',
          plan: [
            ['Teraz – listopad', 'Zamów i odbierz materiały kampanii.'],
            ['Od 1 grudnia', 'Na półce ze świąteczną ekspozycją.'],
            ['12–24 grudnia', 'Sezon islandzkich Mikołajów – szczyt zakupów prezentów.']
          ],
          cta: 'Dołącz do świątecznej kampanii',
          snowOn: 'Śnieg: wł.',
          snowOff: 'Śnieg: wył.'
        },
        button: 'Zostań sprzedawcą',
        companyLabel: 'Sklep / firma',
        fields: [
          { name: 'store_type', label: 'Gdzie sprzedajesz?', type: 'choice', options: ['Sklep stacjonarny', 'Online', 'Oba'] }
        ]
      }
    }
  },

  // Icelandic – to be filled in and checked by a native speaker. Same shape as `en` (ui + 4 audiences).
  is: {}
};

// Translations of the shared (static) sections in index.html, keyed by data-i18n. English lives in the HTML;
// a missing key keeps the English text.
window.LUNCHEE_SHARED = {
  pl: {
    'hero.tagline': 'Twój czas na ciepły posiłek',
    'badge.heat': 'podgrzanie do',
    'badge.power': 'źródła zasilania',
    'hero.h1': 'Ciepły posiłek,',
    'hero.h2': 'gdziekolwiek jedziesz.',
    'hero.sub': 'Elektryczny lunchbox zasilany z gniazda 12V lub 24V w samochodzie. Ciepłe jedzenie w około 20&nbsp;minut – <strong>w trasie, na budowie, między kursami.</strong>',
    'hero.alt': 'Podróżniczka je ciepły posiłek z lunchboxa obok samochodu na islandzkiej drodze',
    'stats.1': 'zasilanie z auta',
    'stats.2': 'do ciepłego posiłku',
    'stats.3b': 'Torba termiczna',
    'stats.3': 'w zestawie',
    'stats.4b': '30 miesięcy',
    'stats.4': 'gwarancji',
    'who.eyebrow': 'Jeden lunchbox, cztery zastosowania',
    'who.h': 'Kim jesteś?',
    'who.rentals': 'Wypożyczalnie aut',
    'who.rentals.s': 'Nowy dodatek do każdej rezerwacji',
    'who.crews': 'Ekipy w terenie',
    'who.crews.s': 'Ciepły lunch na budowie',
    'who.drivers': 'Kierowcy i floty',
    'who.drivers.s': 'Prawdziwy posiłek między kursami',
    'who.stores': 'Sklepy',
    'who.stores.s': 'Produkt, którego potrzebują Islandczycy',
    'product.eyebrow': 'Lunchee – elektryczny lunchbox',
    'product.h': 'Jedno pudełko. Wszystko w środku.',
    'product.alt': 'Otwarty lunchbox z ciepłym posiłkiem',
    'kit.bag': 'Torba termiczna',
    'kit.cables': 'Kable 12/24 V + 230 V',
    'kit.inox': 'Pojemnik INOX 1,1 L',
    'colours.p': 'Cztery kolory, ta sama specyfikacja. <b>Mieszaj kolory w jednym zamówieniu.</b>',
    'steps.h': '<b>Ciepły posiłek</b> w 5 krokach',
    'steps.1': 'Przygotuj', 'steps.1s': 'Włóż posiłek do lunchboxa.',
    'steps.2': 'Spakuj', 'steps.2s': 'Włóż go do torby termicznej.',
    'steps.3': 'Podłącz', 'steps.3s': '12V / 24V w pojeździe albo 230V.',
    'steps.4': 'Odczekaj ok. 20 min', 'steps.4s': 'Grzeje się, kiedy jedziesz albo pracujesz.',
    'steps.5': 'Jedz', 'steps.5s': 'Tam, gdzie się zatrzymasz.',
    'specs.h': 'Specyfikacja',
    'specs.power': 'Zasilanie', 'specs.power.v': '12 V auto / 24 V ciężarówka / 230 V sieć',
    'specs.watt': 'Moc',
    'specs.heat': 'Podgrzewanie', 'specs.heat.v': 'do 60°C w ok. 20 min',
    'specs.main': 'Pojemnik główny', 'specs.main.v': '1,1 L, stal nierdzewna (INOX), wyjmowany',
    'specs.extra': 'Pojemnik dodatkowy', 'specs.extra.v': '0,5 L z pokrywką',
    'specs.dim': 'Wymiary', 'specs.dim.v': '23 × 16 × 10,5 cm',
    'specs.weight': 'Waga', 'specs.weight.v': '0,63 kg',
    'specs.mat': 'Materiały', 'specs.mat.v': 'bez BPA',
    'specs.dish': 'Zmywarka', 'specs.dish.v': 'Tak (pojemniki)',
    'specs.box': 'W zestawie',
    'specs.box.v': 'Lunchbox z pojemnikiem INOX 1,1 L · pojemnik 0,5 L z pokrywką · metalowa łyżka i widelec · kabel 230 V · kabel samochodowy 12/24 V · torba termiczna.',
    'specs.know': 'Dobrze wiedzieć',
    'specs.know.v': 'Czas podgrzewania zależy od posiłku i temperatury na zewnątrz – jedzenie z lodówki w zimny dzień potrzebuje trochę więcej czasu. Podczas podgrzewania zostaw otwarty zawór. Nigdy nie włączaj pustego lunchboxa.',
    'foot.p': 'Oficjalny partner Lunchee na Islandii'
  },
  // Icelandic – same keys, after the native check
  is: {}
};
