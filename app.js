// 1. 150 Iconic Landmarks, Cityscapes & Structures Worldwide (EN & TR)
// Format: [name, difficulty, clueEN, clueTR, coords, wikiTitle]
const RAW_LOCATIONS = [
  // ================= EASY (50) =================
  ["Eiffel Tower, Paris", "Easy", "Europe • France • Paris • Iron tower by the Seine", "Avrupa • Fransa • Paris • Seine Nehri kenarında demir kule", [48.8584, 2.2945], "Eiffel_Tower"],
  ["Colosseum, Rome", "Easy", "Europe • Italy • Rome • Ancient Roman arena", "Avrupa • İtalya • Roma • Antik Roma gladyatör arenası", [41.8902, 12.4922], "Colosseum"],
  ["Statue of Liberty, New York", "Easy", "North America • USA • New York Harbor • Copper statue", "Kuzey Amerika • ABD • New York Limanı • Bakır heykel", [40.6892, -74.0445], "Statue_of_Liberty"],
  ["Big Ben, London", "Easy", "Europe • UK • London • Clock tower by Thames", "Avrupa • İngiltere • Londra • Thames kıyısında saat kulesi", [51.5007, -0.1246], "Big_Ben"],
  ["Pyramids of Giza, Egypt", "Easy", "North Africa • Egypt • Near Cairo • Desert pyramids", "Kuzey Afrika • Mısır • Kahire yakını • Çöl piramitleri", [29.9792, 31.1342], "Great_Pyramid_of_Giza"],
  ["Taj Mahal, Agra", "Easy", "South Asia • India • Agra • White marble monument", "Güney Asya • Hindistan • Agra • Beyaz mermer yapı", [27.1751, 78.0421], "Taj_Mahal"],
  ["Christ the Redeemer, Rio de Janeiro", "Easy", "South America • Brazil • Rio • Statue on Corcovado hill", "Güney Amerika • Brezilya • Rio • Tepe üstü dev heykel", [-22.9519, -43.2105], "Christ_the_Redeemer_(statue)"],
  ["Sydney Opera House, Australia", "Easy", "Oceania • Australia • Sydney • Sail-shaped harbor roof", "Okyanusya • Avustralya • Sidney • Yelken çatılı liman yapısı", [-33.8568, 151.2153], "Sydney_Opera_House"],
  ["Sagrada Familia, Barcelona", "Easy", "Europe • Spain • Barcelona • Gaudi church towers", "Avrupa • İspanya • Barselona • Gaudi'nin ünlü bazilikası", [41.4036, 2.1744], "Sagrada_Fam%C3%ADlia"],
  ["Acropolis of Athens, Greece", "Easy", "Europe • Greece • Athens • Parthenon on rocky hill", "Avrupa • Yunanistan • Atina • Tepe üstü Parthenon", [37.9715, 23.7257], "Acropolis_of_Athens"],
  ["Mount Fuji, Japan", "Easy", "East Asia • Japan • Honshu • Snow-capped volcano cone", "Doğu Asya • Japonya • Honşu • Karlı koni volkan", [35.3606, 138.7274], "Mount_Fuji"],
  ["Golden Gate Bridge, San Francisco", "Easy", "North America • USA • California • Orange suspension bridge", "Kuzey Amerika • ABD • Kaliforniya • Turuncu asma köprü", [37.8199, -122.4783], "Golden_Gate_Bridge"],
  ["Burj Khalifa, Dubai", "Easy", "Middle East • UAE • Dubai • World's tallest tower", "Orta Doğu • BAE • Dubai • Dünyanın en yüksek gökdeleni", [25.1972, 55.2744], "Burj_Khalifa"],
  ["Hagia Sophia, Istanbul", "Easy", "Europe/Asia border • Türkiye • Istanbul • Historic dome", "Avrupa-Asya • Türkiye • İstanbul • Tarihi büyük kubbe", [41.0086, 28.9802], "Hagia_Sophia"],
  ["Stonehenge, England", "Easy", "Europe • UK • Southern England • Prehistoric stone ring", "Avrupa • İngiltere • Güney İngiltere • Tarih öncesi taş çember", [51.1789, -1.8262], "Stonehenge"],
  ["Leaning Tower of Pisa, Italy", "Easy", "Europe • Italy • Tuscany • Tilted white bell tower", "Avrupa • İtalya • Toskana • Eğik çan kulesi", [43.7230, 10.3966], "Leaning_Tower_of_Pisa"],
  ["Louvre Museum, Paris", "Easy", "Europe • France • Paris • Glass pyramid courtyard", "Avrupa • Fransa • Paris • Cam piramitli müze avlusu", [48.8606, 2.3376], "Louvre"],
  ["Moscow Kremlin, Russia", "Easy", "Eastern Europe • Russia • Moscow • Red Square walls/towers", "Doğu Avrupa • Rusya • Moskova • Kızıl Meydan ve kuleler", [55.7520, 37.6175], "Moscow_Kremlin"],
  ["Brandenburg Gate, Berlin", "Easy", "Central Europe • Germany • Berlin • Classical city gate", "Orta Avrupa • Almanya • Berlin • Tarihi sütunlu kapı", [52.5163, 13.3777], "Brandenburg_Gate"],
  ["CN Tower, Toronto", "Easy", "North America • Canada • Ontario • Tall Toronto needle tower", "Kuzey Amerika • Kanada • Ontario • Toronto'nun uzun kulesi", [43.6426, -79.3871], "CN_Tower"],
  ["Empire State Building, New York", "Easy", "North America • USA • Manhattan • Classic NYC skyscraper", "Kuzey Amerika • ABD • Manhattan • Klasik New York gökdeleni", [40.7484, -73.9857], "Empire_State_Building"],
  ["Grand Canyon, Arizona", "Easy", "North America • USA • Arizona • Red rock river gorge", "Kuzey Amerika • ABD • Arizona • Kızıl kayalı büyük kanyon", [36.1069, -112.1129], "Grand_Canyon"],
  ["Niagara Falls, Canada/USA", "Easy", "North America • Border of NY & Ontario • Huge waterfalls", "Kuzey Amerika • ABD-Kanada sınırı • Dev şelaleler", [43.0962, -79.0377], "Niagara_Falls"],
  ["Buckingham Palace, London", "Easy", "Europe • UK • London • British royal palace", "Avrupa • İngiltere • Londra • Kraliyet sarayı", [51.5014, -0.1419], "Buckingham_Palace"],
  ["Tower of London, England", "Easy", "Europe • UK • London • Historic castle by Thames", "Avrupa • İngiltere • Londra • Thames kıyısında kale", [51.5081, -0.0759], "Tower_of_London"],
  ["St. Peter's Basilica, Vatican City", "Easy", "Europe • Vatican inside Rome • Huge church dome", "Avrupa • Vatikan (Roma içi) • Büyük bazilika kubbesi", [41.9022, 12.4539], "St._Peter%27s_Basilica"],
  ["Neuschwanstein Castle, Germany", "Easy", "Central Europe • Germany • Bavaria • Alpine hill castle", "Orta Avrupa • Almanya • Bavyera • Dağ tepesinde şato", [47.5576, 10.7498], "Neuschwanstein_Castle"],
  ["Alhambra, Granada", "Easy", "Europe • Spain • Andalusia • Granada palace & hills", "Avrupa • İspanya • Endülüs • Granada sarayı ve Sierra Nevada", [37.1760, -3.5881], "Alhambra"],
  ["Chichen Itza, Mexico", "Easy", "North America • Mexico • Yucatan Peninsula • Step pyramid", "Kuzey Amerika • Meksika • Yucatan Yarımadası • Basamaklı piramit", [20.6843, -88.5678], "Chichen_Itza"],
  ["Machu Picchu, Peru", "Easy", "South America • Peru • Andes Mountains • Ancient Inca ruins", "Güney Amerika • Peru • And Dağları • Antik İnka kenti", [-13.1631, -72.5450], "Machu_Picchu"],
  ["Table Mountain, Cape Town", "Easy", "Southern Africa • South Africa • Cape Town • Flat-top peak", "Güney Afrika • Güney Afrika Cumh. • Cape Town • Düz tepeli dağ", [-33.9628, 18.4098], "Table_Mountain"],
  ["Great Wall of China, Badaling", "Easy", "East Asia • Northern China • Near Beijing • Mountain wall", "Doğu Asya • Kuzey Çin • Pekin yakını • Dağ surları", [40.3584, 116.0201], "Great_Wall_of_China"],
  ["Forbidden City, Beijing", "Easy", "East Asia • China • Beijing • Imperial palace complex", "Doğu Asya • Çin • Pekin • İmparatorluk saray kompleksi", [39.9163, 116.3972], "Forbidden_City"],
  ["Angkor Wat, Cambodia", "Easy", "Southeast Asia • Cambodia • Siem Reap • Lotus temple towers", "Güneydoğu Asya • Kamboçya • Siem Reap • Tapınak kuleleri", [13.4125, 103.8670], "Angkor_Wat"],
  ["Petra Treasury, Jordan", "Easy", "Middle East • Jordan • Desert canyon • Rose rock facade", "Orta Doğu • Ürdün • Çöl vadisi • Kayaya oyulmuş cephe", [30.3285, 35.4444], "Petra"],
  ["Santorini Caldera, Greece", "Easy", "Europe • Greece • Aegean Sea island • White cliff houses", "Avrupa • Yunanistan • Ege adası • Beyaz uçurum evleri", [36.4618, 25.3753], "Santorini"],
  ["Grand Canal, Venice", "Easy", "Europe • Italy • Northern Adriatic • Canal city & boats", "Avrupa • İtalya • Kuzey Adriyatik • Kanal ve tekneler", [45.4371, 12.3326], "Grand_Canal_(Venice)"],
  ["Mount Rushmore, South Dakota", "Easy", "North America • USA • South Dakota • 4 carved faces in rock", "Kuzey Amerika • ABD • Güney Dakota • Kayaya oyulmuş 4 yüz", [43.8791, -103.4591], "Mount_Rushmore"],
  ["Hollywood Sign, Los Angeles", "Easy", "North America • USA • Southern California • White hill letters", "Kuzey Amerika • ABD • Güney Kaliforniya • Tepedeki beyaz harfler", [34.1341, -118.3215], "Hollywood_Sign"],
  ["Space Needle, Seattle", "Easy", "North America • USA • Washington State • Flying-saucer tower", "Kuzey Amerika • ABD • Washington Eyaleti • Gözlem kulesi", [47.6205, -122.3493], "Space_Needle"],
  ["Marina Bay Sands, Singapore", "Easy", "Southeast Asia • Singapore • Harbor skyline • Boat rooftop", "Güneydoğu Asya • Singapur • Liman • Üstü tekne şekilli kuleler", [1.2834, 103.8607], "Marina_Bay_Sands"],
  ["Tokyo Skytree, Japan", "Easy", "East Asia • Japan • Tokyo • Very tall modern tower", "Doğu Asya • Japonya • Tokyo • Çok yüksek modern kule", [35.7101, 139.8107], "Tokyo_Skytree"],
  ["N Seoul Tower, South Korea", "Easy", "East Asia • South Korea • Seoul • Namsan hill tower", "Doğu Asya • Güney Kore • Seul • Tepe üstü kule", [37.5512, 126.9882], "N_Seoul_Tower"],
  ["Charles Bridge, Prague", "Easy", "Central Europe • Czechia • Prague • Statue-lined stone bridge", "Orta Avrupa • Çekya • Prag • Heykelli taş köprü", [50.0865, 14.4114], "Charles_Bridge"],
  ["Schönbrunn Palace, Vienna", "Easy", "Central Europe • Austria • Vienna • Yellow imperial palace", "Orta Avrupa • Avusturya • Viyana • Sarı imparatorluk sarayı", [48.1845, 16.3122], "Sch%C3%B6nbrunn_Palace"],
  ["Hungarian Parliament, Budapest", "Easy", "Central Europe • Hungary • Budapest • Gothic building by Danube", "Orta Avrupa • Macaristan • Budapeşte • Tuna kıyısında gotik yapı", [47.5076, 19.0457], "Hungarian_Parliament_Building"],
  ["Blue Mosque, Istanbul", "Easy", "Türkiye • Istanbul • Sultanahmet • Blue tiles & minarets", "Türkiye • İstanbul • Sultanahmet • Mavi çinili cami", [41.0054, 28.9768], "Sultan_Ahmed_Mosque"],
  ["Göreme Fairy Chimneys, Cappadocia", "Easy", "Türkiye • Central Anatolia • Nevşehir/Cappadocia • Rock cones", "Türkiye • İç Anadolu • Kapadokya • Peri bacaları", [38.6431, 34.8289], "G%C3%B6reme"],
  ["Anıtkabir, Ankara", "Easy", "Türkiye • Central Anatolia • Ankara • Mausoleum complex", "Türkiye • İç Anadolu • Ankara • Anıt mezar kompleksi", [39.9255, 32.8369], "An%C4%B1tkabir"],
  ["Sugarloaf Mountain, Rio de Janeiro", "Easy", "South America • Brazil • Rio • Bay & cable car rock peak", "Güney Amerika • Brezilya • Rio • Koy kıyısı granit tepe", [-22.9486, -43.1566], "Sugarloaf_Mountain"],

  // ================= MEDIUM (50) =================
  ["Galata Tower, Istanbul", "Medium", "Türkiye • Istanbul • Beyoğlu side of Golden Horn • Stone tower", "Türkiye • İstanbul • Haliç kuzeyi • Taş kule", [41.0256, 28.9741], "Galata_Tower"],
  ["Library of Celsus, Ephesus", "Medium", "Türkiye • Aegean coast • Near İzmir/Selçuk • Ancient facade", "Türkiye • Ege kıyısı • İzmir/Selçuk yakını • Antik cephe", [37.9396, 27.3409], "Library_of_Celsus"],
  ["Pamukkale Terraces, Denizli", "Medium", "Türkiye • Southwestern Anatolia • Denizli • White thermal pools", "Türkiye • Güneybatı Anadolu • Denizli • Beyaz travertenler", [37.9204, 29.1204], "Pamukkale"],
  ["Sümela Monastery, Trabzon", "Medium", "Türkiye • Black Sea coast • Trabzon/Maçka • Cliff monastery", "Türkiye • Karadeniz kıyısı • Trabzon/Maçka • Uçurum manastırı", [40.6897, 39.6583], "S%C3%BCmela_Monastery"],
  ["Mount Nemrut, Adıyaman", "Medium", "Türkiye • Southeastern Anatolia • Adıyaman • Stone heads on peak", "Türkiye • Güneydoğu Anadolu • Adıyaman • Zirvedeki taş başlar", [37.9806, 38.7408], "Mount_Nemrut"],
  ["Rijksmuseum, Amsterdam", "Medium", "Western Europe • Netherlands • Amsterdam • Brick museum", "Batı Avrupa • Hollanda • Amsterdam • Tuğla müze binası", [52.3600, 4.8852], "Rijksmuseum"],
  ["Atomium, Brussels", "Medium", "Western Europe • Belgium • Brussels • Connected metal spheres", "Batı Avrupa • Belçika • Brüksel • Metal kürelerden yapı", [50.8949, 4.3415], "Atomium"],
  ["Belém Tower, Lisbon", "Medium", "Western Europe • Portugal • Lisbon • Tagus river stone tower", "Batı Avrupa • Portekiz • Lizbon • Nehir kıyısı taş kule", [38.6916, -9.2160], "Bel%C3%A9m_Tower"],
  ["Milan Cathedral (Duomo), Italy", "Medium", "Southern Europe • Northern Italy • Milan • Spiky Gothic marble", "Güney Avrupa • Kuzey İtalya • Milano • Gotik mermer katedral", [45.4642, 9.1900], "Milan_Cathedral"],
  ["Rialto Bridge, Venice", "Medium", "Southern Europe • Northern Italy • Venice • Arched canal bridge", "Güney Avrupa • Kuzey İtalya • Venedik • Kemerli kanal köprüsü", [45.4380, 12.3359], "Rialto_Bridge"],
  ["Pont du Gard, France", "Medium", "Western Europe • Southern France • Near Nîmes • Roman bridge", "Batı Avrupa • Güney Fransa • Nîmes yakını • Antik su kemeri", [43.9473, 4.5355], "Pont_du_Gard"],
  ["Mont Saint-Michel, France", "Medium", "Western Europe • Normandy coast • France • Tidal island abbey", "Batı Avrupa • Normandiya kıyısı • Fransa • Ada manastırı", [48.6361, -1.5115], "Mont-Saint-Michel"],
  ["Wawel Castle, Kraków", "Medium", "Central/Eastern Europe • Poland • Kraków • Vistula hill castle", "Orta/Doğu Avrupa • Polonya • Kraków • Tepe üstü şato", [50.0540, 19.9354], "Wawel_Castle"],
  ["Lake Bled Island, Slovenia", "Medium", "Central Europe • Slovenia • Julian Alps • Lake with church", "Orta Avrupa • Slovenya • Alpler • Adalı göl manzarası", [46.3636, 14.0938], "Lake_Bled"],
  ["Walls of Dubrovnik, Croatia", "Medium", "Balkans / Adriatic • Southern Croatia • Dubrovnik • Sea walls", "Balkanlar / Adriyatik • Güney Hırvatistan • Dubrovnik • Surlar", [42.6419, 18.1086], "Walls_of_Dubrovnik"],
  ["Plitvice Lakes, Croatia", "Medium", "Balkans • Central Croatia • Forest waterfalls & lakes", "Balkanlar • Orta Hırvatistan • Orman içi göller ve şelaleler", [44.8654, 15.5820], "Plitvice_Lakes_National_Park"],
  ["Hallstatt Alpine Village, Austria", "Medium", "Central Europe • Austria • Salzburg region • Lakeside village", "Orta Avrupa • Avusturya • Salzburg bölgesi • Göl kıyısı köy", [47.5622, 13.6493], "Hallstatt"],
  ["Matterhorn Peak, Alps", "Medium", "Europe • Switzerland & Italy border • Zermatt • Sharp peak", "Avrupa • İsviçre-İtalya sınırı • Zermatt • Sivri dağ zirvesi", [45.9763, 7.6586], "Matterhorn"],
  ["Jet d'Eau, Geneva", "Medium", "Western Europe • Switzerland • Geneva • High lake water jet", "Batı Avrupa • İsviçre • Cenevre • Gölde yüksek su fıskiyesi", [46.2074, 6.1559], "Jet_d%27Eau"],
  ["Nyhavn Harborfront, Copenhagen", "Medium", "Northern Europe • Denmark • Copenhagen • Colored canal houses", "Kuzey Avrupa • Danimarka • Kopenhag • Renkli liman evleri", [55.6800, 12.5906], "Nyhavn"],
  ["Bryggen Wharf, Bergen", "Medium", "Northern Europe • Western Norway • Bergen • Wooden harbor row", "Kuzey Avrupa • Batı Norveç • Bergen • Ahşap liman evleri", [60.3973, 5.3245], "Bryggen"],
  ["Vasa Museum, Stockholm", "Medium", "Northern Europe • Sweden • Stockholm • Historic wooden ship", "Kuzey Avrupa • İsveç • Stockholm • Tarihi ahşap savaş gemisi", [59.3280, 18.0914], "Vasa_Museum"],
  ["Helsinki Cathedral, Finland", "Medium", "Northern Europe • Finland • Helsinki • White church & stairs", "Kuzey Avrupa • Finlandiya • Helsinki • Beyaz katedral ve merdiven", [60.1704, 24.9522], "Helsinki_Cathedral"],
  ["Alexander Nevsky Cathedral, Tallinn", "Medium", "Baltic / Northern Europe • Estonia • Tallinn • Dome church", "Baltık / Kuzey Avrupa • Estonya • Tallinn • Kubbeli kilise", [59.4355, 24.7393], "Alexander_Nevsky_Cathedral,_Tallinn"],
  ["Hawa Mahal, Jaipur", "Medium", "South Asia • India • Rajasthan • Jaipur pink lattice wall", "Güney Asya • Hindistan • Racastan • Jaipur pembe cephe", [26.9239, 75.8267], "Hawa_Mahal"],
  ["Golden Temple, Amritsar", "Medium", "South Asia • India • Punjab • Amritsar • Gold shrine in pool", "Güney Asya • Hindistan • Pencap • Amritsar • Havuz içi altın yapı", [31.6200, 74.8765], "Golden_Temple"],
  ["Wat Arun, Bangkok", "Medium", "Southeast Asia • Thailand • Bangkok • River temple spire", "Güneydoğu Asya • Tayland • Bangkok • Nehir kıyısı tapınak", [13.7437, 100.4889], "Wat_Arun"],
  ["Batu Caves, Malaysia", "Medium", "Southeast Asia • Malaysia • Near Kuala Lumpur • Giant statue", "Güneydoğu Asya • Malezya • Kuala Lumpur yakını • Dev heykel", [3.2379, 101.6840], "Batu_Caves"],
  ["Borobudur Temple, Indonesia", "Medium", "Southeast Asia • Indonesia • Java Island • Stepped stupa", "Güneydoğu Asya • Endonezya • Cava Adası • Basamaklı tapınak", [-7.6079, 110.2038], "Borobudur"],
  ["Fushimi Inari Gates, Kyoto", "Medium", "East Asia • Japan • Kyoto • Red torii gate tunnel", "Doğu Asya • Japonya • Kyoto • Kırmızı torii kapı tüneli", [34.9671, 135.7727], "Fushimi_Inari-taisha"],
  ["Himeji Castle, Japan", "Medium", "East Asia • Japan • Hyogo/Kansai • White feudal castle", "Doğu Asya • Japonya • Kansai bölgesi • Beyaz kale", [34.8394, 134.6939], "Himeji_Castle"],
  ["Gyeongbokgung Palace, Seoul", "Medium", "East Asia • South Korea • Seoul • Traditional palace gate", "Doğu Asya • Güney Kore • Seul • Geleneksel saray kapısı", [37.5796, 126.9770], "Gyeongbokgung"],
  ["Victoria Peak Skyline, Hong Kong", "Medium", "East Asia • South China coast • Hong Kong • Bay & high-rises", "Doğu Asya • Güney Çin kıyısı • Hong Kong • Liman ve gökdelenler", [22.2759, 114.1455], "Victoria_Peak_(Hong_Kong)"],
  ["Lotte World Tower, Seoul", "Medium", "East Asia • South Korea • Seoul • Tall tapered glass tower", "Doğu Asya • Güney Kore • Seul • Sivrilen yüksek cam kule", [37.5126, 127.1025], "Lotte_World_Tower"],
  ["Iguazu Falls, South America", "Medium", "South America • Brazil & Argentina border • Wide waterfalls", "Güney Amerika • Brezilya-Arjantin sınırı • Geniş şelaleler", [-25.6953, -54.4367], "Iguazu_Falls"],
  ["Salar de Uyuni, Bolivia", "Medium", "South America • Western Bolivia • Andes • White salt plain", "Güney Amerika • Batı Bolivya • Andlar • Beyaz tuz düzlüğü", [-20.1338, -67.4891], "Salar_de_Uyuni"],
  ["Casa Rosada, Buenos Aires", "Medium", "South America • Argentina • Buenos Aires • Pink palace building", "Güney Amerika • Arjantin • Buenos Aires • Pembe saray binası", [-34.6083, -58.3702], "Casa_Rosada"],
  ["Palacio de La Moneda, Santiago", "Medium", "South America • Chile • Santiago • Central government palace", "Güney Amerika • Şili • Santiago • Tarihi saray binası", [-33.4429, -70.6539], "Palacio_de_La_Moneda"],
  ["Teotihuacan Pyramids, Mexico", "Medium", "North America • Central Mexico • Near Mexico City • Sun pyramid", "Kuzey Amerika • Orta Meksika • Mexico City yakını • Piramit", [19.6925, -98.8438], "Teotihuacan"],
  ["Lake Louise, Banff", "Medium", "North America • Western Canada • Alberta Rockies • Blue lake", "Kuzey Amerika • Batı Kanada • Alberta Kayalık Dağları • Göl", [51.4254, -116.1773], "Lake_Louise_(Alberta)"],
  ["White House, Washington D.C.", "Medium", "North America • USA • Washington D.C. • White executive house", "Kuzey Amerika • ABD • Washington D.C. • Beyaz saray binası", [38.8977, -77.0365], "White_House"],
  ["Lincoln Memorial, Washington D.C.", "Medium", "North America • USA • Washington D.C. • Greek-style columns", "Kuzey Amerika • ABD • Washington D.C. • Sütunlu anıt yapı", [38.8893, -77.0502], "Lincoln_Memorial"],
  ["Monument Valley, USA", "Medium", "North America • USA • Utah/Arizona border • Red rock towers", "Kuzey Amerika • ABD • Utah-Arizona sınırı • Kızıl kaya kuleleri", [36.9980, -110.0985], "Monument_Valley"],
  ["Uluru Rock, Australia", "Medium", "Oceania • Central Australia • Northern Territory • Red rock", "Okyanusya • Orta Avustralya • Kızıl dev kaya kütlesi", [-25.3444, 131.0369], "Uluru"],
  ["Twelve Apostles, Australia", "Medium", "Oceania • Southern Australia • Victoria coast • Sea stacks", "Okyanusya • Güney Avustralya • Victoria kıyısı • Deniz kayaları", [-38.6621, 143.1051], "The_Twelve_Apostles_(Victoria)"],
  ["Milford Sound, New Zealand", "Medium", "Oceania • New Zealand • South Island fjord • Steep cliffs", "Okyanusya • Yeni Zelanda • Güney Ada • Fiyort ve dik kayalar", [-44.6414, 167.8974], "Milford_Sound"],
  ["Sky Tower, Auckland", "Medium", "Oceania • New Zealand • North Island • Auckland tower", "Okyanusya • Yeni Zelanda • Kuzey Ada • Auckland gözlem kulesi", [-36.8485, 174.7622], "Sky_Tower_(Auckland)"],
  ["Luxor Temple, Egypt", "Medium", "North Africa • Egypt • Upper Egypt / Nile • Ancient columns", "Kuzey Afrika • Mısır • Nil kıyısı • Antik sütunlu tapınak", [25.6995, 32.6397], "Luxor_Temple"],
  ["Hassan II Mosque, Casablanca", "Medium", "North Africa • Morocco • Atlantic coast • Casablanca minaret", "Kuzey Afrika • Fas • Atlas Okyanusu kıyısı • Kazablanka camisi", [33.6086, -7.6327], "Hassan_II_Mosque"],
  ["Stari Most Bridge, Mostar", "Medium", "Balkans • Bosnia and Herzegovina • Mostar • Arch over river", "Balkanlar • Bosna-Hersek • Mostar • Nehir üstü tek kemer köprü", [43.3373, 17.8150], "Stari_Most"],

  // ================= HARD (50) =================
  ["Ihlara Canyon, Aksaray", "Hard", "Türkiye • Central Anatolia • Aksaray province • Green canyon", "Türkiye • İç Anadolu • Aksaray • Yeşil vadi ve kanyon", [38.2450, 34.3036], "Ihlara_Valley"],
  ["Gaziantep Castle, Türkiye", "Hard", "Türkiye • Southeastern Anatolia • Gaziantep city center • Castle", "Türkiye • Güneydoğu Anadolu • Gaziantep • Şehir merkezi kalesi", [37.0661, 37.3833], "Gaziantep_Castle"],
  ["Hattusa Ruins, Çorum", "Hard", "Türkiye • North-Central Anatolia • Çorum/Boğazkale • Hittites", "Türkiye • Orta Karadeniz/İç Anadolu • Çorum • Hitit başkenti", [40.0178, 34.6156], "Hattusa"],
  ["Çatalhöyük Mound, Konya", "Hard", "Türkiye • Central Anatolia • Konya/Çumra • Ancient mound", "Türkiye • İç Anadolu • Konya/Çumra • Neolitik höyük", [37.6675, 32.8278], "%C3%87atalh%C3%B6y%C3%BCk"],
  ["Safranbolu Timber Houses, Karabük", "Hard", "Türkiye • Western Black Sea • Karabük • Traditional houses", "Türkiye • Batı Karadeniz • Karabük • Geleneksel konaklar", [41.2436, 32.6942], "Safranbolu"],
  ["Pergamon Acropolis, İzmir", "Hard", "Türkiye • Aegean coast • İzmir/Bergama • Steep hilltop ruins", "Türkiye • Ege kıyısı • İzmir/Bergama • Dik yamaç antik kent", [39.1325, 27.1844], "Pergamon"],
  ["Aspendos Roman Theatre, Antalya", "Hard", "Türkiye • Mediterranean coast • Antalya/Serik • Ancient theatre", "Türkiye • Akdeniz kıyısı • Antalya/Serik • Antik tiyatro", [36.9386, 31.1722], "Aspendos"],
  ["Butterfly Valley, Fethiye", "Hard", "Türkiye • Southwestern coast • Muğla/Fethiye • Coastal cove", "Türkiye • Güneybatı kıyısı • Muğla/Fethiye • Kelebekler Vadisi", [36.4939, 29.1244], "Butterfly_Valley_(Turkey)"],
  ["Uzungöl Lake & Valley, Trabzon", "Hard", "Türkiye • Eastern Black Sea • Trabzon/Çaykara • Mountain lake", "Türkiye • Doğu Karadeniz • Trabzon/Çaykara • Dağ gölü", [40.6186, 40.2939], "Uzung%C3%B6l"],
  ["Ishak Pasha Palace, Ağrı", "Hard", "Türkiye • Eastern Anatolia • Ağrı/Doğubayazıt • Mountain palace", "Türkiye • Doğu Anadolu • Ağrı/Doğubayazıt • Dağ üstü saray", [39.5186, 44.1292], "Ishak_Pasha_Palace"],
  ["Ani Archaeological Site, Kars", "Hard", "Türkiye • Northeast near Armenia border • Kars • Ancient ruins", "Türkiye • Kuzeydoğu (Ermenistan sınırı) • Kars • Antik kent", [40.5064, 43.5725], "Ani"],
  ["Mardin Old City Skyline, Türkiye", "Hard", "Türkiye • Southeastern Anatolia • Mardin • Stone hill houses", "Türkiye • Güneydoğu Anadolu • Mardin • Taş yamaç evleri", [37.3131, 40.7350], "Mardin"],
  ["Rila Monastery, Bulgaria", "Hard", "Balkans • Southwestern Bulgaria • Rila Mountains • Monastery", "Balkanlar • Güneybatı Bulgaristan • Rila Dağları • Manastır", [42.1333, 23.3400], "Rila_Monastery"],
  ["Meteora Cliffs & Monasteries, Greece", "Hard", "Balkans • Central Greece • Thessaly • Monasteries on rocks", "Balkanlar • Orta Yunanistan • Teselya • Kaya üstü manastırlar", [39.7217, 21.6306], "Meteora"],
  ["Pena Palace, Sintra", "Hard", "Western Europe • Portugal • Near Lisbon • Colorful hill palace", "Batı Avrupa • Portekiz • Lizbon yakını • Renkli tepe sarayı", [38.7876, -9.3906], "Pena_Palace"],
  ["Tower of Hercules, A Coruña", "Hard", "Western Europe • Northwest Spain • Galicia coast • Lighthouse", "Batı Avrupa • Kuzeybatı İspanya • Galiçya • Antik deniz feneri", [43.3859, -8.4065], "Tower_of_Hercules"],
  ["Giant's Causeway, Northern Ireland", "Hard", "British Isles • Northern Ireland • Antrim coast • Basalt pillars", "Britanya Adaları • Kuzey İrlanda • Bazalt sütun sahili", [55.2408, -6.5116], "Giant%27s_Causeway"],
  ["Skellig Michael, Ireland", "Hard", "British Isles • Southwest Ireland • Atlantic rocky island", "Britanya Adaları • Güneybatı İrlanda • Atlas kayalık adası", [51.7717, -10.5397], "Skellig_Michael"],
  ["Reine Village & Fjords, Lofoten", "Hard", "Northern Europe • Northern Norway • Lofoten islands • Fjords", "Kuzey Avrupa • Kuzey Norveç • Lofoten adaları • Fiyort köyü", [67.9324, 13.0886], "Reine"],
  ["Þingvellir Rift Valley, Iceland", "Hard", "North Atlantic • Iceland • Near Reykjavik • Rift valley & lake", "Kuzey Atlantik • İzlanda • Reykjavik yakını • Rift vadisi", [64.2559, -21.1295], "%C3%9Eingvellir"],
  ["Preikestolen Cliff, Norway", "Hard", "Northern Europe • Southwest Norway • Near Stavanger • Cliff", "Kuzey Avrupa • Güneybatı Norveç • Stavanger yakını • Uçurum", [58.9864, 6.1904], "Preikestolen"],
  ["Curonian Spit Dunes, Baltic", "Hard", "Baltic coast • Lithuania & Kaliningrad • Long sand peninsula", "Baltık kıyısı • Litvanya / Kaliningrad • Uzun kum yarımadası", [55.2750, 21.0250], "Curonian_Spit"],
  ["Wooden Churches of Maramureş", "Hard", "Eastern Europe • Northern Romania • Maramureş • Wooden church", "Doğu Avrupa • Kuzey Romanya • Maramureş • Ahşap kilise", [47.7400, 24.0300], "Wooden_churches_of_Maramure%C8%99"],
  ["Bran Castle, Transylvania", "Hard", "Central/Eastern Europe • Romania • Transylvania • Hill castle", "Orta/Doğu Avrupa • Romanya • Transilvanya • Tepe kalesi", [45.5150, 25.3672], "Bran_Castle"],
  ["Kizhi Pogost, Lake Onega", "Hard", "Eastern Europe • Northwest Russia • Karelia • Wooden domes", "Doğu Avrupa • Kuzeybatı Rusya • Karelya • Ahşap kubbeler", [62.0675, 35.2206], "Kizhi_Pogost"],
  ["Registan Square, Samarkand", "Hard", "Central Asia • Uzbekistan • Samarkand • Turquoise tile plaza", "Orta Asya • Özbekistan • Semerkant • Turkuaz çinili meydan", [39.6542, 66.9756], "Registan"],
  ["Maiden Tower, Baku", "Hard", "Caucasus • Azerbaijan • Baku old city • Stone tower by sea", "Kafkasya • Azerbaycan • Bakü • Deniz kıyısında taş kule", [40.3661, 49.8372], "Maiden_Tower_(Baku)"],
  ["Garni Temple, Armenia", "Hard", "Caucasus • Armenia • Near Yerevan • Classical temple", "Kafkasya • Ermenistan • Erivan yakını • Antik sütunlu tapınak", [40.1122, 44.7303], "Temple_of_Garni"],
  ["Ellora Caves, India", "Hard", "South Asia • Western India • Maharashtra • Rock-cut caves", "Güney Asya • Batı Hindistan • Maharaştra • Kaya oyma tapınak", [20.0268, 75.1791], "Ellora_Caves"],
  ["Bagan Temple Plain, Myanmar", "Hard", "Southeast Asia • Central Myanmar • Mandalay region • Pagodas", "Güneydoğu Asya • Orta Myanmar • Antik tapınak ovası", [21.1717, 94.8585], "Bagan"],
  ["Ha Long Bay Karsts, Vietnam", "Hard", "Southeast Asia • Northern Vietnam • Gulf of Tonkin • Karst bay", "Güneydoğu Asya • Kuzey Vietnam • Tonkin Körfezi • Kaya adalar", [20.9101, 107.1839], "H%E1%BA%A1_Long_Bay"],
  ["Jiuzhaigou Valley, Sichuan", "Hard", "East Asia • Southwest China • Sichuan • Colored mountain lakes", "Doğu Asya • Güneybatı Çin • Siçuan • Renkli dağ gölleri", [33.2600, 103.9186], "Jiuzhaigou_Valley"],
  ["Zhangjiajie Sandstone Pillars", "Hard", "East Asia • Central-South China • Hunan • Tall rock columns", "Doğu Asya • Güney-Orta Çin • Hunan • Yüksek kaya sütunları", [29.3249, 110.4343], "Zhangjiajie_National_Forest_Park"],
  ["Shirakawa-go Village, Japan", "Hard", "East Asia • Central Japan • Gifu/Hida • Steep thatched roofs", "Doğu Asya • Orta Japonya • Gifu • Dik çatılı köy evleri", [36.2706, 136.9061], "Historic_Villages_of_Shirakawa-g%C3%B4_and_Gokayama"],
  ["Seongsan Ilchulbong, Jeju", "Hard", "East Asia • South Korea • Jeju Island • Volcanic sea crater", "Doğu Asya • Güney Kore • Jeju Adası • Deniz kenarı krater", [33.4584, 126.9425], "Seongsan_Ilchulbong"],
  ["Wadi Rum Sandstone Valley, Jordan", "Hard", "Middle East • Southern Jordan • Desert canyon • Red rocks", "Orta Doğu • Güney Ürdün • Çöl vadisi • Kızıl kaya oluşumları", [29.5764, 35.4212], "Wadi_Rum"],
  ["Socotra Dragon Blood Trees", "Hard", "Arabian Sea • Yemen island • Umbrella-shaped desert trees", "Umman Denizi • Yemen adası • Şemsiye şekilli ağaçlar", [12.4634, 53.8237], "Socotra"],
  ["Aït Benhaddou Ksar, Morocco", "Hard", "North Africa • Southern Morocco • Atlas foothills • Clay town", "Kuzey Afrika • Güney Fas • Atlas etekleri • Kerpiç yerleşim", [31.0470, -7.1297], "A%C3%AFt_Benhaddou"],
  ["Lalibela Rock Churches, Ethiopia", "Hard", "East Africa • Northern Ethiopia • Highlands • Rock churches", "Doğu Afrika • Kuzey Etiyopya • Kayaya oyulmuş kiliseler", [12.0319, 39.0476], "Rock-Hewn_Churches,_Lalibela"],
  ["Sossusvlei Red Dunes, Namibia", "Hard", "Southern Africa • Namibia • Namib Desert • Tall red dunes", "Güney Afrika • Namibya • Namib Çölü • Yüksek kızıl kumullar", [-24.7275, 15.3358], "Sossusvlei"],
  ["Victoria Falls, Zambezi", "Hard", "Southern Africa • Zambia & Zimbabwe border • Zambezi River", "Güney Afrika • Zambiya-Zimbabve sınırı • Zambezi şelalesi", [-17.9243, 25.8572], "Victoria_Falls"],
  ["Mount Kilimanjaro, Tanzania", "Hard", "East Africa • Northern Tanzania • Near Kenya • Snow peak", "Doğu Afrika • Kuzey Tanzanya • Kenya yakını • Karlı zirve", [-3.0674, 37.3556], "Mount_Kilimanjaro"],
  ["Lençóis Maranhenses, Brazil", "Hard", "South America • Northeast Brazil • Maranhão • Dunes & pools", "Güney Amerika • Kuzeydoğu Brezilya • Kumullar ve göletler", [-2.4833, -43.1167], "Len%C3%A7%C3%B3is_Maranhenses_National_Park"],
  ["Perito Moreno Glacier, Argentina", "Hard", "South America • Southern Patagonia • Argentina • Ice glacier", "Güney Amerika • Güney Patagonya • Arjantin • Buzul duvarı", [-50.4957, -73.0485], "Perito_Moreno_Glacier"],
  ["Torres del Paine Towers, Chile", "Hard", "South America • Southern Patagonia • Chile • Granite towers", "Güney Amerika • Güney Patagonya • Şili • Granit kuleler", [-50.9423, -72.9660], "Torres_del_Paine_National_Park"],
  ["Bartolomé Island, Galápagos", "Hard", "Pacific Ocean • Ecuador • Galápagos Islands • Volcanic peak", "Büyük Okyanus • Ekvador • Galapagos Adaları • Volkanik ada", [-0.2820, -90.5500], "Bartolom%C3%A9_Island"],
  ["Tikal Temple I, Guatemala", "Hard", "Central America • Northern Guatemala • Petén jungle • Maya", "Orta Amerika • Kuzey Guatemala • Orman içi Maya piramidi", [17.2220, -89.6237], "Tikal"],
  ["Denali Peak, Alaska", "Hard", "North America • USA • Alaska • High snow mountain peak", "Kuzey Amerika • ABD • Alaska • Yüksek karlı dağ zirvesi", [63.0695, -151.0074], "Denali"],
  ["Mount Otemanu, Bora Bora", "Hard", "South Pacific • French Polynesia • Bora Bora • Lagoon peak", "Güney Pasifik • Fransız Polinezyası • Lagün ortası zirve", [-16.4980, -151.7415], "Bora_Bora"],
  ["Kakadu Escarpment, Australia", "Hard", "Oceania • Northern Australia • Northern Territory • Cliffs", "Okyanusya • Kuzey Avustralya • Kayalık uçurum bölgesi", [-12.6700, 132.4500], "Kakadu_National_Park"]
];

const UI_TEXT = {
  en: {
    subtitle: "GMT 458 Web GIS • UCL Night Edition",
    duelQuestion: "Can you win this duel?",
    playBtn: "Play",
    settingsBtn: "Settings",
    roundsSetting: "Rounds (6 - 9):",
    durationSetting: "Round Time (10 - 30s):",
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
    globeTitle: "GeoGoal • UCL Night",
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
    bannerGoal: "⭐ GOAL! CHAMPIONS NIGHT!",
    bannerNoGoal: "❌ NO GOAL! SAVED / MISSED!"
  },
  tr: {
    subtitle: "GMT 458 Web GIS • Şampiyonlar Ligi Gecesi",
    duelQuestion: "Bu düelloyu kazanabilir misin?",
    playBtn: "Oyna",
    settingsBtn: "Ayarlar",
    roundsSetting: "Tur Sayısı (6 - 9):",
    durationSetting: "Tur Süresi (10 - 30 sn):",
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
    globeTitle: "GeoGoal • Şampiyonlar Ligi",
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
    bannerGoal: "⭐ GOL! ŞAMPİYONLAR LİGİ GECESİ!",
    bannerNoGoal: "❌ GOL YOK! KAÇTI / KURTARILDI!"
  }
};

// Always starts in English ("en") on initial load
let currentLang = "en";
function t(key) {
  return UI_TEXT[currentLang][key];
}

const LOCATIONS_POOL = RAW_LOCATIONS.map(([name, difficulty, clueEN, clueTR, coords, wikiTitle], idx) => ({
  id: idx + 1,
  name,
  difficulty,
  clueEN,
  clueTR,
  coords,
  wikiTitle
}));

const DEFAULT_ROUNDS = 6;
const DEFAULT_DURATION = 15;
const HIGHSCORE_KEY = "geogoal_highscore";
const imageUrlCache = new Map();
const resolvedImageCache = new Map();
const FALLBACK_PHOTO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ortakoy_Mosque_and_Bosphorus_Bridge.jpg/800px-Ortakoy_Mosque_and_Bosphorus_Bridge.jpg";

function clampInt(val, min, max, fallback) {
  const num = Number.parseInt(val, 10);
  if (Number.isNaN(num)) return fallback;
  return Math.min(max, Math.max(min, num));
}

async function fetchLandmarkImageUrl(wikiTitle) {
  if (imageUrlCache.has(wikiTitle)) {
    return imageUrlCache.get(wikiTitle);
  }
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`
    );
    if (res.ok) {
      const data = await res.json();
      const url = (data.thumbnail && data.thumbnail.source) || (data.originalimage && data.originalimage.source);
      if (url) {
        imageUrlCache.set(wikiTitle, url);
        return url;
      }
    }
  } catch (_) {
    // Fallback below
  }
  const fallback = `https://commons.wikimedia.org/wiki/Special:FilePath/${wikiTitle}.jpg?width=800`;
  imageUrlCache.set(wikiTitle, fallback);
  return fallback;
}

function loadSingleImageWithTimeout(src, timeoutMs = 4500) {
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;

    const finish = (ok) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(ok ? src : FALLBACK_PHOTO_URL);
    };

    const timer = setTimeout(() => finish(false), timeoutMs);
    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.src = src;
  });
}

// Resolves & preloads all round photos so rounds start with ready images
async function preloadAllRoundImages(onProgress) {
  const qs = game.getQuestions();
  let completed = 0;
  if (onProgress) onProgress(completed, qs.length);

  await Promise.all(
    qs.map(async (q) => {
      const rawUrl = await fetchLandmarkImageUrl(q.wikiTitle);
      let finalSrc = await loadSingleImageWithTimeout(rawUrl, 4500);
      if (finalSrc === FALLBACK_PHOTO_URL) {
        const commonsAlt = `https://commons.wikimedia.org/wiki/Special:FilePath/${q.wikiTitle}.jpg?width=800`;
        finalSrc = await loadSingleImageWithTimeout(commonsAlt, 3500);
      }
      resolvedImageCache.set(q.wikiTitle, finalSrc);
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
  roundsInput: document.getElementById("rounds-input"),
  durationInput: document.getElementById("duration-input"),
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
  skyGrad.addColorStop(0, "#03071e");
  skyGrad.addColorStop(1, "#0b1d51");
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, el.canvas.width, 120);

  drawStar(120, 18, 5, 7, 3, "rgba(147, 197, 253, 0.35)");
  drawStar(840, 18, 5, 7, 3, "rgba(147, 197, 253, 0.35)");

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
      offsetY = -Math.abs(Math.sin(tick * 0.075 + fan.phase)) * 10;
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
      const waveX = Math.sin(tick * 0.11 + fan.phase) * 2.5;
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

  const waveSpeed = crowdMood === "cheer" ? 0.09 : 0.06;
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
  const { x, y, stepCycle, kickSwing, reactionMood } = shooterState;

  let moodBounceY = 0;
  let headDrop = 0;
  let armWave = 0;

  if (reactionMood === "cheer") {
    moodBounceY = -Math.abs(Math.sin(tick * 0.08)) * 6;
    armWave = Math.sin(tick * 0.12) * 5;
  } else if (reactionMood === "sad") {
    moodBounceY = 3;
    headDrop = 3.2;
  }

  const py = y + moodBounceY;

  ctx.fillStyle = "rgba(0, 0, 0, 0.34)";
  ctx.beginPath();
  ctx.ellipse(x, y + 19, 23, 6.5, 0, 0, Math.PI * 2);
  ctx.fill();

  const stride = Math.sin(stepCycle) * 7;
  const torsoTilt = kickSwing * 2.5 + (reactionMood === "sad" ? 2 : 0);

  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 6.2;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x - 6, py + 4);
  ctx.lineTo(x - 7.5 - stride * 0.45, py + 17.5 - Math.max(0, stride * 0.45));
  ctx.stroke();

  const rightFootX = x + 6 + stride * 0.45 + kickSwing * 7;
  const rightFootY = py + 17.5 - Math.max(0, -stride * 0.45) - kickSwing * 12;
  ctx.beginPath();
  ctx.moveTo(x + 6, py + 4);
  ctx.lineTo(rightFootX, rightFootY);
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(rightFootX, rightFootY, 3.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#172554";
  ctx.fillRect(x - 11.5, py - 4, 23, 10.5);

  const stripeColors = ["#881337", "#1e3a8a", "#881337", "#1e3a8a", "#881337"];
  const stripeW = 27 / stripeColors.length;
  stripeColors.forEach((col, idx) => {
    ctx.fillStyle = col;
    ctx.fillRect(x - 13.5 + idx * stripeW, py - 24.5 + torsoTilt, stripeW + 0.4, 21.5);
  });

  ctx.strokeStyle = "#facc15";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(x - 6, py - 24.5 + torsoTilt);
  ctx.lineTo(x, py - 21 + torsoTilt);
  ctx.lineTo(x + 6, py - 24.5 + torsoTilt);
  ctx.stroke();

  ctx.fillStyle = "#facc15";
  ctx.font = "bold 5.5px Arial";
  ctx.textAlign = "center";
  ctx.fillText("MESSI", x, py - 17.5 + torsoTilt);

  ctx.font = "bold 8.5px Arial";
  ctx.fillText("10", x, py - 7.5 + torsoTilt);

  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 4.6;
  ctx.beginPath();
  if (reactionMood === "cheer") {
    ctx.moveTo(x - 13.5, py - 20.5 + torsoTilt);
    ctx.lineTo(x - 22, py - 32 + armWave);
    ctx.moveTo(x + 13.5, py - 20.5 + torsoTilt);
    ctx.lineTo(x + 22, py - 32 - armWave);
  } else if (reactionMood === "sad") {
    ctx.moveTo(x - 13.5, py - 20.5 + torsoTilt);
    ctx.lineTo(x - 17, py - 4);
    ctx.moveTo(x + 13.5, py - 20.5 + torsoTilt);
    ctx.lineTo(x + 17, py - 4);
  } else {
    ctx.moveTo(x - 13.5, py - 20.5 + torsoTilt);
    ctx.lineTo(x - 20, py - 8 + stride * 0.55 - kickSwing * 3);
    ctx.moveTo(x + 13.5, py - 20.5 + torsoTilt);
    ctx.lineTo(x + 20, py - 8 - stride * 0.55 + kickSwing * 3);
  }
  ctx.stroke();

  ctx.fillStyle = "#fed7aa";
  ctx.beginPath();
  ctx.arc(x, py - 32.5 + torsoTilt + headDrop, 8.6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#1e293b";
  ctx.beginPath();
  ctx.arc(x, py - 34 + torsoTilt + headDrop, 8.6, Math.PI * 0.85, Math.PI * 2.15);
  ctx.fill();
}

function drawGoalkeeper(keeperState, tick) {
  const { x, y, tilt, reactionMood } = keeperState;

  let gY = y;
  let gTilt = tilt;
  let armOffsetY = -18;

  if (reactionMood === "cheer") {
    gY = y - Math.abs(Math.sin(tick * 0.08)) * 4;
    gTilt = 0;
    armOffsetY = -30 + Math.sin(tick * 0.12) * 3;
  } else if (reactionMood === "sad") {
    gY = y + 6;
    gTilt = tilt * 0.65;
    armOffsetY = -4;
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

function drawArenaFrame(tick, shooterState, keeperState, ballX, ballY, ballRadius, crowdMood, bannerText) {
  ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);

  drawUCLStandsBillboardAndAds(tick, crowdMood);

  const pitchGrad = ctx.createLinearGradient(0, 130, 0, 390);
  pitchGrad.addColorStop(0, "#14532d");
  pitchGrad.addColorStop(1, "#166534");
  ctx.fillStyle = pitchGrad;
  ctx.fillRect(0, 130, el.canvas.width, 260);

  ctx.strokeStyle = "rgba(255,255,255,0.5)";
  ctx.lineWidth = 2;
  ctx.strokeRect(210, 158, 540, 215);

  const goalLeft = 345;
  const goalRight = 615;
  const goalTop = 128;
  const goalBottom = 216;

  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.fillRect(goalLeft, goalTop, goalRight - goalLeft, goalBottom - goalTop);

  ctx.strokeStyle = "rgba(226, 232, 240, 0.28)";
  ctx.lineWidth = 1;
  for (let x = goalLeft + 20; x < goalRight; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, goalTop);
    ctx.lineTo(x, goalBottom);
    ctx.stroke();
  }
  for (let y = goalTop + 18; y < goalBottom; y += 18) {
    ctx.beginPath();
    ctx.moveTo(goalLeft, y);
    ctx.lineTo(goalRight, y);
    ctx.stroke();
  }

  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 5;
  ctx.strokeRect(goalLeft, goalTop, goalRight - goalLeft, goalBottom - goalTop);

  drawGoalkeeper(keeperState, tick);
  drawRearShooter(shooterState, tick);

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

function animatePenaltyShot(isGoal, onShotSettled) {
  if (animFrameId) cancelAnimationFrame(animFrameId);

  const ballStartX = 480;
  const ballStartY = 326;
  const targetX = isGoal ? (Math.random() < 0.5 ? 395 : 565) : 480;
  const targetY = isGoal ? 166 : 182;
  const keeperDiveX = isGoal ? (targetX < 480 ? 550 : 410) : 480;
  const keeperDiveTilt = isGoal ? (keeperDiveX > 480 ? 0.36 : -0.36) : 0;

  const setupFrames = 36;
  const runUpFrames = 36;
  const flightFrames = 54;
  const settleFrame = setupFrames + runUpFrames + flightFrames;

  let frame = 0;
  let settledTriggered = false;

  function step() {
    frame += 1;

    let shooterX = 466;
    let shooterY = 366;
    let stepCycle = 0;
    let kickSwing = 0;
    let shooterReactionMood = "neutral";

    let ballX = ballStartX;
    let ballY = ballStartY;
    let ballRadius = 12;

    let keeperX = 480;
    let keeperY = 190 + Math.abs(Math.sin(frame * 0.14)) * 2.5;
    let keeperTilt = 0;
    let keeperReactionMood = "neutral";

    let crowdMood = "neutral";
    let bannerText = "";

    if (frame <= setupFrames) {
      keeperX = 480 + Math.sin(frame * 0.12) * 10;
    } else if (frame <= setupFrames + runUpFrames) {
      const rT = (frame - setupFrames) / runUpFrames;
      const rEase = rT * rT * (3 - 2 * rT);
      shooterX = 466 + (478 - 466) * rEase;
      shooterY = 366 + (348 - 366) * rEase;
      stepCycle = rT * Math.PI * 5;
      keeperX = 480 + Math.sin(frame * 0.12) * 8;
    } else if (frame <= settleFrame) {
      const fT = (frame - setupFrames - runUpFrames) / flightFrames;
      const fEase = 1 - Math.pow(1 - fT, 2.2);

      shooterX = 478;
      shooterY = 348;
      kickSwing = Math.sin(Math.min(fT * 1.6, 1) * Math.PI);

      ballX = ballStartX + (targetX - ballStartX) * fEase;
      ballY = ballStartY + (targetY - ballStartY) * fEase - Math.sin(fT * Math.PI) * 32;
      ballRadius = 12 - fEase * 3.8;

      const diveEase = Math.min(fT * 1.15, 1);
      keeperX = 480 + (keeperDiveX - 480) * diveEase;
      keeperY = 190 - Math.sin(diveEase * Math.PI) * 14 + diveEase * 4;
      keeperTilt = keeperDiveTilt * diveEase;
    } else {
      shooterX = 478;
      shooterY = 348;
      ballX = targetX;
      ballY = targetY;
      ballRadius = 8.2;
      keeperX = isGoal ? keeperDiveX : 480;
      keeperY = 194;
      keeperTilt = isGoal ? keeperDiveTilt : 0;

      crowdMood = isGoal ? "cheer" : "sad";
      shooterReactionMood = isGoal ? "cheer" : "sad";
      keeperReactionMood = isGoal ? "sad" : "cheer";

      bannerText = isGoal ? t("bannerGoal") : t("bannerNoGoal");
      el.crowdMoodBadge.textContent = isGoal ? t("crowdCheer") : t("crowdSad");

      if (!settledTriggered && onShotSettled) {
        settledTriggered = true;
        onShotSettled();
      }
    }

    drawArenaFrame(
      frame,
      { x: shooterX, y: shooterY, stepCycle, kickSwing, reactionMood: shooterReactionMood },
      { x: keeperX, y: keeperY, tilt: keeperTilt, reactionMood: keeperReactionMood },
      ballX,
      ballY,
      ballRadius,
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
}

function showGuessScreen() {
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
  el.locationImage.onerror = () => {
    el.locationImage.onerror = null;
    el.locationImage.src = FALLBACK_PHOTO_URL;
    el.imageLoader.classList.add("hidden");
  };
  el.locationImage.onload = () => {
    el.imageLoader.classList.add("hidden");
  };

  const cachedSrc = resolvedImageCache.get(q.wikiTitle);
  if (cachedSrc) {
    el.locationImage.src = cachedSrc;
  } else {
    const imgUrl = await fetchLandmarkImageUrl(q.wikiTitle);
    el.locationImage.src = await loadSingleImageWithTimeout(imgUrl, 4500);
  }

  game.startTimer(
    (sec) => {
      el.timerDisplay.textContent = `${sec}s`;
      el.timerBox.classList.toggle("urgent", sec <= 4);
    },
    () => {
      const lastPin = game.getGuess();
      resolveRound(lastPin, !lastPin);
    }
  );
}

function resolveRound(latlng, noPinAtAll = false) {
  if (game.isResolved()) return;
  game.markResolved();
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

    animatePenaltyShot(isGoal, () => {
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

// Return to start screen when clicking the spinning Earth or GeoGoal title
el.homeBrandBtn.addEventListener("click", () => {
  showStartScreen();
});

// Start screen controls
el.settingsToggleBtn.addEventListener("click", () => {
  el.settingsPanel.classList.toggle("hidden");
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