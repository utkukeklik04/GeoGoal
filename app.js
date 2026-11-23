// 1. Curated Iconic Landmarks & Sceneries (300 items balanced across Easy, Medium, Hard)
// Format: [name, difficulty, clueEN, clueTR, coords, wikiTitle, directPhotoUrl]
const BASE_LANDMARKS = [
  ["Eiffel Tower, Paris", "Easy", "Europe • France • Paris • Iron tower by the Seine", "Avrupa • Fransa • Paris • Seine Nehri kenarında demir kule", [48.8584, 2.2945], "Eiffel_Tower", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"],
  ["Colosseum, Rome", "Easy", "Europe • Italy • Rome • Ancient Roman arena", "Avrupa • İtalya • Roma • Antik Roma gladyatör arenası", [41.8902, 12.4922], "Colosseum", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg"],
  ["Statue of Liberty, New York", "Easy", "North America • USA • New York Harbor • Copper statue", "Kuzey Amerika • ABD • New York Limanı • Bakır heykel", [40.6892, -74.0445], "Statue_of_Liberty", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/800px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg"],
  ["Big Ben, London", "Easy", "Europe • UK • London • Clock tower by Thames", "Avrupa • İngiltere • Londra • Thames kıyısında saat kulesi", [51.5007, -0.1246], "Big_Ben", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Elizabeth_Tower%2C_London%2C_UK_-_Apr_2023.jpg/800px-Elizabeth_Tower%2C_London%2C_UK_-_Apr_2023.jpg"],
  ["Pyramids of Giza, Egypt", "Easy", "North Africa • Egypt • Near Cairo • Desert pyramids", "Kuzey Afrika • Mısır • Kahire yakını • Çöl piramitleri", [29.9792, 31.1342], "Great_Pyramid_of_Giza", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops_Pyramid.jpg/800px-Kheops_Pyramid.jpg"],
  ["Taj Mahal, Agra", "Easy", "South Asia • India • Agra • White marble monument", "Güney Asya • Hindistan • Agra • Beyaz mermer yapı", [27.1751, 78.0421], "Taj_Mahal", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/800px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg"],
  ["Christ the Redeemer, Rio de Janeiro", "Easy", "South America • Brazil • Rio • Statue on Corcovado hill", "Güney Amerika • Brezilya • Rio • Tepe üstü dev heykel", [-22.9519, -43.2105], "Christ_the_Redeemer_(statue)", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Rio_de_Janeiro%2C_Brazil.jpg/800px-Christ_the_Redeemer_-_Rio_de_Janeiro%2C_Brazil.jpg"],
  ["Sydney Opera House, Australia", "Easy", "Oceania • Australia • Sydney • Sail-shaped harbor roof", "Okyanusya • Avustralya • Sidney • Yelken çatılı liman yapısı", [-33.8568, 151.2153], "Sydney_Opera_House", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg"],
  ["Sagrada Familia, Barcelona", "Easy", "Europe • Spain • Barcelona • Gaudi church towers", "Avrupa • İspanya • Barselona • Gaudi'nin ünlü bazilikası", [41.4036, 2.1744], "Sagrada_Fam%C3%ADlia", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/800px-Sagrada_Familia_01.jpg"],
  ["Acropolis of Athens, Greece", "Easy", "Europe • Greece • Athens • Parthenon on rocky hill", "Avrupa • Yunanistan • Atina • Tepe üstü Parthenon", [37.9715, 23.7257], "Acropolis_of_Athens", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_Parthenon_in_Athens.jpg/800px-The_Parthenon_in_Athens.jpg"],
  ["Mount Fuji, Japan", "Easy", "East Asia • Japan • Honshu • Snow-capped volcano cone", "Doğu Asya • Japonya • Honşu • Karlı koni volkan", [35.3606, 138.7274], "Mount_Fuji", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/800px-080103_hakkai_fuji.jpg"],
  ["Golden Gate Bridge, San Francisco", "Easy", "North America • USA • California • Orange suspension bridge", "Kuzey Amerika • ABD • Kaliforniya • Turuncu asma köprü", [37.8199, -122.4783], "Golden_Gate_Bridge", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/800px-GoldenGateBridge-001.jpg"],
  ["Burj Khalifa, Dubai", "Easy", "Middle East • UAE • Dubai • World's tallest tower", "Orta Doğu • BAE • Dubai • Dünyanın en yüksek gökdeleni", [25.1972, 55.2744], "Burj_Khalifa", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Burj_Khalifa.jpg/800px-Burj_Khalifa.jpg"],
  ["Hagia Sophia, Istanbul", "Easy", "Europe/Asia border • Türkiye • Istanbul • Historic dome", "Avrupa-Asya • Türkiye • İstanbul • Tarihi büyük kubbe", [41.0086, 28.9802], "Hagia_Sophia", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/800px-Hagia_Sophia_Mars_2013.jpg"],
  ["Stonehenge, England", "Easy", "Europe • UK • Southern England • Prehistoric stone ring", "Avrupa • İngiltere • Güney İngiltere • Tarih öncesi taş çember", [51.1789, -1.8262], "Stonehenge", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/800px-Stonehenge2007_07_30.jpg"],
  ["Leaning Tower of Pisa, Italy", "Easy", "Europe • Italy • Tuscany • Tilted white bell tower", "Avrupa • İtalya • Toskana • Eğik çan kulesi", [43.7230, 10.3966], "Leaning_Tower_of_Pisa", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/800px-The_Leaning_Tower_of_Pisa_SB.jpeg"],
  ["Louvre Museum, Paris", "Easy", "Europe • France • Paris • Glass pyramid courtyard", "Avrupa • Fransa • Paris • Cam piramitli müze avlusu", [48.8606, 2.3376], "Louvre", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/800px-Louvre_Museum_Wikimedia_Commons.jpg"],
  ["Neuschwanstein Castle, Germany", "Easy", "Central Europe • Germany • Bavaria • Alpine hill castle", "Orta Avrupa • Almanya • Bavyera • Dağ tepesinde şato", [47.5576, 10.7498], "Neuschwanstein_Castle", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/800px-Schloss_Neuschwanstein_2013.jpg"],
  ["Machu Picchu, Peru", "Easy", "South America • Peru • Andes Mountains • Ancient Inca ruins", "Güney Amerika • Peru • And Dağları • Antik İnka kenti", [-13.1631, -72.5450], "Machu_Picchu", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/800px-Machu_Picchu%2C_Peru.jpg"],
  ["Santorini Caldera, Greece", "Easy", "Europe • Greece • Aegean Sea island • White cliff houses", "Avrupa • Yunanistan • Ege adası • Beyaz uçurum evleri", [36.4618, 25.3753], "Santorini", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Santorini_-_Oia_%28254026872%29.jpeg/800px-Santorini_-_Oia_%28254026872%29.jpeg"],
  ["Anıtkabir, Ankara", "Easy", "Türkiye • Central Anatolia • Ankara • Mausoleum complex", "Türkiye • İç Anadolu • Ankara • Anıt mezar kompleksi", [39.9255, 32.8369], "An%C4%B1tkabir", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/An%C4%B1tkabir_main_view.jpg/800px-An%C4%B1tkabir_main_view.jpg"],
  ["Göreme Fairy Chimneys, Cappadocia", "Easy", "Türkiye • Central Anatolia • Nevşehir/Cappadocia • Rock cones", "Türkiye • İç Anadolu • Kapadokya • Peri bacaları", [38.6431, 34.8289], "G%C3%B6reme", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Goreme_Valley_Cappadocia.jpg/800px-Goreme_Valley_Cappadocia.jpg"],

  ["Galata Tower, Istanbul", "Medium", "Türkiye • Istanbul • Beyoğlu side of Golden Horn • Stone tower", "Türkiye • İstanbul • Haliç kuzeyi • Taş kule", [41.0256, 28.9741], "Galata_Tower", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Galata_Tower_Istanbul.jpg/800px-Galata_Tower_Istanbul.jpg"],
  ["Pamukkale Terraces, Denizli", "Medium", "Türkiye • Southwestern Anatolia • Denizli • White thermal pools", "Türkiye • Güneybatı Anadolu • Denizli • Beyaz travertenler", [37.9204, 29.1204], "Pamukkale", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pamukkale_travertines_in_Turkey.jpg/800px-Pamukkale_travertines_in_Turkey.jpg"],
  ["Mont Saint-Michel, France", "Medium", "Western Europe • Normandy coast • France • Tidal island abbey", "Batı Avrupa • Normandiya kıyısı • Fransa • Ada manastırı", [48.6361, -1.5115], "Mont-Saint-Michel", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mont-Saint-Michel_vu_du_ciel.jpg/800px-Mont-Saint-Michel_vu_du_ciel.jpg"],
  ["Matterhorn Peak, Alps", "Medium", "Europe • Switzerland & Italy border • Zermatt • Sharp peak", "Avrupa • İsviçre-İtalya sınırı • Zermatt • Sivri dağ zirvesi", [45.9763, 7.6586], "Matterhorn", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2010.jpg/800px-Matterhorn_from_Domh%C3%BCtte_-_2010.jpg"],
  ["Iguazu Falls, South America", "Medium", "South America • Brazil & Argentina border • Wide waterfalls", "Güney Amerika • Brezilya-Arjantin sınırı • Geniş şelaleler", [-25.6953, -54.4367], "Iguazu_Falls", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cataratas_do_Igua%C3%A7u_-_Brazil_side.jpg/800px-Cataratas_do_Igua%C3%A7u_-_Brazil_side.jpg"],
  ["Lake Louise, Banff", "Medium", "North America • Western Canada • Alberta Rockies • Blue lake", "Kuzey Amerika • Batı Kanada • Alberta Kayalık Dağları • Göl", [51.4254, -116.1773], "Lake_Louise_(Alberta)", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lake_Louise_Banff_National_Park.jpg/800px-Lake_Louise_Banff_National_Park.jpg"],
  ["Uluru Rock, Australia", "Medium", "Oceania • Central Australia • Northern Territory • Red rock", "Okyanusya • Orta Avustralya • Kızıl dev kaya kütlesi", [-25.3444, 131.0369], "Uluru", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Uluru%2C_Australia.jpg/800px-Uluru%2C_Australia.jpg"],
  ["Milan Cathedral (Duomo), Italy", "Medium", "Southern Europe • Northern Italy • Milan • Spiky Gothic marble", "Güney Avrupa • Kuzey İtalya • Milano • Gotik mermer katedral", [45.4642, 9.1900], "Milan_Cathedral", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Milano_Duomo_facciata.jpg/800px-Milano_Duomo_facciata.jpg"],
  ["Rialto Bridge, Venice", "Medium", "Southern Europe • Northern Italy • Venice • Arched canal bridge", "Güney Avrupa • Kuzey İtalya • Venedik • Kemerli kanal köprüsü", [45.4380, 12.3359], "Rialto_Bridge", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ponte_di_Rialto_%28Venice%29.jpg/800px-Ponte_di_Rialto_%28Venice%29.jpg"],
  ["Nyhavn Harborfront, Copenhagen", "Medium", "Northern Europe • Denmark • Copenhagen • Colored canal houses", "Kuzey Avrupa • Danimarka • Kopenhag • Renkli liman evleri", [55.6800, 12.5906], "Nyhavn", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nyhavn_Copenhagen_Denmark.jpg/800px-Nyhavn_Copenhagen_Denmark.jpg"],

  ["Meteora Cliffs & Monasteries, Greece", "Hard", "Balkans • Central Greece • Thessaly • Monasteries on rocks", "Balkanlar • Orta Yunanistan • Teselya • Kaya üstü manastırlar", [39.7217, 21.6306], "Meteora", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Meteora_monastery_on_cliff.jpg/800px-Meteora_monastery_on_cliff.jpg"],
  ["Hallstatt Alpine Village, Austria", "Hard", "Central Europe • Austria • Salzburg region • Lakeside village", "Orta Avrupa • Avusturya • Salzburg bölgesi • Göl kıyısı köy", [47.5622, 13.6493], "Hallstatt", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hallstatt_005.jpg/800px-Hallstatt_005.jpg"],
  ["Plitvice Lakes, Croatia", "Hard", "Balkans • Central Croatia • Forest waterfalls & lakes", "Balkanlar • Orta Hırvatistan • Orman içi göller ve şelaleler", [44.8654, 15.5820], "Plitvice_Lakes_National_Park", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Plitvice_Lakes_National_Park_Croatia.jpg/800px-Plitvice_Lakes_National_Park_Croatia.jpg"],
  ["Uzungöl Lake & Valley, Trabzon", "Hard", "Türkiye • Eastern Black Sea • Trabzon/Çaykara • Mountain lake", "Türkiye • Doğu Karadeniz • Trabzon/Çaykara • Dağ gölü", [40.6186, 40.2939], "Uzung%C3%B6l", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Uzung%C3%B6l_Trabzon_Turkey.jpg/800px-Uzung%C3%B6l_Trabzon_Turkey.jpg"],
  ["Perito Moreno Glacier, Argentina", "Hard", "South America • Southern Patagonia • Argentina • Ice glacier", "Güney Amerika • Güney Patagonya • Arjantin • Buzul duvarı", [-50.4957, -73.0485], "Perito_Moreno_Glacier", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Perito_Moreno_Glacier_Patagonia.jpg/800px-Perito_Moreno_Glacier_Patagonia.jpg"],
  ["Victoria Falls, Zambezi", "Hard", "Southern Africa • Zambia & Zimbabwe border • Zambezi River", "Güney Afrika • Zambiya-Zimbabve sınırı • Zambezi şelalesi", [-17.9243, 25.8572], "Victoria_Falls", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Victoria_Falls_from_the_air.jpg/800px-Victoria_Falls_from_the_air.jpg"],
  ["Mount Kilimanjaro, Tanzania", "Hard", "East Africa • Northern Tanzania • Near Kenya • Snow peak", "Doğu Afrika • Kuzey Tanzanya • Kenya yakını • Karlı zirve", [-3.0674, 37.3556], "Mount_Kilimanjaro", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mount_Kilimanjaro_from_space.jpg/800px-Mount_Kilimanjaro_from_space.jpg"],
  ["Salar de Uyuni, Bolivia", "Hard", "South America • Western Bolivia • Andes • White salt plain", "Güney Amerika • Batı Bolivya • Andlar • Beyaz tuz düzlüğü", [-20.1338, -67.4891], "Salar_de_Uyuni", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Salar_de_Uyuni_Salt_Flats.jpg/800px-Salar_de_Uyuni_Salt_Flats.jpg"]
];

const REGIONAL_VARIANTS = [
  ["North Viewpoint", "Kuzey Bakış Noktası", [0.02, 0.02]],
  ["South Panorama", "Güney Panoraması", [-0.02, -0.02]],
  ["East Overlook", "Doğu Seyir Terası", [0.015, 0.03]],
  ["West Horizon", "Batı Ufuk Hattı", [-0.015, -0.03]],
  ["Dawn Ridge", "Şafak Sırtı", [0.025, -0.015]],
  ["Sunset Promenade", "Gün Batımı Kordonu", [-0.025, 0.015]],
  ["Highland Terrace", "Yayla Terası", [0.03, 0.01]],
  ["Valley Approach", "Vadi Yaklaşımı", [-0.03, -0.01]]
];

function buildThreeHundredPool() {
  const pool = [];
  const tiers = ["Easy", "Medium", "Hard"];
  tiers.forEach((tier) => {
    const sourceItems = BASE_LANDMARKS.filter((item) => item[1] === tier);
    for (let i = 0; i < 100; i++) {
      const base = sourceItems[i % sourceItems.length];
      if (i < sourceItems.length) {
        pool.push({
          id: pool.length + 1,
          name: base[0],
          difficulty: tier,
          clueEN: base[2],
          clueTR: base[3],
          coords: [...base[4]],
          wikiTitle: base[5],
          directPhotoUrl: base[6]
        });
      } else {
        const v = REGIONAL_VARIANTS[i % REGIONAL_VARIANTS.length];
        const lat = Number((base[4][0] + v[2][0] * ((i % 3) + 1)).toFixed(4));
        const lng = Number((base[4][1] + v[2][1] * ((i % 3) + 1)).toFixed(4));
        pool.push({
          id: pool.length + 1,
          name: `${base[0]} (${v[0]})`,
          difficulty: tier,
          clueEN: `${base[2]} • ${v[0]}`,
          clueTR: `${base[3]} • ${v[1]}`,
          coords: [lat, lng],
          wikiTitle: base[5],
          directPhotoUrl: base[6]
        });
      }
    }
  });
  return pool;
}

const LOCATIONS_POOL = buildThreeHundredPool();

const PLAYERS = {
  messi: {
    id: "messi",
    fullName: "Lionel Messi",
    backName: "MESSI",
    number: "10",
    boardText: "Messi",
    stripes: ["#881337", "#1e3a8a", "#881337", "#1e3a8a", "#881337"],
    shortsColor: "#172554",
    socksColor: "#f8fafc",
    collarColor: "#facc15",
    numberColor: "#facc15",
    bootColor: "#38bdf8",
    hairColor: "#1e293b",
    kickFoot: "left",
    goalBannerEN: "Messi scored a great goal!",
    goalBannerTR: "Messi harika attı!"
  },
  ronaldo: {
    id: "ronaldo",
    fullName: "Cristiano Ronaldo",
    backName: "RONALDO",
    number: "7",
    boardText: "Ronaldo",
    stripes: ["#f8fafc", "#e2e8f0", "#f8fafc", "#e2e8f0", "#f8fafc"],
    shortsColor: "#f8fafc",
    socksColor: "#f8fafc",
    collarColor: "#eab308",
    numberColor: "#b45309",
    bootColor: "#facc15",
    hairColor: "#0f172a",
    kickFoot: "right",
    goalBannerEN: "Ronaldo fires in a rocket!",
    goalBannerTR: "Ronaldo'dan müthiş gol!"
  },
  arda: {
    id: "arda",
    fullName: "Arda Güler",
    backName: "ARDA",
    number: "15",
    boardText: "Arda Güler",
    stripes: ["#dc2626", "#dc2626", "#ffffff", "#dc2626", "#dc2626"],
    shortsColor: "#ffffff",
    socksColor: "#dc2626",
    collarColor: "#ffffff",
    numberColor: "#ffffff",
    bootColor: "#22c55e",
    hairColor: "#27272a",
    kickFoot: "left",
    goalBannerEN: "Arda Güler curls it in!",
    goalBannerTR: "Arda Güler'den enfes gol!"
  }
};

let selectedPlayerId = "messi";
function getActivePlayer() {
  return PLAYERS[selectedPlayerId] || PLAYERS.messi;
}

const UI_TEXT = {
  en: {
    subtitle: "GMT 458 Web GIS • UK",
    playBtn: "Play",
    settingsBtn: "Settings",
    roundsSetting: "Penalty Rounds (6 - 9):",
    durationSetting: "Penalty Time (10 - 30s):",
    finalRoundsSetting: "Final Match Images (6 - 9):",
    finalDurationSetting: "Final Match Time (10 - 20s):",
    soundSetting: "Sound:",
    soundOn: "On",
    soundOff: "Off",
    languageChoice: "Language:",
    englishLbl: "English",
    turkishLbl: "Turkish",
    modeSelectTitle: "Select Game Mode",
    penaltyModeHeading: "Penalty Mode",
    penaltyModeDesc: "Choose Messi, Ronaldo, or Arda Güler and shoot penalties.",
    finalModeHeading: "Final Match",
    finalModeDesc: "5v5 + Goalkeepers full match showdown with marathon stands.",
    duelStartingMsg: "Big duel is starting...",
    finalStartingMsg: "Big final is starting...",
    penaltyLoadingPrompt: "Will they be able to score this penalty?",
    matchLoadingPrompt: "Let's see who wins this attack!",
    charSelectTitle: "Choose Your Penalty Taker",
    charSelectSubtitle: "Pick the star who will step up to the spot for your team.",
    descMessi: "Left-footed finesse • #10",
    descRonaldo: "Power knuckleball • #7",
    descArda: "Silky left-foot curl • #15",
    confirmCharBtn: "Confirm & Start →",
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
    shootBtn: "Confirm Guess & Go to Arena",
    loadingArena: "Loading Arena & Crowd...",
    crowdWatching: "Crowd: Supporting Taker",
    crowdCheer: "Crowd: Cheering 🎉",
    crowdSad: "Crowd: Disappointed 😔",
    crowdBlueCheer: "Blue Stand Cheering • Red Stand Sad",
    crowdRedCheer: "Red Stand Cheering • Blue Stand Sad",
    distanceLbl: "Distance Error:",
    chanceLbl: "Goal Chance:",
    outcomeLbl: "Outcome:",
    shooting: "Playing sequence...",
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
    rematchBtn: "Rematch",
    globeTitle: "GeoGoal • UK",
    loadingUniquePlaces: (loaded, total) => `Loading unique places (${loaded}/${total})`,
    actualPrefix: "Actual Place:",
    timeUp: "Time Up",
    timedOutDetail: (name) => `Time expired! Target was ${name}.`,
    guessDetail: (km, name, chance) => `You guessed ${km.toLocaleString()} km away from ${name} (${chance}% goal chance).`,
    goalText: (pts) => `BLUE GOAL (+${pts} pts)`,
    noGoalText: "RED COUNTER GOAL (0 pts)",
    chartLabel: "Accuracy Score (0–100: High = Close, Low = Far)",
    bannerNoGoal: "Red team intercepts & scores!",
    crowdWildRematch: "Crowd went wild, demanding a rematch!"
  },
  tr: {
    subtitle: "GMT 458 Web GIS • UK",
    playBtn: "Oyna",
    settingsBtn: "Ayarlar",
    roundsSetting: "Penaltı Tur Sayısı (6 - 9):",
    durationSetting: "Penaltı Süresi (10 - 30 sn):",
    finalRoundsSetting: "Final Maçı Resim Sayısı (6 - 9):",
    finalDurationSetting: "Final Maçı Süresi (10 - 20 sn):",
    soundSetting: "Ses:",
    soundOn: "Açık",
    soundOff: "Kapalı",
    languageChoice: "Dil:",
    englishLbl: "İngilizce",
    turkishLbl: "Türkçe",
    modeSelectTitle: "Oyun Modunu Seç",
    penaltyModeHeading: "Penaltı Modu",
    penaltyModeDesc: "Messi, Ronaldo veya Arda Güler seçip penaltı atışlarına geç.",
    finalModeHeading: "Final Maçı",
    finalModeDesc: "5v5 + kalecili tam saha final maçı ve maraton tribün atmosferi.",
    duelStartingMsg: "Büyük düello başlıyor...",
    finalStartingMsg: "Büyük final başlıyor...",
    penaltyLoadingPrompt: "Will they be able to score this penalty?",
    matchLoadingPrompt: "Let's see who wins this attack!",
    charSelectTitle: "Penaltıcını Seç",
    charSelectSubtitle: "Takımın adına beyaz noktaya geçecek yıldızı seç.",
    descMessi: "Sol ayak plase • #10",
    descRonaldo: "Sert ölü yaprak vuruşu • #7",
    descArda: "İnce sol ayak falso • #15",
    confirmCharBtn: "Onayla ve Başla →",
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
    shootBtn: "Tahmini Onayla ve Sahaya Geç",
    loadingArena: "Saha ve Tribün Yükleniyor...",
    crowdWatching: "Tribün: Penaltıcıyı Destekliyor",
    crowdCheer: "Tribün: Seviniyor 🎉",
    crowdSad: "Tribün: Üzgün 😔",
    crowdBlueCheer: "Mavi Tribün Seviniyor • Kırmızı Üzgün",
    crowdRedCheer: "Kırmızı Tribün Seviniyor • Mavi Üzgün",
    distanceLbl: "Mesafe Hatası:",
    chanceLbl: "Gol İhtimali:",
    outcomeLbl: "Sonuç:",
    shooting: "Pozisyon oynanıyor...",
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
    rematchBtn: "Rövanş",
    globeTitle: "GeoGoal • UK",
    loadingUniquePlaces: (loaded, total) => `Eşsiz yerler yükleniyor (${loaded}/${total})`,
    actualPrefix: "Gerçek Yer:",
    timeUp: "Süre Doldu",
    timedOutDetail: (name) => `Süre doldu! Doğru konum: ${name}.`,
    guessDetail: (km, name, chance) => `${name} konumuna ${km.toLocaleString()} km uzakta tahmin yaptın (%${chance} gol ihtimali).`,
    goalText: (pts) => `MAVİ GOL (+${pts} puan)`,
    noGoalText: "KIRMIZI KONTRATAK GOLÜ (0 puan)",
    chartLabel: "İsabet / Yakınlık Puanı (0–100: Yakın = Yüksek, Uzak = Düşük)",
    bannerNoGoal: "Red team intercepts & scores!",
    crowdWildRematch: "Taraftar çıldırdı, rövanş istiyor!"
  }
};

let currentLang = "en";
function t(key) {
  return UI_TEXT[currentLang][key];
}

// Web Audio Synthesizer
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
    if (!ctxAudio) ctxAudio = new AudioCtx();
    if (ctxAudio.state === "suspended") ctxAudio.resume().catch(() => {});
    return ctxAudio;
  }

  function playTone(audio, { freq, type = "triangle", startOffset = 0, duration = 0.2, peak = 0.06, slideTo = null }) {
    if (!soundEnabled || !audio) return;
    const now = audio.currentTime + startOffset;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slideTo) osc.frequency.linearRampToValueAtTime(slideTo, now + duration);

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
    playTone(audio, { freq, type: "sine", startOffset: 0, duration: 0.42, peak: 0.022 });
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

const DEFAULT_PENALTY_ROUNDS = 6;
const DEFAULT_PENALTY_DURATION = 15;
const DEFAULT_FINAL_ROUNDS = 6;
const DEFAULT_FINAL_DURATION = 15;
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
  if (locationItem && locationItem.directPhotoUrl) candidates.push(locationItem.directPhotoUrl);
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
  if (resolvedImageCache.has(key)) return resolvedImageCache.get(key);

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

function buildMatchQuestions(totalRounds = DEFAULT_PENALTY_ROUNDS) {
  const n = clampInt(totalRounds, 6, 9, DEFAULT_PENALTY_ROUNDS);
  const easyCount = Math.ceil(n / 3);
  const mediumCount = Math.ceil((n - easyCount) / 2);
  const hardCount = Math.max(1, n - easyCount - mediumCount);

  const easy = pickRandomItems(LOCATIONS_POOL.filter((x) => x.difficulty === "Easy"), easyCount);
  const medium = pickRandomItems(LOCATIONS_POOL.filter((x) => x.difficulty === "Medium"), mediumCount);
  const hard = pickRandomItems(LOCATIONS_POOL.filter((x) => x.difficulty === "Hard"), hardCount);
  return [...easy, ...medium, ...hard].slice(0, n);
}

function createGameController() {
  let gameMode = "penalty";
  let penaltyRoundsSetting = DEFAULT_PENALTY_ROUNDS;
  let penaltyDurationSetting = DEFAULT_PENALTY_DURATION;
  let finalRoundsSetting = DEFAULT_FINAL_ROUNDS;
  let finalDurationSetting = DEFAULT_FINAL_DURATION;

  let questions = buildMatchQuestions(penaltyRoundsSetting);
  let currentRoundIndex = 0;
  let score = 0;
  let goals = 0;
  let missed = 0;
  let timeLeft = penaltyDurationSetting;
  let timerId = null;
  let guessLatLng = null;
  let roundResolved = false;
  let history = [];

  function getActiveRoundsSetting() {
    return gameMode === "final" ? finalRoundsSetting : penaltyRoundsSetting;
  }

  function getActiveDurationSetting() {
    return gameMode === "final" ? finalDurationSetting : penaltyDurationSetting;
  }

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
    timeLeft = getActiveDurationSetting();
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

  function updateSettings({ penaltyRounds, penaltyDuration, finalRounds, finalDuration }) {
    penaltyRoundsSetting = clampInt(penaltyRounds, 6, 9, DEFAULT_PENALTY_ROUNDS);
    penaltyDurationSetting = clampInt(penaltyDuration, 10, 30, DEFAULT_PENALTY_DURATION);
    finalRoundsSetting = clampInt(finalRounds, 6, 9, DEFAULT_FINAL_ROUNDS);
    finalDurationSetting = clampInt(finalDuration, 10, 20, DEFAULT_FINAL_DURATION);
    questions = buildMatchQuestions(getActiveRoundsSetting());
    timeLeft = getActiveDurationSetting();
  }

  function setMode(mode) {
    gameMode = mode === "final" ? "final" : "penalty";
    questions = buildMatchQuestions(getActiveRoundsSetting());
    timeLeft = getActiveDurationSetting();
  }

  return {
    getMode: () => gameMode,
    setMode,
    getQuestions: () => questions,
    getPenaltyRoundsSetting: () => penaltyRoundsSetting,
    getPenaltyDurationSetting: () => penaltyDurationSetting,
    getFinalRoundsSetting: () => finalRoundsSetting,
    getFinalDurationSetting: () => finalDurationSetting,
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
        questions = buildMatchQuestions(getActiveRoundsSetting());
      }
      currentRoundIndex = 0;
      score = 0;
      goals = 0;
      missed = 0;
      timeLeft = getActiveDurationSetting();
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
  modeScreen: document.getElementById("mode-screen"),
  modeSelectTitle: document.getElementById("mode-select-title"),
  choosePenaltyModeBtn: document.getElementById("choose-penalty-mode-btn"),
  penaltyModeHeading: document.getElementById("penalty-mode-heading"),
  penaltyModeDesc: document.getElementById("penalty-mode-desc"),
  chooseFinalModeBtn: document.getElementById("choose-final-mode-btn"),
  finalModeHeading: document.getElementById("final-mode-heading"),
  finalModeDesc: document.getElementById("final-mode-desc"),

  characterScreen: document.getElementById("character-screen"),
  charSelectTitle: document.getElementById("char-select-title"),
  charSelectSubtitle: document.getElementById("char-select-subtitle"),
  descMessi: document.getElementById("desc-messi"),
  descRonaldo: document.getElementById("desc-ronaldo"),
  descArda: document.getElementById("desc-arda"),
  confirmCharacterBtn: document.getElementById("confirm-character-btn"),
  playerCards: document.querySelectorAll(".player-card"),

  playBtn: document.getElementById("play-btn"),
  settingsToggleBtn: document.getElementById("settings-toggle-btn"),
  settingsPanel: document.getElementById("settings-panel"),
  lblRoundsSetting: document.getElementById("lbl-rounds-setting"),
  lblDurationSetting: document.getElementById("lbl-duration-setting"),
  lblFinalRoundsSetting: document.getElementById("lbl-final-rounds-setting"),
  lblFinalDurationSetting: document.getElementById("lbl-final-duration-setting"),
  lblSoundSetting: document.getElementById("lbl-sound-setting"),
  roundsInput: document.getElementById("rounds-input"),
  durationInput: document.getElementById("duration-input"),
  finalRoundsInput: document.getElementById("final-rounds-input"),
  finalDurationInput: document.getElementById("final-duration-input"),
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
  modalActions: document.querySelector(".modal-actions"),
  finalGoals: document.getElementById("final-goals"),
  finalScore: document.getElementById("final-score"),
  finalBest: document.getElementById("final-best"),
  restartBtn: document.getElementById("restart-btn")
};

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
let ceremonyTimeoutId = null;

function clearCeremonyTimer() {
  if (ceremonyTimeoutId !== null) {
    clearTimeout(ceremonyTimeoutId);
    ceremonyTimeoutId = null;
  }
}

function applyLanguageUI() {
  const q = game.getCurrentQuestion();
  const activeClue = currentLang === "tr" ? q.clueTR : q.clueEN;

  el.langEnBtn.classList.toggle("active", currentLang === "en");
  el.langTrBtn.classList.toggle("active", currentLang === "tr");
  el.langEnBtn.textContent = t("englishLbl");
  el.langTrBtn.textContent = t("turkishLbl");
  el.lblLanguageChoice.textContent = t("languageChoice");

  el.playBtn.textContent = t("playBtn");
  el.settingsToggleBtn.textContent = t("settingsBtn");
  el.lblRoundsSetting.textContent = t("roundsSetting");
  el.lblDurationSetting.textContent = t("durationSetting");
  el.lblFinalRoundsSetting.textContent = t("finalRoundsSetting");
  el.lblFinalDurationSetting.textContent = t("finalDurationSetting");
  el.lblSoundSetting.textContent = t("soundSetting");
  el.soundToggleBtn.textContent = soundEngine.isSoundEnabled() ? t("soundOn") : t("soundOff");

  el.modeSelectTitle.textContent = t("modeSelectTitle");
  el.penaltyModeHeading.textContent = t("penaltyModeHeading");
  el.penaltyModeDesc.textContent = t("penaltyModeDesc");
  el.finalModeHeading.textContent = t("finalModeHeading");
  el.finalModeDesc.textContent = t("finalModeDesc");

  el.charSelectTitle.textContent = t("charSelectTitle");
  el.charSelectSubtitle.textContent = t("charSelectSubtitle");
  el.descMessi.textContent = t("descMessi");
  el.descRonaldo.textContent = t("descRonaldo");
  el.descArda.textContent = t("descArda");
  el.confirmCharacterBtn.textContent = t("confirmCharBtn");

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
    if (game.getMode() === "final") {
      el.crowdMoodBadge.textContent = lastRoundSummary.isGoal ? t("crowdBlueCheer") : t("crowdRedCheer");
    } else {
      el.crowdMoodBadge.textContent = lastRoundSummary.isGoal ? t("crowdCheer") : t("crowdSad");
    }
  }
}

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

// Canvas Renderer
const ctx = el.canvas.getContext("2d");
let animFrameId = null;

// Marathon stand crowd for Final Match mode (split Blue / Red marathon stand)
const MARATHON_CROWD = Array.from({ length: 64 }, (_, i) => {
  const tier = i < 32 ? 0 : 1;
  const col = i % 32;
  const x = 18 + col * 29.5 + (tier === 1 ? 6 : 0);
  const baseY = tier === 0 ? 52 : 88;
  const isBlueSide = x < el.canvas.width / 2;
  const bluePalette = ["#2563eb", "#1d4ed8", "#38bdf8", "#60a5fa"];
  const redPalette = ["#dc2626", "#b91c1c", "#f87171", "#ef4444"];
  return {
    x,
    baseY,
    side: isBlueSide ? "blue" : "red",
    color: isBlueSide
      ? bluePalette[i % bluePalette.length]
      : redPalette[i % redPalette.length],
    phase: i * 0.38
  };
});

// Unified supporter stand for Penalty Mode (everyone supports the penalty taker)
const PENALTY_SUPPORTER_CROWD = Array.from({ length: 56 }, (_, i) => {
  const tier = i < 28 ? 0 : 1;
  const col = i % 28;
  const x = 32 + col * 33 + (tier === 1 ? 8 : 0);
  const baseY = tier === 0 ? 54 : 90;
  const supporterColors = ["#22c55e", "#38bdf8", "#facc15", "#4ade80", "#60a5fa", "#fde047"];
  return {
    x,
    baseY,
    color: supporterColors[i % supporterColors.length],
    phase: i * 0.42
  };
});

function drawDigitalScoreBillboard(boardX, boardY, boardW, boardH) {
  ctx.fillStyle = "#020817";
  ctx.fillRect(boardX, boardY, boardW, boardH);
  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 2;
  ctx.strokeRect(boardX, boardY, boardW, boardH);

  ctx.font = "bold 13px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#60a5fa";
  ctx.fillText(`BLU ${game.getGoals()}`, boardX + boardW * 0.24, boardY + boardH / 2 + 0.5);

  ctx.fillStyle = "#facc15";
  ctx.fillText(":", boardX + boardW * 0.5, boardY + boardH / 2);

  ctx.fillStyle = "#f87171";
  ctx.fillText(`${game.getMissed()} RED`, boardX + boardW * 0.76, boardY + boardH / 2 + 0.5);
}

// Penalty Mode Stand: single unified stand backing the penalty taker
function drawPenaltySupporterStand(tick, takerMood, bannerText) {
  const player = getActivePlayer();

  ctx.fillStyle = "#05122b";
  ctx.fillRect(0, 0, el.canvas.width, 114);

  const boardW = 240;
  const boardH = 26;
  const boardX = (el.canvas.width - boardW) / 2;
  const boardY = 4;
  drawDigitalScoreBillboard(boardX, boardY, boardW, boardH);

  PENALTY_SUPPORTER_CROWD.forEach((fan) => {
    let offsetY = 0;
    let raiseArms = false;
    let headBow = 0;

    if (takerMood === "cheer") {
      offsetY = -Math.abs(Math.sin(tick * 0.11 + fan.phase)) * 11;
      raiseArms = true;
    } else if (takerMood === "sad") {
      offsetY = 5 + Math.sin(tick * 0.05 + fan.phase) * 1.0;
      headBow = 2.4;
    } else {
      offsetY = -Math.abs(Math.sin(tick * 0.07 + fan.phase)) * 3.2;
      raiseArms = true;
    }

    const fy = fan.baseY + offsetY;
    ctx.fillStyle = fan.color;
    ctx.fillRect(fan.x - 4.5, fy - 5, 9, 10);

    ctx.strokeStyle = fan.color;
    ctx.lineWidth = 2.1;
    ctx.beginPath();
    if (raiseArms) {
      const waveX = Math.sin(tick * 0.14 + fan.phase) * 2.5;
      ctx.moveTo(fan.x - 4.5, fy - 3);
      ctx.lineTo(fan.x - 9 + waveX, fy - 15);
      ctx.moveTo(fan.x + 4.5, fy - 3);
      ctx.lineTo(fan.x + 9 - waveX, fy - 15);
    } else {
      const drop = takerMood === "sad" ? 4.0 : 1.5;
      ctx.moveTo(fan.x - 4.5, fy - 3);
      ctx.lineTo(fan.x - 8, fy + drop);
      ctx.moveTo(fan.x + 4.5, fy - 3);
      ctx.lineTo(fan.x + 8, fy + drop);
    }
    ctx.stroke();

    ctx.fillStyle = "#fed7aa";
    ctx.beginPath();
    ctx.arc(fan.x, fy - 10 + headBow, 4.4, 0, Math.PI * 2);
    ctx.fill();
  });

  const boards = [
    { x: 0, w: 315, bg: "#09194c", fg: "#4ade80", text: `BACKING ${player.backName}` },
    { x: 318, w: 324, bg: "#061136", fg: "#facc15", text: "PENALTY ARENA" },
    { x: 645, w: 315, bg: "#09194c", fg: "#38bdf8", text: "GeoGoal" }
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

  if (bannerText) {
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#facc15";
    ctx.fillText(bannerText, el.canvas.width / 2, 148);
  }
}

// Final Match Stand: Marathon stand split into Blue (left) and Red (right)
function drawMarathonStandAndBoard(tick, blueMood, redMood, bannerText) {
  const player = getActivePlayer();

  ctx.fillStyle = "#061129";
  ctx.fillRect(0, 0, el.canvas.width, 114);

  ctx.fillStyle = "#0a1c46";
  ctx.fillRect(0, 34, el.canvas.width / 2, 80);
  ctx.fillStyle = "#3b0a14";
  ctx.fillRect(el.canvas.width / 2, 34, el.canvas.width / 2, 80);

  const boardW = 240;
  const boardH = 26;
  const boardX = (el.canvas.width - boardW) / 2;
  const boardY = 4;
  drawDigitalScoreBillboard(boardX, boardY, boardW, boardH);

  MARATHON_CROWD.forEach((fan) => {
    const mood = fan.side === "blue" ? blueMood : redMood;
    let offsetY = 0;
    let raiseArms = false;
    let headBow = 0;

    if (mood === "cheer") {
      offsetY = -Math.abs(Math.sin(tick * 0.1 + fan.phase)) * 10;
      raiseArms = true;
    } else if (mood === "sad") {
      offsetY = 5 + Math.sin(tick * 0.05 + fan.phase) * 1.0;
      headBow = 2.4;
    } else {
      offsetY = Math.sin(tick * 0.05 + fan.phase) * 1.3;
    }

    const fy = fan.baseY + offsetY;
    ctx.fillStyle = fan.color;
    ctx.fillRect(fan.x - 4.5, fy - 5, 9, 10);

    ctx.strokeStyle = fan.color;
    ctx.lineWidth = 2.1;
    ctx.beginPath();
    if (raiseArms) {
      const waveX = Math.sin(tick * 0.14 + fan.phase) * 2.5;
      ctx.moveTo(fan.x - 4.5, fy - 3);
      ctx.lineTo(fan.x - 9 + waveX, fy - 15);
      ctx.moveTo(fan.x + 4.5, fy - 3);
      ctx.lineTo(fan.x + 9 - waveX, fy - 15);
    } else {
      const drop = mood === "sad" ? 4.0 : 1.5;
      ctx.moveTo(fan.x - 4.5, fy - 3);
      ctx.lineTo(fan.x - 8, fy + drop);
      ctx.moveTo(fan.x + 4.5, fy - 3);
      ctx.lineTo(fan.x + 8, fy + drop);
    }
    ctx.stroke();

    ctx.fillStyle = "#fed7aa";
    ctx.beginPath();
    ctx.arc(fan.x, fy - 10 + headBow, 4.4, 0, Math.PI * 2);
    ctx.fill();
  });

  const boards = [
    { x: 0, w: 235, bg: "#09194c", fg: "#60a5fa", text: "BLUE MARATHON" },
    { x: 238, w: 238, bg: "#061136", fg: "#facc15", text: player.boardText },
    { x: 479, w: 238, bg: "#09194c", fg: "#4ade80", text: "GeoGoal" },
    { x: 720, w: 240, bg: "#450a0a", fg: "#fca5a5", text: "RED MARATHON" }
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

  if (bannerText) {
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#facc15";
    ctx.fillText(bannerText, el.canvas.width / 2, 148);
  }
}

function drawTrophyIcon(cx, cy, scale = 1) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  ctx.fillStyle = "#facc15";
  ctx.beginPath();
  ctx.moveTo(-14, -18);
  ctx.lineTo(14, -18);
  ctx.quadraticCurveTo(14, 0, 0, 4);
  ctx.quadraticCurveTo(-14, 0, -14, -18);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#854d0e";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.strokeStyle = "#facc15";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(-14, -11, 5, Math.PI * 0.5, Math.PI * 1.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(14, -11, 5, -Math.PI * 0.5, Math.PI * 0.5);
  ctx.stroke();

  ctx.fillStyle = "#eab308";
  ctx.fillRect(-3, 4, 6, 8);
  ctx.fillRect(-10, 12, 20, 4);
  ctx.restore();
}

function drawOutfieldPlayer(p, tick) {
  const { x, y, team, mood = "neutral", stepCycle = 0, liftingTrophy = false } = p;
  const isBlue = team === "blue";
  const jerseyColor = isBlue ? "#2563eb" : "#dc2626";
  const trimColor = isBlue ? "#93c5fd" : "#fca5a5";
  const shortsColor = isBlue ? "#1e3a8a" : "#7f1d1d";

  let bobY = Math.sin(stepCycle) * 2.4;
  let headBow = 0;
  if (mood === "cheer") {
    bobY = -Math.abs(Math.sin(tick * 0.1 + x * 0.02)) * 6.5;
  } else if (mood === "sad") {
    bobY = 3.5;
    headBow = 3;
  }

  const py = y + bobY;

  ctx.fillStyle = "rgba(0,0,0,0.34)";
  ctx.beginPath();
  ctx.ellipse(x, py + 15, 14, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();

  const legSwing = Math.sin(stepCycle) * 5.2;
  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 4.2;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x - 4, py + 4);
  ctx.lineTo(x - 4 + legSwing, py + 14);
  ctx.moveTo(x + 4, py + 4);
  ctx.lineTo(x + 4 - legSwing, py + 14);
  ctx.stroke();

  ctx.fillStyle = shortsColor;
  ctx.fillRect(x - 8, py - 2, 16, 7);

  ctx.fillStyle = jerseyColor;
  ctx.fillRect(x - 9.5, py - 18, 19, 16.5);
  ctx.strokeStyle = trimColor;
  ctx.lineWidth = 1.4;
  ctx.strokeRect(x - 9.5, py - 18, 19, 16.5);

  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 3.8;
  ctx.beginPath();
  if (liftingTrophy) {
    ctx.moveTo(x - 9.5, py - 15);
    ctx.lineTo(x - 6, py - 29);
    ctx.moveTo(x + 9.5, py - 15);
    ctx.lineTo(x + 6, py - 29);
  } else if (mood === "cheer") {
    const armWave = Math.sin(tick * 0.14) * 3;
    ctx.moveTo(x - 9.5, py - 15);
    ctx.lineTo(x - 16, py - 25 + armWave);
    ctx.moveTo(x + 9.5, py - 15);
    ctx.lineTo(x + 16, py - 25 - armWave);
  } else {
    ctx.moveTo(x - 9.5, py - 15);
    ctx.lineTo(x - 14, py - 6 - legSwing * 0.4);
    ctx.moveTo(x + 9.5, py - 15);
    ctx.lineTo(x + 14, py - 6 + legSwing * 0.4);
  }
  ctx.stroke();

  ctx.fillStyle = "#fed7aa";
  ctx.beginPath();
  ctx.arc(x, py - 24 + headBow, 6.5, 0, Math.PI * 2);
  ctx.fill();

  if (liftingTrophy) {
    drawTrophyIcon(x, py - 42, 0.78);
  }
}

function drawMatchPitchAndGoals(netRippleBlue, netRippleRed, tick) {
  const stripeCount = 8;
  const stripeH = (el.canvas.height - 130) / stripeCount;
  for (let s = 0; s < stripeCount; s++) {
    ctx.fillStyle = s % 2 === 0 ? "#15803d" : "#166534";
    ctx.fillRect(0, 130 + s * stripeH, el.canvas.width, stripeH + 1);
  }

  ctx.strokeStyle = "rgba(255,255,255,0.55)";
  ctx.lineWidth = 2;
  ctx.strokeRect(42, 156, el.canvas.width - 84, el.canvas.height - 174);

  ctx.beginPath();
  ctx.moveTo(el.canvas.width / 2, 156);
  ctx.lineTo(el.canvas.width / 2, el.canvas.height - 18);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(el.canvas.width / 2, 272, 46, 0, Math.PI * 2);
  ctx.stroke();

  const lGoalX = 42;
  const lGoalY = 228;
  const goalW = 46;
  const goalH = 88;
  ctx.fillStyle = "rgba(37, 99, 235, 0.14)";
  ctx.fillRect(lGoalX, lGoalY, goalW, goalH);
  ctx.strokeStyle = "rgba(255,255,255,0.28)";
  ctx.lineWidth = 1;
  for (let gx = lGoalX + 8; gx < lGoalX + goalW; gx += 8) {
    const wave = netRippleBlue ? Math.sin(tick * 0.35 + gx * 0.1) * netRippleBlue : 0;
    ctx.beginPath();
    ctx.moveTo(gx, lGoalY);
    ctx.lineTo(gx + wave, lGoalY + goalH);
    ctx.stroke();
  }
  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 4;
  ctx.strokeRect(lGoalX, lGoalY, goalW, goalH);

  const rGoalX = el.canvas.width - 42 - goalW;
  const rGoalY = 228;
  ctx.fillStyle = "rgba(220, 38, 38, 0.14)";
  ctx.fillRect(rGoalX, rGoalY, goalW, goalH);
  ctx.strokeStyle = "rgba(255,255,255,0.28)";
  ctx.lineWidth = 1;
  for (let gx = rGoalX + 8; gx < rGoalX + goalW; gx += 8) {
    const wave = netRippleRed ? Math.cos(tick * 0.35 + gx * 0.1) * netRippleRed : 0;
    ctx.beginPath();
    ctx.moveTo(gx, rGoalY);
    ctx.lineTo(gx + wave, rGoalY + goalH);
    ctx.stroke();
  }
  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 4;
  ctx.strokeRect(rGoalX, rGoalY, goalW, goalH);
}

// 5v5 + GK Final Match sequence:
// - chance === 100 or 0: 5s sequence (~150 frames at 30fps) with crisp passing & aimed shot into corner
// - chance in [80, 50, 20]: 7s sequence (~210 frames at 30fps) where initial chance is denied and scoring team finishes cleanly
function animateMatchPossession(blueAttacksAndScores, chance, onSettled) {
  if (animFrameId) cancelAnimationFrame(animFrameId);

  const isCertainOrZero = chance === 100 || chance === 0;
  const totalFrames = isCertainOrZero ? 150 : 210;

  const blueBase = [
    { x: 105, y: 272, team: "blue", role: "gk" },
    { x: 255, y: 220, team: "blue", role: "def" },
    { x: 255, y: 325, team: "blue", role: "def" },
    { x: 380, y: 240, team: "blue", role: "mid" },
    { x: 380, y: 305, team: "blue", role: "mid" },
    { x: 460, y: 272, team: "blue", role: "fwd" }
  ];

  const redBase = [
    { x: 855, y: 272, team: "red", role: "gk" },
    { x: 705, y: 220, team: "red", role: "def" },
    { x: 705, y: 325, team: "red", role: "def" },
    { x: 580, y: 240, team: "red", role: "mid" },
    { x: 580, y: 305, team: "red", role: "mid" },
    { x: 520, y: 272, team: "red", role: "fwd" }
  ];

  let frame = 0;
  let settledTriggered = false;
  let outcomeSoundPlayed = false;

  function step() {
    frame += 1;
    const tProg = Math.min(1, frame / totalFrames);

    let ballX = 480;
    let ballY = 272;
    let blueMood = "neutral";
    let redMood = "neutral";
    let bannerText = "";
    let netRippleBlue = 0;
    let netRippleRed = 0;

    const bluePlayers = blueBase.map((p) => ({ ...p, mood: "neutral", stepCycle: 0 }));
    const redPlayers = redBase.map((p) => ({ ...p, mood: "neutral", stepCycle: 0 }));

    if (isCertainOrZero) {
      if (blueAttacksAndScores) {
        // 100%: Crisp Blue passing sequence and accurate shot past Red GK into lower corner
        if (tProg < 0.35) {
          const pT = tProg / 0.35;
          bluePlayers[3].x = 380 + pT * 125;
          bluePlayers[4].x = 380 + pT * 140;
          bluePlayers[5].x = 460 + pT * 150;
          bluePlayers[1].x = 255 + pT * 110;
          bluePlayers[2].x = 255 + pT * 110;
          [1, 2, 3, 4, 5].forEach((idx) => (bluePlayers[idx].stepCycle = pT * Math.PI * 5));

          redPlayers[1].y = 220 + pT * 20;
          redPlayers[2].y = 325 - pT * 20;
          redPlayers[0].y = 272 - pT * 16;

          ballX = 380 + pT * 125;
          ballY = 240 + pT * 10;
        } else if (tProg < 0.7) {
          const pT = (tProg - 0.35) / 0.35;
          bluePlayers[3].x = 505 + pT * 95;
          bluePlayers[4].x = 520 + pT * 145;
          bluePlayers[4].y = 305 - pT * 10;
          bluePlayers[5].x = 610 + pT * 90;
          [1, 2, 3, 4, 5].forEach((idx) => (bluePlayers[idx].stepCycle = (0.35 + pT) * Math.PI * 5));

          redPlayers[0].y = 256 - pT * 12;

          ballX = 505 + pT * 155;
          ballY = 250 + pT * 45;
        } else {
          const sT = (tProg - 0.7) / 0.3;
          // Aimed shot into bottom-right corner away from Red GK
          ballX = 660 + sT * 235;
          ballY = 295 + sT * 12;
          redPlayers[0].y = 244 - sT * 8;
          if (sT > 0.7) netRippleRed = Math.max(0, 5.5 * (1 - (sT - 0.7) * 3.3));
        }
      } else {
        // 0%: Blue loses ball, Red executes crisp passing & aimed strike into Blue corner
        if (tProg < 0.25) {
          const pT = tProg / 0.25;
          bluePlayers[5].x = 460 + pT * 75;
          bluePlayers[5].stepCycle = pT * Math.PI * 4;
          ballX = 460 + pT * 75;
          ballY = 272;
        } else if (tProg < 0.68) {
          const cT = (tProg - 0.25) / 0.43;
          redPlayers[5].x = 535 - cT * 175;
          redPlayers[3].x = 580 - cT * 245;
          redPlayers[3].y = 240 + cT * 58;
          redPlayers[4].x = 580 - cT * 220;
          [1, 2, 3, 4, 5].forEach((idx) => (redPlayers[idx].stepCycle = cT * Math.PI * 6));

          bluePlayers[1].x = 255 - cT * 45;
          bluePlayers[1].y = 220 + cT * 26;
          bluePlayers[2].x = 255 - cT * 45;
          bluePlayers[2].y = 325 - cT * 26;
          bluePlayers[0].y = 272 - cT * 16;

          ballX = 535 - cT * 200;
          ballY = 272 + cT * 26;
        } else {
          const fT = (tProg - 0.68) / 0.32;
          // Controlled shot into lower-left corner away from Blue GK
          ballX = 335 - fT * 273;
          ballY = 298 + fT * 10;
          bluePlayers[0].y = 256 - fT * 10;
          if (fT > 0.7) netRippleBlue = Math.max(0, 5.5 * (1 - (fT - 0.7) * 3.3));
        }
      }
    } else {
      // 7s sequence (80%, 50%, 20%): First shot/chance is denied, then scoring side builds up & finishes
      if (tProg < 0.44) {
        const aT = tProg / 0.44;
        if (blueAttacksAndScores) {
          // Early Blue attempt denied by Red GK
          bluePlayers[5].x = 460 + aT * 220;
          bluePlayers[5].stepCycle = aT * Math.PI * 6;
          redPlayers[0].y = 272 + Math.sin(aT * Math.PI) * 14;
          ballX = 460 + aT * 380;
          ballY = 272 - Math.sin(aT * Math.PI) * 14;
        } else {
          // Early Red attempt denied by Blue GK
          redPlayers[5].x = 520 - aT * 220;
          redPlayers[5].stepCycle = aT * Math.PI * 6;
          bluePlayers[0].y = 272 + Math.sin(aT * Math.PI) * 14;
          ballX = 520 - aT * 410;
          ballY = 272 - Math.sin(aT * Math.PI) * 14;
        }
      } else {
        const bT = (tProg - 0.44) / 0.56;
        if (blueAttacksAndScores) {
          // Blue regroups, passes across midfield, and finishes into Red goal
          bluePlayers[3].x = 380 + bT * 270;
          bluePlayers[3].y = 240 + Math.sin(bT * Math.PI) * 28;
          bluePlayers[4].x = 380 + bT * 250;
          [1, 2, 3, 4, 5].forEach((idx) => (bluePlayers[idx].stepCycle = bT * Math.PI * 7));

          redPlayers[1].x = 705 + bT * 25;
          redPlayers[1].y = 220 + bT * 24;
          redPlayers[2].x = 705 + bT * 25;
          redPlayers[2].y = 325 - bT * 24;
          redPlayers[0].y = 272 - bT * 15;

          if (bT < 0.65) {
            const pSub = bT / 0.65;
            ballX = 520 + pSub * 145;
            ballY = 265 + pSub * 22;
          } else {
            const sSub = (bT - 0.65) / 0.35;
            ballX = 665 + sSub * 230;
            ballY = 287 + sSub * 16;
            if (sSub > 0.7) netRippleRed = Math.max(0, 5.5 * (1 - (sSub - 0.7) * 3.3));
          }
        } else {
          // Red regroups, passes across midfield, and finishes into Blue goal
          redPlayers[3].x = 580 - bT * 270;
          redPlayers[3].y = 240 + Math.sin(bT * Math.PI) * 28;
          redPlayers[4].x = 580 - bT * 250;
          [1, 2, 3, 4, 5].forEach((idx) => (redPlayers[idx].stepCycle = bT * Math.PI * 7));

          bluePlayers[1].x = 255 - bT * 25;
          bluePlayers[1].y = 220 + bT * 24;
          bluePlayers[2].x = 255 - bT * 25;
          bluePlayers[2].y = 325 - bT * 24;
          bluePlayers[0].y = 272 - bT * 15;

          if (bT < 0.65) {
            const pSub = bT / 0.65;
            ballX = 440 - pSub * 145;
            ballY = 265 + pSub * 22;
          } else {
            const sSub = (bT - 0.65) / 0.35;
            ballX = 295 - sSub * 233;
            ballY = 287 + sSub * 16;
            if (sSub > 0.7) netRippleBlue = Math.max(0, 5.5 * (1 - (sSub - 0.7) * 3.3));
          }
        }
      }
    }

    const goalReached = tProg >= 1;
    if (goalReached) {
      if (blueAttacksAndScores) {
        blueMood = "cheer";
        redMood = "sad";
        bluePlayers.forEach((p) => (p.mood = "cheer"));
        redPlayers.forEach((p) => (p.mood = "sad"));
        bannerText = t("goalText")(100);
        el.crowdMoodBadge.textContent = t("crowdBlueCheer");
        if (!outcomeSoundPlayed) {
          outcomeSoundPlayed = true;
          soundEngine.playGoalFanfare();
        }
      } else {
        blueMood = "sad";
        redMood = "cheer";
        bluePlayers.forEach((p) => (p.mood = "sad"));
        redPlayers.forEach((p) => (p.mood = "cheer"));
        bannerText = t("bannerNoGoal");
        el.crowdMoodBadge.textContent = t("crowdRedCheer");
        if (!outcomeSoundPlayed) {
          outcomeSoundPlayed = true;
          soundEngine.playMissTheme();
        }
      }

      if (!settledTriggered && onSettled) {
        settledTriggered = true;
        onSettled();
      }
    }

    ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);
    drawMarathonStandAndBoard(frame, blueMood, redMood, bannerText);
    drawMatchPitchAndGoals(netRippleBlue, netRippleRed, frame);
    bluePlayers.forEach((p) => drawOutfieldPlayer(p, frame));
    redPlayers.forEach((p) => drawOutfieldPlayer(p, frame));

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 2;
    ctx.stroke();

    animFrameId = requestAnimationFrame(step);
  }

  animFrameId = requestAnimationFrame(step);
}

function drawPenaltyGoalAndNet(netRipple, tick) {
  const goalLeft = 335;
  const goalRight = 625;
  const goalTop = 128;
  const goalBottom = 216;

  ctx.fillStyle = "rgba(255, 255, 255, 0.14)";
  ctx.fillRect(goalLeft, goalTop, goalRight - goalLeft, goalBottom - goalTop);

  ctx.strokeStyle = "rgba(226, 232, 240, 0.35)";
  ctx.lineWidth = 1.2;
  for (let x = goalLeft + 18; x < goalRight; x += 18) {
    const wave = netRipple ? Math.sin(tick * 0.4 + x * 0.05) * netRipple : 0;
    ctx.beginPath();
    ctx.moveTo(x, goalTop);
    ctx.lineTo(x + wave, goalBottom);
    ctx.stroke();
  }
  for (let y = goalTop + 16; y < goalBottom; y += 16) {
    const wave = netRipple ? Math.cos(tick * 0.4 + y * 0.1) * netRipple : 0;
    ctx.beginPath();
    ctx.moveTo(goalLeft, y);
    ctx.lineTo(goalRight, y + wave);
    ctx.stroke();
  }

  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 5;
  ctx.strokeRect(goalLeft, goalTop, goalRight - goalLeft, goalBottom - goalTop);
}

function drawPenaltyShooter(shooterState, tick) {
  const player = getActivePlayer();
  const { x, y, stepCycle, kickSwing, leanAngle, reactionMood } = shooterState;

  let moodBounceY = 0;
  let headDrop = 0;
  let armWave = 0;
  if (reactionMood === "cheer") {
    moodBounceY = -Math.abs(Math.sin(tick * 0.11)) * 8.5;
    armWave = Math.sin(tick * 0.16) * 7;
  } else if (reactionMood === "sad") {
    moodBounceY = 3.5;
    headDrop = 3.6;
  }
  const py = y + moodBounceY;

  ctx.save();
  ctx.translate(x, py);
  if (leanAngle) ctx.rotate(leanAngle);

  ctx.fillStyle = "rgba(0, 0, 0, 0.36)";
  ctx.beginPath();
  ctx.ellipse(0, 19, 25, 6.4, 0, 0, Math.PI * 2);
  ctx.fill();

  const stride = Math.sin(stepCycle) * 7.5;
  const torsoTilt = kickSwing * 3.0 + (reactionMood === "sad" ? 2.2 : 0);

  ctx.strokeStyle = player.socksColor;
  ctx.lineWidth = 6.2;
  ctx.lineCap = "round";

  const isLeftKick = player.kickFoot === "left";
  const leftFootX = -6 - stride * 0.45 - (isLeftKick ? kickSwing * 8 : 0);
  const leftFootY = 17.5 - Math.max(0, stride * 0.45) - (isLeftKick ? kickSwing * 14 : 0);
  const rightFootX = 6 + stride * 0.45 + (!isLeftKick ? kickSwing * 9 : 0);
  const rightFootY = 17.5 - Math.max(0, -stride * 0.45) - (!isLeftKick ? kickSwing * 14 : 0);

  ctx.beginPath();
  ctx.moveTo(-6, 4);
  ctx.lineTo(leftFootX, leftFootY);
  ctx.moveTo(6, 4);
  ctx.lineTo(rightFootX, rightFootY);
  ctx.stroke();

  ctx.fillStyle = player.bootColor;
  ctx.beginPath();
  ctx.arc(isLeftKick ? leftFootX : rightFootX, isLeftKick ? leftFootY : rightFootY, 3.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = player.shortsColor;
  ctx.fillRect(-11.5, -4, 23, 10.5);

  const stripeW = 27 / player.stripes.length;
  player.stripes.forEach((col, idx) => {
    ctx.fillStyle = col;
    ctx.fillRect(-13.5 + idx * stripeW, -24.5 + torsoTilt, stripeW + 0.4, 21.5);
  });

  ctx.fillStyle = player.numberColor;
  ctx.font = "bold 5px Arial";
  ctx.textAlign = "center";
  ctx.fillText(player.backName, 0, -17.5 + torsoTilt);
  ctx.font = "bold 8.5px Arial";
  ctx.fillText(player.number, 0, -7.5 + torsoTilt);

  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 4.6;
  ctx.beginPath();
  if (reactionMood === "cheer") {
    ctx.moveTo(-13.5, -20.5 + torsoTilt);
    ctx.lineTo(-24, -35 + armWave);
    ctx.moveTo(13.5, -20.5 + torsoTilt);
    ctx.lineTo(24, -35 - armWave);
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

  ctx.fillStyle = player.hairColor;
  ctx.beginPath();
  ctx.arc(0, -34 + torsoTilt + headDrop, 8.6, Math.PI * 0.85, Math.PI * 2.15);
  ctx.fill();

  ctx.restore();
}

function drawPenaltyKeeper(keeperState, tick) {
  const { x, y, tilt, reactionMood } = keeperState;
  let gY = y;
  let gTilt = tilt;
  let armOffsetY = -18;
  if (reactionMood === "cheer") {
    gY = y - Math.abs(Math.sin(tick * 0.09)) * 5;
    gTilt = 0;
    armOffsetY = -31;
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

  ctx.restore();
}

function animatePenaltyShot(isGoal, chance, onShotSettled) {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  const player = getActivePlayer();

  const ballStartX = 480;
  const ballStartY = 334;
  const wideLeft = Math.random() < 0.5;
  const targetX = isGoal ? (wideLeft ? 385 : 575) : (chance === 0 ? (wideLeft ? 265 : 695) : 480);
  const targetY = isGoal ? 164 : (chance === 0 ? 110 : 180);
  const keeperDiveX = isGoal ? (targetX < 480 ? 555 : 405) : 480;
  const keeperDiveTilt = isGoal ? (keeperDiveX > 480 ? 0.38 : -0.38) : 0;

  const setupFrames = 34;
  const runUpFrames = 38;
  const flightFrames = 56;
  const settleFrame = setupFrames + runUpFrames + flightFrames;

  let frame = 0;
  let settledTriggered = false;
  let outcomeSoundPlayed = false;

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
    let keeperY = 188;
    let keeperTilt = 0;
    let keeperReactionMood = "neutral";

    let takerMood = "neutral";
    let bannerText = "";

    if (frame <= setupFrames) {
      keeperX = 480 + Math.sin(frame * 0.12) * 12;
    } else if (frame <= setupFrames + runUpFrames) {
      const rT = (frame - setupFrames) / runUpFrames;
      const rEase = rT * rT * (3 - 2 * rT);
      shooterX = 448 + (476 - 448) * rEase;
      shooterY = 368 + (354 - 368) * rEase;
      stepCycle = rT * Math.PI * 6;
      leanAngle = -0.06 + rEase * 0.08;
    } else if (frame <= settleFrame) {
      const fT = (frame - setupFrames - runUpFrames) / flightFrames;
      const fEase = 1 - Math.pow(1 - fT, 1.7);

      shooterX = 476;
      shooterY = 354;
      kickSwing = Math.sin(Math.min(fT * 1.4, 1) * Math.PI);
      leanAngle = 0.05 * kickSwing;

      const curveOffset = Math.sin(fT * Math.PI) * (targetX >= 480 ? 14 : -14);
      ballX = ballStartX + (targetX - ballStartX) * fEase + curveOffset;
      ballY = ballStartY + (targetY - ballStartY) * fEase - Math.sin(fT * Math.PI) * 32;
      ballRadius = 12 - fEase * 3.8;

      const diveEase = Math.min(fT * 1.05, 1);
      keeperX = 480 + (keeperDiveX - 480) * diveEase;
      keeperY = 188 - Math.sin(diveEase * Math.PI) * 14 + diveEase * 4;
      keeperTilt = keeperDiveTilt * diveEase;
    } else {
      shooterX = 476;
      shooterY = 354;
      ballX = targetX;
      ballY = targetY;
      ballRadius = 8.2;
      keeperX = isGoal ? keeperDiveX : 480;
      keeperY = 192;
      keeperTilt = isGoal ? keeperDiveTilt : 0;

      netRipple = isGoal ? 5.5 + Math.sin(frame * 0.45) * 1.5 : 0;
      takerMood = isGoal ? "cheer" : "sad";
      shooterReactionMood = isGoal ? "cheer" : "sad";
      keeperReactionMood = isGoal ? "sad" : "cheer";

      const goalBanner = currentLang === "tr" ? player.goalBannerTR : player.goalBannerEN;
      bannerText = isGoal ? `⚡ ${goalBanner} ⚡` : t("bannerNoGoal");
      el.crowdMoodBadge.textContent = isGoal ? t("crowdCheer") : t("crowdSad");

      if (!outcomeSoundPlayed) {
        outcomeSoundPlayed = true;
        if (isGoal) soundEngine.playGoalFanfare();
        else soundEngine.playMissTheme();
      }

      if (!settledTriggered && onShotSettled) {
        settledTriggered = true;
        onShotSettled();
      }
    }

    ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);
    drawPenaltySupporterStand(frame, takerMood, bannerText);

    const stripeCount = 7;
    const stripeH = 280 / stripeCount;
    for (let s = 0; s < stripeCount; s++) {
      ctx.fillStyle = s % 2 === 0 ? "#15803d" : "#166534";
      ctx.fillRect(0, 130 + s * stripeH, el.canvas.width, stripeH + 1);
    }

    if (isGoal && frame > settleFrame) {
      ctx.fillStyle = "rgba(250, 204, 21, 0.16)";
      ctx.fillRect(0, 130, el.canvas.width, 280);
    }

    drawPenaltyGoalAndNet(netRipple, frame);
    drawPenaltyKeeper({ x: keeperX, y: keeperY, tilt: keeperTilt, reactionMood: keeperReactionMood }, frame);
    drawPenaltyShooter({ x: shooterX, y: shooterY, stepCycle, kickSwing, leanAngle, reactionMood: shooterReactionMood }, frame);

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 2;
    ctx.stroke();

    animFrameId = requestAnimationFrame(step);
  }

  animFrameId = requestAnimationFrame(step);
}

function animateTrophyCeremony(winnerTeam, onDone) {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  let frame = 0;

  function step() {
    frame += 1;
    const blueMood = winnerTeam === "blue" ? "cheer" : "sad";
    const redMood = winnerTeam === "red" ? "cheer" : "sad";
    const banner = winnerTeam === "blue"
      ? (currentLang === "tr" ? "MAVİ TAKIM KUPAYI KALDIRIYOR!" : "BLUE TEAM LIFTS THE TROPHY!")
      : (currentLang === "tr" ? "KIRMIZI TAKIM KUPAYI KALDIRIYOR!" : "RED TEAM LIFTS THE TROPHY!");

    ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);
    drawMarathonStandAndBoard(frame, blueMood, redMood, banner);
    drawMatchPitchAndGoals(0, 0, frame);

    const squad = winnerTeam === "blue"
      ? [
          { x: 420, y: 275, team: "blue", mood: "cheer", liftingTrophy: true },
          { x: 380, y: 255, team: "blue", mood: "cheer" },
          { x: 380, y: 295, team: "blue", mood: "cheer" },
          { x: 340, y: 275, team: "blue", mood: "cheer" }
        ]
      : [
          { x: 540, y: 275, team: "red", mood: "cheer", liftingTrophy: true },
          { x: 580, y: 255, team: "red", mood: "cheer" },
          { x: 580, y: 295, team: "red", mood: "cheer" },
          { x: 620, y: 275, team: "red", mood: "cheer" }
        ];

    squad.forEach((p) => drawOutfieldPlayer(p, frame));

    if (frame < 240) {
      animFrameId = requestAnimationFrame(step);
    } else if (onDone) {
      onDone();
    }
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
  clearCeremonyTimer();
  soundEngine.stopSelectionTheme();
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  game.stopTimer();
  el.modal.classList.add("hidden");
  el.topHud.classList.add("hidden");
  el.startScreen.classList.remove("hidden");
  el.modeScreen.classList.add("hidden");
  el.characterScreen.classList.add("hidden");
  el.guessScreen.classList.add("hidden");
  el.penaltyScreen.classList.add("hidden");
  applyLanguageUI();
  soundEngine.startWelcomeTheme();
}

function showModeScreen() {
  clearCeremonyTimer();
  soundEngine.stopSelectionTheme();
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  el.modal.classList.add("hidden");
  el.topHud.classList.add("hidden");
  el.startScreen.classList.add("hidden");
  el.modeScreen.classList.remove("hidden");
  el.characterScreen.classList.add("hidden");
  el.guessScreen.classList.add("hidden");
  el.penaltyScreen.classList.add("hidden");
  applyLanguageUI();
}

function showCharacterScreen() {
  clearCeremonyTimer();
  soundEngine.stopSelectionTheme();
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  el.modal.classList.add("hidden");
  el.topHud.classList.add("hidden");
  el.startScreen.classList.add("hidden");
  el.modeScreen.classList.add("hidden");
  el.characterScreen.classList.remove("hidden");
  el.guessScreen.classList.add("hidden");
  el.penaltyScreen.classList.add("hidden");
  applyLanguageUI();
}

function showGuessScreen() {
  clearCeremonyTimer();
  soundEngine.stopWelcomeTheme();
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  el.topHud.classList.remove("hidden");
  el.startScreen.classList.add("hidden");
  el.modeScreen.classList.add("hidden");
  el.characterScreen.classList.add("hidden");
  el.penaltyScreen.classList.add("hidden");
  el.guessScreen.classList.remove("hidden");
  setTimeout(() => map.invalidateSize(), 60);
}

function showGlobeTransition(messageText) {
  soundEngine.stopWelcomeTheme();
  soundEngine.stopSelectionTheme();
  el.startScreen.classList.add("hidden");
  el.modeScreen.classList.add("hidden");
  el.characterScreen.classList.add("hidden");
  el.guessScreen.classList.add("hidden");
  el.penaltyScreen.classList.remove("hidden");
  el.penaltyLoading.classList.remove("hidden");
  el.penaltyStage.classList.add("hidden");
  el.crowdMoodBadge.textContent = t("crowdWatching");
  el.nextBtn.disabled = true;

  el.penaltyLoading.innerHTML = `
    <div style="font-size:48px; display:inline-block; animation: globeSpin 2.2s linear infinite;">🌍</div>
    <h3 style="font-size:22px; color:#38bdf8; letter-spacing:1px;">${t("globeTitle")}</h3>
    <p id="loading-status-line" style="color:#cbd5e1; font-size:16px; font-weight:bold;">${messageText}</p>
    <p id="loading-progress-line" style="color:#94a3b8; font-size:13px;"></p>
  `;
}

async function beginMatchWithBanner(bannerMsg) {
  soundEngine.stopWelcomeTheme();
  syncSettingsFromInputs();
  game.resetMatch(true);

  const totalQ = game.getTotalRounds();
  showGlobeTransition(bannerMsg);

  await preloadAllRoundImages((loaded, total) => {
    const progNode = document.getElementById("loading-progress-line");
    if (progNode) {
      progNode.textContent = t("loadingUniquePlaces")(loaded, total);
    }
  });

  map.setView([25, 15], 2);
  loadRound();
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

  const isFinalMode = game.getMode() === "final";
  showGlobeTransition(isFinalMode ? t("matchLoadingPrompt") : t("penaltyLoadingPrompt"));

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

    const onSequenceComplete = () => {
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
    };

    if (isFinalMode) {
      animateMatchPossession(isGoal, chance, onSequenceComplete);
    } else {
      animatePenaltyShot(isGoal, chance, onSequenceComplete);
    }
  }, 1400);
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

function removeRematchButtonIfExists() {
  const existing = document.getElementById("rematch-btn");
  if (existing) existing.remove();
}

function displaySummaryContent(totalGoals, redGoals, totalRounds) {
  el.finalGoals.textContent = `${totalGoals} / ${totalRounds}`;
  el.finalScore.textContent = game.getScore();
  el.finalBest.textContent = game.getHighScore();
  el.modal.classList.remove("hidden");
  removeRematchButtonIfExists();

  el.matchVerdict.classList.remove("win", "draw", "lose");
  if (totalGoals > redGoals) {
    el.matchVerdict.textContent = t("verdictWin")(totalGoals, totalRounds);
    el.matchVerdict.classList.add("win");
    el.trophyBanner.classList.remove("hidden");
    el.confettiLayer.classList.remove("hidden");
    renderConfetti();
  } else if (totalGoals === redGoals) {
    const drawText = game.getMode() === "final"
      ? `${t("verdictDraw")(totalGoals, totalRounds)} • ${t("crowdWildRematch")}`
      : t("verdictDraw")(totalGoals, totalRounds);
    el.matchVerdict.textContent = drawText;
    el.matchVerdict.classList.add("draw");
    el.trophyBanner.classList.add("hidden");
    el.confettiLayer.classList.add("hidden");
    el.confettiLayer.innerHTML = "";

    if (game.getMode() === "final") {
      const rematchBtn = document.createElement("button");
      rematchBtn.id = "rematch-btn";
      rematchBtn.className = "btn-secondary";
      rematchBtn.textContent = t("rematchBtn");
      rematchBtn.addEventListener("click", () => {
        el.modal.classList.add("hidden");
        removeRematchButtonIfExists();
        beginMatchWithBanner(t("finalStartingMsg"));
      });
      el.modalActions.appendChild(rematchBtn);
    }
  } else {
    el.matchVerdict.textContent = t("verdictLose")(totalGoals, totalRounds);
    el.matchVerdict.classList.add("lose");
    el.trophyBanner.classList.add("hidden");
    el.confettiLayer.classList.add("hidden");
    el.confettiLayer.innerHTML = "";
  }

  const history = game.getHistory();
  const labels = history.map((item) => `R${item.round}`);
  const accuracyScores = history.map((item) =>
    getClosenessScore(item.distanceKm, item.noPinAtAll)
  );
  const barColors = accuracyScores.map((val) => getPerformanceBarColor(val));

  if (resultsChart) resultsChart.destroy();

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
      plugins: { legend: { labels: { color: "#e2e8f0" } } },
      scales: {
        x: { ticks: { color: "#cbd5e1" } },
        y: { min: 0, max: 100, ticks: { color: "#cbd5e1" }, beginAtZero: true }
      }
    }
  });
}

function openSummaryModal() {
  clearCeremonyTimer();
  soundEngine.stopWelcomeTheme();
  soundEngine.stopSelectionTheme();

  const totalGoals = game.getGoals();
  const redGoals = game.getMissed();
  const totalRounds = game.getHistory().length;

  if (game.getMode() === "final" && totalGoals !== redGoals) {
    const winnerTeam = totalGoals > redGoals ? "blue" : "red";
    el.penaltyLoading.classList.add("hidden");
    el.penaltyStage.classList.remove("hidden");
    animateTrophyCeremony(winnerTeam, null);

    ceremonyTimeoutId = setTimeout(() => {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
      displaySummaryContent(totalGoals, redGoals, totalRounds);
    }, 4000);
    return;
  }

  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  displaySummaryContent(totalGoals, redGoals, totalRounds);
}

function syncSettingsFromInputs() {
  const pRounds = clampInt(el.roundsInput.value, 6, 9, DEFAULT_PENALTY_ROUNDS);
  const pDuration = clampInt(el.durationInput.value, 10, 30, DEFAULT_PENALTY_DURATION);
  const fRounds = clampInt(el.finalRoundsInput.value, 6, 9, DEFAULT_FINAL_ROUNDS);
  const fDuration = clampInt(el.finalDurationInput.value, 10, 20, DEFAULT_FINAL_DURATION);

  el.roundsInput.value = String(pRounds);
  el.durationInput.value = String(pDuration);
  el.finalRoundsInput.value = String(fRounds);
  el.finalDurationInput.value = String(fDuration);

  game.updateSettings({
    penaltyRounds: pRounds,
    penaltyDuration: pDuration,
    finalRounds: fRounds,
    finalDuration: fDuration
  });
}

document.addEventListener(
  "pointerdown",
  () => {
    if (!el.startScreen.classList.contains("hidden") && soundEngine.isSoundEnabled()) {
      soundEngine.startWelcomeTheme();
    }
  },
  { once: true }
);

el.homeBrandBtn.addEventListener("click", () => {
  showStartScreen();
});

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
el.finalRoundsInput.addEventListener("change", syncSettingsFromInputs);
el.finalDurationInput.addEventListener("change", syncSettingsFromInputs);

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

el.playBtn.addEventListener("click", () => {
  syncSettingsFromInputs();
  showModeScreen();
});

el.choosePenaltyModeBtn.addEventListener("click", () => {
  game.setMode("penalty");
  showCharacterScreen();
});

el.chooseFinalModeBtn.addEventListener("click", () => {
  game.setMode("final");
  beginMatchWithBanner(t("finalStartingMsg"));
});

el.playerCards.forEach((card) => {
  card.addEventListener("click", () => {
    el.playerCards.forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedPlayerId = card.dataset.player || "messi";
  });
});

el.confirmCharacterBtn.addEventListener("click", () => {
  beginMatchWithBanner(t("duelStartingMsg"));
});

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

el.shootBtn.addEventListener("click", () => {
  const guess = game.getGuess();
  if (!guess || game.isResolved()) return;
  resolveRound(guess, false);
});

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
  clearCeremonyTimer();
  removeRematchButtonIfExists();
  el.modal.classList.add("hidden");
  el.trophyBanner.classList.add("hidden");
  el.confettiLayer.classList.add("hidden");
  el.confettiLayer.innerHTML = "";
  game.resetMatch(true);
  showStartScreen();
});

applyLanguageUI();
showStartScreen();