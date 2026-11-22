// Curated iconic landmarks with verified real-world photography sources & multi-fallback resilience
// Format: [name, difficulty, clueEN, clueTR, coords, wikiTitle, directPhotoUrl]
const RAW_LOCATIONS = [
  // ================= EASY =================
  [
    "Eiffel Tower, Paris",
    "Easy",
    "Europe • France • Paris • Iron tower by the Seine",
    "Avrupa • Fransa • Paris • Seine Nehri kenarında demir kule",
    [48.8584, 2.2945],
    "Eiffel_Tower",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
  ],
  [
    "Colosseum, Rome",
    "Easy",
    "Europe • Italy • Rome • Ancient Roman arena",
    "Avrupa • İtalya • Roma • Antik Roma gladyatör arenası",
    [41.8902, 12.4922],
    "Colosseum",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg"
  ],
  [
    "Statue of Liberty, New York",
    "Easy",
    "North America • USA • New York Harbor • Copper statue",
    "Kuzey Amerika • ABD • New York Limanı • Bakır heykel",
    [40.6892, -74.0445],
    "Statue_of_Liberty",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/800px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg"
  ],
  [
    "Big Ben, London",
    "Easy",
    "Europe • UK • London • Clock tower by Thames",
    "Avrupa • İngiltere • Londra • Thames kıyısında saat kulesi",
    [51.5007, -0.1246],
    "Big_Ben",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Elizabeth_Tower%2C_London%2C_UK_-_Apr_2023.jpg/800px-Elizabeth_Tower%2C_London%2C_UK_-_Apr_2023.jpg"
  ],
  [
    "Pyramids of Giza, Egypt",
    "Easy",
    "North Africa • Egypt • Near Cairo • Desert pyramids",
    "Kuzey Afrika • Mısır • Kahire yakını • Çöl piramitleri",
    [29.9792, 31.1342],
    "Great_Pyramid_of_Giza",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops_Pyramid.jpg/800px-Kheops_Pyramid.jpg"
  ],
  [
    "Taj Mahal, Agra",
    "Easy",
    "South Asia • India • Agra • White marble monument",
    "Güney Asya • Hindistan • Agra • Beyaz mermer yapı",
    [27.1751, 78.0421],
    "Taj_Mahal",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/800px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg"
  ],
  [
    "Christ the Redeemer, Rio de Janeiro",
    "Easy",
    "South America • Brazil • Rio • Statue on Corcovado hill",
    "Güney Amerika • Brezilya • Rio • Tepe üstü dev heykel",
    [-22.9519, -43.2105],
    "Christ_the_Redeemer_(statue)",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Rio_de_Janeiro%2C_Brazil.jpg/800px-Christ_the_Redeemer_-_Rio_de_Janeiro%2C_Brazil.jpg"
  ],
  [
    "Sydney Opera House, Australia",
    "Easy",
    "Oceania • Australia • Sydney • Sail-shaped harbor roof",
    "Okyanusya • Avustralya • Sidney • Yelken çatılı liman yapısı",
    [-33.8568, 151.2153],
    "Sydney_Opera_House",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg"
  ],
  [
    "Sagrada Familia, Barcelona",
    "Easy",
    "Europe • Spain • Barcelona • Gaudi church towers",
    "Avrupa • İspanya • Barselona • Gaudi'nin ünlü bazilikası",
    [41.4036, 2.1744],
    "Sagrada_Fam%C3%ADlia",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/800px-Sagrada_Familia_01.jpg"
  ],
  [
    "Acropolis of Athens, Greece",
    "Easy",
    "Europe • Greece • Athens • Parthenon on rocky hill",
    "Avrupa • Yunanistan • Atina • Tepe üstü Parthenon",
    [37.9715, 23.7257],
    "Acropolis_of_Athens",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_Parthenon_in_Athens.jpg/800px-The_Parthenon_in_Athens.jpg"
  ],
  [
    "Mount Fuji, Japan",
    "Easy",
    "East Asia • Japan • Honshu • Snow-capped volcano cone",
    "Doğu Asya • Japonya • Honşu • Karlı koni volkan",
    [35.3606, 138.7274],
    "Mount_Fuji",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/800px-080103_hakkai_fuji.jpg"
  ],
  [
    "Golden Gate Bridge, San Francisco",
    "Easy",
    "North America • USA • California • Orange suspension bridge",
    "Kuzey Amerika • ABD • Kaliforniya • Turuncu asma köprü",
    [37.8199, -122.4783],
    "Golden_Gate_Bridge",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/800px-GoldenGateBridge-001.jpg"
  ],
  [
    "Burj Khalifa, Dubai",
    "Easy",
    "Middle East • UAE • Dubai • World's tallest tower",
    "Orta Doğu • BAE • Dubai • Dünyanın en yüksek gökdeleni",
    [25.1972, 55.2744],
    "Burj_Khalifa",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Burj_Khalifa.jpg/800px-Burj_Khalifa.jpg"
  ],
  [
    "Hagia Sophia, Istanbul",
    "Easy",
    "Europe/Asia border • Türkiye • Istanbul • Historic dome",
    "Avrupa-Asya • Türkiye • İstanbul • Tarihi büyük kubbe",
    [41.0086, 28.9802],
    "Hagia_Sophia",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/800px-Hagia_Sophia_Mars_2013.jpg"
  ],
  [
    "Stonehenge, England",
    "Easy",
    "Europe • UK • Southern England • Prehistoric stone ring",
    "Avrupa • İngiltere • Güney İngiltere • Tarih öncesi taş çember",
    [51.1789, -1.8262],
    "Stonehenge",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/800px-Stonehenge2007_07_30.jpg"
  ],
  [
    "Leaning Tower of Pisa, Italy",
    "Easy",
    "Europe • Italy • Tuscany • Tilted white bell tower",
    "Avrupa • İtalya • Toskana • Eğik çan kulesi",
    [43.7230, 10.3966],
    "Leaning_Tower_of_Pisa",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/800px-The_Leaning_Tower_of_Pisa_SB.jpeg"
  ],
  [
    "Louvre Museum, Paris",
    "Easy",
    "Europe • France • Paris • Glass pyramid courtyard",
    "Avrupa • Fransa • Paris • Cam piramitli müze avlusu",
    [48.8606, 2.3376],
    "Louvre",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/800px-Louvre_Museum_Wikimedia_Commons.jpg"
  ],
  [
    "Neuschwanstein Castle, Germany",
    "Easy",
    "Central Europe • Germany • Bavaria • Alpine hill castle",
    "Orta Avrupa • Almanya • Bavyera • Dağ tepesinde şato",
    [47.5576, 10.7498],
    "Neuschwanstein_Castle",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/800px-Schloss_Neuschwanstein_2013.jpg"
  ],
  [
    "Machu Picchu, Peru",
    "Easy",
    "South America • Peru • Andes Mountains • Ancient Inca ruins",
    "Güney Amerika • Peru • And Dağları • Antik İnka kenti",
    [-13.1631, -72.5450],
    "Machu_Picchu",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/800px-Machu_Picchu%2C_Peru.jpg"
  ],
  [
    "Santorini Caldera, Greece",
    "Easy",
    "Europe • Greece • Aegean Sea island • White cliff houses",
    "Avrupa • Yunanistan • Ege adası • Beyaz uçurum evleri",
    [36.4618, 25.3753],
    "Santorini",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Santorini_-_Oia_%28254026872%29.jpeg/800px-Santorini_-_Oia_%28254026872%29.jpeg"
  ],
  [
    "Anıtkabir, Ankara",
    "Easy",
    "Türkiye • Central Anatolia • Ankara • Mausoleum complex",
    "Türkiye • İç Anadolu • Ankara • Anıt mezar kompleksi",
    [39.9255, 32.8369],
    "An%C4%B1tkabir",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/An%C4%B1tkabir_main_view.jpg/800px-An%C4%B1tkabir_main_view.jpg"
  ],
  [
    "Göreme Fairy Chimneys, Cappadocia",
    "Easy",
    "Türkiye • Central Anatolia • Nevşehir/Cappadocia • Rock cones",
    "Türkiye • İç Anadolu • Kapadokya • Peri bacaları",
    [38.6431, 34.8289],
    "G%C3%B6reme",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Goreme_Valley_Cappadocia.jpg/800px-Goreme_Valley_Cappadocia.jpg"
  ],

  // ================= MEDIUM =================
  [
    "Galata Tower, Istanbul",
    "Medium",
    "Türkiye • Istanbul • Beyoğlu side of Golden Horn • Stone tower",
    "Türkiye • İstanbul • Haliç kuzeyi • Taş kule",
    [41.0256, 28.9741],
    "Galata_Tower",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Galata_Tower_Istanbul.jpg/800px-Galata_Tower_Istanbul.jpg"
  ],
  [
    "Pamukkale Terraces, Denizli",
    "Medium",
    "Türkiye • Southwestern Anatolia • Denizli • White thermal pools",
    "Türkiye • Güneybatı Anadolu • Denizli • Beyaz travertenler",
    [37.9204, 29.1204],
    "Pamukkale",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pamukkale_travertines_in_Turkey.jpg/800px-Pamukkale_travertines_in_Turkey.jpg"
  ],
  [
    "Mont Saint-Michel, France",
    "Medium",
    "Western Europe • Normandy coast • France • Tidal island abbey",
    "Batı Avrupa • Normandiya kıyısı • Fransa • Ada manastırı",
    [48.6361, -1.5115],
    "Mont-Saint-Michel",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mont-Saint-Michel_vu_du_ciel.jpg/800px-Mont-Saint-Michel_vu_du_ciel.jpg"
  ],
  [
    "Matterhorn Peak, Alps",
    "Medium",
    "Europe • Switzerland & Italy border • Zermatt • Sharp peak",
    "Avrupa • İsviçre-İtalya sınırı • Zermatt • Sivri dağ zirvesi",
    [45.9763, 7.6586],
    "Matterhorn",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2010.jpg/800px-Matterhorn_from_Domh%C3%BCtte_-_2010.jpg"
  ],
  [
    "Iguazu Falls, South America",
    "Medium",
    "South America • Brazil & Argentina border • Wide waterfalls",
    "Güney Amerika • Brezilya-Arjantin sınırı • Geniş şelaleler",
    [-25.6953, -54.4367],
    "Iguazu_Falls",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cataratas_do_Igua%C3%A7u_-_Brazil_side.jpg/800px-Cataratas_do_Igua%C3%A7u_-_Brazil_side.jpg"
  ],
  [
    "Lake Louise, Banff",
    "Medium",
    "North America • Western Canada • Alberta Rockies • Blue lake",
    "Kuzey Amerika • Batı Kanada • Alberta Kayalık Dağları • Göl",
    [51.4254, -116.1773],
    "Lake_Louise_(Alberta)",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lake_Louise_Banff_National_Park.jpg/800px-Lake_Louise_Banff_National_Park.jpg"
  ],
  [
    "Uluru Rock, Australia",
    "Medium",
    "Oceania • Central Australia • Northern Territory • Red rock",
    "Okyanusya • Orta Avustralya • Kızıl dev kaya kütlesi",
    [-25.3444, 131.0369],
    "Uluru",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Uluru%2C_Australia.jpg/800px-Uluru%2C_Australia.jpg"
  ],
  [
    "Milan Cathedral (Duomo), Italy",
    "Medium",
    "Southern Europe • Northern Italy • Milan • Spiky Gothic marble",
    "Güney Avrupa • Kuzey İtalya • Milano • Gotik mermer katedral",
    [45.4642, 9.1900],
    "Milan_Cathedral",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Milano_Duomo_facciata.jpg/800px-Milano_Duomo_facciata.jpg"
  ],
  [
    "Rialto Bridge, Venice",
    "Medium",
    "Southern Europe • Northern Italy • Venice • Arched canal bridge",
    "Güney Avrupa • Kuzey İtalya • Venedik • Kemerli kanal köprüsü",
    [45.4380, 12.3359],
    "Rialto_Bridge",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ponte_di_Rialto_%28Venice%29.jpg/800px-Ponte_di_Rialto_%28Venice%29.jpg"
  ],
  [
    "Nyhavn Harborfront, Copenhagen",
    "Medium",
    "Northern Europe • Denmark • Copenhagen • Colored canal houses",
    "Kuzey Avrupa • Danimarka • Kopenhag • Renkli liman evleri",
    [55.6800, 12.5906],
    "Nyhavn",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nyhavn_Copenhagen_Denmark.jpg/800px-Nyhavn_Copenhagen_Denmark.jpg"
  ],

  // ================= HARD =================
  [
    "Meteora Cliffs & Monasteries, Greece",
    "Hard",
    "Balkans • Central Greece • Thessaly • Monasteries on rocks",
    "Balkanlar • Orta Yunanistan • Teselya • Kaya üstü manastırlar",
    [39.7217, 21.6306],
    "Meteora",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Meteora_monastery_on_cliff.jpg/800px-Meteora_monastery_on_cliff.jpg"
  ],
  [
    "Hallstatt Alpine Village, Austria",
    "Hard",
    "Central Europe • Austria • Salzburg region • Lakeside village",
    "Orta Avrupa • Avusturya • Salzburg bölgesi • Göl kıyısı köy",
    [47.5622, 13.6493],
    "Hallstatt",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hallstatt_005.jpg/800px-Hallstatt_005.jpg"
  ],
  [
    "Plitvice Lakes, Croatia",
    "Hard",
    "Balkans • Central Croatia • Forest waterfalls & lakes",
    "Balkanlar • Orta Hırvatistan • Orman içi göller ve şelaleler",
    [44.8654, 15.5820],
    "Plitvice_Lakes_National_Park",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Plitvice_Lakes_National_Park_Croatia.jpg/800px-Plitvice_Lakes_National_Park_Croatia.jpg"
  ],
  [
    "Uzungöl Lake & Valley, Trabzon",
    "Hard",
    "Türkiye • Eastern Black Sea • Trabzon/Çaykara • Mountain lake",
    "Türkiye • Doğu Karadeniz • Trabzon/Çaykara • Dağ gölü",
    [40.6186, 40.2939],
    "Uzung%C3%B6l",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Uzung%C3%B6l_Trabzon_Turkey.jpg/800px-Uzung%C3%B6l_Trabzon_Turkey.jpg"
  ],
  [
    "Perito Moreno Glacier, Argentina",
    "Hard",
    "South America • Southern Patagonia • Argentina • Ice glacier",
    "Güney Amerika • Güney Patagonya • Arjantin • Buzul duvarı",
    [-50.4957, -73.0485],
    "Perito_Moreno_Glacier",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Perito_Moreno_Glacier_Patagonia.jpg/800px-Perito_Moreno_Glacier_Patagonia.jpg"
  ],
  [
    "Victoria Falls, Zambezi",
    "Hard",
    "Southern Africa • Zambia & Zimbabwe border • Zambezi River",
    "Güney Afrika • Zambiya-Zimbabve sınırı • Zambezi şelalesi",
    [-17.9243, 25.8572],
    "Victoria_Falls",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Victoria_Falls_from_the_air.jpg/800px-Victoria_Falls_from_the_air.jpg"
  ],
  [
    "Mount Kilimanjaro, Tanzania",
    "Hard",
    "East Africa • Northern Tanzania • Near Kenya • Snow peak",
    "Doğu Afrika • Kuzey Tanzanya • Kenya yakını • Karlı zirve",
    [-3.0674, 37.3556],
    "Mount_Kilimanjaro",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mount_Kilimanjaro_from_space.jpg/800px-Mount_Kilimanjaro_from_space.jpg"
  ],
  [
    "Salar de Uyuni, Bolivia",
    "Hard",
    "South America • Western Bolivia • Andes • White salt plain",
    "Güney Amerika • Batı Bolivya • Andlar • Beyaz tuz düzlüğü",
    [-20.1338, -67.4891],
    "Salar_de_Uyuni",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Salar_de_Uyuni_Salt_Flats.jpg/800px-Salar_de_Uyuni_Salt_Flats.jpg"
  ]
];

const UI_TEXT = {
  en: {
    subtitle: "GMT 458 Web GIS • UK",
    duelQuestion: "Can you win this duel?",
    playBtn: "Play",
    settingsBtn: "Settings",
    roundsSetting: "Rounds (6 - 9):",
    durationSetting: "Round Time (10 - 30s):",
    soundSetting: "Sound:",
    soundOn: "On",
    soundOff: "Off",
    languageChoice: "Language:",
    englishLbl: "English",
    turkishLbl: "Turkish",
    round: "Round",
    time: "Time",
    score: "Score",
    best: "Best",
    lang: "Language",
    langBtn: "EN / TR",
    questionTitle: "Where is this place?",
    cluePrefix: "Clue",
    loadingPhoto: "Loading photo...",
    statusDefault: "Click on the OpenStreetMap map to place your guess pin.",
    mapPanelTitle: "OpenStreetMap Guess Area",
    noPin: "No pin placed",
    shootBtn: "Confirm Guess & Go to Penalty",
    loadingArena: "Loading Penalty Arena & Crowd...",
    crowdWatching: "Crowd: Watching",
    crowdCheer: "Crowd: Cheering 🎉",
    crowdSad: "Crowd: Disappointed 😔",
    distanceLbl: "Distance Error:",
    chanceLbl: "Goal Chance:",
    outcomeLbl: "Outcome:",
    shooting: "Getting ready...",
    nextRound: "Next Round →",
    seeSummary: "See Summary",
    summaryTitle: "Full Time — Match Summary",
    verdictWin: (g, tot) => `YOU WON! (${g}/${tot} Goals)`,
    verdictDraw: (g, tot) => `DRAW! (${g}/${tot} Goals)`,
    verdictLose: (g, tot) => `YOU LOST! (${g}/${tot} Goals)`,
    trophyCaption: "CHAMPIONS TROPHY • VICTORY",
    finalGoals: "Goals",
    finalScore: "Final Score",
    finalBest: "Best Score",
    playAgain: "Play Again",
    globeTitle: "GeoGoal • UK",
    duelStartingSub: "The duel is starting...",
    penaltyCheckSub: "Let's see if it's a goal...",
    loadingUniquePlaces: (loaded, total) => `Loading unique places (${loaded}/${total})`,
    actualPrefix: "Actual Place:",
    timeUp: "Time Up",
    timedOutDetail: (name) => `Time expired! Target was ${name}.`,
    guessDetail: (km, name, chance) => `You guessed ${km.toLocaleString()} km away from ${name} (${chance}% goal chance).`,
    goalText: (pts) => `GOAL (+${pts} pts)`,
    noGoalText: "NO GOAL (0 pts)",
    chartLabel: "Accuracy Score (0–100: High = Close, Low = Far)",
    bannerGoal: "Messi scored a great goal!",
    bannerNoGoal: "İnanılmaz!"
  },
  tr: {
    subtitle: "GMT 458 Web GIS • UK",
    duelQuestion: "Bu düelloyu kazanabilir misin?",
    playBtn: "Oyna",
    settingsBtn: "Ayarlar",
    roundsSetting: "Tur Sayısı (6 - 9):",
    durationSetting: "Tur Süresi (10 - 30 sn):",
    soundSetting: "Ses:",
    soundOn: "Açık",
    soundOff: "Kapalı",
    languageChoice: "Dil:",
    englishLbl: "İngilizce",
    turkishLbl: "Türkçe",
    round: "Tur",
    time: "Süre",
    score: "Puan",
    best: "Rekor",
    lang: "Dil",
    langBtn: "TR / EN",
    questionTitle: "Bu yer nerede?",
    cluePrefix: "İpucu",
    loadingPhoto: "Fotoğraf yükleniyor...",
    statusDefault: "Tahmin iğnesini bırakmak için OpenStreetMap haritasına tıkla.",
    mapPanelTitle: "OpenStreetMap Tahmin Alanı",
    noPin: "İğne bırakılmadı",
    shootBtn: "Tahmini Onayla ve Penaltıya Geç",
    loadingArena: "Penaltı Sahnesi ve Tribün Yükleniyor...",
    crowdWatching: "Tribün: İzliyor",
    crowdCheer: "Tribün: Seviniyor 🎉",
    crowdSad: "Tribün: Üzgün 😔",
    distanceLbl: "Mesafe Hatası:",
    chanceLbl: "Gol İhtimali:",
    outcomeLbl: "Sonuç:",
    shooting: "Hazırlanılıyor...",
    nextRound: "Sonraki Tur →",
    seeSummary: "Özeti Gör",
    summaryTitle: "Maç Sonu — Özet",
    verdictWin: (g, tot) => `KAZANDIN! (${g}/${tot} Gol)`,
    verdictDraw: (g, tot) => `BERABERE! (${g}/${tot} Gol)`,
    verdictLose: (g, tot) => `KAYBETTİN! (${g}/${tot} Gol)`,
    trophyCaption: "ŞAMPİYONLAR KUPASI • ZAFER",
    finalGoals: "Gol",
    finalScore: "Toplam Puan",
    finalBest: "En Yüksek Skor",
    playAgain: "Tekrar Oyna",
    globeTitle: "GeoGoal • UK",
    duelStartingSub: "Düello başlıyor...",
    penaltyCheckSub: "Bakalım gol olacak mı...",
    loadingUniquePlaces: (loaded, total) => `Eşsiz yerler yükleniyor (${loaded}/${total})`,
    actualPrefix: "Gerçek Yer:",
    timeUp: "Süre Doldu",
    timedOutDetail: (name) => `Süre doldu! Doğru konum: ${name}.`,
    guessDetail: (km, name, chance) => `${name} konumuna ${km.toLocaleString()} km uzakta tahmin yaptın (%${chance} gol ihtimali).`,
    goalText: (pts) => `GOL (+${pts} puan)`,
    noGoalText: "GOL YOK (0 puan)",
    chartLabel: "İsabet / Yakınlık Puanı (0–100: Yakın = Yüksek, Uzak = Düşük)",
    bannerGoal: "Messi harika attı!",
    bannerNoGoal: "İnanılmaz!"
  }
};

// Always starts in English ("en") on initial load
let currentLang = "en";
function t(key) {
  return UI_TEXT[currentLang][key];
}

// Web Audio Synthesizer: soft welcome theme + selection theme + victory fanfare + miss theme
const soundEngine = (() => {
  let ctxAudio = null;
  let soundEnabled = true;
  let welcomeInterval = null;
  let welcomeStep = 0;
  let themeInterval = null;
  let stepIndex = 0;

  const welcomeNotes = [261.63, 329.63, 392.0, 493.88, 392.0, 329.63, 293.66, 392.0];
  const normalNotes = [261.63, 329.63, 392.0, 523.25, 392.0, 349.23, 440.0, 392.0];
  const urgentNotes = [329.63, 392.0, 493.88, 523.25, 587.33, 523.25, 493.88, 392.0];

  function ensureContext() {
    if (!soundEnabled) return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!ctxAudio) {
      ctxAudio = new AudioCtx();
    }
    if (ctxAudio.state === "suspended") {
      ctxAudio.resume().catch(() => {});
    }
    return ctxAudio;
  }

  function playTone(audio, { freq, type = "triangle", startOffset = 0, duration = 0.2, peak = 0.06, slideTo = null }) {
    if (!soundEnabled || !audio) return;
    const now = audio.currentTime + startOffset;
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slideTo) {
      osc.frequency.linearRampToValueAtTime(slideTo, now + duration);
    }

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  function playWelcomeBeat() {
    if (!soundEnabled) return;
    const audio = ensureContext();
    if (!audio) return;

    const freq = welcomeNotes[welcomeStep % welcomeNotes.length];
    welcomeStep += 1;
    playTone(audio, {
      freq,
      type: "sine",
      startOffset: 0,
      duration: 0.42,
      peak: 0.022
    });
  }

  function startWelcomeTheme() {
    stopSelectionTheme();
    if (!soundEnabled || welcomeInterval !== null) return;
    playWelcomeBeat();
    welcomeInterval = setInterval(playWelcomeBeat, 460);
  }

  function stopWelcomeTheme() {
    if (welcomeInterval !== null) {
      clearInterval(welcomeInterval);
      welcomeInterval = null;
    }
    welcomeStep = 0;
  }

  function playThemeBeat(isUrgent) {
    if (!soundEnabled) return;
    const audio = ensureContext();
    if (!audio) return;

    const now = audio.currentTime;
    const scale = isUrgent ? urgentNotes : normalNotes;
    const freq = scale[stepIndex % scale.length];
    stepIndex += 1;

    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = isUrgent ? "sawtooth" : "triangle";
    osc.frequency.setValueAtTime(freq, now);

    const peak = isUrgent ? 0.065 : 0.045;
    const dur = isUrgent ? 0.13 : 0.18;

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start(now);
    osc.stop(now + dur + 0.02);
  }

  function updateSelectionTheme(secondsLeft) {
    stopWelcomeTheme();
    if (!soundEnabled) {
      stopSelectionTheme();
      return;
    }

    const isUrgent = secondsLeft <= 4;
    const intervalMs = isUrgent ? 175 : 290;

    if (themeInterval !== null && themeInterval.ms === intervalMs) return;
    stopSelectionTheme();

    playThemeBeat(isUrgent);
    const id = setInterval(() => playThemeBeat(secondsLeft <= 4), intervalMs);
    themeInterval = { id, ms: intervalMs };
  }

  function stopSelectionTheme() {
    if (themeInterval !== null) {
      clearInterval(themeInterval.id);
      themeInterval = null;
    }
    stepIndex = 0;
  }

  function playGoalFanfare() {
    stopSelectionTheme();
    stopWelcomeTheme();
    if (!soundEnabled) return;
    const audio = ensureContext();
    if (!audio) return;

    const successNotes = [
      { freq: 523.25, startOffset: 0.0, duration: 0.15, peak: 0.085 },
      { freq: 659.25, startOffset: 0.16, duration: 0.15, peak: 0.09 },
      { freq: 783.99, startOffset: 0.32, duration: 0.18, peak: 0.095 },
      { freq: 1046.5, startOffset: 0.52, duration: 0.55, peak: 0.105 }
    ];
    successNotes.forEach((n) => playTone(audio, { ...n, type: "triangle" }));
  }

  function playMissTheme() {
    stopSelectionTheme();
    stopWelcomeTheme();
    if (!soundEnabled) return;
    const audio = ensureContext();
    if (!audio) return;

    const missNotes = [
      { freq: 392.0, startOffset: 0.0, duration: 0.26, peak: 0.075, slideTo: 369.99 },
      { freq: 349.23, startOffset: 0.28, duration: 0.28, peak: 0.075, slideTo: 329.63 },
      { freq: 311.13, startOffset: 0.58, duration: 0.3, peak: 0.07, slideTo: 293.66 },
      { freq: 261.63, startOffset: 0.9, duration: 0.65, peak: 0.08, slideTo: 220.0 }
    ];
    missNotes.forEach((n) => playTone(audio, { ...n, type: "sine" }));
  }

  function setSoundEnabled(enabled) {
    soundEnabled = Boolean(enabled);
    if (!soundEnabled) {
      stopWelcomeTheme();
      stopSelectionTheme();
    } else if (ctxAudio && ctxAudio.state === "suspended") {
      ctxAudio.resume().catch(() => {});
    }
  }

  function isSoundEnabled() {
    return soundEnabled;
  }

  return {
    startWelcomeTheme,
    stopWelcomeTheme,
    updateSelectionTheme,
    stopSelectionTheme,
    playGoalFanfare,
    playMissTheme,
    setSoundEnabled,
    isSoundEnabled
  };
})();

const LOCATIONS_POOL = RAW_LOCATIONS.map(([name, difficulty, clueEN, clueTR, coords, wikiTitle, directPhotoUrl], idx) => ({
  id: idx + 1,
  name,
  difficulty,
  clueEN,
  clueTR,
  coords,
  wikiTitle,
  directPhotoUrl
}));

const DEFAULT_ROUNDS = 6;
const DEFAULT_DURATION = 15;
const HIGHSCORE_KEY = "geogoal_highscore";
const resolvedImageCache = new Map();
const FALLBACK_PHOTO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg";

function clampInt(val, min, max, fallback) {
  const num = Number.parseInt(val, 10);
  if (Number.isNaN(num)) return fallback;
  return Math.min(max, Math.max(min, num));
}

function getCandidateUrls(locationItem) {
  const candidates = [];
  if (locationItem && locationItem.directPhotoUrl) {
    candidates.push(locationItem.directPhotoUrl);
  }
  if (locationItem && locationItem.wikiTitle) {
    candidates.push(
      `https://commons.wikimedia.org/wiki/Special:FilePath/${locationItem.wikiTitle}.jpg?width=800`,
      `https://commons.wikimedia.org/wiki/Special:FilePath/${locationItem.wikiTitle}.jpg?width=600`
    );
  }
  candidates.push(FALLBACK_PHOTO_URL);
  return [...new Set(candidates)];
}

function tryLoadUrlWithTimeout(src, timeoutMs = 4500) {
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;

    const finish = (ok) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(ok ? src : null);
    };

    const timer = setTimeout(() => finish(false), timeoutMs);
    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.src = src;
  });
}

async function resolveWorkingImageUrl(locationItem) {
  const key = locationItem.wikiTitle || locationItem.name;
  if (resolvedImageCache.has(key)) {
    return resolvedImageCache.get(key);
  }

  const candidates = getCandidateUrls(locationItem);
  for (let i = 0; i < candidates.length; i++) {
    const loadedUrl = await tryLoadUrlWithTimeout(candidates[i], 4500);
    if (loadedUrl) {
      resolvedImageCache.set(key, loadedUrl);
      return loadedUrl;
    }
  }

  resolvedImageCache.set(key, FALLBACK_PHOTO_URL);
  return FALLBACK_PHOTO_URL;
}

// Resolves & preloads all round photos so every single round has a loaded landmark image
async function preloadAllRoundImages(onProgress) {
  const qs = game.getQuestions();
  let completed = 0;
  if (onProgress) onProgress(completed, qs.length);

  await Promise.all(
    qs.map(async (q) => {
      await resolveWorkingImageUrl(q);
      completed += 1;
      if (onProgress) onProgress(completed, qs.length);
    })
  );
}

function pickRandomItems(arr, count) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

// Build N questions (6..9) balanced across Easy, Medium, Hard
function buildMatchQuestions(totalRounds = DEFAULT_ROUNDS) {
  const n = clampInt(totalRounds, 6, 9, DEFAULT_ROUNDS);
  const easyCount = Math.ceil(n / 3);
  const mediumCount = Math.ceil((n - easyCount) / 2);
  const hardCount = Math.max(1, n - easyCount - mediumCount);

  const easy = pickRandomItems(LOCATIONS_POOL.filter((x) => x.difficulty === "Easy"), easyCount);
  const medium = pickRandomItems(LOCATIONS_POOL.filter((x) => x.difficulty === "Medium"), mediumCount);
  const hard = pickRandomItems(LOCATIONS_POOL.filter((x) => x.difficulty === "Hard"), hardCount);
  return [...easy, ...medium, ...hard].slice(0, n);
}

// Closure for encapsulating match state, round count, duration & countdown timer
function createGameController() {
  let roundCountSetting = DEFAULT_ROUNDS;
  let roundDurationSetting = DEFAULT_DURATION;
  let questions = buildMatchQuestions(roundCountSetting);
  let currentRoundIndex = 0;
  let score = 0;
  let goals = 0;
  let missed = 0;
  let timeLeft = roundDurationSetting;
  let timerId = null;
  let guessLatLng = null;
  let roundResolved = false;
  let history = [];

  function getHighScore() {
    return Number(localStorage.getItem(HIGHSCORE_KEY) || 0);
  }

  function saveHighScore(newScore) {
    const currentBest = getHighScore();
    if (newScore > currentBest) {
      localStorage.setItem(HIGHSCORE_KEY, String(newScore));
      return newScore;
    }
    return currentBest;
  }

  function stopTimer() {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function startTimer(onTick, onExpire) {
    stopTimer();
    timeLeft = roundDurationSetting;
    onTick(timeLeft);

    timerId = setInterval(() => {
      timeLeft -= 1;
      onTick(timeLeft);

      if (timeLeft <= 0) {
        stopTimer();
        onExpire();
      }
    }, 1000);
  }

  function updateSettings(roundsVal, durationVal) {
    roundCountSetting = clampInt(roundsVal, 6, 9, DEFAULT_ROUNDS);
    roundDurationSetting = clampInt(durationVal, 10, 30, DEFAULT_DURATION);
    questions = buildMatchQuestions(roundCountSetting);
    timeLeft = roundDurationSetting;
  }

  return {
    getQuestions: () => questions,
    getRoundCountSetting: () => roundCountSetting,
    getRoundDurationSetting: () => roundDurationSetting,
    updateSettings,
    getCurrentQuestion: () => questions[currentRoundIndex],
    getRoundNumber: () => currentRoundIndex + 1,
    getTotalRounds: () => questions.length,
    getScore: () => score,
    getGoals: () => goals,
    getMissed: () => missed,
    getTimeLeft: () => timeLeft,
    getGuess: () => guessLatLng,
    setGuess: (latlng) => {
      if (!roundResolved) guessLatLng = latlng;
    },
    isResolved: () => roundResolved,
    markResolved: () => {
      roundResolved = true;
      stopTimer();
    },
    addResult: (entry) => {
      history.push(entry);
      if (entry.isGoal) {
        goals += 1;
        score += entry.pointsEarned;
      } else {
        missed += 1;
      }
      return saveHighScore(score);
    },
    getHistory: () => history,
    hasNextRound: () => currentRoundIndex + 1 < questions.length,
    nextRound: () => {
      currentRoundIndex += 1;
      guessLatLng = null;
      roundResolved = false;
      return questions[currentRoundIndex];
    },
    resetMatch: (keepCurrentSettings = true) => {
      stopTimer();
      if (keepCurrentSettings) {
        questions = buildMatchQuestions(roundCountSetting);
      }
      currentRoundIndex = 0;
      score = 0;
      goals = 0;
      missed = 0;
      timeLeft = roundDurationSetting;
      guessLatLng = null;
      roundResolved = false;
      history = [];
    },
    startTimer,
    stopTimer,
    getHighScore
  };
}

const game = createGameController();

// DOM References
const el = {
  topHud: document.getElementById("top-hud"),
  homeBrandBtn: document.getElementById("home-brand-btn"),
  startScreen: document.getElementById("start-screen"),
  duelQuestionMessage: document.getElementById("duel-question-message"),
  playBtn: document.getElementById("play-btn"),
  settingsToggleBtn: document.getElementById("settings-toggle-btn"),
  settingsPanel: document.getElementById("settings-panel"),
  lblRoundsSetting: document.getElementById("lbl-rounds-setting"),
  lblDurationSetting: document.getElementById("lbl-duration-setting"),
  lblSoundSetting: document.getElementById("lbl-sound-setting"),
  roundsInput: document.getElementById("rounds-input"),
  durationInput: document.getElementById("duration-input"),
  soundToggleBtn: document.getElementById("sound-toggle-btn"),
  lblLanguageChoice: document.getElementById("lbl-language-choice"),
  langEnBtn: document.getElementById("lang-en-btn"),
  langTrBtn: document.getElementById("lang-tr-btn"),

  subtitleText: document.getElementById("subtitle-text"),
  lblRound: document.getElementById("lbl-round"),
  lblTime: document.getElementById("lbl-time"),
  lblScore: document.getElementById("lbl-score"),
  lblBest: document.getElementById("lbl-best"),
  lblLangHud: document.getElementById("lbl-lang-hud"),
  hudLangBtn: document.getElementById("hud-lang-btn"),
  questionTitle: document.getElementById("question-title"),
  mapPanelTitle: document.getElementById("map-panel-title"),
  lblDistance: document.getElementById("lbl-distance"),
  lblChance: document.getElementById("lbl-chance"),
  lblOutcome: document.getElementById("lbl-outcome"),
  summaryTitle: document.getElementById("summary-title"),
  matchVerdict: document.getElementById("match-verdict"),
  confettiLayer: document.getElementById("confetti-layer"),
  trophyBanner: document.getElementById("trophy-banner"),
  trophyCaption: document.getElementById("trophy-caption"),
  lblFinalGoals: document.getElementById("lbl-final-goals"),
  lblFinalScore: document.getElementById("lbl-final-score"),
  lblFinalBest: document.getElementById("lbl-final-best"),

  roundDisplay: document.getElementById("round-display"),
  timerDisplay: document.getElementById("timer-display"),
  timerBox: document.querySelector(".timer-box"),
  scoreDisplay: document.getElementById("score-display"),
  highscoreDisplay: document.getElementById("highscore-display"),

  guessScreen: document.getElementById("guess-screen"),
  penaltyScreen: document.getElementById("penalty-screen"),
  penaltyLoading: document.getElementById("penalty-loading"),
  penaltyStage: document.getElementById("penalty-stage"),
  penaltyLocationTitle: document.getElementById("penalty-location-title"),
  crowdMoodBadge: document.getElementById("crowd-mood-badge"),

  locationImage: document.getElementById("location-image"),
  imageLoader: document.getElementById("image-loader"),
  locationHint: document.getElementById("location-hint"),
  statusMessage: document.getElementById("status-message"),
  guessCoordsText: document.getElementById("guess-coords-text"),
  shootBtn: document.getElementById("shoot-btn"),
  nextBtn: document.getElementById("next-btn"),

  distanceDisplay: document.getElementById("distance-display"),
  chanceDisplay: document.getElementById("chance-display"),
  outcomeDisplay: document.getElementById("outcome-display"),
  resultDetailText: document.getElementById("result-detail-text"),
  canvas: document.getElementById("penalty-canvas"),

  modal: document.getElementById("summary-modal"),
  finalGoals: document.getElementById("final-goals"),
  finalScore: document.getElementById("final-score"),
  finalBest: document.getElementById("final-best"),
  restartBtn: document.getElementById("restart-btn")
};

// Classic OpenStreetMap setup without Leaflet attribution label
const OSM_TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const map = L.map("map", { worldCopyJump: true, attributionControl: false }).setView([25, 15], 2);
L.tileLayer(OSM_TILE_URL, { maxZoom: 19 }).addTo(map);

const resultMap = L.map("result-map", { worldCopyJump: true, attributionControl: false }).setView([25, 15], 1);
L.tileLayer(OSM_TILE_URL, { maxZoom: 19 }).addTo(resultMap);

let guessMarker = null;
let resultGuessMarker = null;
let resultTargetMarker = null;
let resultLine = null;
let resultsChart = null;
let lastRoundSummary = null;

function applyLanguageUI() {
  const q = game.getCurrentQuestion();
  const activeClue = currentLang === "tr" ? q.clueTR : q.clueEN;

  el.langEnBtn.classList.toggle("active", currentLang === "en");
  el.langTrBtn.classList.toggle("active", currentLang === "tr");
  el.langEnBtn.textContent = t("englishLbl");
  el.langTrBtn.textContent = t("turkishLbl");
  el.lblLanguageChoice.textContent = t("languageChoice");

  el.duelQuestionMessage.textContent = t("duelQuestion");
  el.playBtn.textContent = t("playBtn");
  el.settingsToggleBtn.textContent = t("settingsBtn");
  el.lblRoundsSetting.textContent = t("roundsSetting");
  el.lblDurationSetting.textContent = t("durationSetting");
  el.lblSoundSetting.textContent = t("soundSetting");
  el.soundToggleBtn.textContent = soundEngine.isSoundEnabled() ? t("soundOn") : t("soundOff");

  el.subtitleText.textContent = t("subtitle");
  el.lblRound.textContent = t("round");
  el.lblTime.textContent = t("time");
  el.lblScore.textContent = t("score");
  el.lblBest.textContent = t("best");
  el.lblLangHud.textContent = t("lang");
  el.hudLangBtn.textContent = t("langBtn");
  el.questionTitle.textContent = t("questionTitle");
  el.locationHint.textContent = `${t("cluePrefix")}: ${activeClue}`;
  el.mapPanelTitle.textContent = t("mapPanelTitle");
  el.imageLoader.textContent = t("loadingPhoto");
  el.shootBtn.textContent = t("shootBtn");
  el.lblDistance.textContent = t("distanceLbl");
  el.lblChance.textContent = t("chanceLbl");
  el.lblOutcome.textContent = t("outcomeLbl");
  el.summaryTitle.textContent = t("summaryTitle");
  el.trophyCaption.textContent = t("trophyCaption");
  el.lblFinalGoals.textContent = t("finalGoals");
  el.lblFinalScore.textContent = t("finalScore");
  el.lblFinalBest.textContent = t("finalBest");
  el.restartBtn.textContent = t("playAgain");
  el.nextBtn.textContent = game.hasNextRound() ? t("nextRound") : t("seeSummary");

  if (!game.getGuess()) {
    el.guessCoordsText.textContent = t("noPin");
  }
  if (!game.isResolved()) {
    el.statusMessage.textContent = t("statusDefault");
  } else if (lastRoundSummary) {
    el.penaltyLocationTitle.textContent = `${t("actualPrefix")} ${lastRoundSummary.name}`;
    if (lastRoundSummary.noPinAtAll) {
      el.distanceDisplay.textContent = t("timeUp");
      el.resultDetailText.textContent = t("timedOutDetail")(lastRoundSummary.name);
    } else {
      el.distanceDisplay.textContent = `${lastRoundSummary.distanceKm.toLocaleString()} km`;
      el.resultDetailText.textContent = t("guessDetail")(
        lastRoundSummary.distanceKm,
        lastRoundSummary.name,
        lastRoundSummary.chance
      );
    }
    el.outcomeDisplay.textContent = lastRoundSummary.isGoal
      ? t("goalText")(lastRoundSummary.pointsEarned)
      : t("noGoalText");
    el.crowdMoodBadge.textContent = lastRoundSummary.isGoal ? t("crowdCheer") : t("crowdSad");
  }
}

// Distance -> Goal Chance (%) with 2000+ km = 0%
function getGoalChance(distanceKm) {
  if (distanceKm <= 100) return 100;
  if (distanceKm <= 500) return 80;
  if (distanceKm <= 1000) return 50;
  if (distanceKm <= 2000) return 20;
  return 0;
}

function getClosenessScore(distanceKm, noPinAtAll) {
  if (noPinAtAll || distanceKm === null || Number.isNaN(distanceKm)) return 0;
  if (distanceKm <= 100) return 100;
  if (distanceKm <= 500) return 80;
  if (distanceKm <= 1000) return 55;
  if (distanceKm <= 2000) return 30;
  if (distanceKm <= 5000) return 15;
  return 5;
}

function getPerformanceBarColor(scoreVal) {
  if (scoreVal >= 70) return "#22c55e";
  if (scoreVal >= 30) return "#facc15";
  return "#ef4444";
}

function getBasePoints(chance) {
  if (chance === 100) return 1000;
  if (chance === 80) return 750;
  if (chance === 50) return 500;
  if (chance === 20) return 250;
  return 0;
}

// Canvas Penalty Arena
const ctx = el.canvas.getContext("2d");
let animFrameId = null;

const CROWD = Array.from({ length: 56 }, (_, i) => {
  const tier = i < 28 ? 0 : 1;
  const col = i % 28;
  const x = 32 + col * 33 + (tier === 1 ? 8 : 0);
  const baseY = tier === 0 ? 54 : 92;
  const shirtColors = ["#2563eb", "#1d4ed8", "#38bdf8", "#facc15", "#e2e8f0", "#6366f1", "#0ea5e9"];
  return {
    x,
    baseY,
    tier,
    color: shirtColors[i % shirtColors.length],
    phase: i * 0.42
  };
});

const FLAGS = [
  { x: 75, poleBottomY: 120, color1: "#1d4ed8", color2: "#38bdf8", phase: 0.2 },
  { x: 225, poleBottomY: 120, color1: "#0f172a", color2: "#facc15", phase: 1.4 },
  { x: 735, poleBottomY: 120, color1: "#2563eb", color2: "#ffffff", phase: 2.3 },
  { x: 885, poleBottomY: 120, color1: "#0284c7", color2: "#facc15", phase: 3.1 }
];

function drawStar(cx, cy, spikes, outerR, innerR, fillStyle) {
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerR);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
    rot += step;
    ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
    rot += step;
  }
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
}

function drawFloodlights(tick) {
  const towers = [36, el.canvas.width - 36];
  towers.forEach((tx, idx) => {
    const pulse = 0.06 + Math.sin(tick * 0.04 + idx) * 0.015;
    ctx.save();
    const beamGrad = ctx.createLinearGradient(tx, 12, el.canvas.width / 2, 270);
    beamGrad.addColorStop(0, `rgba(224, 242, 254, ${pulse * 2.2})`);
    beamGrad.addColorStop(1, "rgba(224, 242, 254, 0)");
    ctx.fillStyle = beamGrad;
    ctx.beginPath();
    ctx.moveTo(tx - 8, 12);
    ctx.lineTo(tx + 8, 12);
    ctx.lineTo(idx === 0 ? 410 : 550, 265);
    ctx.lineTo(idx === 0 ? 130 : 830, 265);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(tx, 46);
    ctx.lineTo(tx, 10);
    ctx.stroke();

    ctx.fillStyle = "#1e293b";
    ctx.fillRect(tx - 11, 4, 22, 9);
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(tx - 8, 6, 16, 5);
    ctx.restore();
  });
}

function drawTextlessGreenRedBillboard(boardX, boardY, boardW, boardH) {
  ctx.fillStyle = "#040c24";
  ctx.fillRect(boardX, boardY, boardW, boardH);
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.strokeRect(boardX, boardY, boardW, boardH);

  const halfW = boardW / 2 - 6;
  ctx.fillStyle = "#16a34a";
  ctx.fillRect(boardX + 4, boardY + 4, halfW, boardH - 8);

  ctx.fillStyle = "#dc2626";
  ctx.fillRect(boardX + boardW / 2 + 2, boardY + 4, halfW, boardH - 8);

  const totalSlots = game.getTotalRounds();
  const dotGap = Math.max(12, Math.floor((halfW - 14) / totalSlots));

  for (let i = 0; i < totalSlots; i++) {
    const gx = boardX + 12 + i * dotGap;
    const gy = boardY + boardH / 2;
    ctx.beginPath();
    ctx.arc(gx, gy, 4.2, 0, Math.PI * 2);
    ctx.fillStyle = i < game.getGoals() ? "#4ade80" : "rgba(5, 46, 22, 0.55)";
    ctx.fill();

    const rx = boardX + boardW / 2 + 12 + i * dotGap;
    ctx.beginPath();
    ctx.arc(rx, gy, 4.2, 0, Math.PI * 2);
    ctx.fillStyle = i < game.getMissed() ? "#fca5a5" : "rgba(69, 10, 10, 0.55)";
    ctx.fill();
  }
}

function drawUCLStandsBillboardAndAds(tick, crowdMood) {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, 120);
  skyGrad.addColorStop(0, "#020617");
  skyGrad.addColorStop(1, "#0b1d51");
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, el.canvas.width, 120);

  drawStar(150, 18, 5, 7, 3, "rgba(147, 197, 253, 0.35)");
  drawStar(810, 18, 5, 7, 3, "rgba(147, 197, 253, 0.35)");

  const boardW = 250;
  const boardH = 26;
  const boardX = (el.canvas.width - boardW) / 2;
  const boardY = 4;
  drawTextlessGreenRedBillboard(boardX, boardY, boardW, boardH);

  ctx.fillStyle = "#0a1638";
  ctx.fillRect(0, 36, el.canvas.width, 84);

  ctx.fillStyle = "#1d4ed8";
  ctx.fillRect(0, 66, el.canvas.width, 4);

  CROWD.forEach((fan) => {
    let offsetY = 0;
    let raiseArms = false;
    let headBow = 0;

    if (crowdMood === "cheer") {
      offsetY = -Math.abs(Math.sin(tick * 0.08 + fan.phase)) * 11;
      raiseArms = true;
    } else if (crowdMood === "sad") {
      offsetY = 6 + Math.sin(tick * 0.05 + fan.phase) * 1.0;
      headBow = 2.5;
    } else {
      offsetY = Math.sin(tick * 0.05 + fan.phase) * 1.4;
    }

    const fy = fan.baseY + offsetY;

    ctx.fillStyle = fan.color;
    ctx.fillRect(fan.x - 5, fy - 5.5, 10, 10.5);

    ctx.strokeStyle = fan.color;
    ctx.lineWidth = 2.3;
    ctx.beginPath();
    if (raiseArms) {
      const waveX = Math.sin(tick * 0.12 + fan.phase) * 2.5;
      ctx.moveTo(fan.x - 5, fy - 3.5);
      ctx.lineTo(fan.x - 10 + waveX, fy - 16);
      ctx.moveTo(fan.x + 5, fy - 3.5);
      ctx.lineTo(fan.x + 10 - waveX, fy - 16);
    } else {
      const drop = crowdMood === "sad" ? 4.5 : 1.5;
      ctx.moveTo(fan.x - 5, fy - 3.5);
      ctx.lineTo(fan.x - 8.5, fy + drop);
      ctx.moveTo(fan.x + 5, fy - 3.5);
      ctx.lineTo(fan.x + 8.5, fy + drop);
    }
    ctx.stroke();

    ctx.fillStyle = "#fed7aa";
    ctx.beginPath();
    ctx.arc(fan.x, fy - 10.5 + headBow, 4.8, 0, Math.PI * 2);
    ctx.fill();
  });

  const waveSpeed = crowdMood === "cheer" ? 0.095 : 0.06;
  const waveAmp = crowdMood === "cheer" ? 5 : 3.2;

  FLAGS.forEach((flag) => {
    const poleTopY = flag.poleBottomY - 42;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(flag.x, flag.poleBottomY);
    ctx.lineTo(flag.x, poleTopY);
    ctx.stroke();

    const w1 = Math.sin(tick * waveSpeed + flag.phase) * waveAmp;
    const w2 = Math.cos(tick * waveSpeed + flag.phase + 0.9) * waveAmp;

    ctx.fillStyle = flag.color1;
    ctx.beginPath();
    ctx.moveTo(flag.x, poleTopY + 2);
    ctx.quadraticCurveTo(flag.x + 14, poleTopY + 2 + w1, flag.x + 28, poleTopY + 5 + w2);
    ctx.lineTo(flag.x + 28, poleTopY + 14 + w2);
    ctx.quadraticCurveTo(flag.x + 14, poleTopY + 11 + w1, flag.x, poleTopY + 11);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = flag.color2;
    ctx.beginPath();
    ctx.moveTo(flag.x, poleTopY + 11);
    ctx.quadraticCurveTo(flag.x + 14, poleTopY + 11 + w1, flag.x + 28, poleTopY + 14 + w2);
    ctx.lineTo(flag.x + 28, poleTopY + 23 + w2);
    ctx.quadraticCurveTo(flag.x + 14, poleTopY + 20 + w1, flag.x, poleTopY + 20);
    ctx.closePath();
    ctx.fill();
  });

  drawFloodlights(tick);

  const boards = [
    { x: 0, w: 235, bg: "#09194c", fg: "#38bdf8", text: "GMT458" },
    { x: 238, w: 238, bg: "#061136", fg: "#facc15", text: "Champions League" },
    { x: 479, w: 238, bg: "#09194c", fg: "#4ade80", text: "GeoGoal" },
    { x: 720, w: 240, bg: "#172554", fg: "#ffffff", text: "Messi" }
  ];

  ctx.font = "bold 11px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  boards.forEach((b) => {
    ctx.fillStyle = b.bg;
    ctx.fillRect(b.x, 114, b.w, 16);
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 1;
    ctx.strokeRect(b.x, 114, b.w, 16);
    ctx.fillStyle = b.fg;
    ctx.fillText(b.text, b.x + b.w / 2, 122);
  });
}

function drawRearShooter(shooterState, tick) {
  const { x, y, stepCycle, kickSwing, leanAngle, reactionMood } = shooterState;

  let moodBounceY = 0;
  let headDrop = 0;
  let armWave = 0;

  if (reactionMood === "cheer") {
    moodBounceY = -Math.abs(Math.sin(tick * 0.09)) * 7.5;
    armWave = Math.sin(tick * 0.14) * 6;
  } else if (reactionMood === "sad") {
    moodBounceY = 3.5;
    headDrop = 3.6;
  }

  const py = y + moodBounceY;

  ctx.save();
  ctx.translate(x, py);
  if (leanAngle) {
    ctx.rotate(leanAngle);
  }

  ctx.fillStyle = "rgba(0, 0, 0, 0.36)";
  ctx.beginPath();
  ctx.ellipse(0, 19, 25, 6.4, 0, 0, Math.PI * 2);
  ctx.fill();

  const stride = Math.sin(stepCycle) * 7.5;
  const torsoTilt = kickSwing * 3.0 + (reactionMood === "sad" ? 2.2 : 0);

  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 6.2;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-6, 4);
  ctx.lineTo(-7.5 - stride * 0.45, 17.5 - Math.max(0, stride * 0.45));
  ctx.stroke();

  const rightFootX = 6 + stride * 0.45 + kickSwing * 9;
  const rightFootY = 17.5 - Math.max(0, -stride * 0.45) - kickSwing * 13;
  ctx.beginPath();
  ctx.moveTo(6, 4);
  ctx.lineTo(rightFootX, rightFootY);
  ctx.stroke();

  ctx.fillStyle = "#38bdf8";
  ctx.beginPath();
  ctx.arc(rightFootX, rightFootY, 3.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#172554";
  ctx.fillRect(-11.5, -4, 23, 10.5);

  const stripeColors = ["#881337", "#1e3a8a", "#881337", "#1e3a8a", "#881337"];
  const stripeW = 27 / stripeColors.length;
  stripeColors.forEach((col, idx) => {
    ctx.fillStyle = col;
    ctx.fillRect(-13.5 + idx * stripeW, -24.5 + torsoTilt, stripeW + 0.4, 21.5);
  });

  ctx.strokeStyle = "#facc15";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(-6, -24.5 + torsoTilt);
  ctx.lineTo(0, -21 + torsoTilt);
  ctx.lineTo(6, -24.5 + torsoTilt);
  ctx.stroke();

  ctx.fillStyle = "#facc15";
  ctx.font = "bold 5.5px Arial";
  ctx.textAlign = "center";
  ctx.fillText("MESSI", 0, -17.5 + torsoTilt);

  ctx.font = "bold 8.5px Arial";
  ctx.fillText("10", 0, -7.5 + torsoTilt);

  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 4.6;
  ctx.beginPath();
  if (reactionMood === "cheer") {
    ctx.moveTo(-13.5, -20.5 + torsoTilt);
    ctx.lineTo(-23, -34 + armWave);
    ctx.moveTo(13.5, -20.5 + torsoTilt);
    ctx.lineTo(23, -34 - armWave);
  } else if (reactionMood === "sad") {
    ctx.moveTo(-13.5, -20.5 + torsoTilt);
    ctx.lineTo(-17.5, -3.5);
    ctx.moveTo(13.5, -20.5 + torsoTilt);
    ctx.lineTo(17.5, -3.5);
  } else {
    ctx.moveTo(-13.5, -20.5 + torsoTilt);
    ctx.lineTo(-20, -8 + stride * 0.55 - kickSwing * 3.5);
    ctx.moveTo(13.5, -20.5 + torsoTilt);
    ctx.lineTo(20, -8 - stride * 0.55 + kickSwing * 3.5);
  }
  ctx.stroke();

  ctx.fillStyle = "#fed7aa";
  ctx.beginPath();
  ctx.arc(0, -32.5 + torsoTilt + headDrop, 8.6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#1e293b";
  ctx.beginPath();
  ctx.arc(0, -34 + torsoTilt + headDrop, 8.6, Math.PI * 0.85, Math.PI * 2.15);
  ctx.fill();

  ctx.restore();
}

function drawGoalkeeper(keeperState, tick) {
  const { x, y, tilt, reactionMood } = keeperState;

  let gY = y;
  let gTilt = tilt;
  let armOffsetY = -18;

  if (reactionMood === "cheer") {
    gY = y - Math.abs(Math.sin(tick * 0.09)) * 5;
    gTilt = 0;
    armOffsetY = -31 + Math.sin(tick * 0.13) * 3.5;
  } else if (reactionMood === "sad") {
    gY = y + 6.5;
    gTilt = tilt * 0.7;
    armOffsetY = -3;
  }

  ctx.save();
  ctx.translate(x, gY);
  ctx.rotate(gTilt);

  ctx.fillStyle = "#111827";
  ctx.beginPath();
  ctx.arc(0, -22, 10.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillRect(-11.5, -12, 23, 25);

  ctx.fillStyle = "#4b5563";
  ctx.fillRect(-11.5, -11.5, 23, 4.5);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 5.5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-11.5, -8);
  ctx.lineTo(-27, armOffsetY);
  ctx.moveTo(11.5, -8);
  ctx.lineTo(27, armOffsetY);
  ctx.stroke();

  ctx.fillStyle = "#22c55e";
  ctx.beginPath();
  ctx.arc(-28, armOffsetY - 1, 5.2, 0, Math.PI * 2);
  ctx.arc(28, armOffsetY - 1, 5.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#090d16";
  ctx.lineWidth = 5.5;
  ctx.beginPath();
  ctx.moveTo(-6, 13);
  ctx.lineTo(-11, 27);
  ctx.moveTo(6, 13);
  ctx.lineTo(11, 27);
  ctx.stroke();

  ctx.restore();
}

function drawArenaFrame(tick, shooterState, keeperState, ballState, crowdMood, bannerText) {
  const { x: ballX, y: ballY, radius: ballRadius, trail, netRipple } = ballState;
  ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);

  drawUCLStandsBillboardAndAds(tick, crowdMood);

  // Flattened horizontal pitch bands for a wider lateral broadcast perspective
  const stripeCount = 7;
  const stripeH = 260 / stripeCount;
  for (let s = 0; s < stripeCount; s++) {
    ctx.fillStyle = s % 2 === 0 ? "#15803d" : "#166534";
    ctx.fillRect(0, 130 + s * stripeH, el.canvas.width, stripeH + 1);
  }

  // Wider horizontal penalty box lines
  ctx.strokeStyle = "rgba(255,255,255,0.55)";
  ctx.lineWidth = 2;
  ctx.strokeRect(145, 152, 670, 224);

  // Center & penalty spot reference
  ctx.fillStyle = "rgba(255,255,255,0.78)";
  ctx.beginPath();
  ctx.arc(480, 334, 3.2, 0, Math.PI * 2);
  ctx.fill();

  const goalLeft = 335;
  const goalRight = 625;
  const goalTop = 128;
  const goalBottom = 214;

  ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
  ctx.fillRect(goalLeft, goalTop, goalRight - goalLeft, goalBottom - goalTop);

  ctx.strokeStyle = "rgba(226, 232, 240, 0.3)";
  ctx.lineWidth = 1;
  for (let x = goalLeft + 20; x < goalRight; x += 20) {
    const wave = netRipple ? Math.sin(tick * 0.35 + x * 0.05) * netRipple : 0;
    ctx.beginPath();
    ctx.moveTo(x, goalTop);
    ctx.lineTo(x + wave, goalBottom);
    ctx.stroke();
  }
  for (let y = goalTop + 18; y < goalBottom; y += 18) {
    const wave = netRipple ? Math.cos(tick * 0.35 + y * 0.1) * netRipple : 0;
    ctx.beginPath();
    ctx.moveTo(goalLeft, y);
    ctx.lineTo(goalRight, y + wave);
    ctx.stroke();
  }

  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 5;
  ctx.strokeRect(goalLeft, goalTop, goalRight - goalLeft, goalBottom - goalTop);

  drawGoalkeeper(keeperState, tick);
  drawRearShooter(shooterState, tick);

  if (trail && trail.length > 1) {
    for (let i = 0; i < trail.length - 1; i++) {
      const pt = trail[i];
      const alpha = ((i + 1) / trail.length) * 0.3;
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, Math.max(3, ballRadius * 0.72), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const shadowY = Math.min(358, Math.max(206, ballY + ballRadius + 6));
  ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
  ctx.beginPath();
  ctx.ellipse(ballX, shadowY, ballRadius * 0.95, ballRadius * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 2;
  ctx.stroke();

  if (bannerText) {
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = crowdMood === "cheer" ? "#4ade80" : "#f87171";
    ctx.fillText(bannerText, el.canvas.width / 2, 145);
  }
}

function animatePenaltyShot(isGoal, chance, onShotSettled) {
  if (animFrameId) cancelAnimationFrame(animFrameId);

  const ballStartX = 480;
  const ballStartY = 334;
  const wideLeft = Math.random() < 0.5;
  const targetX = isGoal
    ? (wideLeft ? 385 : 575)
    : (chance === 0 ? (wideLeft ? 265 : 695) : 480);
  const targetY = isGoal
    ? 164
    : (chance === 0 ? 110 : 180);
  const keeperDiveX = isGoal ? (targetX < 480 ? 555 : 405) : 480;
  const keeperDiveTilt = isGoal ? (keeperDiveX > 480 ? 0.38 : -0.38) : 0;

  const setupFrames = 40;
  const runUpFrames = 46;
  const flightFrames = 78;
  const settleFrame = setupFrames + runUpFrames + flightFrames;

  let frame = 0;
  let settledTriggered = false;
  let outcomeSoundPlayed = false;
  const ballTrail = [];

  function step() {
    frame += 1;

    let shooterX = 448;
    let shooterY = 368;
    let stepCycle = 0;
    let kickSwing = 0;
    let leanAngle = -0.06;
    let shooterReactionMood = "neutral";

    let ballX = ballStartX;
    let ballY = ballStartY;
    let ballRadius = 12;
    let netRipple = 0;

    let keeperX = 480;
    let keeperY = 188 + Math.abs(Math.sin(frame * 0.13)) * 2.2;
    let keeperTilt = 0;
    let keeperReactionMood = "neutral";

    let crowdMood = "neutral";
    let bannerText = "";

    if (frame <= setupFrames) {
      keeperX = 480 + Math.sin(frame * 0.11) * 12;
    } else if (frame <= setupFrames + runUpFrames) {
      const rT = (frame - setupFrames) / runUpFrames;
      const rEase = rT * rT * (3 - 2 * rT);
      shooterX = 448 + (476 - 448) * rEase;
      shooterY = 368 + (354 - 368) * rEase;
      stepCycle = rT * Math.PI * 6;
      leanAngle = -0.06 + rEase * 0.08;
      keeperX = 480 + Math.sin(frame * 0.11) * 9;
    } else if (frame <= settleFrame) {
      const fT = (frame - setupFrames - runUpFrames) / flightFrames;
      const fEase = 1 - Math.pow(1 - fT, 1.85);

      shooterX = 476;
      shooterY = 354;
      kickSwing = Math.sin(Math.min(fT * 1.45, 1) * Math.PI);
      leanAngle = 0.05 * kickSwing;

      // Broader horizontal curl in flight
      const curveOffset = Math.sin(fT * Math.PI) * (targetX >= 480 ? 16 : -16);
      ballX = ballStartX + (targetX - ballStartX) * fEase + curveOffset;
      ballY = ballStartY + (targetY - ballStartY) * fEase - Math.sin(fT * Math.PI) * 30;
      ballRadius = 12 - fEase * 3.8;

      ballTrail.push({ x: ballX, y: ballY });
      if (ballTrail.length > 8) ballTrail.shift();

      const diveEase = Math.min(fT * 0.95, 1);
      keeperX = 480 + (keeperDiveX - 480) * diveEase;
      keeperY = 188 - Math.sin(diveEase * Math.PI) * 13 + diveEase * 4;
      keeperTilt = keeperDiveTilt * diveEase;
    } else {
      shooterX = 476;
      shooterY = 354;
      leanAngle = 0;
      ballX = targetX;
      ballY = targetY;
      ballRadius = 8.2;
      keeperX = isGoal ? keeperDiveX : 480;
      keeperY = 192;
      keeperTilt = isGoal ? keeperDiveTilt : 0;

      if (ballTrail.length > 0) {
        ballTrail.shift();
      }

      const postFrames = frame - settleFrame;
      netRipple = isGoal ? Math.max(0, 4.5 - postFrames * 0.03) : 0;

      crowdMood = isGoal ? "cheer" : "sad";
      shooterReactionMood = isGoal ? "cheer" : "sad";
      keeperReactionMood = isGoal ? "sad" : "cheer";

      bannerText = isGoal ? t("bannerGoal") : t("bannerNoGoal");
      el.crowdMoodBadge.textContent = isGoal ? t("crowdCheer") : t("crowdSad");

      if (!outcomeSoundPlayed) {
        outcomeSoundPlayed = true;
        if (isGoal) {
          soundEngine.playGoalFanfare();
        } else {
          soundEngine.playMissTheme();
        }
      }

      if (!settledTriggered && onShotSettled) {
        settledTriggered = true;
        onShotSettled();
      }
    }

    drawArenaFrame(
      frame,
      { x: shooterX, y: shooterY, stepCycle, kickSwing, leanAngle, reactionMood: shooterReactionMood },
      { x: keeperX, y: keeperY, tilt: keeperTilt, reactionMood: keeperReactionMood },
      { x: ballX, y: ballY, radius: ballRadius, trail: ballTrail, netRipple },
      crowdMood,
      bannerText
    );

    animFrameId = requestAnimationFrame(step);
  }

  animFrameId = requestAnimationFrame(step);
}

function clearGuessMapLayers() {
  if (guessMarker) {
    map.removeLayer(guessMarker);
    guessMarker = null;
  }
}

function clearResultMapLayers() {
  if (resultGuessMarker) {
    resultMap.removeLayer(resultGuessMarker);
    resultGuessMarker = null;
  }
  if (resultTargetMarker) {
    resultMap.removeLayer(resultTargetMarker);
    resultTargetMarker = null;
  }
  if (resultLine) {
    resultMap.removeLayer(resultLine);
    resultLine = null;
  }
}

function showStartScreen() {
  soundEngine.stopSelectionTheme();
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  game.stopTimer();
  el.modal.classList.add("hidden");
  el.topHud.classList.add("hidden");
  el.startScreen.classList.remove("hidden");
  el.guessScreen.classList.add("hidden");
  el.penaltyScreen.classList.add("hidden");
  applyLanguageUI();
  soundEngine.startWelcomeTheme();
}

function showGuessScreen() {
  soundEngine.stopWelcomeTheme();
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  el.topHud.classList.remove("hidden");
  el.startScreen.classList.add("hidden");
  el.penaltyScreen.classList.add("hidden");
  el.guessScreen.classList.remove("hidden");
  setTimeout(() => map.invalidateSize(), 60);
}

function showGlobeTransition(messageText) {
  soundEngine.stopWelcomeTheme();
  soundEngine.stopSelectionTheme();
  el.startScreen.classList.add("hidden");
  el.guessScreen.classList.add("hidden");
  el.penaltyScreen.classList.remove("hidden");
  el.penaltyLoading.classList.remove("hidden");
  el.penaltyStage.classList.add("hidden");
  el.crowdMoodBadge.textContent = t("crowdWatching");
  el.nextBtn.disabled = true;

  el.penaltyLoading.innerHTML = `
    <div style="font-size:48px; display:inline-block; animation: globeSpin 2.2s linear infinite;">🌍</div>
    <h3 style="font-size:22px; color:#38bdf8; letter-spacing:1px;">${t("globeTitle")}</h3>
    <p style="color:#cbd5e1;">${messageText}</p>
  `;
}

async function loadRound() {
  lastRoundSummary = null;
  showGuessScreen();
  clearGuessMapLayers();
  applyLanguageUI();

  const q = game.getCurrentQuestion();
  el.roundDisplay.textContent = `${game.getRoundNumber()} / ${game.getTotalRounds()}`;
  el.scoreDisplay.textContent = game.getScore();
  el.highscoreDisplay.textContent = game.getHighScore();
  el.shootBtn.disabled = true;

  el.imageLoader.classList.remove("hidden");
  const candidates = getCandidateUrls(q);
  let fallbackIndex = 0;

  el.locationImage.onload = () => {
    el.imageLoader.classList.add("hidden");
  };

  el.locationImage.onerror = () => {
    fallbackIndex += 1;
    if (fallbackIndex < candidates.length) {
      el.locationImage.src = candidates[fallbackIndex];
    } else {
      el.locationImage.onerror = null;
      el.locationImage.src = FALLBACK_PHOTO_URL;
      el.imageLoader.classList.add("hidden");
    }
  };

  const cachedSrc = resolvedImageCache.get(q.wikiTitle);
  el.locationImage.src = cachedSrc || candidates[0];

  game.startTimer(
    (sec) => {
      el.timerDisplay.textContent = `${sec}s`;
      el.timerBox.classList.toggle("urgent", sec <= 4);
      soundEngine.updateSelectionTheme(sec);
    },
    () => {
      soundEngine.stopSelectionTheme();
      const lastPin = game.getGuess();
      resolveRound(lastPin, !lastPin);
    }
  );
}

function resolveRound(latlng, noPinAtAll = false) {
  if (game.isResolved()) return;
  game.markResolved();
  soundEngine.stopSelectionTheme();
  el.shootBtn.disabled = true;

  showGlobeTransition(t("penaltyCheckSub"));

  const q = game.getCurrentQuestion();
  let distanceKm = 9999;
  let chance = 0;
  let isGoal = false;
  let pointsEarned = 0;

  if (!noPinAtAll && latlng) {
    const fromPt = turf.point([latlng.lng, latlng.lat]);
    const toPt = turf.point([q.coords[1], q.coords[0]]);
    distanceKm = Math.round(turf.distance(fromPt, toPt, { units: "kilometers" }));
    chance = getGoalChance(distanceKm);
    isGoal = chance > 0 && Math.random() * 100 < chance;
    if (isGoal) {
      pointsEarned = getBasePoints(chance) + game.getTimeLeft() * 20;
    }
  }

  setTimeout(() => {
    el.penaltyLoading.classList.add("hidden");
    el.penaltyStage.classList.remove("hidden");
    setTimeout(() => resultMap.invalidateSize(), 60);
    clearResultMapLayers();

    el.penaltyLocationTitle.textContent = `${t("actualPrefix")} ${q.name}`;
    el.distanceDisplay.textContent = noPinAtAll ? t("timeUp") : `${distanceKm.toLocaleString()} km`;
    el.chanceDisplay.textContent = `${chance}%`;
    el.outcomeDisplay.textContent = t("shooting");
    el.resultDetailText.textContent = noPinAtAll
      ? t("timedOutDetail")(q.name)
      : t("guessDetail")(distanceKm, q.name, chance);

    resultTargetMarker = L.circleMarker(q.coords, {
      radius: 8,
      color: "#22c55e",
      fillColor: "#22c55e",
      fillOpacity: 0.9
    })
      .addTo(resultMap)
      .bindPopup(q.name);

    if (!noPinAtAll && latlng) {
      resultGuessMarker = L.circleMarker(latlng, {
        radius: 8,
        color: "#38bdf8",
        fillColor: "#38bdf8",
        fillOpacity: 0.9
      }).addTo(resultMap);

      resultLine = L.polyline([latlng, q.coords], {
        color: "#facc15",
        weight: 3,
        dashArray: "6, 6"
      }).addTo(resultMap);

      resultMap.fitBounds(resultLine.getBounds(), { padding: [24, 24] });
    } else {
      resultMap.setView(q.coords, 4);
    }

    animatePenaltyShot(isGoal, chance, () => {
      const updatedBest = game.addResult({
        round: game.getRoundNumber(),
        name: q.name,
        distanceKm: noPinAtAll ? null : distanceKm,
        chance,
        isGoal,
        pointsEarned,
        noPinAtAll
      });

      lastRoundSummary = {
        name: q.name,
        noPinAtAll,
        distanceKm,
        chance,
        isGoal,
        pointsEarned
      };

      el.outcomeDisplay.textContent = isGoal ? t("goalText")(pointsEarned) : t("noGoalText");
      el.scoreDisplay.textContent = game.getScore();
      el.highscoreDisplay.textContent = updatedBest;
      el.nextBtn.disabled = false;
    });
  }, 1500);
}

function renderConfetti() {
  el.confettiLayer.innerHTML = "";
  const colors = ["#facc15", "#22c55e", "#38bdf8", "#f472b6", "#fb923c", "#a855f7"];
  for (let i = 0; i < 42; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${(i * 2.4) % 98}%`;
    piece.style.backgroundColor = colors[i % colors.length];
    piece.style.animationDuration = `${1.8 + (i % 6) * 0.35}s`;
    piece.style.animationDelay = `${(i % 8) * 0.14}s`;
    el.confettiLayer.appendChild(piece);
  }
}

function openSummaryModal() {
  soundEngine.stopWelcomeTheme();
  soundEngine.stopSelectionTheme();
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  const history = game.getHistory();
  const totalGoals = game.getGoals();
  const totalRounds = history.length;

  el.finalGoals.textContent = `${totalGoals} / ${totalRounds}`;
  el.finalScore.textContent = game.getScore();
  el.finalBest.textContent = game.getHighScore();
  el.modal.classList.remove("hidden");

  el.matchVerdict.classList.remove("win", "draw", "lose");
  if (totalGoals >= 4) {
    el.matchVerdict.textContent = t("verdictWin")(totalGoals, totalRounds);
    el.matchVerdict.classList.add("win");
    el.trophyBanner.classList.remove("hidden");
    el.confettiLayer.classList.remove("hidden");
    renderConfetti();
  } else if (totalGoals === 3) {
    el.matchVerdict.textContent = t("verdictDraw")(totalGoals, totalRounds);
    el.matchVerdict.classList.add("draw");
    el.trophyBanner.classList.add("hidden");
    el.confettiLayer.classList.add("hidden");
    el.confettiLayer.innerHTML = "";
  } else {
    el.matchVerdict.textContent = t("verdictLose")(totalGoals, totalRounds);
    el.matchVerdict.classList.add("lose");
    el.trophyBanner.classList.add("hidden");
    el.confettiLayer.classList.add("hidden");
    el.confettiLayer.innerHTML = "";
  }

  const labels = history.map((item) => `R${item.round}`);
  const accuracyScores = history.map((item) =>
    getClosenessScore(item.distanceKm, item.noPinAtAll)
  );
  const barColors = accuracyScores.map((val) => getPerformanceBarColor(val));

  if (resultsChart) {
    resultsChart.destroy();
  }

  resultsChart = new Chart(document.getElementById("results-chart"), {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: t("chartLabel"),
          data: accuracyScores,
          backgroundColor: barColors
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#e2e8f0" } }
      },
      scales: {
        x: { ticks: { color: "#cbd5e1" } },
        y: {
          min: 0,
          max: 100,
          ticks: { color: "#cbd5e1" },
          beginAtZero: true
        }
      }
    }
  });
}

function syncSettingsFromInputs() {
  const clampedRounds = clampInt(el.roundsInput.value, 6, 9, DEFAULT_ROUNDS);
  const clampedDuration = clampInt(el.durationInput.value, 10, 30, DEFAULT_DURATION);
  el.roundsInput.value = String(clampedRounds);
  el.durationInput.value = String(clampedDuration);
  game.updateSettings(clampedRounds, clampedDuration);
}

// Unlock AudioContext on first user interaction so welcome theme plays smoothly
document.addEventListener(
  "pointerdown",
  () => {
    if (!el.startScreen.classList.contains("hidden") && soundEngine.isSoundEnabled()) {
      soundEngine.startWelcomeTheme();
    }
  },
  { once: true }
);

// Return to start screen when clicking the spinning Earth or GeoGoal title
el.homeBrandBtn.addEventListener("click", () => {
  showStartScreen();
});

// Start screen controls
el.settingsToggleBtn.addEventListener("click", () => {
  el.settingsPanel.classList.toggle("hidden");
  if (soundEngine.isSoundEnabled() && !el.startScreen.classList.contains("hidden")) {
    soundEngine.startWelcomeTheme();
  }
});

el.soundToggleBtn.addEventListener("click", () => {
  const nextState = !soundEngine.isSoundEnabled();
  soundEngine.setSoundEnabled(nextState);
  el.soundToggleBtn.textContent = nextState ? t("soundOn") : t("soundOff");
  if (nextState && !el.startScreen.classList.contains("hidden")) {
    soundEngine.startWelcomeTheme();
  }
});

el.roundsInput.addEventListener("change", syncSettingsFromInputs);
el.durationInput.addEventListener("change", syncSettingsFromInputs);

el.langEnBtn.addEventListener("click", () => {
  currentLang = "en";
  document.documentElement.lang = "en";
  applyLanguageUI();
});

el.langTrBtn.addEventListener("click", () => {
  currentLang = "tr";
  document.documentElement.lang = "tr";
  applyLanguageUI();
});

el.hudLangBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "tr" : "en";
  document.documentElement.lang = currentLang;
  applyLanguageUI();
});

el.playBtn.addEventListener("click", async () => {
  soundEngine.stopWelcomeTheme();
  const clampedRounds = clampInt(el.roundsInput.value, 6, 9, DEFAULT_ROUNDS);
  const clampedDuration = clampInt(el.durationInput.value, 10, 30, DEFAULT_DURATION);
  el.roundsInput.value = String(clampedRounds);
  el.durationInput.value = String(clampedDuration);
  game.updateSettings(clampedRounds, clampedDuration);
  game.resetMatch(false);

  const totalQ = game.getTotalRounds();
  showGlobeTransition(t("loadingUniquePlaces")(0, totalQ));

  await preloadAllRoundImages((loaded, total) => {
    const msgNode = el.penaltyLoading.querySelector("p");
    if (msgNode) {
      msgNode.textContent = t("loadingUniquePlaces")(loaded, total);
    }
  });

  map.setView([25, 15], 2);
  loadRound();
});

// EVENT HANDLER 1: Map click to place guess marker
map.on("click", (e) => {
  if (game.isResolved()) return;

  game.setGuess(e.latlng);
  el.guessCoordsText.textContent = `${e.latlng.lat.toFixed(2)}, ${e.latlng.lng.toFixed(2)}`;
  el.shootBtn.disabled = false;

  if (guessMarker) {
    guessMarker.setLatLng(e.latlng);
  } else {
    guessMarker = L.circleMarker(e.latlng, {
      radius: 8,
      color: "#38bdf8",
      fillColor: "#38bdf8",
      fillOpacity: 0.9
    }).addTo(map);
  }
});

// EVENT HANDLER 2: Confirm guess and start Globe Penalty transition
el.shootBtn.addEventListener("click", () => {
  const guess = game.getGuess();
  if (!guess || game.isResolved()) return;
  resolveRound(guess, false);
});

// EVENT HANDLER 3: Advance to next round or open end summary
el.nextBtn.addEventListener("click", () => {
  if (game.hasNextRound()) {
    game.nextRound();
    map.setView([25, 15], 2);
    loadRound();
  } else {
    openSummaryModal();
  }
});

el.restartBtn.addEventListener("click", () => {
  el.modal.classList.add("hidden");
  el.trophyBanner.classList.add("hidden");
  el.confettiLayer.classList.add("hidden");
  el.confettiLayer.innerHTML = "";
  game.resetMatch(true);
  showStartScreen();
});

// Initial load: English default, show GeoGoal start screen
applyLanguageUI();
showStartScreen();