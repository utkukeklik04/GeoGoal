// ============================================================================
// 1. 300 UNIQUE REAL-WORLD LANDMARKS, SKYSCRAPERS, CITIES, MOSQUES, CHURCHES,
//    OPERA HOUSES & GOVERNMENT/HISTORIC BUILDINGS (NO BANKNOTE/LOGO/MAP IMAGES)
// Format:
// [name, diff, countryEN, countryTR, regionEN, regionTR, cityEN, cityTR, clueEN, clueTR, lat, lng, wikiTitle]
// ============================================================================
const UNIQUE_300_LANDMARKS = [
  // ================= EASY (100) =================
  ["Eiffel Tower, Paris", "Easy", "France", "Fransa", "Northern", "Kuzey", "Paris", "Paris", "Iron lattice tower by the Seine River", "Seine Nehri kenarında demir kafes kule", 48.8584, 2.2945, "Eiffel_Tower"],
  ["Colosseum, Rome", "Easy", "Italy", "İtalya", "Central", "Orta", "Rome", "Roma", "Ancient Roman stone amphitheatre", "Antik Roma taş gladyatör arenası", 41.8902, 12.4922, "Colosseum"],
  ["Statue of Liberty, New York", "Easy", "USA", "ABD", "Northeastern", "Kuzeydoğu", "New York", "New York", "Copper monument statue in the harbor", "Limanda yükselen anıtsal bakır heykel", 40.6892, -74.0445, "Statue_of_Liberty"],
  ["Palace of Westminster, London", "Easy", "United Kingdom", "Birleşik Krallık", "Southern", "Güney", "London", "Londra", "Historic parliament palace and clock tower", "Tarihi parlamento sarayı ve saat kulesi", 51.5007, -0.1246, "Palace_of_Westminster"],
  ["Great Pyramid of Giza", "Easy", "Egypt", "Mısır", "Northern", "Kuzey", "Giza", "Giza", "Ancient limestone royal pyramid", "Antik kireçtaşı kraliyet piramidi", 29.9792, 31.1342, "Great_Pyramid_of_Giza"],
  ["Taj Mahal, Agra", "Easy", "India", "Hindistan", "Northern", "Kuzey", "Agra", "Agra", "White marble domed mausoleum complex", "Beyaz mermer kubbeli anıt mezar yapısı", 27.1751, 78.0421, "Taj_Mahal"],
  ["Christ the Redeemer, Rio", "Easy", "Brazil", "Brezilya", "Southeastern", "Güneydoğu", "Rio de Janeiro", "Rio de Janeiro", "Mountaintop statue overlooking the bay", "Körfeze bakan dağ tepesindeki heykel", -22.9519, -43.2105, "Christ_the_Redeemer_(statue)"],
  ["Sydney Opera House", "Easy", "Australia", "Avustralya", "Southeastern", "Güneydoğu", "Sydney", "Sidney", "White shell-roofed waterfront opera house", "Deniz kıyısında beyaz yelken çatılı opera binası", -33.8568, 151.2153, "Sydney_Opera_House"],
  ["Sagrada Família, Barcelona", "Easy", "Spain", "İspanya", "Northeastern", "Kuzeydoğu", "Barcelona", "Barselona", "Towering modernist church basilica", "Yükselen modernist kilise bazilikası", 41.4036, 2.1744, "Sagrada_Família"],
  ["Parthenon, Athens", "Easy", "Greece", "Yunanistan", "Southern", "Güney", "Athens", "Atina", "Classical Doric marble temple on the hill", "Tepe üstündeki klasik mermer tapınak", 37.9715, 23.7257, "Parthenon"],
  ["Mount Fuji", "Easy", "Japan", "Japonya", "Central", "Orta", "Honshu", "Honşu", "Snow-capped volcanic mountain peak", "Karlı zirveli volkanik dağ", 35.3606, 138.7274, "Mount_Fuji"],
  ["Golden Gate Bridge", "Easy", "USA", "ABD", "Western", "Batı", "San Francisco", "San Francisco", "Suspension bridge spanning the strait", "Boğazı aşan asma köprü", 37.8199, -122.4783, "Golden_Gate_Bridge"],
  ["Burj Khalifa, Dubai", "Easy", "United Arab Emirates", "Birleşik Arap Emirlikleri", "Northern", "Kuzey", "Dubai", "Dubai", "Supertall glass-and-steel skyscraper", "Yüksek cam ve çelik gökdelen", 25.1972, 55.2744, "Burj_Khalifa"],
  ["Hagia Sophia, Istanbul", "Easy", "Türkiye", "Türkiye", "Northwestern", "Kuzeybatı", "Istanbul", "İstanbul", "Historic grand domed monument", "Tarihi büyük kubbeli yapı", 41.0086, 28.9802, "Hagia_Sophia"],
  ["Stonehenge", "Easy", "United Kingdom", "Birleşik Krallık", "Southern", "Güney", "Wiltshire", "Wiltshire", "Prehistoric standing stone circle", "Tarih öncesi dikili taş çemberi", 51.1789, -1.8262, "Stonehenge"],
  ["Leaning Tower of Pisa", "Easy", "Italy", "İtalya", "Central", "Orta", "Pisa", "Pisa", "Tilted marble cathedral bell tower", "Eğik mermer katedral çan kulesi", 43.7230, 10.3966, "Leaning_Tower_of_Pisa"],
  ["Louvre Museum, Paris", "Easy", "France", "Fransa", "Northern", "Kuzey", "Paris", "Paris", "Historic palace courtyard with glass pyramid", "Cam piramitli tarihi saray avlusu", 48.8606, 2.3376, "Louvre"],
  ["Neuschwanstein Castle", "Easy", "Germany", "Almanya", "Southern", "Güney", "Bavaria", "Bavyera", "Mountain hilltop palace castle", "Dağ tepesinde yükselen tarihi şato", 47.5576, 10.7498, "Neuschwanstein_Castle"],
  ["Machu Picchu", "Easy", "Peru", "Peru", "Southern", "Güney", "Cusco Region", "Cusco Bölgesi", "Stone mountain citadel ruins", "Dağ sırtındaki antik taş kent", -13.1631, -72.5450, "Machu_Picchu"],
  ["Santorini Cliffside", "Easy", "Greece", "Yunanistan", "Southeastern", "Güneydoğu", "Santorini", "Santorini", "White cliff houses above the sea", "Denize bakan beyaz yamaç evleri", 36.4618, 25.3753, "Santorini"],
  ["Anıtkabir, Ankara", "Easy", "Türkiye", "Türkiye", "Central", "İç", "Ankara", "Ankara", "Monumental colonnaded state mausoleum", "Sütunlu anıtsal devlet kompleksi", 39.9255, 32.8369, "Anıtkabir"],
  ["Cappadocia Valleys", "Easy", "Türkiye", "Türkiye", "Central", "İç", "Nevşehir", "Nevşehir", "Carved rock formations and valley cliffs", "Oyulmuş kaya oluşumları ve vadiler", 38.6431, 34.8289, "Cappadocia"],
  ["Brandenburg Gate, Berlin", "Easy", "Germany", "Almanya", "Northeastern", "Kuzeydoğu", "Berlin", "Berlin", "Neoclassical monumental city gate", "Neoklasik anıtsal şehir kapısı", 52.5163, 13.3777, "Brandenburg_Gate"],
  ["Tower Bridge, London", "Easy", "United Kingdom", "Birleşik Krallık", "Southern", "Güney", "London", "Londra", "Twin-towered river bascule bridge", "İkiz kuleli tarihi nehir köprüsü", 51.5055, -0.0754, "Tower_Bridge"],
  ["Petronas Towers, Kuala Lumpur", "Easy", "Malaysia", "Malezya", "Western", "Batı", "Kuala Lumpur", "Kuala Lumpur", "Twin modern skyscrapers with skybridge", "Gökyüzü köprülü ikiz gökdelenler", 3.1579, 101.7116, "Petronas_Towers"],
  ["Empire State Building", "Easy", "USA", "ABD", "Northeastern", "Kuzeydoğu", "New York", "New York", "Art Deco skyscraper in the city center", "Şehir merkezinde Art Deco gökdelen", 40.7484, -73.9857, "Empire_State_Building"],
  ["CN Tower, Toronto", "Easy", "Canada", "Kanada", "Southeastern", "Güneydoğu", "Toronto", "Toronto", "Tall concrete tower by the waterfront", "Kıyı şeridinde yükselen yüksek kule", 43.6426, -79.3871, "CN_Tower"],
  ["Great Wall of China", "Easy", "China", "Çin", "Northern", "Kuzey", "Beijing", "Pekin", "Long stone fortification along mountain ridges", "Dağ sırtlarında uzanan tarihi taş sur", 40.4319, 116.5704, "Great_Wall_of_China"],
  ["Tokyo Tower", "Easy", "Japan", "Japonya", "Central", "Orta", "Tokyo", "Tokyo", "Tall red-and-white observation tower", "Kırmızı-beyaz yüksek gözlem kulesi", 35.6586, 139.7454, "Tokyo_Tower"],
  ["Marina Bay Sands", "Easy", "Singapore", "Singapur", "Southern", "Güney", "Singapore", "Singapur", "Three-tower hotel with rooftop deck", "Çatısında teras bulunan üç kuleli yapı", 1.2834, 103.8607, "Marina_Bay_Sands"],
  ["Arc de Triomphe, Paris", "Easy", "France", "Fransa", "Northern", "Kuzey", "Paris", "Paris", "Monumental stone arch at the avenue", "Geniş bulvarda anıtsal taş tak", 48.8738, 2.2950, "Arc_de_Triomphe"],
  ["Notre-Dame Cathedral, Paris", "Easy", "France", "Fransa", "Northern", "Kuzey", "Paris", "Paris", "Gothic stone cathedral with flying buttresses", "Uçan payandalı Gotik taş katedral", 48.8530, 2.3499, "Notre-Dame_de_Paris"],
  ["Palace of Versailles", "Easy", "France", "Fransa", "Northern", "Kuzey", "Versailles", "Versailles", "Grand royal chateau and formal gardens", "Görkemli kraliyet sarayı ve bahçeleri", 48.8049, 2.1204, "Palace_of_Versailles"],
  ["Buckingham Palace", "Easy", "United Kingdom", "Birleşik Krallık", "Southern", "Güney", "London", "Londra", "Royal residence facade and forecourt", "Kraliyet sarayı cephesi ve avlusu", 51.5014, -0.1419, "Buckingham_Palace"],
  ["London Eye", "Easy", "United Kingdom", "Birleşik Krallık", "Southern", "Güney", "London", "Londra", "Giant observation wheel by the river", "Nehir kenarında dev dönme dolap", 51.5033, -0.1195, "London_Eye"],
  ["The Shard, London", "Easy", "United Kingdom", "Birleşik Krallık", "Southern", "Güney", "London", "Londra", "Sharp glass-clad skyscraper spire", "Sivri uçlu cam kaplı gökdelen", 51.5045, -0.0865, "The_Shard"],
  ["St. Peter's Basilica", "Easy", "Vatican City", "Vatikan", "Central", "Orta", "Vatican City", "Vatikan", "Grand Renaissance church dome and square", "Görkemli Rönesans kilise kubbesi ve meydan", 41.9022, 12.4539, "St._Peter's_Basilica"],
  ["Trevi Fountain, Rome", "Easy", "Italy", "İtalya", "Central", "Orta", "Rome", "Roma", "Sculpted Baroque marble fountain", "Heykelli Barok mermer çeşme", 41.9009, 12.4833, "Trevi_Fountain"],
  ["Pantheon, Rome", "Easy", "Italy", "İtalya", "Central", "Orta", "Rome", "Roma", "Classical portico and concrete dome", "Klasik sütunlu cephe ve kubbeli yapı", 41.8986, 12.4769, "Pantheon,_Rome"],
  ["Venice Grand Canal", "Easy", "Italy", "İtalya", "Northern", "Kuzey", "Venice", "Venice", "Historic palaces lining a wide water canal", "Tarihi saraylarla çevrili geniş kanal", 45.4408, 12.3155, "Grand_Canal_(Venice)"],
  ["Milan Cathedral (Duomo)", "Easy", "Italy", "İtalya", "Northern", "Kuzey", "Milan", "Milano", "Elaborate Gothic marble cathedral", "Süslü Gotik mermer katedral", 45.4642, 9.1900, "Milan_Cathedral"],
  ["Florence Cathedral", "Easy", "Italy", "İtalya", "Central", "Orta", "Florence", "Floransa", "Large tiled dome in the historic center", "Tarihi merkezde dev kiremitli kubbe", 43.7731, 11.2560, "Florence_Cathedral"],
  ["Brooklyn Bridge", "Easy", "USA", "ABD", "Northeastern", "Kuzeydoğu", "New York", "New York", "Stone-arch suspension bridge over water", "Su üstünde taş kuleli asma köprü", 40.7061, -73.9969, "Brooklyn_Bridge"],
  ["Times Square, New York", "Easy", "USA", "ABD", "Northeastern", "Kuzeydoğu", "New York", "New York", "Bustling urban plaza of bright screens", "Hareketli şehir meydanı ve binalar", 40.7580, -73.9855, "Times_Square"],
  ["White House, Washington", "Easy", "USA", "ABD", "Eastern", "Doğu", "Washington", "Washington", "White neoclassical government mansion", "Beyaz neoklasik devlet binası", 38.8977, -77.0365, "White_House"],
  ["Lincoln Memorial", "Easy", "USA", "ABD", "Eastern", "Doğu", "Washington", "Washington", "White marble colonnaded monument hall", "Sütunlu beyaz mermer anıt binası", 38.8893, -77.0502, "Lincoln_Memorial"],
  ["Hollywood Sign", "Easy", "USA", "ABD", "Western", "Batı", "Los Angeles", "Los Angeles", "Large white letters on a hillside", "Yamaçta yer alan büyük beyaz harfler", 34.1341, -118.3215, "Hollywood_Sign"],
  ["Space Needle, Seattle", "Easy", "USA", "ABD", "Northwestern", "Kuzeybatı", "Seattle", "Seattle", "Tower with a revolving observation ring", "Gözlem halkalı modern kule", 47.6205, -122.3493, "Space_Needle"],
  ["One World Trade Center", "Easy", "USA", "ABD", "Northeastern", "Kuzeydoğu", "New York", "New York", "Tall glass skyscraper in downtown", "Şehir merkezinde yüksek cam gökdelen", 40.7127, -74.0134, "One_World_Trade_Center"],
  ["Willis Tower, Chicago", "Easy", "USA", "ABD", "Midwestern", "Orta Batı", "Chicago", "Chicago", "Tall multi-tube black skyscraper", "Çok kademeli siyah yüksek gökdelen", 41.8789, -87.6359, "Willis_Tower"],
  ["Cloud Gate, Chicago", "Easy", "USA", "ABD", "Midwestern", "Orta Batı", "Chicago", "Chicago", "Reflective steel arch sculpture in park", "Park içinde yansıtıcı çelik yapı", 41.8827, -87.6233, "Cloud_Gate"],
  ["Las Vegas Cityscape", "Easy", "USA", "ABD", "Southwestern", "Güneybatı", "Las Vegas", "Las Vegas", "Bright desert skyline of large resorts", "Büyük otellerden oluşan şehir silueti", 36.1147, -115.1728, "Las_Vegas_Strip"],
  ["Mount Rushmore", "Easy", "USA", "ABD", "Midwestern", "Orta Batı", "Keystone", "Keystone", "Granite mountain rock carved with faces", "Kayalığa oyulmuş dev dağ heykeli", 43.8791, -103.4591, "Mount_Rushmore"],
  ["Grand Canyon", "Easy", "USA", "ABD", "Southwestern", "Güneybatı", "Arizona", "Arizona", "Deep colorful canyon gorge carved by river", "Nehirle oyulmuş derin renkli kanyon", 36.1069, -112.1129, "Grand_Canyon"],
  ["Niagara Falls", "Easy", "Canada", "Kanada", "Southeastern", "Güneydoğu", "Niagara Falls", "Niagara Falls", "Wide roaring waterfall along the border", "Geniş ve gürleyen büyük şelale", 43.0962, -79.0377, "Niagara_Falls"],
  ["Burj Al Arab, Dubai", "Easy", "United Arab Emirates", "Birleşik Arap Emirlikleri", "Northern", "Kuzey", "Dubai", "Dubai", "Sail-shaped tower rising by the Gulf", "Körfez kıyısında yelken biçimli kule", 25.1412, 55.1853, "Burj_Al_Arab"],
  ["Palm Jumeirah, Dubai", "Easy", "United Arab Emirates", "Birleşik Arap Emirlikleri", "Northern", "Kuzey", "Dubai", "Dubai", "Coastal palm-shaped artificial island", "Kıyıdaki palmiye biçimli yapay ada", 25.1124, 55.1390, "Palm_Jumeirah"],
  ["Sheikh Zayed Grand Mosque", "Easy", "United Arab Emirates", "Birleşik Arap Emirlikleri", "Northern", "Kuzey", "Abu Dhabi", "Abu Dabi", "White marble mosque with grand domes", "Büyük kubbeli beyaz mermer cami", 24.4128, 54.4750, "Sheikh_Zayed_Grand_Mosque"],
  ["Blue Mosque, Istanbul", "Easy", "Türkiye", "Türkiye", "Northwestern", "Kuzeybatı", "Istanbul", "İstanbul", "Historic mosque with multiple minarets", "Çok minareli tarihi cami yapısı", 41.0054, 28.9768, "Blue_Mosque,_Istanbul"],
  ["Galata Tower, Istanbul", "Easy", "Türkiye", "Türkiye", "Northwestern", "Kuzeybatı", "Istanbul", "İstanbul", "Conical-roofed stone tower in the city", "Şehir merkezinde koni çatılı taş kule", 41.0256, 28.9741, "Galata_Tower"],
  ["Bosphorus Bridge, Istanbul", "Easy", "Türkiye", "Türkiye", "Northwestern", "Kuzeybatı", "Istanbul", "İstanbul", "Suspension bridge linking two sides", "İki yakayı bağlayan asma köprü", 41.0451, 29.0341, "Bosphorus_Bridge"],
  ["Maiden's Tower, Istanbul", "Easy", "Türkiye", "Türkiye", "Northwestern", "Kuzeybatı", "Istanbul", "İstanbul", "Historic tower standing in the strait", "Boğaz sularında yükselen tarihi kule", 41.0211, 29.0041, "Maiden's_Tower"],
  ["Pamukkale Terraces", "Easy", "Türkiye", "Türkiye", "Western", "Batı", "Denizli", "Denizli", "White mineral terraces on a hillside", "Yamaçta sıralı beyaz mineral teraslar", 37.9204, 29.1204, "Pamukkale"],
  ["Saint Basil's Cathedral", "Easy", "Russia", "Rusya", "Western", "Batı", "Moscow", "Moskova", "Colorful domed cathedral on the square", "Meydandaki renkli kubbeli katedral", 55.7525, 37.6231, "Saint_Basil's_Cathedral"],
  ["Moscow Kremlin", "Easy", "Russia", "Rusya", "Western", "Batı", "Moscow", "Moskova", "Walled historic fortress and palace towers", "Surlu tarihi kale ve saray kuleleri", 55.7520, 37.6175, "Moscow_Kremlin"],
  ["Forbidden City, Beijing", "Easy", "China", "Çin", "Northern", "Kuzey", "Beijing", "Pekin", "Imperial palace halls with golden roofs", "Altın çatılı tarihi imparatorluk sarayı", 39.9163, 116.3972, "Forbidden_City"],
  ["Lujiazui Skyline, Shanghai", "Easy", "China", "Çin", "Eastern", "Doğu", "Shanghai", "Şanghay", "High-rise financial district by the river", "Nehir kenarında yüksek gökdelenler", 31.2397, 121.4998, "Lujiazui"],
  ["Oriental Pearl Tower", "Easy", "China", "Çin", "Eastern", "Doğu", "Shanghai", "Şanghay", "Tower with large spherical observation decks", "Büyük küre gözlem katlı kule", 31.2397, 121.4997, "Oriental_Pearl_Tower"],
  ["Victoria Harbour, Hong Kong", "Easy", "China", "Çin", "Southern", "Güney", "Hong Kong", "Hong Kong", "Skyscrapers along a busy sea harbor", "Deniz limanı boyunca yükselen gökdelenler", 22.2889, 114.1739, "Victoria_Harbour"],
  ["Taipei 101", "Easy", "Taiwan", "Tayvan", "Northern", "Kuzey", "Taipei", "Taipei", "Tall segmented skyscraper in the city", "Kademeli yüksek şehir gökdeleni", 25.0339, 121.5645, "Taipei_101"],
  ["Tokyo Skytree", "Easy", "Japan", "Japonya", "Central", "Orta", "Tokyo", "Tokyo", "Very tall modern observation tower", "Çok yüksek modern gözlem kulesi", 35.7101, 139.8107, "Tokyo_Skytree"],
  ["Shibuya Cityscape, Tokyo", "Easy", "Japan", "Japonya", "Central", "Orta", "Tokyo", "Tokyo", "Dense urban intersection and buildings", "Yoğun şehir kavşağı ve binalar", 35.6595, 139.7004, "Shibuya_Crossing"],
  ["N Seoul Tower", "Easy", "South Korea", "Güney Kore", "Northwestern", "Kuzeybatı", "Seoul", "Seul", "Hilltop tower overlooking the city", "Şehre hakim tepe üstü kulesi", 37.5512, 126.9882, "N_Seoul_Tower"],
  ["Lotte World Tower, Seoul", "Easy", "South Korea", "Güney Kore", "Northwestern", "Kuzeybatı", "Seoul", "Seul", "Tall sleek glass tower in the capital", "Başkentte yükselen ince cam gökdelen", 37.5125, 127.1025, "Lotte_World_Tower"],
  ["Gyeongbokgung Palace", "Easy", "South Korea", "Güney Kore", "Northwestern", "Kuzeybatı", "Seoul", "Seul", "Traditional royal palace before hills", "Tepeler önünde tarihi kraliyet sarayı", 37.5796, 126.9770, "Gyeongbokgung"],
  ["Chichen Itza Pyramid", "Easy", "Mexico", "Meksika", "Southeastern", "Güneydoğu", "Yucatán", "Yucatán", "Stepped stone temple pyramid in ruins", "Basamaklı antik taş piramit yapı", 20.6843, -88.5678, "Chichen_Itza"],
  ["Angel of Independence", "Easy", "Mexico", "Meksika", "Central", "Orta", "Mexico City", "Meksiko", "Tall monument column on a roundabout", "Kavşakta yükselen anıtsal sütun", 19.4270, -99.1677, "Angel_of_Independence"],
  ["Copacabana Waterfront", "Easy", "Brazil", "Brezilya", "Southeastern", "Güneydoğu", "Rio de Janeiro", "Rio de Janeiro", "Coastal bay and beach lined with buildings", "Binalarla çevrili kıyı şeridi ve koy", -22.9711, -43.1822, "Copacabana,_Rio_de_Janeiro"],
  ["Sugarloaf Mountain", "Easy", "Brazil", "Brezilya", "Southeastern", "Güneydoğu", "Rio de Janeiro", "Rio de Janeiro", "Steep rounded rock peak by the harbor", "Liman yanında dik kayalık tepe", -22.9486, -43.1566, "Sugarloaf_Mountain"],
  ["Obelisco, Buenos Aires", "Easy", "Argentina", "Arjantin", "Eastern", "Doğu", "Buenos Aires", "Buenos Aires", "Tall white monument at a wide avenue", "Geniş bulvarda yükselen beyaz dikilitaş", -34.6037, -58.3816, "Obelisco_de_Buenos_Aires"],
  ["Sydney Harbour Bridge", "Easy", "Australia", "Avustralya", "Southeastern", "Güneydoğu", "Sydney", "Sidney", "Large steel arch bridge over the bay", "Körfez üstünde dev çelik kemer köprü", -33.8523, 151.2108, "Sydney_Harbour_Bridge"],
  ["Uluru Monolith", "Easy", "Australia", "Avustralya", "Central", "Orta", "Northern Territory", "Kuzey Bölgesi", "Large red rock formation in flat land", "Düzlükte yükselen büyük kızıl kaya", -25.3444, 131.0369, "Uluru"],
  ["Great Sphinx of Giza", "Easy", "Egypt", "Mısır", "Northern", "Kuzey", "Giza", "Giza", "Ancient carved stone sphinx monument", "Kayaya oyulmuş antik sfenks heykeli", 29.9753, 31.1376, "Great_Sphinx_of_Giza"],
  ["Table Mountain", "Easy", "South Africa", "Güney Afrika", "Southwestern", "Güneybatı", "Cape Town", "Cape Town", "Flat-topped mountain rising above the coast", "Kıyının üstünde yükselen düz zirveli dağ", -33.9628, 18.4098, "Table_Mountain"],
  ["Al-Khazneh, Petra", "Easy", "Jordan", "Ürdün", "Southwestern", "Güneybatı", "Ma'an", "Ma'an", "Carved stone facade inside a rock gorge", "Kaya vadisinde oyulmuş taş cephe", 30.3222, 35.4517, "Al-Khazneh"],
  ["Angkor Wat", "Easy", "Cambodia", "Kamboçya", "Northwestern", "Kuzeybatı", "Siem Reap", "Siem Reap", "Ancient multi-towered temple complex", "Çok kuleli antik tapınak kompleksi", 13.4125, 103.8670, "Angkor_Wat"],
  ["Grand Palace, Bangkok", "Easy", "Thailand", "Tayland", "Central", "Orta", "Bangkok", "Bangkok", "Ornate royal palace halls and spires", "Süslü kraliyet sarayı ve kuleleri", 13.7500, 100.4913, "Grand_Palace"],
  ["Merlion Waterfront", "Easy", "Singapore", "Singapur", "Southern", "Güney", "Singapore", "Singapur", "Harborfront statue overlooking the marina", "Marinaya bakan sahil anıt heykeli", 1.2868, 103.8545, "Merlion"],
  ["Alhambra Palace, Granada", "Easy", "Spain", "İspanya", "Southern", "Güney", "Granada", "Granada", "Historic hilltop palace and towers", "Tepe üstünde tarihi saray ve kuleler", 37.1761, -3.5881, "Alhambra"],
  ["Plaza de España, Seville", "Easy", "Spain", "İspanya", "Southwestern", "Güneybatı", "Seville", "Sevilla", "Curved brick arcade and canal plaza", "Kemerli bina ve kanallı meydan", 37.3772, -5.9869, "Plaza_de_España,_Seville"],
  ["Royal Palace of Madrid", "Easy", "Spain", "İspanya", "Central", "Orta", "Madrid", "Madrid", "Grand stone royal palace building", "Görkemli taş kraliyet sarayı", 40.4180, -3.7143, "Royal_Palace_of_Madrid"],
  ["Amsterdam Canal Houses", "Easy", "Netherlands", "Hollanda", "Western", "Batı", "Amsterdam", "Amsterdam", "Narrow historic facades along the canal", "Kanal boyunca sıralı dar tarihi evler", 52.3676, 4.9041, "Canals_of_Amsterdam"],
  ["Atomium, Brussels", "Easy", "Belgium", "Belçika", "Central", "Orta", "Brussels", "Brüksel", "Connected metal spheres monument", "Bağlantılı metal kürelerden oluşan yapı", 50.8949, 4.3415, "Atomium"],
  ["Cologne Cathedral", "Easy", "Germany", "Almanya", "Western", "Batı", "Köln", "Köln", "Tall twin-spired Gothic church", "İkiz kuleli yüksek Gotik kilise", 50.9413, 6.9583, "Cologne_Cathedral"],
  ["Reichstag Dome, Berlin", "Easy", "Germany", "Almanya", "Northeastern", "Kuzeydoğu", "Berlin", "Berlin", "Historic parliament with a glass dome", "Cam kubbeli tarihi parlamento binası", 52.5186, 13.3761, "Reichstag_building"],
  ["Hungarian Parliament", "Easy", "Hungary", "Macaristan", "Central", "Orta", "Budapest", "Budapeşte", "Grand riverside parliament building", "Nehir kıyısında görkemli parlamento binası", 47.5071, 19.0457, "Hungarian_Parliament_Building"],
  ["Charles Bridge, Prague", "Easy", "Czechia", "Çekya", "Central", "Orta", "Prague", "Prag", "Stone bridge with statues over the river", "Nehir üstünde heykelli taş köprü", 50.0865, 14.4114, "Charles_Bridge"],
  ["Schönbrunn Palace, Vienna", "Easy", "Austria", "Avusturya", "Eastern", "Doğu", "Vienna", "Viyana", "Yellow imperial palace facade", "Sarı cepheli tarihi imparatorluk sarayı", 48.1845, 16.3122, "Schönbrunn_Palace"],
  ["Belém Tower, Lisbon", "Easy", "Portugal", "Portekiz", "Western", "Batı", "Lisbon", "Lizbon", "Stone tower beside the river mouth", "Nehir ağzında yükselen taş kule", 38.6916, -9.2160, "Belém_Tower"],
  ["Nyhavn Harbour, Copenhagen", "Easy", "Denmark", "Danimarka", "Eastern", "Doğu", "Copenhagen", "Kopenhag", "Colorful harborfront buildings by water", "Su kıyısında renkli liman binaları", 55.6800, 12.5906, "Nyhavn"],

  // ================= MEDIUM (100) =================
  ["Mont-Saint-Michel Abbey", "Medium", "France", "Fransa", "Northwestern", "Kuzeybatı", "Normandy", "Normandiya", "Island abbey rising above coastal flats", "Kıyı düzlüğünde yükselen ada manastırı", 48.6361, -1.5115, "Mont-Saint-Michel"],
  ["Matterhorn Peak", "Medium", "Switzerland", "İsviçre", "Southwestern", "Güneybatı", "Zermatt", "Zermatt", "Sharp pyramidal Alpine mountain peak", "Sivri piramit biçimli Alp dağı", 45.9763, 7.6586, "Matterhorn"],
  ["Iguazu Falls", "Medium", "Argentina", "Arjantin", "Northeastern", "Kuzeydoğu", "Misiones", "Misiones", "Wide cascading waterfalls in forest", "Orman içinde geniş basamaklı şelale", -25.6953, -54.4367, "Iguazu_Falls"],
  ["Lake Louise", "Medium", "Canada", "Kanada", "Western", "Batı", "Alberta", "Alberta", "Mountain lake surrounded by peaks", "Dağ zirveleriyle çevrili buzul gölü", 51.4254, -116.1773, "Lake_Louise_(Alberta)"],
  ["Rialto Bridge, Venice", "Medium", "Italy", "İtalya", "Northern", "Kuzey", "Venice", "Venedik", "Arched stone bridge across the canal", "Kanal üstünde kemerli tarihi köprü", 45.4380, 12.3359, "Rialto_Bridge"],
  ["La Paz Cityscape", "Medium", "Bolivia", "Bolivya", "Western", "Batı", "La Paz", "La Paz", "Dense city built along steep canyon slopes", "Dik vadi yamaçlarına kurulu şehir", -16.4897, -68.1193, "La_Paz"],
  ["Library of Celsus, Ephesus", "Medium", "Türkiye", "Türkiye", "Western", "Batı", "İzmir", "İzmir", "Ancient columned stone facade", "Antik sütunlu taş anıt cephesi", 37.9391, 27.3408, "Library_of_Celsus"],
  ["Topkapı Palace, Istanbul", "Medium", "Türkiye", "Türkiye", "Northwestern", "Kuzeybatı", "Istanbul", "İstanbul", "Historic palace complex on the point", "Burunda kurulu tarihi saray kompleksi", 41.0115, 28.9834, "Topkapı_Palace"],
  ["Dolmabahçe Palace", "Medium", "Türkiye", "Türkiye", "Northwestern", "Kuzeybatı", "Istanbul", "İstanbul", "Grand waterfront palace facade", "Boğaz kıyısında görkemli saray cephesi", 41.0391, 29.0005, "Dolmabahçe_Palace"],
  ["Chapel Bridge, Lucerne", "Medium", "Switzerland", "İsviçre", "Central", "Orta", "Lucerne", "Luzern", "Timber footbridge with an octagonal tower", "Sekizgen taş kuleli ahşap köprü", 47.0516, 8.3075, "Kapellbrücke"],
  ["Edinburgh Castle", "Medium", "United Kingdom", "Birleşik Krallık", "Northern", "Kuzey", "Edinburgh", "Edinburgh", "Stone fortress on a rocky crag", "Kayalık tepe üstünde tarihi kale", 55.9486, -3.1999, "Edinburgh_Castle"],
  ["Old Town Hall, Prague", "Medium", "Czechia", "Çekya", "Central", "Orta", "Prague", "Prag", "Historic square tower and facade", "Tarihi meydan kulesi ve cephesi", 50.0870, 14.4208, "Prague_astronomical_clock"],
  ["Fisherman's Bastion", "Medium", "Hungary", "Macaristan", "Central", "Orta", "Budapest", "Budapeşte", "White stone towers overlooking the river", "Nehre bakan beyaz taş burçlar", 47.5022, 19.0348, "Fisherman's_Bastion"],
  ["St. Stephen's Cathedral", "Medium", "Austria", "Avusturya", "Eastern", "Doğu", "Vienna", "Viyana", "Tall spire and patterned roof tiles", "Yüksek kuleli ve desenli çatılı kilise", 48.2085, 16.3731, "St._Stephen's_Cathedral,_Vienna"],
  ["Belvedere Palace, Vienna", "Medium", "Austria", "Avusturya", "Eastern", "Doğu", "Vienna", "Viyana", "Baroque palace behind a long pond", "Uzun havuz arkasındaki Barok saray", 48.1915, 16.3809, "Belvedere,_Vienna"],
  ["Grand Place, Brussels", "Medium", "Belgium", "Belçika", "Central", "Orta", "Brussels", "Brüksel", "Ornate historic buildings around a square", "Meydan çevresinde süslü tarihi binalar", 50.8467, 4.3525, "Grand_Place"],
  ["Château de Chambord", "Medium", "France", "Fransa", "Central", "Orta", "Chambord", "Chambord", "Renaissance chateau with many turrets", "Çok kuleli tarihi Rönesans şatosu", 47.6161, 1.5172, "Château_de_Chambord"],
  ["Pont du Gard", "Medium", "France", "Fransa", "Southern", "Güney", "Vers-Pont-du-Gard", "Vers-Pont-du-Gard", "Multi-tier ancient stone arch aqueduct", "Çok katlı antik taş kemer yapı", 43.9476, 4.5350, "Pont_du_Gard"],
  ["Doge's Palace, Venice", "Medium", "Italy", "İtalya", "Northern", "Kuzey", "Venice", "Venedik", "Arched Gothic palace by the water", "Su kıyısında kemerli Gotik saray", 45.4337, 12.3404, "Doge's_Palace"],
  ["St. Mark's Basilica", "Medium", "Italy", "İtalya", "Northern", "Kuzey", "Venice", "Venedik", "Arched church facade with domes", "Kubbeleri ve kemerleriyle ünlü kilise", 45.4345, 12.3397, "St_Mark's_Basilica"],
  ["Ponte Vecchio, Florence", "Medium", "Italy", "İtalya", "Central", "Orta", "Florence", "Floransa", "Medieval stone bridge over the river", "Nehir üstünde tarihi taş köprü", 43.7680, 11.2531, "Ponte_Vecchio"],
  ["Positano Cliffside", "Medium", "Italy", "İtalya", "Southern", "Güney", "Positano", "Positano", "Colorful hillside houses by the coast", "Kıyıda yamaçlara dizili renkli evler", 40.6281, 14.4850, "Positano"],
  ["Manarola Coastline", "Medium", "Italy", "İtalya", "Northwestern", "Kuzeybatı", "Manarola", "Manarola", "Coastal houses perched on rocky cliffs", "Kayalık kıyıda sıralı renkli evler", 44.1070, 9.7285, "Manarola"],
  ["Guggenheim Museum, Bilbao", "Medium", "Spain", "İspanya", "Northern", "Kuzey", "Bilbao", "Bilbao", "Curved metal-clad museum by the river", "Nehir kıyısında kıvrımlı metal müze", 43.2687, -2.9340, "Guggenheim_Museum_Bilbao"],
  ["Park Güell, Barcelona", "Medium", "Spain", "İspanya", "Northeastern", "Kuzeydoğu", "Barcelona", "Barselona", "Tiled terrace and colonnade in a park", "Park içinde çinili teras ve sütunlar", 41.4145, 2.1527, "Park_Güell"],
  ["Alcázar of Segovia", "Medium", "Spain", "İspanya", "Central", "Orta", "Segovia", "Segovia", "Stone castle perched above a rocky ridge", "Kayalık sırt üstünde tarihi kale", 40.9526, -4.1325, "Alcázar_of_Segovia"],
  ["Pena Palace, Sintra", "Medium", "Portugal", "Portekiz", "Western", "Batı", "Sintra", "Sintra", "Colorful hilltop palace with towers", "Kuleli renkli tepe sarayı", 38.7876, -9.3906, "Pena_Palace"],
  ["Dom Luís I Bridge, Porto", "Medium", "Portugal", "Portekiz", "Northwestern", "Kuzeybatı", "Porto", "Porto", "Two-level iron arch bridge over river", "Nehir üstünde iki katlı demir köprü", 41.1400, -8.6095, "Dom_Luís_I_Bridge"],
  ["Gamla Stan Waterfront", "Medium", "Sweden", "İsveç", "Eastern", "Doğu", "Stockholm", "Stokholm", "Historic old-town buildings by water", "Su kıyısında tarihi şehir binaları", 59.3251, 18.0711, "Gamla_stan"],
  ["Oslo Opera House", "Medium", "Norway", "Norveç", "Southeastern", "Güneydoğu", "Oslo", "Oslo", "Angled white waterfront opera building", "Kıyıda eğimli beyaz opera binası", 59.9075, 10.7531, "Oslo_Opera_House"],
  ["Bryggen Wharf, Bergen", "Medium", "Norway", "Norveç", "Western", "Batı", "Bergen", "Bergen", "Row of peaked wooden harbor buildings", "Limanda sıralı sivri çatılı ahşap evler", 60.3971, 5.3245, "Bryggen"],
  ["Helsinki Cathedral", "Medium", "Finland", "Finlandiya", "Southern", "Güney", "Helsinki", "Helsinki", "White church with green dome on steps", "Merdivenli yeşil kubbeli beyaz kilise", 60.1704, 24.9522, "Helsinki_Cathedral"],
  ["Hallgrímskirkja, Reykjavik", "Medium", "Iceland", "İzlanda", "Southwestern", "Güneybatı", "Reykjavik", "Reykjavik", "Stepped vertical tower church facade", "Kademeli dikey kuleli kilise cephesi", 64.1417, -21.9266, "Hallgrímskirkja"],
  ["Cliffs of Moher", "Medium", "Ireland", "İrlanda", "Western", "Batı", "County Clare", "Clare Bölgesi", "High vertical cliffs along the ocean", "Okyanus kıyısında yüksek dik uçurumlar", 52.9715, -9.4309, "Cliffs_of_Moher"],
  ["Dubrovnik Walls & City", "Medium", "Croatia", "Hırvatistan", "Southern", "Güney", "Dubrovnik", "Dubrovnik", "Stone walls and red roofs by the sea", "Deniz kıyısında taş surlar ve çatılar", 42.6407, 18.1083, "Dubrovnik"],
  ["Pula Amphitheatre", "Medium", "Croatia", "Hırvatistan", "Western", "Batı", "Pula", "Pula", "Ancient stone arena near the coast", "Kıyı yakınında antik taş amfitiyatro", 44.8732, 13.8501, "Pula_Arena"],
  ["Palace of Culture, Warsaw", "Medium", "Poland", "Polonya", "Central", "Orta", "Warsaw", "Varşova", "Tall stone tower with central spire", "Merkezi kuleli yüksek taş gökdelen", 52.2318, 21.0060, "Palace_of_Culture_and_Science"],
  ["Wawel Castle, Kraków", "Medium", "Poland", "Polonya", "Southern", "Güney", "Kraków", "Krakow", "Historic fortress complex on a hill", "Tepe üstünde tarihi kale kompleksi", 50.0540, 19.9354, "Wawel_Castle"],
  ["Bran Castle", "Medium", "Romania", "Romanya", "Central", "Orta", "Brașov County", "Brașov Bölgesi", "Hilltop castle with pointed towers", "Sivri kuleli tepe üstü şatosu", 45.5149, 25.3672, "Bran_Castle"],
  ["Palace of the Parliament", "Medium", "Romania", "Romanya", "Southern", "Güney", "Bucharest", "Bükreş", "Massive monumental government palace", "Dev anıtsal devlet sarayı binası", 44.4275, 26.0875, "Palace_of_the_Parliament"],
  ["Alexander Nevsky Cathedral", "Medium", "Bulgaria", "Bulgaristan", "Western", "Batı", "Sofia", "Sofya", "Large domed cathedral in the capital", "Başkentte büyük kubbeli katedral", 42.6958, 23.3328, "Alexander_Nevsky_Cathedral,_Sofia"],
  ["Winter Palace, St. Petersburg", "Medium", "Russia", "Rusya", "Northwestern", "Kuzeybatı", "Saint Petersburg", "St. Petersburg", "Long grand palace facade by the river", "Nehir kıyısında uzun görkemli saray", 59.9406, 30.3136, "Winter_Palace"],
  ["Savior on Spilled Blood", "Medium", "Russia", "Rusya", "Northwestern", "Kuzeybatı", "Saint Petersburg", "St. Petersburg", "Ornately domed church beside a canal", "Kanal kenarında süslü kubbeli kilise", 59.9401, 30.3289, "Church_of_the_Savior_on_Blood"],
  ["Temple of Heaven, Beijing", "Medium", "China", "Çin", "Northern", "Kuzey", "Beijing", "Pekin", "Circular tiered temple hall on terrace", "Teras üstünde dairesel tapınak binası", 39.8822, 116.4066, "Temple_of_Heaven"],
  ["Potala Palace, Lhasa", "Medium", "China", "Çin", "Southwestern", "Güneybatı", "Lhasa", "Lhasa", "Large palace rising up a rocky hill", "Kayalık tepede yükselen dev saray", 29.6555, 91.1186, "Potala_Palace"],
  ["Terracotta Army Hall", "Medium", "China", "Çin", "Central", "Orta", "Xi'an", "Xi'an", "Ancient ranks of sculpted clay figures", "Antik pişmiş toprak heykel dizisi", 34.3841, 109.2785, "Terracotta_Army"],
  ["Kinkaku-ji Pavilion", "Medium", "Japan", "Japonya", "Central", "Orta", "Kyoto", "Kyoto", "Three-story pavilion beside a pond", "Gölet kenarında üç katlı tarihi köşk", 35.0394, 135.7292, "Kinkaku-ji"],
  ["Fushimi Inari Gates", "Medium", "Japan", "Japonya", "Central", "Orta", "Kyoto", "Kyoto", "Path lined with red shrine pillars", "Kırmızı tapınak sütunlarıyla çevrili yol", 34.9671, 135.7727, "Fushimi_Inari-taisha"],
  ["Osaka Castle", "Medium", "Japan", "Japonya", "Western", "Batı", "Osaka", "Osaka", "Multi-tiered castle tower above walls", "Surlar üstünde çok katlı tarihi kale", 34.6873, 135.5262, "Osaka_Castle"],
  ["Himeji Castle", "Medium", "Japan", "Japonya", "Western", "Batı", "Hyogo", "Hyogo", "White multi-story hilltop castle", "Beyaz çok katlı tepe kalesi", 34.8394, 134.6939, "Himeji_Castle"],
  ["Kiyomizu-dera Temple", "Medium", "Japan", "Japonya", "Central", "Orta", "Kyoto", "Kyoto", "Hillside temple with wooden stage", "Ahşap teraslı yamaç tapınağı", 34.9949, 135.7850, "Kiyomizu-dera"],
  ["Gardens by the Bay", "Medium", "Singapore", "Singapur", "Southern", "Güney", "Singapore", "Singapur", "Tall garden structures and conservatories", "Yüksek bahçe yapıları ve seralar", 1.2816, 103.8636, "Gardens_by_the_Bay"],
  ["Batu Caves Entrance", "Medium", "Malaysia", "Malezya", "Western", "Batı", "Gombak", "Gombak", "Colorful stairs and large statue by cliff", "Kayalık önünde renkli merdiven ve heykel", 3.2379, 101.6840, "Batu_Caves"],
  ["Wat Arun, Bangkok", "Medium", "Thailand", "Tayland", "Central", "Orta", "Bangkok", "Bangkok", "Tall ornate spire by the river", "Nehir kıyısında yüksek süslü kule", 13.7437, 100.4888, "Wat_Arun"],
  ["Ha Long Bay Islands", "Medium", "Vietnam", "Vietnam", "Northern", "Kuzey", "Quảng Ninh", "Quảng Ninh", "Steep limestone islands in bay water", "Körfezde yükselen dik kireçtaşı adalar", 20.9101, 107.1839, "Hạ_Long_Bay"],
  ["Golden Bridge, Da Nang", "Medium", "Vietnam", "Vietnam", "Central", "Orta", "Da Nang", "Da Nang", "Curved mountain walkway with stone hands", "Taş ellerle desteklenen dağ köprüsü", 15.9952, 107.9964, "Golden_Bridge_(Vietnam)"],
  ["Borobudur Temple", "Medium", "Indonesia", "Endonezya", "Central", "Orta", "Magelang", "Magelang", "Stepped stone monument with domes", "Kubbeleri bulunan basamaklı taş anıt", -7.6079, 110.2038, "Borobudur"],
  ["Tanah Lot Temple", "Medium", "Indonesia", "Endonezya", "Southern", "Güney", "Bali", "Bali", "Coastal temple on a sea rock stack", "Deniz kayası üstünde kıyı tapınağı", -8.6212, 115.0868, "Tanah_Lot"],
  ["Hawa Mahal, Jaipur", "Medium", "India", "Hindistan", "Northwestern", "Kuzeybatı", "Jaipur", "Jaipur", "Red-and-pink lattice-window palace facade", "Kafes pencereli pembe-kırmızı saray cephesi", 26.9239, 75.8267, "Hawa_Mahal"],
  ["Golden Temple, Amritsar", "Medium", "India", "Hindistan", "Northwestern", "Kuzeybatı", "Amritsar", "Amritsar", "Temple pavilion set in a rectangular pool", "Dikdörtgen havuz ortasında tapınak", 31.6200, 74.8765, "Golden_Temple"],
  ["Gateway of India, Mumbai", "Medium", "India", "Hindistan", "Western", "Batı", "Mumbai", "Mumbai", "Grand stone arch by the harbor", "Liman kıyısında büyük taş anıt kapı", 18.9220, 72.8347, "Gateway_of_India"],
  ["Faisal Mosque, Islamabad", "Medium", "Pakistan", "Pakistan", "Northern", "Kuzey", "Islamabad", "İslamabad", "Angled white mosque below hills", "Tepeler altında açılı beyaz cami", 33.7295, 73.0372, "Faisal_Mosque"],
  ["Badshahi Mosque, Lahore", "Medium", "Pakistan", "Pakistan", "Eastern", "Doğu", "Lahore", "Lahor", "Large red-stone mosque and courtyard", "Geniş avlulu kırmızı taş cami", 31.5881, 74.3106, "Badshahi_Mosque"],
  ["Azadi Tower, Tehran", "Medium", "Iran", "İran", "Northern", "Kuzey", "Tehran", "Tahran", "Arched white monument tower in plaza", "Meydanda kemerli beyaz anıt kule", 35.6997, 51.3380, "Azadi_Tower"],
  ["Kingdom Centre, Riyadh", "Medium", "Saudi Arabia", "Suudi Arabistan", "Central", "Orta", "Riyadh", "Riyad", "Tall skyscraper with an upper arch", "Üst kısmında kemer açıklığı olan kule", 24.7114, 46.6744, "Kingdom_Centre"],
  ["Clock Towers, Mecca", "Medium", "Saudi Arabia", "Suudi Arabistan", "Western", "Batı", "Mecca", "Mekke", "Tall complex of high-rise towers", "Yüksek kulelerden oluşan dev yapı", 21.4187, 39.8256, "The_Clock_Towers"],
  ["Museum of the Future", "Medium", "United Arab Emirates", "Birleşik Arap Emirlikleri", "Northern", "Kuzey", "Dubai", "Dubai", "Ring-shaped modern building in the city", "Şehirde halka biçimli modern yapı", 25.2192, 55.2819, "Museum_of_the_Future"],
  ["West Bay Skyline, Doha", "Medium", "Qatar", "Katar", "Eastern", "Doğu", "Doha", "Doha", "Modern towers along the bay coast", "Körfez kıyısında modern gökdelenler", 25.3209, 51.5310, "West_Bay_(Doha)"],
  ["Kuwait Towers", "Medium", "Kuwait", "Kuveyt", "Eastern", "Doğu", "Kuwait City", "Kuveyt", "Spires with spherical observation pods", "Küre gözlem bölümlü ince kuleler", 29.3897, 48.0033, "Kuwait_Towers"],
  ["Hassan II Mosque", "Medium", "Morocco", "Fas", "Northwestern", "Kuzeybatı", "Casablanca", "Kazablanka", "Coastal mosque with a tall minaret", "Kıyıda yüksek minareli büyük cami", 33.6085, -7.6326, "Hassan_II_Mosque"],
  ["Karnak Temple Complex", "Medium", "Egypt", "Mısır", "Central", "Orta", "Luxor", "Luksor", "Ancient hall of tall stone columns", "Yüksek taş sütunlu antik tapınak", 25.7188, 32.6573, "Karnak"],
  ["Abu Simbel Temple", "Medium", "Egypt", "Mısır", "Southern", "Güney", "Aswan", "Asvan", "Rock-cut temple with giant statues", "Kayaya oyulmuş dev heykelli tapınak", 22.3372, 31.6258, "Abu_Simbel"],
  ["Château Frontenac, Quebec", "Medium", "Canada", "Kanada", "Eastern", "Doğu", "Quebec City", "Quebec", "Grand hotel building above the river", "Nehir üstünde görkemli tarihi otel", 46.8123, -71.2053, "Château_Frontenac"],
  ["Parliament Hill Buildings", "Medium", "Canada", "Kanada", "Southeastern", "Güneydoğu", "Ottawa", "Ottawa", "Historic stone government buildings", "Tarihi taş parlamento binaları", 45.4236, -75.7009, "Parliament_Hill"],
  ["Vancouver Cityscape", "Medium", "Canada", "Kanada", "Southwestern", "Güneybatı", "Vancouver", "Vancouver", "High-rises near water and mountains", "Su ve dağlar önünde şehir binaları", 49.2827, -123.1207, "Vancouver"],
  ["Alcatraz Island", "Medium", "USA", "ABD", "Western", "Batı", "San Francisco", "San Francisco", "Rocky island buildings in the bay", "Körfez ortasında kayalık ada yapıları", 37.8270, -122.4230, "Alcatraz_Island"],
  ["Gateway Arch, St. Louis", "Medium", "USA", "ABD", "Midwestern", "Orta Batı", "St. Louis", "St. Louis", "Tall curved arch monument by river", "Nehir kıyısında yüksek kavisli kemer", 38.6247, -90.1848, "Gateway_Arch"],
  ["Walt Disney Concert Hall", "Medium", "USA", "ABD", "Western", "Batı", "Los Angeles", "Los Angeles", "Curved metal concert hall exterior", "Kıvrımlı metal cepheli konser binası", 34.0553, -118.2498, "Walt_Disney_Concert_Hall"],
  ["Pyramid of the Sun", "Medium", "Mexico", "Meksika", "Central", "Orta", "Teotihuacan", "Teotihuacan", "Large stepped ancient stone pyramid", "Büyük basamaklı antik taş piramit", 19.6923, -98.8435, "Teotihuacan"],
  ["Palacio de Bellas Artes", "Medium", "Mexico", "Meksika", "Central", "Orta", "Mexico City", "Meksiko", "Domed cultural palace in the center", "Merkezde kubbeli tarihi kültür sarayı", 19.4352, -99.1412, "Palacio_de_Bellas_Artes"],
  ["Panama Canal Locks", "Medium", "Panama", "Panama", "Central", "Orta", "Panama City", "Panama", "Waterway locks for passing vessels", "Gemilerin geçtiği kanal havuzları", 9.0800, -79.6800, "Panama_Canal"],
  ["El Capitolio, Havana", "Medium", "Cuba", "Küba", "Northwestern", "Kuzeybatı", "Havana", "Havana", "Domed neoclassical building in city", "Şehirde kubbeli neoklasik bina", 23.1353, -82.3597, "El_Capitolio"],
  ["Gran Torre Santiago", "Medium", "Chile", "Şili", "Central", "Orta", "Santiago", "Santiago", "Tall glass tower below mountain range", "Dağ silsilesi önünde yüksek cam kule", -33.4172, -70.6067, "Gran_Torre_Santiago"],
  ["La Boca Houses", "Medium", "Argentina", "Arjantin", "Eastern", "Doğu", "Buenos Aires", "Buenos Aires", "Brightly painted street buildings", "Canlı renklere boyalı sokak evleri", -34.6345, -58.3631, "La_Boca"],
  ["Cathedral of Brasília", "Medium", "Brazil", "Brezilya", "Central", "Orta", "Brasília", "Brasília", "Curved concrete ribs forming a crown", "Taç biçimli beton sütunlu katedral", -15.7983, -47.8755, "Cathedral_of_Brasília"],
  ["Sky Tower, Auckland", "Medium", "New Zealand", "Yeni Zelanda", "Northern", "Kuzey", "Auckland", "Auckland", "Tall observation tower over harbor", "Liman üstünde yükselen gözlem kulesi", -36.8485, 174.7622, "Sky_Tower_(Auckland)"],
  ["Melbourne Cityscape", "Medium", "Australia", "Avustralya", "Southeastern", "Güneydoğu", "Melbourne", "Melbourne", "City towers along the riverfront", "Nehir kıyısında yükselen şehir kuleleri", -37.8136, 144.9631, "Melbourne"],
  ["Flame Towers, Baku", "Medium", "Azerbaijan", "Azerbaycan", "Eastern", "Doğu", "Baku", "Bakü", "Three curved high-rise towers on hill", "Tepede yükselen üç kavisli kule", 40.3595, 49.8267, "Flame_Towers"],
  ["Heydar Aliyev Center", "Medium", "Azerbaijan", "Azerbaycan", "Eastern", "Doğu", "Baku", "Bakü", "Smooth curving white modern building", "Kavisli beyaz modern kültür yapısı", 40.3959, 49.8678, "Heydar_Aliyev_Center"],
  ["Baiterek Monument", "Medium", "Kazakhstan", "Kazakistan", "Northern", "Kuzey", "Astana", "Astana", "Tall tower topped with a large orb", "Tepesinde büyük küre bulunan kule", 51.1283, 71.4305, "Baiterek"],
  ["Tbilisi Old District", "Medium", "Georgia", "Gürcistan", "Southeastern", "Güneydoğu", "Tbilisi", "Tiflis", "Balconied buildings by the river", "Nehir kenarında balkonlu evler", 41.6938, 44.8015, "Tbilisi"],
  ["Lindos Acropolis", "Medium", "Greece", "Yunanistan", "Southeastern", "Güneydoğu", "Rhodes", "Rodos", "Ancient ruins above a coastal bay", "Koy üstünde antik kalıntılar", 36.0913, 28.0882, "Lindos"],
  ["Mykonos Windmills", "Medium", "Greece", "Yunanistan", "Southeastern", "Güneydoğu", "Mykonos", "Mikonos", "White round windmills near the sea", "Deniz kıyısında beyaz yel değirmenleri", 37.4446, 25.3257, "Mykonos_windmills"],
  ["Valletta Bastions", "Medium", "Malta", "Malta", "Southeastern", "Güneydoğu", "Valletta", "Valletta", "Fortified stone walls by the harbor", "Liman kıyısında taş sur yapıları", 35.8989, 14.5146, "Valletta"],
  ["Monte Carlo Casino", "Medium", "Monaco", "Monako", "Southeastern", "Güneydoğu", "Monte Carlo", "Monte Carlo", "Historic ornate palace-style building", "Süslü tarihi saray biçimli bina", 43.7391, 7.4280, "Monte_Carlo_Casino"],
  ["Jet d'Eau, Geneva", "Medium", "Switzerland", "İsviçre", "Southwestern", "Güneybatı", "Geneva", "Cenevre", "Tall water jet rising from the lake", "Göl içinden yükselen yüksek su sütunu", 46.2074, 6.1559, "Jet_d'Eau"],
  ["Elbphilharmonie, Hamburg", "Medium", "Germany", "Almanya", "Northern", "Kuzey", "Hamburg", "Hamburg", "Glass crown atop a brick hall", "Tuğla yapı üstünde cam konser salonu", 53.5413, 9.9841, "Elbphilharmonie"],
  ["Frankfurt Skyline", "Medium", "Germany", "Almanya", "Central", "Orta", "Frankfurt", "Frankfurt", "Cluster of modern high-rise towers", "Modern yüksek binalardan oluşan siluet", 50.1109, 8.6821, "Frankfurt"],
  ["Cube Houses, Rotterdam", "Medium", "Netherlands", "Hollanda", "Western", "Batı", "Rotterdam", "Rotterdam", "Tilted yellow cube-shaped homes", "Eğik sarı küp biçimli binalar", 51.9203, 4.4906, "Cube_house"],
  ["Øresund Bridge", "Medium", "Denmark", "Danimarka", "Eastern", "Doğu", "Copenhagen", "Kopenhag", "Long bridge crossing sea strait", "Deniz boğazını aşan uzun köprü", 55.5706, 12.8286, "Øresund_Bridge"],

  // ================= HARD (100) =================
  ["Meteora Cliffs & Monasteries", "Hard", "Greece", "Yunanistan", "Central", "Orta", "Kalabaka", "Kalabaka", "Buildings atop tall rock pillars", "Yüksek kaya sütunları üstünde yapılar", 39.7217, 21.6306, "Meteora"],
  ["Hallstatt Lakeside", "Hard", "Austria", "Avusturya", "Central", "Orta", "Hallstatt", "Hallstatt", "Lakeside houses beneath steep slopes", "Dik yamaç altında göl kıyısı evleri", 47.5622, 13.6493, "Hallstatt"],
  ["Plitvice Waterfall Lakes", "Hard", "Croatia", "Hırvatistan", "Central", "Orta", "Plitvice", "Plitvice", "Woodland lakes and cascading falls", "Orman içinde şelaleli göller", 44.8654, 15.5820, "Plitvice_Lakes_National_Park"],
  ["Uzungöl Valley", "Hard", "Türkiye", "Türkiye", "Northeastern", "Kuzeydoğu", "Trabzon", "Trabzon", "Mountain lake surrounded by green hills", "Yeşil tepelerle çevrili dağ gölü", 40.6186, 40.2939, "Uzungöl"],
  ["Perito Moreno Glacier", "Hard", "Argentina", "Arjantin", "Southern", "Güney", "Santa Cruz", "Santa Cruz", "Thick ice wall meeting lake water", "Göl suyuna inen kalın buzul duvarı", -50.4957, -73.0485, "Perito_Moreno_Glacier"],
  ["Victoria Falls", "Hard", "Zambia", "Zambiya", "Southern", "Güney", "Livingstone", "Livingstone", "Broad river plunging into a gorge", "Kanyona dökülen geniş şelale", -17.9243, 25.8572, "Victoria_Falls"],
  ["Mount Kilimanjaro", "Hard", "Tanzania", "Tanzanya", "Northeastern", "Kuzeydoğu", "Kilimanjaro", "Kilimanjaro", "High mountain peak with snow", "Karlı zirvesi olan yüksek dağ", -3.0674, 37.3556, "Mount_Kilimanjaro"],
  ["Stari Most, Mostar", "Hard", "Bosnia and Herzegovina", "Bosna-Hersek", "Southern", "Güney", "Mostar", "Mostar", "Single-arch stone bridge over river", "Nehir üstünde tek kemerli taş köprü", 43.3373, 17.8150, "Stari_Most"],
  ["Lake Bled & Island", "Hard", "Slovenia", "Slovenya", "Northwestern", "Kuzeybatı", "Bled", "Bled", "Small island church inside a lake", "Göl ortasında küçük adadaki yapı", 46.3636, 14.0938, "Lake_Bled"],
  ["Bay of Kotor", "Hard", "Montenegro", "Karadağ", "Southwestern", "Güneybatı", "Kotor", "Kotor", "Coastal bay enclosed by steep hills", "Dik tepelerle çevrili kıyı körfezi", 42.4247, 18.7712, "Bay_of_Kotor"],
  ["Sümela Monastery", "Hard", "Türkiye", "Türkiye", "Northeastern", "Kuzeydoğu", "Trabzon", "Trabzon", "Historic building set into a cliff", "Kayalığa yaslanmış tarihi yapı", 40.6900, 39.6583, "Sumela_Monastery"],
  ["Mount Nemrut Summit", "Hard", "Türkiye", "Türkiye", "Southeastern", "Güneydoğu", "Adıyaman", "Adıyaman", "Ancient stone statues on a high ridge", "Yüksek tepede antik taş heykeller", 37.9806, 38.7408, "Mount_Nemrut"],
  ["Chefchaouen Streets", "Hard", "Morocco", "Fas", "Northern", "Kuzey", "Chefchaouen", "Chefchaouen", "Blue-washed mountain town lanes", "Mavi tonlu dağ kasabası sokakları", 35.1688, -5.2636, "Chefchaouen"],
  ["Geirangerfjord", "Hard", "Norway", "Norveç", "Western", "Batı", "Stranda", "Stranda", "Narrow fjord with mountain waterfalls", "Şelaleli dar ve derin fiyort", 62.1008, 7.0941, "Geirangerfjord"],
  ["Belfry of Bruges", "Hard", "Belgium", "Belçika", "Northwestern", "Kuzeybatı", "Bruges", "Brugge", "Tall historic bell tower in square", "Meydanda yüksek tarihi çan kulesi", 51.2082, 3.2248, "Belfry_of_Bruges"],
  ["Registan Square, Samarkand", "Hard", "Uzbekistan", "Özbekistan", "Southeastern", "Güneydoğu", "Samarkand", "Semerkant", "Tiled historic facades around a plaza", "Meydan çevresinde çinili tarihi yapılar", 39.6548, 66.9757, "Registan"],
  ["Paro Taktsang", "Hard", "Bhutan", "Bhutan", "Western", "Batı", "Paro", "Paro", "Mountain cliffside temple complex", "Uçurum kenarında dağ tapınağı", 27.4919, 89.3635, "Paro_Taktsang"],
  ["Banff Springs Hotel", "Hard", "Canada", "Kanada", "Western", "Batı", "Banff", "Banff", "Large stone hotel in mountain woods", "Ormanlık dağlarda büyük taş otel", 51.1644, -115.5621, "Banff_Springs_Hotel"],
  ["Milford Sound", "Hard", "New Zealand", "Yeni Zelanda", "Southwestern", "Güneybatı", "Southland", "Southland", "Steep-sided fjord surrounded by peaks", "Sivri dağlarla çevrili derin fiyort", -44.6716, 167.9256, "Milford_Sound"],
  ["Cartagena Walled City", "Hard", "Colombia", "Kolombiya", "Northern", "Kuzey", "Cartagena", "Cartagena", "Colonial buildings and stone walls", "Koloni tarzı binalar ve taş surlar", 10.4236, -75.5511, "Cartagena,_Colombia"],
  ["Valparaíso Hills", "Hard", "Chile", "Şili", "Central", "Orta", "Valparaíso", "Valparaíso", "Colorful houses on coastal hills", "Kıyı yamaçlarında renkli evler", -33.0472, -71.6127, "Valparaíso"],
  ["Colmar Canal Quarter", "Hard", "France", "Fransa", "Northeastern", "Kuzeydoğu", "Colmar", "Colmar", "Timber-framed houses along a canal", "Kanal kıyısında ahşap çerçeveli evler", 48.0794, 7.3585, "Colmar"],
  ["Tallinn Old Town", "Hard", "Estonia", "Estonya", "Northern", "Kuzey", "Tallinn", "Tallinn", "Towers and roofs in historic center", "Tarihi merkezde kuleler ve çatılar", 59.4370, 24.7453, "Tallinn"],
  ["Kyrenia Harbour", "Hard", "Cyprus", "Kıbrıs", "Northern", "Kuzey", "Kyrenia", "Girne", "Historic castle and harbor basin", "Tarihi kale ve liman koyu", 35.3418, 33.3204, "Kyrenia_Castle"],
  ["Ishak Pasha Palace", "Hard", "Türkiye", "Türkiye", "Eastern", "Doğu", "Ağrı", "Ağrı", "Stone palace set above a high valley", "Yüksek vadi üstünde taş saray", 39.5206, 44.1292, "Ishak_Pasha_Palace"],
  ["Mardin Stone Town", "Hard", "Türkiye", "Türkiye", "Southeastern", "Güneydoğu", "Mardin", "Mardin", "Terraced stone buildings on a slope", "Yamaçta basamaklı taş yapılar", 37.3122, 40.7350, "Mardin"],
  ["Safranbolu Mansions", "Hard", "Türkiye", "Türkiye", "Northern", "Kuzey", "Karabük", "Karabük", "Traditional timber-framed houses", "Geleneksel ahşap çerçeveli evler", 41.2469, 32.6914, "Safranbolu"],
  ["Aspendos Theatre", "Hard", "Türkiye", "Türkiye", "Southern", "Güney", "Antalya", "Antalya", "Tiered stone seating of ancient theatre", "Basamaklı antik taş tiyatro", 36.9389, 31.1722, "Aspendos"],
  ["Çeský Krumlov", "Hard", "Czechia", "Çekya", "Southern", "Güney", "Çeský Krumlov", "Çeský Krumlov", "Castle and town inside a river bend", "Nehir kıvrımında kale ve kasaba", 48.8127, 14.3175, "Český_Krumlov"],
  ["Rothenburg Town", "Hard", "Germany", "Almanya", "Central", "Orta", "Rothenburg", "Rothenburg", "Historic town lanes and timber gables", "Tarihi kasaba sokakları ve çatılar", 49.3780, 10.1797, "Rothenburg_ob_der_Tauber"],
  ["Hohenzollern Castle", "Hard", "Germany", "Almanya", "Southwestern", "Güneybatı", "Bisingen", "Bisingen", "Castle crowning a lone hill peak", "Yalnız bir tepede yükselen kale", 48.3233, 8.9675, "Hohenzollern_Castle"],
  ["Eltz Castle", "Hard", "Germany", "Almanya", "Western", "Batı", "Wierschem", "Wierschem", "Multi-towered castle in a valley", "Vadide çok kuleli tarihi şato", 50.2051, 7.3366, "Eltz_Castle"],
  ["Carcassonne Ramparts", "Hard", "France", "Fransa", "Southern", "Güney", "Carcassonne", "Carcassonne", "Fortified towers on a hilltop", "Tepe üstünde surlar ve kuleler", 43.2066, 2.3638, "Cité_de_Carcassonne"],
  ["Annecy Canals", "Hard", "France", "Fransa", "Southeastern", "Güneydoğu", "Annecy", "Annecy", "Historic building surrounded by water", "Sularla çevrili tarihi yapı", 45.8992, 6.1294, "Annecy"],
  ["Alberobello Stone Houses", "Hard", "Italy", "İtalya", "Southeastern", "Güneydoğu", "Alberobello", "Alberobello", "White stone houses with cone roofs", "Koni taş çatılı beyaz köy evleri", 40.7840, 17.2374, "Alberobello"],
  ["Matera Cliff Dwellings", "Hard", "Italy", "İtalya", "Southern", "Güney", "Matera", "Matera", "Stone dwellings along a rocky ravine", "Kayalık vadide taş yerleşim evleri", 40.6664, 16.6043, "Sassi_di_Matera"],
  ["Puente Nuevo, Ronda", "Hard", "Spain", "İspanya", "Southern", "Güney", "Ronda", "Ronda", "Tall stone bridge across a deep gorge", "Derin vadide yüksek taş köprü", 36.7406, -5.1659, "Puente_Nuevo"],
  ["Toledo Old City", "Hard", "Spain", "İspanya", "Central", "Orta", "Toledo", "Toledo", "Hilltop buildings above a river bend", "Nehir kıvrımı üstünde tarihi binalar", 39.8628, -4.0273, "Toledo,_Spain"],
  ["Óbidos Walled Town", "Hard", "Portugal", "Portekiz", "Western", "Batı", "Óbidos", "Óbidos", "White houses behind stone walls", "Taş surlar ardında beyaz evler", 39.3606, -9.1567, "Óbidos,_Portugal"],
  ["Graslei Waterfront, Ghent", "Hard", "Belgium", "Belçika", "Northwestern", "Kuzeybatı", "Ghent", "Gent", "Step-gabled facades by the canal", "Kanal kenarında basamak çatılı evler", 51.0543, 3.7204, "Graslei"],
  ["Giethoorn Canals", "Hard", "Netherlands", "Hollanda", "Northern", "Kuzey", "Giethoorn", "Giethoorn", "Thatched houses along quiet waterways", "Su kanalları boyunca saz çatılı evler", 52.7401, 6.0780, "Giethoorn"],
  ["House of the Blackheads", "Hard", "Latvia", "Letonya", "Western", "Batı", "Riga", "Riga", "Ornate brick facade in city square", "Meydanda süslü tuğla tarihi bina", 56.9472, 24.1068, "House_of_the_Blackheads_(Riga)"],
  ["Trakai Island Castle", "Hard", "Lithuania", "Litvanya", "Southeastern", "Güneydoğu", "Trakai", "Trakai", "Brick castle on a lake island", "Göl adasında kırmızı tuğla kale", 54.6522, 24.9333, "Trakai_Island_Castle"],
  ["Gdańsk Old Town", "Hard", "Poland", "Polonya", "Northern", "Kuzey", "Gdańsk", "Gdansk", "Narrow painted facades in historic street", "Tarihi sokakta dar renkli cepheler", 54.3485, 18.6531, "Gdańsk"],
  ["Peleș Castle", "Hard", "Romania", "Romanya", "Central", "Orta", "Sinaia", "Sinaia", "Timber-and-stone castle in mountains", "Dağlarda yarı ahşap taş şato", 45.3600, 25.5426, "Peleș_Castle"],
  ["Sighișoara Citadel", "Hard", "Romania", "Romanya", "Central", "Orta", "Sighișoara", "Sighișoara", "Colorful buildings and clock tower", "Renkli binalar ve saat kulesi", 46.2197, 24.7925, "Sighișoara"],
  ["Rila Monastery", "Hard", "Bulgaria", "Bulgaristan", "Southwestern", "Güneybatı", "Rila", "Rila", "Arched cloister courtyard in woods", "Ormanda kemerli tarihi manastır", 42.1334, 23.3401, "Rila_Monastery"],
  ["Sveti Stefan Islet", "Hard", "Montenegro", "Karadağ", "Southwestern", "Güneybatı", "Budva", "Budva", "Red-roofed coastal islet buildings", "Kıyıda kırmızı çatılı ada yapıları", 42.2562, 18.8913, "Sveti_Stefan"],
  ["Berat Hillside", "Hard", "Albania", "Arnavutluk", "Southern", "Güney", "Berat", "Berat", "Tiered white houses on a hill", "Yamaçta basamaklı beyaz evler", 40.7058, 19.9522, "Berat"],
  ["St. John at Kaneo, Ohrid", "Hard", "North Macedonia", "Kuzey Makedonya", "Southwestern", "Güneybatı", "Ohrid", "Ohri", "Church building above a large lake", "Büyük göl üstünde taş kilise", 41.1112, 20.7889, "Church_of_St._John_at_Kaneo"],
  ["Triple Bridge, Ljubljana", "Hard", "Slovenia", "Slovenya", "Central", "Orta", "Ljubljana", "Lübliyana", "Stone bridges crossing the river", "Nehir üstünde taş köprüler", 46.0511, 14.5062, "Triple_Bridge"],
  ["Petrovaradin Fortress", "Hard", "Serbia", "Sırbistan", "Northern", "Kuzey", "Novi Sad", "Novi Sad", "Fortress walls and tower by river", "Nehir kıyısında kale ve kule", 45.2528, 19.8634, "Petrovaradin_Fortress"],
  ["Kul Sharif Mosque", "Hard", "Russia", "Rusya", "Western", "Batı", "Kazan", "Kazan", "Blue-domed mosque inside a fortress", "Kale içinde mavi kubbeli cami", 55.7983, 49.1051, "Kul_Sharif_Mosque"],
  ["Kizhi Pogost", "Hard", "Russia", "Rusya", "Northwestern", "Kuzeybatı", "Lake Onega", "Onega Gölü", "Multi-domed wooden island church", "Çok kubbeli ahşap ada kilisesi", 62.0672, 35.2236, "Kizhi_Pogost"],
  ["Po-i-Kalyan, Bukhara", "Hard", "Uzbekistan", "Özbekistan", "Southwestern", "Güneybatı", "Bukhara", "Buhara", "Tall brick minaret and turquoise dome", "Yüksek minare ve turkuaz kubbe", 39.7758, 64.4150, "Po-i-Kalyan"],
  ["Itchan Kala, Khiva", "Hard", "Uzbekistan", "Özbekistan", "Western", "Batı", "Khiva", "Hive", "Walled old town with mudbrick towers", "Kerpiç kuleli surlu tarihi kent", 41.3783, 60.3594, "Itchan_Kala"],
  ["Charyn Canyon", "Hard", "Kazakhstan", "Kazakistan", "Southeastern", "Güneydoğu", "Almaty Region", "Almatı Bölgesi", "Steep red canyon walls in steppe", "Bozkırda dik kızıl kanyon duvarları", 43.3500, 79.0778, "Charyn_Canyon"],
  ["Gergeti Trinity Church", "Hard", "Georgia", "Gürcistan", "Northern", "Kuzey", "Stepantsminda", "Stepantsminda", "Stone church beneath a high peak", "Yüksek dağ önünde taş kilise", 42.6625, 44.6203, "Gergeti_Trinity_Church"],
  ["Tatev Monastery", "Hard", "Armenia", "Ermenistan", "Southeastern", "Güneydoğu", "Syunik", "Syunik", "Monastery perched above a gorge", "Kanyon kenarında tarihi manastır", 39.3794, 46.2500, "Tatev_Monastery"],
  ["Temple of Bacchus, Baalbek", "Hard", "Lebanon", "Lübnan", "Eastern", "Doğu", "Baalbek", "Baalbek", "Tall standing classical stone columns", "Yüksek klasik taş sütun kalıntıları", 34.0061, 36.2039, "Baalbek"],
  ["Wadi Rum Desert", "Hard", "Jordan", "Ürdün", "Southern", "Güney", "Aqaba", "Akabe", "Sandstone cliffs rising from desert", "Çölden yükselen kumtaşı kayalıklar", 29.5765, 35.4194, "Wadi_Rum"],
  ["Hegra Tombs, Al-Ula", "Hard", "Saudi Arabia", "Suudi Arabistan", "Northwestern", "Kuzeybatı", "Al-Ula", "Al-Ula", "Monument carved into a desert rock", "Çöl kayasına oyulmuş antik yapı", 26.7889, 37.9547, "Hegra_(Mada'in_Salih)"],
  ["Nizwa Fort", "Hard", "Oman", "Umman", "Northern", "Kuzey", "Nizwa", "Nizwa", "Large round stone fort tower", "Büyük dairesel taş kale kulesi", 22.9333, 57.5303, "Nizwa_Fort"],
  ["Shibam Towers", "Hard", "Yemen", "Yemen", "Central", "Orta", "Hadhramaut", "Hadhramaut", "Tall mudbrick buildings in town", "Kasabada yükselen çok katlı yapılar", 15.9267, 48.6267, "Shibam"],
  ["Nasir al-Mulk Mosque", "Hard", "Iran", "İran", "Southwestern", "Güneybatı", "Shiraz", "Şiraz", "Historic mosque with colored glass", "Renkli camlı tarihi cami yapısı", 29.6086, 52.5486, "Nasir_al-Mulk_Mosque"],
  ["Persepolis Ruins", "Hard", "Iran", "İran", "Southwestern", "Güneybatı", "Marvdasht", "Marvdasht", "Ancient stone columns and stairways", "Antik taş sütunlar ve merdivenler", 29.9352, 52.8914, "Persepolis"],
  ["Bagan Pagodas", "Hard", "Myanmar", "Myanmar", "Central", "Orta", "Bagan", "Bagan", "Brick temples across a green plain", "Yeşil ovada sıralı tuğla tapınaklar", 21.1717, 94.8585, "Bagan"],
  ["Shwedagon Pagoda", "Hard", "Myanmar", "Myanmar", "Southern", "Güney", "Yangon", "Yangon", "Golden stupa rising on a hill", "Tepe üstünde yükselen altın stupa", 16.7983, 96.1496, "Shwedagon_Pagoda"],
  ["Sigiriya Rock Fortress", "Hard", "Sri Lanka", "Sri Lanka", "Central", "Orta", "Matale", "Matale", "Steep rock hill with ancient ruins", "Antik kalıntılı dik kaya tepesi", 7.9570, 80.7603, "Sigiriya"],
  ["Boudhanath Stupa", "Hard", "Nepal", "Nepal", "Central", "Orta", "Kathmandu", "Katmandu", "Large white dome monument", "Büyük beyaz kubbeli anıt yapı", 27.7215, 85.3620, "Boudhanath"],
  ["Wulingyuan Pillars", "Hard", "China", "Çin", "Central", "Orta", "Zhangjiajie", "Zhangjiajie", "Tall vertical rock pillars in forest", "Orman içinde dikey kaya sütunları", 29.3249, 110.4343, "Wulingyuan"],
  ["Fenghuang River Town", "Hard", "China", "Çin", "Central", "Orta", "Hunan", "Hunan", "Wooden buildings along a river", "Nehir kıyısında ahşap binalar", 27.9483, 109.5992, "Fenghuang_County"],
  ["Shirakawa-go Houses", "Hard", "Japan", "Japonya", "Central", "Orta", "Gifu", "Gifu", "Steep-roofed houses in mountain valley", "Dağ vadisinde dik çatılı köy evleri", 36.2578, 136.9061, "Historic_Villages_of_Shirakawa-gō_and_Gokayama"],
  ["Itsukushima Sea Gate", "Hard", "Japan", "Japonya", "Western", "Batı", "Hiroshima", "Hiroşima", "Large gate standing in shallow water", "Sığ suda yükselen büyük tapınak kapısı", 34.2960, 132.3198, "Itsukushima_Shrine"],
  ["Gamcheon Hillside", "Hard", "South Korea", "Güney Kore", "Southeastern", "Güneydoğu", "Busan", "Busan", "Layered colorful hillside houses", "Yamaçta katmanlı renkli evler", 35.0975, 129.0106, "Gamcheon_Culture_Village"],
  ["Hội An Old Town", "Hard", "Vietnam", "Vietnam", "Central", "Orta", "Quảng Nam", "Quảng Nam", "Historic streets and yellow walls", "Sarı cepheli tarihi sokak binaları", 15.8801, 108.3380, "Hội_An"],
  ["Prambanan Temple", "Hard", "Indonesia", "Endonezya", "Central", "Orta", "Yogyakarta", "Yogyakarta", "Pointed stone towers in complex", "Sivri taş kuleli tapınak kompleksi", -7.7520, 110.4914, "Prambanan"],
  ["Banaue Rice Terraces", "Hard", "Philippines", "Filipinler", "Northern", "Kuzey", "Ifugao", "Ifugao", "Stepped green agricultural terraces", "Dağ yamaçlarında basamaklı teraslar", 16.9240, 121.0558, "Banaue_Rice_Terraces"],
  ["Mehrangarh Fort", "Hard", "India", "Hindistan", "Northwestern", "Kuzeybatı", "Jodhpur", "Jodhpur", "High stone fort walls above city", "Şehrin üstünde yüksek taş kale duvarları", 26.2981, 73.0185, "Mehrangarh"],
  ["Saint George Church, Lalibela", "Hard", "Ethiopia", "Etiyopya", "Northern", "Kuzey", "Lalibela", "Lalibela", "Church carved down into solid rock", "Kayaya oyulmuş tarihi taş kilise", 12.0319, 39.0412, "Church_of_Saint_George,_Lalibela"],
  ["Aït Benhaddou", "Hard", "Morocco", "Fas", "Southern", "Güney", "Ouarzazate", "Ouarzazate", "Earthen kasbah buildings by river", "Nehir kenarında toprak kale yapıları", 31.0472, -7.1319, "Aït_Benhaddou"],
  ["Great Mosque of Djenné", "Hard", "Mali", "Mali", "Central", "Orta", "Djenné", "Djenné", "Large earthen mosque with wooden poles", "Ahşap çıkmalı büyük toprak cami", 13.9052, -4.5554, "Great_Mosque_of_Djenné"],
  ["Bo-Kaap Street", "Hard", "South Africa", "Güney Afrika", "Southwestern", "Güneybatı", "Cape Town", "Cape Town", "Brightly colored houses on cobbles", "Arnavut kaldırımlı renkli sokak evleri", -33.9212, 18.4150, "Bo-Kaap"],
  ["Avenue of the Baobabs", "Hard", "Madagascar", "Madagaskar", "Western", "Batı", "Menabe", "Menabe", "Tall thick-trunked trees along road", "Yol boyunca kalın gövdeli ağaçlar", -20.2509, 44.4184, "Avenue_of_the_Baobabs"],
  ["Sidi Bou Said", "Hard", "Tunisia", "Tunus", "Northern", "Kuzey", "Tunis", "Tunus", "White-and-blue coastal town houses", "Beyaz ve mavi kıyıda kasaba evleri", 36.8687, 10.3417, "Sidi_Bou_Said"],
  ["El Jem Amphitheatre", "Hard", "Tunisia", "Tunus", "Eastern", "Doğu", "El Jem", "El Jem", "Large multi-tier stone Roman arena", "Çok katlı büyük antik taş arena", 35.2964, 10.7069, "Amphitheatre_of_El_Jem"],
  ["Guanajuato Valley Town", "Hard", "Mexico", "Meksika", "Central", "Orta", "Guanajuato", "Guanajuato", "Colorful houses packed in narrow valley", "Dar vadide sıralı renkli evler", 21.0190, -101.2574, "Guanajuato"],
  ["Tikal Temple", "Hard", "Guatemala", "Guatemala", "Northern", "Kuzey", "Petén", "Petén", "Steep stone pyramid rising in forest", "Orman ortasında dik taş piramit", 17.2220, -89.6237, "Tikal"],
  ["Santa Catalina Arch", "Hard", "Guatemala", "Guatemala", "Southern", "Güney", "Antigua", "Antigua", "Yellow arch spanning a cobblestone street", "Taş sokak üstünde sarı kemer yapı", 14.5608, -90.7342, "Santa_Catalina_Arch"],
  ["Las Lajas Sanctuary", "Hard", "Colombia", "Kolombiya", "Southwestern", "Güneybatı", "Nariño", "Nariño", "Church built across a canyon river", "Kanyon üstünde köprü biçimli kilise", 0.8056, -77.5858, "Las_Lajas_Sanctuary"],
  ["Cusco Historic Plaza", "Hard", "Peru", "Peru", "Southern", "Güney", "Cusco", "Cusco", "Stone churches around a mountain square", "Dağ kentinde taş kiliseli meydan", -13.5168, -71.9788, "Cusco"],
  ["Torres del Paine Peaks", "Hard", "Chile", "Şili", "Southern", "Güney", "Magallanes", "Magallanes", "Granite mountain towers above lake", "Göl üstünde yükselen granit zirveler", -50.9423, -73.4068, "Torres_del_Paine_National_Park"],
  ["Moai Statues", "Hard", "Chile", "Şili", "Western", "Batı", "Rapa Nui", "Rapa Nui", "Carved stone statues on green slope", "Yeşil yamaçta oyulmuş taş heykeller", -27.1258, -109.2770, "Moai"],
  ["Pelourinho Historic Square", "Hard", "Brazil", "Brezilya", "Northeastern", "Kuzeydoğu", "Salvador", "Salvador", "Colorful colonial buildings on slope", "Yamaçta renkli tarihi şehir binaları", -12.9718, -38.5086, "Pelourinho_(Salvador)"],
  ["Ushuaia Waterfront", "Hard", "Argentina", "Arjantin", "Southern", "Güney", "Tierra del Fuego", "Ateş Toprakları", "Southern port buildings before mountains", "Dağlar önünde güney liman kenti", -54.8019, -68.3030, "Ushuaia"],
  ["Antelope Slot Canyon", "Hard", "USA", "ABD", "Southwestern", "Güneybatı", "Page", "Page", "Curved sandstone walls in narrow canyon", "Dar kanyonda kıvrımlı kumtaşı duvarlar", 36.8619, -111.3743, "Antelope_Canyon"],
  ["Monument Valley Buttes", "Hard", "USA", "ABD", "Southwestern", "Güneybatı", "Utah/Arizona", "Utah/Arizona", "Flat-topped red rock towers in desert", "Çölde düz tepeli kızıl kaya kuleleri", 36.9980, -110.0985, "Monument_Valley"],
  ["Peggy's Cove Lighthouse", "Hard", "Canada", "Kanada", "Eastern", "Doğu", "Nova Scotia", "Nova Scotia", "Lighthouse tower on coastal rocks", "Kıyı kayalıklarında deniz feneri", 44.4917, -63.9183, "Peggys_Point_Lighthouse"],
  ["Queenstown Lakefront", "Hard", "New Zealand", "Yeni Zelanda", "Southwestern", "Güneybatı", "Otago", "Otago", "Lakeside town surrounded by mountains", "Dağlarla çevrili göl kıyısı kasabası", -45.0312, 168.6626, "Queenstown,_New_Zealand"],
  ["Reine Village, Lofoten", "Hard", "Norway", "Norveç", "Northern", "Kuzey", "Moskenes", "Moskenes", "Coastal cabins beneath sharp peaks", "Sivri zirveler altında kıyı evleri", 67.9325, 13.0887, "Reine"]
];

const LOCATIONS_POOL = UNIQUE_300_LANDMARKS.map(
  ([name, difficulty, countryEN, countryTR, regionEN, regionTR, cityEN, cityTR, clueEN, clueTR, lat, lng, wikiTitle], idx) => ({
    id: idx + 1,
    name,
    difficulty,
    countryEN,
    countryTR,
    regionEN,
    regionTR,
    cityEN,
    cityTR,
    clueEN,
    clueTR,
    coords: [lat, lng],
    wikiTitle
  })
);

const usedLocationIds = new Set();
let lastMatchLocationIds = new Set();

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
    finalModeDesc: "Who will win the 6v6 big final?",
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
    loadingPhoto: "Loading real-world photo...",
    statusDefault: "Tap on the OpenStreetMap map to place your guess pin.",
    mapPanelTitle: "OpenStreetMap Guess Area",
    noPin: "No pin placed",
    shootBtn: "Confirm Guess & Go to Arena",
    loadingArena: "Loading Arena & Crowd...",
    crowdWatching: "Crowd: Watching",
    crowdCheer: "Crowd: Cheering 🎉",
    crowdSad: "Crowd: Disappointed 😔",
    crowdBlueCheer: "Blue Stand Cheering • Red Stand Sad",
    crowdRedCheer: "Red Stand Cheering • Blue Stand Sad",
    distanceLbl: "Distance Error:",
    chanceLbl: "Goal Chance:",
    outcomeLbl: "Outcome:",
    shooting: "Playing sequence...",
    attackInProgress: "Attack in Progress...",
    penaltyInProgress: "Penalty Kick in Progress...",
    hiddenDetail: "Accuracy, distance error, and goal chance will be revealed after the sequence ends...",
    nextRound: "Next Round →",
    seeSummary: "See Summary",
    ceremonyRunningBtn: "Trophy Ceremony...",
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
    loadingUniquePlaces: (loaded, total) => `Loading unique real photos (${loaded}/${total})`,
    actualPrefix: "Actual Place:",
    timeUp: "Time Up",
    timedOutDetail: (name) => `Time expired! Target was ${name}.`,
    guessDetail: (km, name, chance) => `You guessed ${km.toLocaleString()} km away from ${name} (${chance}% goal chance).`,
    goalText: (pts) => `GOAL (+${pts} pts)`,
    matchBlueGoalText: (pts) => `BLUE GOAL (+${pts} pts)`,
    matchRedGoalText: "RED GOAL (0 pts)",
    noGoalText: "NO GOAL (0 pts)",
    chartLabel: "Accuracy Score (0–100: High = Close, Low = Far)",
    bannerNoGoal: "Saved / Missed!",
    bannerBlueGoal: "BLUE TEAM SCORES!",
    bannerRedGoal: "RED TEAM SCORES!",
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
    finalModeDesc: "6v6 büyük finalde kim galip gelecek?",
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
    loadingPhoto: "Gerçek fotoğraf yükleniyor...",
    statusDefault: "Tahmin iğnesini bırakmak için OpenStreetMap haritasına dokun.",
    mapPanelTitle: "OpenStreetMap Tahmin Alanı",
    noPin: "İğne bırakılmadı",
    shootBtn: "Tahmini Onayla ve Sahaya Geç",
    loadingArena: "Saha ve Tribün Yükleniyor...",
    crowdWatching: "Tribün: İzliyor",
    crowdCheer: "Tribün: Seviniyor 🎉",
    crowdSad: "Tribün: Üzgün 😔",
    crowdBlueCheer: "Mavi Tribün Seviniyor • Kırmızı Üzgün",
    crowdRedCheer: "Kırmızı Tribün Seviniyor • Mavi Üzgün",
    distanceLbl: "Mesafe Hatası:",
    chanceLbl: "Gol İhtimali:",
    outcomeLbl: "Sonuç:",
    shooting: "Pozisyon oynanıyor...",
    attackInProgress: "Atak Devam Ediyor...",
    penaltyInProgress: "Penaltı Kullanılıyor...",
    hiddenDetail: "Pozisyon tamamlandığında gerçek yer, mesafe hatası ve gol şansı açıklanacak...",
    nextRound: "Sonraki Tur →",
    seeSummary: "Özeti Gör",
    ceremonyRunningBtn: "Kupa Seremonisi...",
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
    loadingUniquePlaces: (loaded, total) => `Eşsiz gerçek fotoğraflar yükleniyor (${loaded}/${total})`,
    actualPrefix: "Gerçek Yer:",
    timeUp: "Süre Doldu",
    timedOutDetail: (name) => `Süre doldu! Doğru konum: ${name}.`,
    guessDetail: (km, name, chance) => `${name} konumuna ${km.toLocaleString()} km uzakta tahmin yaptın (%${chance} gol ihtimali).`,
    goalText: (pts) => `GOL (+${pts} puan)`,
    matchBlueGoalText: (pts) => `MAVİ GOL (+${pts} puan)`,
    matchRedGoalText: "KIRMIZI GOL (0 puan)",
    noGoalText: "GOL YOK (0 puan)",
    chartLabel: "İsabet / Yakınlık Puanı (0–100: Yakın = Yüksek, Uzak = Düşük)",
    bannerNoGoal: "Kurtarış / Kaçtı!",
    bannerBlueGoal: "MAVİ TAKIM GOL ATTI!",
    bannerRedGoal: "KIRMIZI TAKIM GOL ATTI!",
    crowdWildRematch: "Taraftar çıldırdı, rövanş istiyor!"
  }
};

let currentLang = "en";
function t(key) {
  return UI_TEXT[currentLang][key];
}

// ============================================================================
// AUDIO SYNTHESIZER (MASTER GAIN + INSTANT MUTE/UNMUTE ON ALL SCREENS)
// ============================================================================
const soundEngine = (() => {
  let ctxAudio = null;
  let masterGain = null;
  let soundEnabled = true;
  let welcomeInterval = null;
  let welcomeStep = 0;
  let themeInterval = null;
  let stepIndex = 0;
  let celebrationTimeout = null;
  let lastSecondsLeft = 15;

  const welcomeNotes = [261.63, 329.63, 392.0, 493.88, 392.0, 329.63, 293.66, 392.0];
  const normalNotes = [261.63, 329.63, 392.0, 523.25, 392.0, 349.23, 440.0, 392.0];
  const urgentNotes = [329.63, 392.0, 493.88, 523.25, 587.33, 523.25, 493.88, 392.0];

  function ensureContext() {
    if (!soundEnabled) return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!ctxAudio) {
      ctxAudio = new AudioCtx();
      masterGain = ctxAudio.createGain();
      masterGain.gain.setValueAtTime(1, ctxAudio.currentTime);
      masterGain.connect(ctxAudio.destination);
    }
    if (masterGain) {
      masterGain.gain.setValueAtTime(1, ctxAudio.currentTime);
    }
    if (ctxAudio.state === "suspended") {
      ctxAudio.resume().catch(() => {});
    }
    return ctxAudio;
  }

  function playTone(audio, { freq, type = "triangle", startOffset = 0, duration = 0.2, peak = 0.06, slideTo = null }) {
    if (!soundEnabled || !audio || !masterGain) return;
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
    gain.connect(masterGain);
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
    if (!audio || !masterGain) return;
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
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + dur + 0.02);
  }

  function updateSelectionTheme(secondsLeft) {
    lastSecondsLeft = secondsLeft;
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
    const id = setInterval(() => playThemeBeat(lastSecondsLeft <= 4), intervalMs);
    themeInterval = { id, ms: intervalMs };
  }

  function stopSelectionTheme() {
    if (themeInterval !== null) {
      clearInterval(themeInterval.id);
      themeInterval = null;
    }
    stepIndex = 0;
  }

  function stopCelebrationMusic() {
    if (celebrationTimeout !== null) {
      clearTimeout(celebrationTimeout);
      celebrationTimeout = null;
    }
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

  function playTrophyCelebrationMusic() {
    stopSelectionTheme();
    stopWelcomeTheme();
    stopCelebrationMusic();
    if (!soundEnabled) return;
    const audio = ensureContext();
    if (!audio) return;

    const melody = [
      { freq: 523.25, offset: 0.0, dur: 0.18, peak: 0.085 },
      { freq: 659.25, offset: 0.2, dur: 0.18, peak: 0.085 },
      { freq: 783.99, offset: 0.4, dur: 0.18, peak: 0.09 },
      { freq: 1046.5, offset: 0.6, dur: 0.36, peak: 0.10 },
      { freq: 783.99, offset: 1.0, dur: 0.18, peak: 0.085 },
      { freq: 880.0, offset: 1.2, dur: 0.18, peak: 0.09 },
      { freq: 1046.5, offset: 1.4, dur: 0.44, peak: 0.105 },
      { freq: 659.25, offset: 1.9, dur: 0.18, peak: 0.085 },
      { freq: 783.99, offset: 2.1, dur: 0.18, peak: 0.09 },
      { freq: 987.77, offset: 2.3, dur: 0.18, peak: 0.095 },
      { freq: 1046.5, offset: 2.5, dur: 0.5, peak: 0.11 },
      { freq: 783.99, offset: 3.1, dur: 0.18, peak: 0.085 },
      { freq: 1046.5, offset: 3.3, dur: 0.2, peak: 0.095 },
      { freq: 1318.51, offset: 3.55, dur: 0.75, peak: 0.115 }
    ];

    melody.forEach((n) => {
      playTone(audio, {
        freq: n.freq,
        type: "triangle",
        startOffset: n.offset,
        duration: n.dur,
        peak: n.peak
      });
    });

    celebrationTimeout = setTimeout(() => {
      stopCelebrationMusic();
    }, 5000);
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
      stopCelebrationMusic();
      if (ctxAudio && masterGain) {
        masterGain.gain.setValueAtTime(0, ctxAudio.currentTime);
      }
      if (ctxAudio && ctxAudio.state === "running") {
        ctxAudio.suspend().catch(() => {});
      }
    } else {
      ensureContext();
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
    playTrophyCelebrationMusic,
    stopCelebrationMusic,
    playMissTheme,
    setSoundEnabled,
    isSoundEnabled
  };
})();

// ============================================================================
// REAL-WORLD PHOTO LOADER (STRICTLY REJECTS BANKNOTES, LOGOS, FLAGS & MAPS)
// ============================================================================
const DEFAULT_PENALTY_ROUNDS = 6;
const DEFAULT_PENALTY_DURATION = 15;
const DEFAULT_FINAL_ROUNDS = 6;
const DEFAULT_FINAL_DURATION = 15;
const HIGHSCORE_KEY = "geogoal_highscore";
const resolvedImageCache = new Map();
const FALLBACK_PHOTO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg";

const NON_PHOTO_PATTERNS = [
  /\.svg/i,
  /\.gif/i,
  /\.webp/i,
  /banknote/i,
  /currency/i,
  /coin/i,
  /bill/i,
  /franc/i,
  /euro/i,
  /dollar/i,
  /pound/i,
  /lira/i,
  /logo/i,
  /emblem/i,
  /coat_of_arms/i,
  /flag/i,
  /seal/i,
  /icon/i,
  /map/i,
  /locator/i,
  /diagram/i,
  /plan/i,
  /chart/i,
  /symbol/i,
  /crest/i,
  /badge/i,
  /signature/i,
  /blueprint/i,
  /commons-logo/i
];

function isCleanRealWorldPhotoUrl(url) {
  if (!url || typeof url !== "string") return false;
  const lower = url.toLowerCase();
  if (!/\.(jpe?g)(\?|$)/i.test(lower) && !lower.includes("special:filepath")) return false;
  for (let i = 0; i < NON_PHOTO_PATTERNS.length; i++) {
    if (NON_PHOTO_PATTERNS[i].test(lower)) return false;
  }
  return true;
}

function clampInt(val, min, max, fallback) {
  const num = Number.parseInt(val, 10);
  if (Number.isNaN(num)) return fallback;
  return Math.min(max, Math.max(min, num));
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
    img.onload = () => {
      if (img.naturalWidth >= 260 && img.naturalHeight >= 180) {
        finish(true);
      } else {
        finish(false);
      }
    };
    img.onerror = () => finish(false);
    img.src = src;
  });
}

async function fetchRealWorldPhotos(wikiTitle, timeoutMs = 4500) {
  if (!wikiTitle) return [];
  const urls = [];

  const ctrl1 = new AbortController();
  const t1 = setTimeout(() => ctrl1.abort(), timeoutMs);
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`,
      { signal: ctrl1.signal, headers: { Accept: "application/json" } }
    );
    clearTimeout(t1);
    if (res.ok) {
      const data = await res.json();
      if (data.thumbnail && data.thumbnail.source && isCleanRealWorldPhotoUrl(data.thumbnail.source)) {
        const upscaled = data.thumbnail.source.replace(/\/\d+px-/, "/800px-");
        urls.push(upscaled, data.thumbnail.source);
      }
      if (data.originalimage && data.originalimage.source && isCleanRealWorldPhotoUrl(data.originalimage.source)) {
        urls.push(data.originalimage.source);
      }
    }
  } catch (_) {
    clearTimeout(t1);
  }

  if (urls.length === 0) {
    const ctrl2 = new AbortController();
    const t2 = setTimeout(() => ctrl2.abort(), timeoutMs);
    try {
      const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikiTitle)}&prop=images&imlimit=25&format=json&origin=*`;
      const res2 = await fetch(apiUrl, { signal: ctrl2.signal });
      clearTimeout(t2);
      if (res2.ok) {
        const data2 = await res2.json();
        const pages = data2.query && data2.query.pages ? Object.values(data2.query.pages) : [];
        if (pages.length > 0 && Array.isArray(pages[0].images)) {
          const jpgFiles = pages[0].images
            .map((im) => im.title)
            .filter((title) => title && /\.(jpe?g)$/i.test(title) && isCleanRealWorldPhotoUrl(title));
          jpgFiles.slice(0, 5).forEach((fileTitle) => {
            const cleanName = fileTitle.replace(/^File:/i, "");
            urls.push(`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(cleanName)}?width=800`);
          });
        }
      }
    } catch (_) {
      clearTimeout(t2);
    }
  }

  return [...new Set(urls)];
}

async function resolveWorkingImageUrl(locationItem) {
  const key = locationItem.wikiTitle || locationItem.name;
  if (resolvedImageCache.has(key)) return resolvedImageCache.get(key);

  const wikiUrls = await fetchRealWorldPhotos(locationItem.wikiTitle, 4500);
  const candidates = [
    ...wikiUrls,
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(locationItem.wikiTitle)}.jpg?width=800`,
    FALLBACK_PHOTO_URL
  ];

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

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickNonRepeatingFromTier(tier, count) {
  const tierItems = LOCATIONS_POOL.filter((x) => x.difficulty === tier);
  let available = tierItems.filter((x) => !usedLocationIds.has(x.id) && !lastMatchLocationIds.has(x.id));

  if (available.length < count) {
    tierItems.forEach((item) => usedLocationIds.delete(item.id));
    available = tierItems.filter((x) => !lastMatchLocationIds.has(x.id));
  }

  return shuffleArray(available).slice(0, count);
}

function buildMatchQuestions(totalRounds = DEFAULT_PENALTY_ROUNDS) {
  const n = clampInt(totalRounds, 6, 9, DEFAULT_PENALTY_ROUNDS);
  const easyCount = n === 6 ? 2 : Math.ceil(n / 3);
  const mediumCount = n === 6 ? 2 : Math.ceil((n - easyCount) / 2);
  const hardCount = Math.max(2, n - easyCount - mediumCount);

  const easy = pickNonRepeatingFromTier("Easy", easyCount);
  const medium = pickNonRepeatingFromTier("Medium", mediumCount);
  const hard = pickNonRepeatingFromTier("Hard", hardCount);
  const selected = [...easy, ...medium, ...hard].slice(0, n);

  lastMatchLocationIds = new Set(selected.map((x) => x.id));
  selected.forEach((x) => usedLocationIds.add(x.id));

  const variantDeck = shuffleArray([0, 1, 2, 3, 4, 5]);
  const extraDeck = shuffleArray([0, 1, 2, 3, 4, 5]);
  const combinedVariants = [...variantDeck, ...extraDeck];

  return selected.map((item, idx) => {
    const roundNum = idx + 1;
    const hideCityInLastThree = roundNum > n - 3;
    const scenarioVariant = combinedVariants[idx];
    return { ...item, hideCityInLastThree, scenarioVariant };
  });
}

function getFormattedClue(questionObj) {
  if (!questionObj) return "";
  const country = currentLang === "tr" ? questionObj.countryTR : questionObj.countryEN;
  const detail = currentLang === "tr" ? questionObj.clueTR : questionObj.clueEN;

  if (questionObj.hideCityInLastThree) {
    const region = currentLang === "tr" ? questionObj.regionTR : questionObj.regionEN;
    return `${country} • ${region} • ${detail}`;
  }

  const city = currentLang === "tr" ? questionObj.cityTR : questionObj.cityEN;
  return `${country} • ${city} • ${detail}`;
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
    timeLeft = getActiveDurationSetting();
  }

  function setMode(mode) {
    gameMode = mode === "final" ? "final" : "penalty";
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
    resetMatch: (rebuildQuestions = true) => {
      stopTimer();
      if (rebuildQuestions) {
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
  floatingSoundBtn: document.getElementById("floating-sound-btn"),
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

const map = L.map("map", { worldCopyJump: true, attributionControl: false, tap: true }).setView([25, 15], 2);
L.tileLayer(OSM_TILE_URL, { maxZoom: 19 }).addTo(map);

const resultMap = L.map("result-map", { worldCopyJump: true, attributionControl: false, tap: true }).setView([25, 15], 1);
L.tileLayer(OSM_TILE_URL, { maxZoom: 19 }).addTo(resultMap);

let guessMarker = null;
let resultGuessMarker = null;
let resultTargetMarker = null;
let resultLine = null;
let resultsChart = null;
let lastRoundSummary = null;
let ceremonyTimeoutId = null;
let isCeremonyRunning = false;
let currentLoadToken = 0;

function clearCeremonyTimer() {
  if (ceremonyTimeoutId !== null) {
    clearTimeout(ceremonyTimeoutId);
    ceremonyTimeoutId = null;
  }
  isCeremonyRunning = false;
  soundEngine.stopCelebrationMusic();
}

function updateSoundButtonsUI() {
  const enabled = soundEngine.isSoundEnabled();
  el.soundToggleBtn.textContent = enabled ? t("soundOn") : t("soundOff");
  el.floatingSoundBtn.textContent = enabled ? "🔊" : "🔇";
  el.floatingSoundBtn.classList.toggle("muted", !enabled);
}

function applyLanguageUI() {
  const q = game.getCurrentQuestion();

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
  updateSoundButtonsUI();

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
  if (q) {
    el.locationHint.textContent = `${t("cluePrefix")}: ${getFormattedClue(q)}`;
  }
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

  if (isCeremonyRunning) {
    el.nextBtn.textContent = t("ceremonyRunningBtn");
  } else {
    el.nextBtn.textContent = game.hasNextRound() ? t("nextRound") : t("seeSummary");
  }

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
    if (game.getMode() === "final") {
      el.outcomeDisplay.textContent = lastRoundSummary.isGoal
        ? t("matchBlueGoalText")(lastRoundSummary.pointsEarned)
        : t("matchRedGoalText");
      el.crowdMoodBadge.textContent = lastRoundSummary.isGoal ? t("crowdBlueCheer") : t("crowdRedCheer");
    } else {
      el.outcomeDisplay.textContent = lastRoundSummary.isGoal
        ? t("goalText")(lastRoundSummary.pointsEarned)
        : t("noGoalText");
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

// ============================================================================
// CANVAS RENDERING & REALISTIC 6v6 MATCH ENGINE (DRIBBLE CONTROL + FORWARD RUNS)
// ============================================================================
const ctx = el.canvas.getContext("2d");
let animFrameId = null;

function lerp(a, b, tVal) {
  return a + (b - a) * Math.max(0, Math.min(1, tVal));
}

function smoothDamp(current, target, speed, dt) {
  const factor = 1 - Math.exp(-speed * dt);
  return current + (target - current) * factor;
}

function quadBezier(p0, p1, p2, tVal) {
  const u = 1 - tVal;
  return u * u * p0 + 2 * u * tVal * p1 + tVal * tVal * p2;
}

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

function drawPenaltySixCircleBillboard(boardX, boardY, boardW, boardH) {
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

  const circleCount = 6;
  const circleSpacing = Math.max(12, Math.floor((halfW - 14) / circleCount));

  for (let i = 0; i < circleCount; i++) {
    const gx = boardX + 12 + i * circleSpacing;
    const gy = boardY + boardH / 2;
    ctx.beginPath();
    ctx.arc(gx, gy, 4.4, 0, Math.PI * 2);
    ctx.fillStyle = i < game.getGoals() ? "#4ade80" : "rgba(5, 46, 22, 0.55)";
    ctx.fill();

    const rx = boardX + boardW / 2 + 12 + i * circleSpacing;
    ctx.beginPath();
    ctx.arc(rx, gy, 4.4, 0, Math.PI * 2);
    ctx.fillStyle = i < game.getMissed() ? "#fca5a5" : "rgba(69, 10, 10, 0.55)";
    ctx.fill();
  }
}

function drawPenaltySupporterStand(timeSec, takerMood, bannerText) {
  const player = getActivePlayer();

  ctx.fillStyle = "#05122b";
  ctx.fillRect(0, 0, el.canvas.width, 114);

  const boardW = 240;
  const boardH = 26;
  const boardX = (el.canvas.width - boardW) / 2;
  const boardY = 4;
  drawPenaltySixCircleBillboard(boardX, boardY, boardW, boardH);

  PENALTY_SUPPORTER_CROWD.forEach((fan) => {
    let offsetY = 0;
    let raiseArms = false;
    let headBow = 0;

    if (takerMood === "cheer") {
      offsetY = -Math.abs(Math.sin(timeSec * 6.5 + fan.phase)) * 11;
      raiseArms = true;
    } else if (takerMood === "sad") {
      offsetY = 5 + Math.sin(timeSec * 3.0 + fan.phase) * 1.0;
      headBow = 2.4;
    } else {
      offsetY = -Math.abs(Math.sin(timeSec * 4.2 + fan.phase)) * 3.2;
      raiseArms = true;
    }

    const fy = fan.baseY + offsetY;
    ctx.fillStyle = fan.color;
    ctx.fillRect(fan.x - 4.5, fy - 5, 9, 10);

    ctx.strokeStyle = fan.color;
    ctx.lineWidth = 2.1;
    ctx.beginPath();
    if (raiseArms) {
      const waveX = Math.sin(timeSec * 8 + fan.phase) * 2.5;
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
    ctx.save();
    ctx.fillStyle = "rgba(2, 6, 23, 0.72)";
    ctx.fillRect(el.canvas.width / 2 - 190, 134, 380, 26);
    ctx.strokeStyle = "#facc15";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(el.canvas.width / 2 - 190, 134, 380, 26);
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#facc15";
    ctx.fillText(bannerText, el.canvas.width / 2, 147);
    ctx.restore();
  }
}

function drawMarathonStandAndBoard(timeSec, blueMood, redMood, bannerText) {
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
      offsetY = -Math.abs(Math.sin(timeSec * 6.5 + fan.phase)) * 10;
      raiseArms = true;
    } else if (mood === "sad") {
      offsetY = 5 + Math.sin(timeSec * 3.0 + fan.phase) * 1.0;
      headBow = 2.4;
    } else {
      offsetY = Math.sin(timeSec * 3.0 + fan.phase) * 1.3;
    }

    const fy = fan.baseY + offsetY;
    ctx.fillStyle = fan.color;
    ctx.fillRect(fan.x - 4.5, fy - 5, 9, 10);

    ctx.strokeStyle = fan.color;
    ctx.lineWidth = 2.1;
    ctx.beginPath();
    if (raiseArms) {
      const waveX = Math.sin(timeSec * 8.5 + fan.phase) * 2.5;
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
    { x: 238, w: 238, bg: "#061136", fg: "#facc15", text: "6v6 BIG FINAL" },
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
    ctx.save();
    ctx.fillStyle = "rgba(2, 6, 23, 0.76)";
    ctx.fillRect(el.canvas.width / 2 - 205, 134, 410, 26);
    ctx.strokeStyle = "#facc15";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(el.canvas.width / 2 - 205, 134, 410, 26);
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#facc15";
    ctx.fillText(bannerText, el.canvas.width / 2, 147);
    ctx.restore();
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

function drawOutfieldPlayer(p, timeSec) {
  const { x, y, team, mood = "neutral", runPhase = 0, speed = 0, liftingTrophy = false } = p;
  const isBlue = team === "blue";
  const jerseyColor = isBlue ? "#2563eb" : "#dc2626";
  const trimColor = isBlue ? "#93c5fd" : "#fca5a5";
  const shortsColor = isBlue ? "#1e3a8a" : "#7f1d1d";

  const moveFactor = Math.min(1, speed / 75);
  let bobY = -Math.abs(Math.sin(runPhase)) * 2.6 * moveFactor;
  let headBow = 0;
  if (mood === "cheer") {
    bobY = -Math.abs(Math.sin(timeSec * 6.5 + x * 0.03)) * 7.5;
  } else if (mood === "sad") {
    bobY = 3.2;
    headBow = 3;
  }

  const py = y + bobY;

  ctx.fillStyle = "rgba(0,0,0,0.32)";
  ctx.beginPath();
  ctx.ellipse(x, y + 14, 11.5, 3.8, 0, 0, Math.PI * 2);
  ctx.fill();

  const legSwing = Math.sin(runPhase) * 5.2 * moveFactor;
  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 3.8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x - 3.5, py + 3);
  ctx.lineTo(x - 3.5 + legSwing, py + 13);
  ctx.moveTo(x + 3.5, py + 3);
  ctx.lineTo(x + 3.5 - legSwing, py + 13);
  ctx.stroke();

  ctx.fillStyle = shortsColor;
  ctx.fillRect(x - 7.5, py - 2, 15, 6.5);

  ctx.fillStyle = jerseyColor;
  ctx.fillRect(x - 9, py - 17, 18, 15.5);
  ctx.strokeStyle = trimColor;
  ctx.lineWidth = 1.4;
  ctx.strokeRect(x - 9, py - 17, 18, 15.5);

  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 3.4;
  ctx.beginPath();
  if (liftingTrophy) {
    ctx.moveTo(x - 9, py - 14);
    ctx.lineTo(x - 6, py - 28);
    ctx.moveTo(x + 9, py - 14);
    ctx.lineTo(x + 6, py - 28);
  } else if (mood === "cheer") {
    const armWave = Math.sin(timeSec * 9) * 3;
    ctx.moveTo(x - 9, py - 14);
    ctx.lineTo(x - 16, py - 24 + armWave);
    ctx.moveTo(x + 9, py - 14);
    ctx.lineTo(x + 16, py - 24 - armWave);
  } else {
    ctx.moveTo(x - 9, py - 14);
    ctx.lineTo(x - 13, py - 6 - legSwing * 0.45);
    ctx.moveTo(x + 9, py - 14);
    ctx.lineTo(x + 13, py - 6 + legSwing * 0.45);
  }
  ctx.stroke();

  ctx.fillStyle = "#fed7aa";
  ctx.beginPath();
  ctx.arc(x, py - 23 + headBow, 6, 0, Math.PI * 2);
  ctx.fill();

  if (liftingTrophy) {
    drawTrophyIcon(x, py - 41, 0.8);
  }
}

function drawMatchGoalkeeper(gk, timeSec) {
  const { x, y, team, diveProgress = 0, diveDir = 0, mood = "neutral" } = gk;
  const isBlue = team === "blue";
  const jerseyColor = isBlue ? "#facc15" : "#22c55e";
  const gloveColor = "#ffffff";

  let bobY = 0;
  if (mood === "cheer") {
    bobY = -Math.abs(Math.sin(timeSec * 6.5)) * 7;
  } else if (mood === "sad") {
    bobY = 3;
  }

  ctx.save();
  ctx.translate(x, y + bobY);

  if (diveProgress > 0.01 && diveDir !== 0) {
    const angle = diveDir * diveProgress * 1.15 * (isBlue ? 1 : -1);
    ctx.rotate(angle);
  }

  ctx.fillStyle = "rgba(0,0,0,0.34)";
  ctx.beginPath();
  ctx.ellipse(0, 14, 12, 4, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-4, 4);
  ctx.lineTo(-5, 14);
  ctx.moveTo(4, 4);
  ctx.lineTo(5, 14);
  ctx.stroke();

  ctx.fillStyle = jerseyColor;
  ctx.fillRect(-9, -16, 18, 20);
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 1.4;
  ctx.strokeRect(-9, -16, 18, 20);

  const stretch = diveProgress > 0.05 ? 16 * diveProgress : 0;
  ctx.strokeStyle = jerseyColor;
  ctx.lineWidth = 3.8;
  ctx.beginPath();
  if (diveProgress > 0.05) {
    ctx.moveTo(-8, -13);
    ctx.lineTo(-14, -22 - stretch);
    ctx.moveTo(8, -13);
    ctx.lineTo(14, -22 - stretch);
  } else if (mood === "cheer") {
    ctx.moveTo(-9, -13);
    ctx.lineTo(-16, -24);
    ctx.moveTo(9, -13);
    ctx.lineTo(16, -24);
  } else {
    ctx.moveTo(-9, -13);
    ctx.lineTo(-15, -5);
    ctx.moveTo(9, -13);
    ctx.lineTo(15, -5);
  }
  ctx.stroke();

  ctx.fillStyle = gloveColor;
  ctx.beginPath();
  if (diveProgress > 0.05) {
    ctx.arc(-14, -23 - stretch, 4, 0, Math.PI * 2);
    ctx.arc(14, -23 - stretch, 4, 0, Math.PI * 2);
  } else if (mood === "cheer") {
    ctx.arc(-16, -24, 3.8, 0, Math.PI * 2);
    ctx.arc(16, -24, 3.8, 0, Math.PI * 2);
  } else {
    ctx.arc(-15, -5, 3.6, 0, Math.PI * 2);
    ctx.arc(15, -5, 3.6, 0, Math.PI * 2);
  }
  ctx.fill();

  ctx.fillStyle = "#fed7aa";
  ctx.beginPath();
  ctx.arc(0, -22, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawMatchPitchAndGoals(netRippleBlue, netRippleRed, timeSec) {
  const stripeCount = 10;
  const stripeW = el.canvas.width / stripeCount;
  for (let s = 0; s < stripeCount; s++) {
    ctx.fillStyle = s % 2 === 0 ? "#15803d" : "#166534";
    ctx.fillRect(s * stripeW, 130, stripeW + 1, el.canvas.height - 130);
  }

  ctx.strokeStyle = "rgba(255,255,255,0.68)";
  ctx.lineWidth = 2.2;
  ctx.strokeRect(48, 154, el.canvas.width - 96, el.canvas.height - 172);

  ctx.beginPath();
  ctx.moveTo(el.canvas.width / 2, 154);
  ctx.lineTo(el.canvas.width / 2, el.canvas.height - 18);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(el.canvas.width / 2, 273, 44, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(el.canvas.width / 2, 273, 3.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeRect(48, 196, 126, 154);
  ctx.strokeRect(48, 224, 48, 98);
  ctx.strokeRect(el.canvas.width - 174, 196, 126, 154);
  ctx.strokeRect(el.canvas.width - 96, 224, 48, 98);

  const lGoalX = 16;
  const lGoalY = 231;
  const goalW = 32;
  const goalH = 84;
  ctx.fillStyle = "rgba(37, 99, 235, 0.16)";
  ctx.fillRect(lGoalX, lGoalY, goalW, goalH);
  ctx.strokeStyle = "rgba(255,255,255,0.34)";
  ctx.lineWidth = 1;
  for (let gx = lGoalX + 6; gx < lGoalX + goalW; gx += 7) {
    const wave = netRippleBlue ? Math.sin(timeSec * 14 + gx * 0.2) * netRippleBlue : 0;
    ctx.beginPath();
    ctx.moveTo(gx, lGoalY);
    ctx.lineTo(gx + wave, lGoalY + goalH);
    ctx.stroke();
  }
  for (let gy = lGoalY + 12; gy < lGoalY + goalH; gy += 12) {
    const wave = netRippleBlue ? Math.cos(timeSec * 14 + gy * 0.2) * netRippleBlue : 0;
    ctx.beginPath();
    ctx.moveTo(lGoalX, gy);
    ctx.lineTo(lGoalX + goalW, gy + wave);
    ctx.stroke();
  }
  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 4;
  ctx.strokeRect(lGoalX, lGoalY, goalW, goalH);

  const rGoalX = el.canvas.width - 48;
  const rGoalY = 231;
  ctx.fillStyle = "rgba(220, 38, 38, 0.16)";
  ctx.fillRect(rGoalX, rGoalY, goalW, goalH);
  ctx.strokeStyle = "rgba(255,255,255,0.34)";
  ctx.lineWidth = 1;
  for (let gx = rGoalX + 6; gx < rGoalX + goalW; gx += 7) {
    const wave = netRippleRed ? Math.sin(timeSec * 14 + gx * 0.2) * netRippleRed : 0;
    ctx.beginPath();
    ctx.moveTo(gx, rGoalY);
    ctx.lineTo(gx + wave, rGoalY + goalH);
    ctx.stroke();
  }
  for (let gy = rGoalY + 12; gy < rGoalY + goalH; gy += 12) {
    const wave = netRippleRed ? Math.cos(timeSec * 14 + gy * 0.2) * netRippleRed : 0;
    ctx.beginPath();
    ctx.moveTo(rGoalX, gy);
    ctx.lineTo(rGoalX + goalW, gy + wave);
    ctx.stroke();
  }
  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 4;
  ctx.strokeRect(rGoalX, rGoalY, goalW, goalH);
}

function buildMatchScript(blueScores, chance, variant) {
  const isSuspense = chance === 80 || chance === 50 || chance === 20;
  const v = ((variant % 6) + 6) % 6;

  if (!isSuspense && blueScores) {
    if (v === 0) {
      return [
        { type: "dribble", team: "blue", idx: 0, start: 0.0, end: 1.15, tx: 335, ty: 196 },
        { type: "pass", team: "blue", fromIdx: 0, toIdx: 2, start: 1.15, end: 2.35, rx: 505, ry: 204, curve: -22, loft: 11 },
        { type: "dribble", team: "blue", idx: 2, start: 2.35, end: 3.15, tx: 575, ty: 222 },
        { type: "pass", team: "blue", fromIdx: 2, toIdx: 3, start: 3.15, end: 4.35, rx: 660, ry: 326, curve: 0, loft: 0 },
        { type: "pass", team: "blue", fromIdx: 3, toIdx: 4, start: 4.35, end: 5.75, rx: 788, ry: 272, curve: -18, loft: 9 },
        { type: "shot_goal", team: "blue", idx: 4, start: 5.75, end: 7.4, gx: 932, gy: 304, diveDir: 1, shotCurve: -16 }
      ];
    } else if (v === 1) {
      return [
        { type: "dribble", team: "blue", idx: 1, start: 0.0, end: 1.0, tx: 320, ty: 338 },
        { type: "pass", team: "blue", fromIdx: 1, toIdx: 3, start: 1.0, end: 2.15, rx: 495, ry: 332, curve: 0, loft: 0 },
        { type: "pass", team: "blue", fromIdx: 3, toIdx: 4, start: 2.15, end: 3.3, rx: 615, ry: 273, curve: 0, loft: 0 },
        { type: "pass", team: "blue", fromIdx: 4, toIdx: 2, start: 3.3, end: 4.5, rx: 705, ry: 206, curve: -24, loft: 11 },
        { type: "pass", team: "blue", fromIdx: 2, toIdx: 4, start: 4.5, end: 5.75, rx: 792, ry: 256, curve: 0, loft: 0 },
        { type: "shot_goal", team: "blue", idx: 4, start: 5.75, end: 7.4, gx: 932, gy: 242, diveDir: -1, shotCurve: 16 }
      ];
    } else if (v === 2) {
      return [
        { type: "dribble", team: "blue", idx: 2, start: 0.0, end: 1.15, tx: 455, ty: 215 },
        { type: "pass", team: "blue", fromIdx: 2, toIdx: 4, start: 1.15, end: 2.35, rx: 575, ry: 273, curve: 0, loft: 0 },
        { type: "dribble", team: "blue", idx: 4, start: 2.35, end: 3.25, tx: 650, ty: 282 },
        { type: "pass", team: "blue", fromIdx: 4, toIdx: 3, start: 3.25, end: 4.5, rx: 710, ry: 336, curve: 22, loft: 10 },
        { type: "pass", team: "blue", fromIdx: 3, toIdx: 4, start: 4.5, end: 5.75, rx: 794, ry: 282, curve: 0, loft: 0 },
        { type: "shot_goal", team: "blue", idx: 4, start: 5.75, end: 7.4, gx: 932, gy: 302, diveDir: 1, shotCurve: -16 }
      ];
    } else if (v === 3) {
      return [
        { type: "dribble", team: "blue", idx: 1, start: 0.0, end: 1.0, tx: 315, ty: 330 },
        { type: "pass", team: "blue", fromIdx: 1, toIdx: 4, start: 1.0, end: 2.2, rx: 540, ry: 273, curve: 20, loft: 10 },
        { type: "pass", team: "blue", fromIdx: 4, toIdx: 0, start: 2.2, end: 3.45, rx: 695, ry: 194, curve: 0, loft: 0 },
        { type: "dribble", team: "blue", idx: 0, start: 3.45, end: 4.4, tx: 775, ty: 198 },
        { type: "pass", team: "blue", fromIdx: 0, toIdx: 3, start: 4.4, end: 5.75, rx: 788, ry: 296, curve: -20, loft: 9 },
        { type: "shot_goal", team: "blue", idx: 3, start: 5.75, end: 7.4, gx: 932, gy: 244, diveDir: -1, shotCurve: 16 }
      ];
    } else if (v === 4) {
      return [
        { type: "dribble", team: "blue", idx: 0, start: 0.0, end: 1.15, tx: 365, ty: 205 },
        { type: "pass", team: "blue", fromIdx: 0, toIdx: 4, start: 1.15, end: 2.4, rx: 590, ry: 273, curve: 0, loft: 0 },
        { type: "pass", team: "blue", fromIdx: 4, toIdx: 2, start: 2.4, end: 3.65, rx: 685, ry: 208, curve: -20, loft: 10 },
        { type: "dribble", team: "blue", idx: 2, start: 3.65, end: 4.5, tx: 750, ty: 222 },
        { type: "pass", team: "blue", fromIdx: 2, toIdx: 4, start: 4.5, end: 5.75, rx: 792, ry: 262, curve: 0, loft: 0 },
        { type: "shot_goal", team: "blue", idx: 4, start: 5.75, end: 7.4, gx: 932, gy: 302, diveDir: 1, shotCurve: -16 }
      ];
    } else {
      return [
        { type: "dribble", team: "blue", idx: 2, start: 0.0, end: 1.15, tx: 485, ty: 194 },
        { type: "pass", team: "blue", fromIdx: 2, toIdx: 1, start: 1.15, end: 2.65, rx: 665, ry: 344, curve: 26, loft: 12 },
        { type: "dribble", team: "blue", idx: 1, start: 2.65, end: 4.2, tx: 765, ty: 336 },
        { type: "pass", team: "blue", fromIdx: 1, toIdx: 4, start: 4.2, end: 5.75, rx: 792, ry: 273, curve: 0, loft: 0 },
        { type: "shot_goal", team: "blue", idx: 4, start: 5.75, end: 7.4, gx: 932, gy: 242, diveDir: -1, shotCurve: 16 }
      ];
    }
  }

  if (!isSuspense && !blueScores) {
    if (v === 0) {
      return [
        { type: "dribble", team: "blue", idx: 2, start: 0.0, end: 0.95, tx: 445, ty: 225 },
        { type: "steal", fromTeam: "blue", toTeam: "red", toIdx: 2, start: 0.95, end: 1.55, tx: 495, ty: 225 },
        { type: "dribble", team: "red", idx: 2, start: 1.55, end: 2.35, tx: 430, ty: 235 },
        { type: "pass", team: "red", fromIdx: 2, toIdx: 3, start: 2.35, end: 3.55, rx: 345, ry: 334, curve: -22, loft: 10 },
        { type: "pass", team: "red", fromIdx: 3, toIdx: 2, start: 3.55, end: 4.65, rx: 245, ry: 206, curve: 0, loft: 0 },
        { type: "pass", team: "red", fromIdx: 2, toIdx: 4, start: 4.65, end: 5.75, rx: 170, ry: 273, curve: -18, loft: 9 },
        { type: "shot_goal", team: "red", idx: 4, start: 5.75, end: 7.4, gx: 28, gy: 242, diveDir: -1, shotCurve: -16 }
      ];
    } else if (v === 1) {
      return [
        { type: "dribble", team: "blue", idx: 3, start: 0.0, end: 0.95, tx: 445, ty: 320 },
        { type: "steal", fromTeam: "blue", toTeam: "red", toIdx: 4, start: 0.95, end: 1.55, tx: 495, ty: 295 },
        { type: "pass", team: "red", fromIdx: 4, toIdx: 2, start: 1.55, end: 2.8, rx: 355, ry: 202, curve: 0, loft: 0 },
        { type: "pass", team: "red", fromIdx: 2, toIdx: 1, start: 2.8, end: 4.2, rx: 225, ry: 338, curve: -24, loft: 11 },
        { type: "pass", team: "red", fromIdx: 1, toIdx: 4, start: 4.2, end: 5.75, rx: 170, ry: 292, curve: 0, loft: 0 },
        { type: "shot_goal", team: "red", idx: 4, start: 5.75, end: 7.4, gx: 28, gy: 304, diveDir: 1, shotCurve: 16 }
      ];
    } else if (v === 2) {
      return [
        { type: "dribble", team: "blue", idx: 4, start: 0.0, end: 0.95, tx: 485, ty: 273 },
        { type: "steal", fromTeam: "blue", toTeam: "red", toIdx: 3, start: 0.95, end: 1.55, tx: 525, ty: 295 },
        { type: "dribble", team: "red", idx: 3, start: 1.55, end: 2.4, tx: 445, ty: 305 },
        { type: "pass", team: "red", fromIdx: 3, toIdx: 0, start: 2.4, end: 3.65, rx: 305, ry: 196, curve: 22, loft: 10 },
        { type: "pass", team: "red", fromIdx: 0, toIdx: 3, start: 3.65, end: 4.75, rx: 235, ry: 330, curve: 0, loft: 0 },
        { type: "pass", team: "red", fromIdx: 3, toIdx: 4, start: 4.75, end: 5.75, rx: 170, ry: 252, curve: 0, loft: 0 },
        { type: "shot_goal", team: "red", idx: 4, start: 5.75, end: 7.4, gx: 28, gy: 242, diveDir: -1, shotCurve: -16 }
      ];
    } else if (v === 3) {
      return [
        { type: "dribble", team: "blue", idx: 0, start: 0.0, end: 0.95, tx: 415, ty: 205 },
        { type: "steal", fromTeam: "blue", toTeam: "red", toIdx: 2, start: 0.95, end: 1.55, tx: 465, ty: 205 },
        { type: "pass", team: "red", fromIdx: 2, toIdx: 4, start: 1.55, end: 2.85, rx: 325, ry: 273, curve: 0, loft: 0 },
        { type: "pass", team: "red", fromIdx: 4, toIdx: 1, start: 2.85, end: 4.25, rx: 205, ry: 338, curve: -22, loft: 10 },
        { type: "pass", team: "red", fromIdx: 1, toIdx: 2, start: 4.25, end: 5.75, rx: 172, ry: 248, curve: 0, loft: 0 },
        { type: "shot_goal", team: "red", idx: 2, start: 5.75, end: 7.4, gx: 28, gy: 304, diveDir: 1, shotCurve: 16 }
      ];
    } else if (v === 4) {
      return [
        { type: "dribble", team: "blue", idx: 1, start: 0.0, end: 0.95, tx: 420, ty: 336 },
        { type: "steal", fromTeam: "blue", toTeam: "red", toIdx: 3, start: 0.95, end: 1.55, tx: 470, ty: 332 },
        { type: "pass", team: "red", fromIdx: 3, toIdx: 0, start: 1.55, end: 3.0, rx: 285, ry: 194, curve: 24, loft: 11 },
        { type: "dribble", team: "red", idx: 0, start: 3.0, end: 4.35, tx: 205, ty: 198 },
        { type: "pass", team: "red", fromIdx: 0, toIdx: 4, start: 4.35, end: 5.75, rx: 170, ry: 268, curve: 0, loft: 0 },
        { type: "shot_goal", team: "red", idx: 4, start: 5.75, end: 7.4, gx: 28, gy: 242, diveDir: -1, shotCurve: -16 }
      ];
    } else {
      return [
        { type: "dribble", team: "blue", idx: 2, start: 0.0, end: 0.95, tx: 455, ty: 242 },
        { type: "steal", fromTeam: "blue", toTeam: "red", toIdx: 4, start: 0.95, end: 1.55, tx: 505, ty: 256 },
        { type: "pass", team: "red", fromIdx: 4, toIdx: 3, start: 1.55, end: 2.85, rx: 350, ry: 326, curve: 0, loft: 0 },
        { type: "pass", team: "red", fromIdx: 3, toIdx: 4, start: 2.85, end: 4.25, rx: 255, ry: 273, curve: 18, loft: 9 },
        { type: "pass", team: "red", fromIdx: 4, toIdx: 2, start: 4.25, end: 5.75, rx: 172, ry: 234, curve: 0, loft: 0 },
        { type: "shot_goal", team: "red", idx: 2, start: 5.75, end: 7.4, gx: 28, gy: 302, diveDir: 1, shotCurve: 16 }
      ];
    }
  }

  if (isSuspense && blueScores) {
    if (v === 0) {
      return [
        { type: "dribble", team: "red", idx: 3, start: 0.0, end: 0.9, tx: 375, ty: 322 },
        { type: "pass", team: "red", fromIdx: 3, toIdx: 4, start: 0.9, end: 1.95, rx: 210, ry: 284, curve: 0, loft: 0 },
        { type: "shot_save", team: "red", idx: 4, start: 1.95, end: 2.7, sx: 76, sy: 298, diveDir: 1, shotCurve: 14 },
        { type: "gk_pass", team: "blue", toIdx: 0, start: 2.7, end: 3.8, rx: 295, ry: 194, curve: -20, loft: 14 },
        { type: "pass", team: "blue", fromIdx: 0, toIdx: 2, start: 3.8, end: 4.8, rx: 575, ry: 202, curve: 0, loft: 0 },
        { type: "pass", team: "blue", fromIdx: 2, toIdx: 4, start: 4.8, end: 5.75, rx: 788, ry: 268, curve: 18, loft: 9 },
        { type: "shot_goal", team: "blue", idx: 4, start: 5.75, end: 7.4, gx: 932, gy: 242, diveDir: -1, shotCurve: 16 }
      ];
    } else if (v === 1) {
      return [
        { type: "dribble", team: "red", idx: 2, start: 0.0, end: 0.9, tx: 380, ty: 214 },
        { type: "pass", team: "red", fromIdx: 2, toIdx: 4, start: 0.9, end: 1.95, rx: 208, ry: 252, curve: -18, loft: 9 },
        { type: "shot_save", team: "red", idx: 4, start: 1.95, end: 2.7, sx: 76, sy: 246, diveDir: -1, shotCurve: -14 },
        { type: "gk_pass", team: "blue", toIdx: 1, start: 2.7, end: 3.8, rx: 295, ry: 340, curve: 20, loft: 14 },
        { type: "pass", team: "blue", fromIdx: 1, toIdx: 3, start: 3.8, end: 4.8, rx: 570, ry: 332, curve: 0, loft: 0 },
        { type: "pass", team: "blue", fromIdx: 3, toIdx: 2, start: 4.8, end: 5.75, rx: 785, ry: 230, curve: 0, loft: 0 },
        { type: "shot_goal", team: "blue", idx: 2, start: 5.75, end: 7.4, gx: 932, gy: 304, diveDir: 1, shotCurve: -16 }
      ];
    } else if (v === 2) {
      return [
        { type: "dribble", team: "red", idx: 4, start: 0.0, end: 1.1, tx: 315, ty: 273 },
        { type: "shot_save", team: "red", idx: 4, start: 1.1, end: 2.5, sx: 76, sy: 272, diveDir: 1, shotCurve: 14 },
        { type: "gk_pass", team: "blue", toIdx: 2, start: 2.5, end: 3.6, rx: 375, ry: 208, curve: -18, loft: 14 },
        { type: "pass", team: "blue", fromIdx: 2, toIdx: 3, start: 3.6, end: 4.7, rx: 605, ry: 332, curve: 22, loft: 10 },
        { type: "pass", team: "blue", fromIdx: 3, toIdx: 4, start: 4.7, end: 5.75, rx: 790, ry: 280, curve: 0, loft: 0 },
        { type: "shot_goal", team: "blue", idx: 4, start: 5.75, end: 7.4, gx: 932, gy: 302, diveDir: 1, shotCurve: -16 }
      ];
    } else if (v === 3) {
      return [
        { type: "dribble", team: "red", idx: 0, start: 0.0, end: 1.1, tx: 330, ty: 202 },
        { type: "shot_save", team: "red", idx: 0, start: 1.1, end: 2.5, sx: 76, sy: 245, diveDir: -1, shotCurve: -14 },
        { type: "gk_pass", team: "blue", toIdx: 3, start: 2.5, end: 3.6, rx: 385, ry: 336, curve: 20, loft: 14 },
        { type: "pass", team: "blue", fromIdx: 3, toIdx: 4, start: 3.6, end: 4.7, rx: 635, ry: 273, curve: 0, loft: 0 },
        { type: "pass", team: "blue", fromIdx: 4, toIdx: 2, start: 4.7, end: 5.75, rx: 790, ry: 228, curve: -18, loft: 9 },
        { type: "shot_goal", team: "blue", idx: 2, start: 5.75, end: 7.4, gx: 932, gy: 242, diveDir: -1, shotCurve: 16 }
      ];
    } else if (v === 4) {
      return [
        { type: "dribble", team: "red", idx: 1, start: 0.0, end: 1.1, tx: 330, ty: 342 },
        { type: "shot_save", team: "red", idx: 1, start: 1.1, end: 2.5, sx: 76, sy: 300, diveDir: 1, shotCurve: 14 },
        { type: "gk_pass", team: "blue", toIdx: 0, start: 2.5, end: 3.6, rx: 375, ry: 194, curve: -20, loft: 14 },
        { type: "pass", team: "blue", fromIdx: 0, toIdx: 4, start: 3.6, end: 4.7, rx: 645, ry: 273, curve: 18, loft: 9 },
        { type: "pass", team: "blue", fromIdx: 4, toIdx: 3, start: 4.7, end: 5.75, rx: 790, ry: 312, curve: 0, loft: 0 },
        { type: "shot_goal", team: "blue", idx: 3, start: 5.75, end: 7.4, gx: 932, gy: 304, diveDir: 1, shotCurve: -16 }
      ];
    } else {
      return [
        { type: "dribble", team: "red", idx: 4, start: 0.0, end: 1.05, tx: 340, ty: 260 },
        { type: "shot_save", team: "red", idx: 4, start: 1.05, end: 2.45, sx: 76, sy: 255, diveDir: -1, shotCurve: -14 },
        { type: "gk_pass", team: "blue", toIdx: 4, start: 2.45, end: 3.6, rx: 485, ry: 273, curve: 0, loft: 14 },
        { type: "pass", team: "blue", fromIdx: 4, toIdx: 1, start: 3.6, end: 4.7, rx: 695, ry: 340, curve: 20, loft: 10 },
        { type: "pass", team: "blue", fromIdx: 1, toIdx: 4, start: 4.7, end: 5.75, rx: 790, ry: 268, curve: 0, loft: 0 },
        { type: "shot_goal", team: "blue", idx: 4, start: 5.75, end: 7.4, gx: 932, gy: 242, diveDir: -1, shotCurve: 16 }
      ];
    }
  }

  // Suspense + Red wins
  if (v === 0) {
    return [
      { type: "dribble", team: "blue", idx: 2, start: 0.0, end: 0.9, tx: 575, ty: 215 },
      { type: "pass", team: "blue", fromIdx: 2, toIdx: 4, start: 0.9, end: 1.95, rx: 750, ry: 258, curve: 0, loft: 0 },
      { type: "shot_save", team: "blue", idx: 4, start: 1.95, end: 2.7, sx: 884, sy: 246, diveDir: -1, shotCurve: 14 },
      { type: "gk_pass", team: "red", toIdx: 1, start: 2.7, end: 3.8, rx: 675, ry: 344, curve: -20, loft: 14 },
      { type: "pass", team: "red", fromIdx: 1, toIdx: 3, start: 3.8, end: 4.8, rx: 390, ry: 332, curve: 0, loft: 0 },
      { type: "pass", team: "red", fromIdx: 3, toIdx: 4, start: 4.8, end: 5.75, rx: 170, ry: 276, curve: 18, loft: 9 },
      { type: "shot_goal", team: "red", idx: 4, start: 5.75, end: 7.4, gx: 28, gy: 304, diveDir: 1, shotCurve: 16 }
    ];
  } else if (v === 1) {
    return [
      { type: "dribble", team: "blue", idx: 3, start: 0.0, end: 0.9, tx: 570, ty: 325 },
      { type: "pass", team: "blue", fromIdx: 3, toIdx: 4, start: 0.9, end: 1.95, rx: 750, ry: 288, curve: -18, loft: 9 },
      { type: "shot_save", team: "blue", idx: 4, start: 1.95, end: 2.7, sx: 884, sy: 298, diveDir: 1, shotCurve: -14 },
      { type: "gk_pass", team: "red", toIdx: 0, start: 2.7, end: 3.8, rx: 670, ry: 196, curve: 20, loft: 14 },
      { type: "pass", team: "red", fromIdx: 0, toIdx: 2, start: 3.8, end: 4.8, rx: 395, ry: 208, curve: 0, loft: 0 },
      { type: "pass", team: "red", fromIdx: 2, toIdx: 3, start: 4.8, end: 5.75, rx: 175, ry: 312, curve: 0, loft: 0 },
      { type: "shot_goal", team: "red", idx: 3, start: 5.75, end: 7.4, gx: 28, gy: 242, diveDir: -1, shotCurve: -16 }
    ];
  } else if (v === 2) {
    return [
      { type: "dribble", team: "blue", idx: 4, start: 0.0, end: 1.1, tx: 640, ty: 273 },
      { type: "shot_save", team: "blue", idx: 4, start: 1.1, end: 2.5, sx: 884, sy: 272, diveDir: -1, shotCurve: 14 },
      { type: "gk_pass", team: "red", toIdx: 3, start: 2.5, end: 3.6, rx: 590, ry: 330, curve: -18, loft: 14 },
      { type: "pass", team: "red", fromIdx: 3, toIdx: 2, start: 3.6, end: 4.7, rx: 365, ry: 212, curve: 22, loft: 10 },
      { type: "pass", team: "red", fromIdx: 2, toIdx: 4, start: 4.7, end: 5.75, rx: 170, ry: 252, curve: 0, loft: 0 },
      { type: "shot_goal", team: "red", idx: 4, start: 5.75, end: 7.4, gx: 28, gy: 242, diveDir: -1, shotCurve: -16 }
    ];
  } else if (v === 3) {
    return [
      { type: "dribble", team: "blue", idx: 0, start: 0.0, end: 1.1, tx: 625, ty: 202 },
      { type: "shot_save", team: "blue", idx: 0, start: 1.1, end: 2.5, sx: 884, sy: 245, diveDir: -1, shotCurve: 14 },
      { type: "gk_pass", team: "red", toIdx: 2, start: 2.5, end: 3.6, rx: 575, ry: 206, curve: 20, loft: 14 },
      { type: "pass", team: "red", fromIdx: 2, toIdx: 4, start: 3.6, end: 4.7, rx: 325, ry: 273, curve: 0, loft: 0 },
      { type: "pass", team: "red", fromIdx: 4, toIdx: 3, start: 4.7, end: 5.75, rx: 172, ry: 312, curve: -18, loft: 9 },
      { type: "shot_goal", team: "red", idx: 3, start: 5.75, end: 7.4, gx: 28, gy: 304, diveDir: 1, shotCurve: 16 }
    ];
  } else if (v === 4) {
    return [
      { type: "dribble", team: "blue", idx: 1, start: 0.0, end: 1.1, tx: 625, ty: 342 },
      { type: "shot_save", team: "blue", idx: 1, start: 1.1, end: 2.5, sx: 884, sy: 300, diveDir: 1, shotCurve: -14 },
      { type: "gk_pass", team: "red", toIdx: 1, start: 2.5, end: 3.6, rx: 585, ry: 344, curve: -20, loft: 14 },
      { type: "pass", team: "red", fromIdx: 1, toIdx: 4, start: 3.6, end: 4.7, rx: 320, ry: 273, curve: 18, loft: 9 },
      { type: "pass", team: "red", fromIdx: 4, toIdx: 2, start: 4.7, end: 5.75, rx: 172, ry: 232, curve: 0, loft: 0 },
      { type: "shot_goal", team: "red", idx: 2, start: 5.75, end: 7.4, gx: 28, gy: 242, diveDir: -1, shotCurve: -16 }
    ];
  } else {
    return [
      { type: "dribble", team: "blue", idx: 4, start: 0.0, end: 1.05, tx: 620, ty: 285 },
      { type: "shot_save", team: "blue", idx: 4, start: 1.05, end: 2.45, sx: 884, sy: 290, diveDir: 1, shotCurve: -14 },
      { type: "gk_pass", team: "red", toIdx: 4, start: 2.45, end: 3.6, rx: 475, ry: 273, curve: 0, loft: 14 },
      { type: "pass", team: "red", fromIdx: 4, toIdx: 0, start: 3.6, end: 4.7, rx: 265, ry: 198, curve: 20, loft: 10 },
      { type: "pass", team: "red", fromIdx: 0, toIdx: 4, start: 4.7, end: 5.75, rx: 170, ry: 268, curve: 0, loft: 0 },
      { type: "shot_goal", team: "red", idx: 4, start: 5.75, end: 7.4, gx: 28, gy: 302, diveDir: 1, shotCurve: 16 }
    ];
  }
}

function animateMatchPossession(blueScores, chance, onSettled, scenarioVariant = 0) {
  if (animFrameId) cancelAnimationFrame(animFrameId);

  const DURATION_SEC = 7.4;
  const startTime = performance.now();
  let lastTime = startTime;
  let settledTriggered = false;
  let outcomeSoundPlayed = false;

  const bluePlayers = [
    { x: 215, y: 205, vx: 0, vy: 0, homeX: 215, homeY: 205, team: "blue", runPhase: 0, speed: 0, mood: "neutral" },
    { x: 215, y: 340, vx: 0, vy: 0, homeX: 215, homeY: 340, team: "blue", runPhase: 1.2, speed: 0, mood: "neutral" },
    { x: 355, y: 210, vx: 0, vy: 0, homeX: 355, homeY: 210, team: "blue", runPhase: 2.1, speed: 0, mood: "neutral" },
    { x: 355, y: 335, vx: 0, vy: 0, homeX: 355, homeY: 335, team: "blue", runPhase: 3.4, speed: 0, mood: "neutral" },
    { x: 455, y: 273, vx: 0, vy: 0, homeX: 455, homeY: 273, team: "blue", runPhase: 0.7, speed: 0, mood: "neutral" }
  ];

  const redPlayers = [
    { x: 745, y: 205, vx: 0, vy: 0, homeX: 745, homeY: 205, team: "red", runPhase: 0.5, speed: 0, mood: "neutral" },
    { x: 745, y: 340, vx: 0, vy: 0, homeX: 745, homeY: 340, team: "red", runPhase: 1.8, speed: 0, mood: "neutral" },
    { x: 605, y: 210, vx: 0, vy: 0, homeX: 605, homeY: 210, team: "red", runPhase: 2.9, speed: 0, mood: "neutral" },
    { x: 605, y: 335, vx: 0, vy: 0, homeX: 605, homeY: 335, team: "red", runPhase: 4.1, speed: 0, mood: "neutral" },
    { x: 505, y: 273, vx: 0, vy: 0, homeX: 505, homeY: 273, team: "red", runPhase: 1.1, speed: 0, mood: "neutral" }
  ];

  const blueGk = { x: 64, y: 273, team: "blue", diveProgress: 0, diveDir: 0, mood: "neutral" };
  const redGk = { x: 896, y: 273, team: "red", diveProgress: 0, diveDir: 0, mood: "neutral" };

  const script = buildMatchScript(blueScores, chance, scenarioVariant);

  function getTeamArray(teamName) {
    return teamName === "blue" ? bluePlayers : redPlayers;
  }

  const initialDir = script[0].team === "blue" ? 1 : -1;
  const initialCarrier = getTeamArray(script[0].team)[script[0].idx];
  let ballX = initialCarrier.x + initialDir * 10;
  let ballY = initialCarrier.y + 4;
  let ballZ = 0;
  let activeSegIndex = -1;
  let segStartBall = { x: ballX, y: ballY };
  const ballTrail = [];

  function enforcePlayerAndBallClearance(allOutfield, bX, bY, exemptPlayers) {
    const minPlayerDist = 30;
    for (let i = 0; i < allOutfield.length; i++) {
      for (let j = i + 1; j < allOutfield.length; j++) {
        const a = allOutfield[i];
        const b = allOutfield[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0.001 && dist < minPlayerDist) {
          const push = (minPlayerDist - dist) * 0.5;
          const nx = dx / dist;
          const ny = dy / dist;
          if (!exemptPlayers.has(a)) {
            a.x -= nx * push;
            a.y -= ny * push;
          }
          if (!exemptPlayers.has(b)) {
            b.x += nx * push;
            b.y += ny * push;
          }
        }
      }
    }

    const ballClearance = 30;
    allOutfield.forEach((p) => {
      if (exemptPlayers.has(p)) return;
      const dx = p.x - bX;
      const dy = p.y - bY;
      const dist = Math.hypot(dx, dy);
      if (dist < ballClearance) {
        const nx = dist > 0.001 ? dx / dist : 0;
        const ny = dist > 0.001 ? dy / dist : (p.y < 273 ? -1 : 1);
        p.x = bX + nx * ballClearance;
        p.y = bY + ny * ballClearance;
      }
      p.x = Math.max(92, Math.min(868, p.x));
      p.y = Math.max(168, Math.min(378, p.y));
    });
  }

  function getCurvedControlPoint(x0, y0, x2, y2, curveOffset) {
    const midX = (x0 + x2) * 0.5;
    const midY = (y0 + y2) * 0.5;
    const dx = x2 - x0;
    const dy = y2 - y0;
    const len = Math.hypot(dx, dy) || 1;
    const perpX = -dy / len;
    const perpY = dx / len;
    return {
      cx: midX + perpX * curveOffset,
      cy: midY + perpY * curveOffset
    };
  }

  function step(now) {
    const dt = Math.min(0.033, Math.max(0.001, (now - lastTime) / 1000));
    lastTime = now;

    const elapsedSec = (now - startTime) / 1000;
    const tSec = Math.min(DURATION_SEC, elapsedSec);
    const goalReached = elapsedSec >= DURATION_SEC;

    let segIdx = script.length - 1;
    for (let i = 0; i < script.length; i++) {
      if (tSec >= script[i].start && tSec <= script[i].end) {
        segIdx = i;
        break;
      }
    }
    const seg = script[segIdx];
    if (segIdx !== activeSegIndex) {
      activeSegIndex = segIdx;
      segStartBall = { x: ballX, y: ballY };
    }

    const segDur = Math.max(0.01, seg.end - seg.start);
    const segT = Math.max(0, Math.min(1, (tSec - seg.start) / segDur));
    const attackingTeam = seg.type === "steal" ? seg.toTeam : seg.team;

    const allOutfield = [...bluePlayers, ...redPlayers];
    let saveFlash = null;
    let netRippleBlue = 0;
    let netRippleRed = 0;
    let blueMood = "neutral";
    let redMood = "neutral";
    let bannerText = "";

    if (!goalReached) {
      const desiredTargets = new Map();
      const exemptPlayers = new Set();

      if (seg.type === "dribble") {
        exemptPlayers.add(getTeamArray(seg.team)[seg.idx]);
      } else if (seg.type === "steal") {
        exemptPlayers.add(getTeamArray(seg.toTeam)[seg.toIdx]);
      } else if (seg.type === "pass") {
        exemptPlayers.add(getTeamArray(seg.team)[seg.fromIdx]);
        exemptPlayers.add(getTeamArray(seg.team)[seg.toIdx]);
      } else if (seg.type === "gk_pass") {
        exemptPlayers.add(getTeamArray(seg.team)[seg.toIdx]);
      } else if (seg.type === "shot_save" || seg.type === "shot_goal") {
        exemptPlayers.add(getTeamArray(seg.team)[seg.idx]);
      }

      const defendingTeam = attackingTeam === "blue" ? redPlayers : bluePlayers;
      const rankedDefenders = defendingTeam
        .map((def) => ({ def, dist: Math.hypot(def.x - ballX, def.y - ballY) }))
        .sort((a, b) => a.dist - b.dist);
      const primaryPresser = rankedDefenders[0]?.def;
      const secondaryCover = rankedDefenders[1]?.def;

      allOutfield.forEach((p, globalIdx) => {
        const isBlue = p.team === "blue";
        const idx = isBlue ? globalIdx : globalIdx - 5;
        const isAttacker = p.team === attackingTeam;
        const dir = isBlue ? 1 : -1;

        let tx = p.homeX;
        let ty = p.homeY;

        if (isAttacker) {
          const advanceRatio = isBlue
            ? Math.max(0, Math.min(1, (ballX - 180) / 560))
            : Math.max(0, Math.min(1, (780 - ballX) / 560));
          const pushDist = idx < 2 ? 225 * advanceRatio : (idx < 4 ? 290 * advanceRatio : 315 * advanceRatio);
          const rawTx = p.homeX + dir * (pushDist + Math.min(60, elapsedSec * 10));

          tx = isBlue ? Math.max(p.x, rawTx) : Math.min(p.x, rawTx);
          ty = lerp(p.homeY, ballY + (idx % 2 === 0 ? -58 : 58), 0.34);
        } else {
          const ownGoalX = isBlue ? 64 : 896;
          const ballToGoalX = lerp(ownGoalX, ballX, 0.44);
          const laneOffset = (idx === 0 || idx === 2) ? -48 : (idx === 1 || idx === 3 ? 48 : 0);

          tx = lerp(p.homeX, ballToGoalX, 0.65);
          ty = lerp(p.homeY, ballY + laneOffset, 0.6);

          if (p === primaryPresser && seg.type !== "steal") {
            const toGoalDx = ownGoalX - ballX;
            const toGoalDy = 273 - ballY;
            const toGoalLen = Math.hypot(toGoalDx, toGoalDy) || 1;
            tx = ballX + (toGoalDx / toGoalLen) * 44;
            ty = ballY + (toGoalDy / toGoalLen) * 44;
          } else if (p === secondaryCover) {
            tx = lerp(ballX, ownGoalX, 0.34);
            ty = lerp(ballY, 273, 0.52);
          }
        }

        desiredTargets.set(p, { x: tx, y: ty });
      });

      if (seg.type === "dribble") {
        const carrier = getTeamArray(seg.team)[seg.idx];
        desiredTargets.set(carrier, { x: seg.tx, y: seg.ty });
      } else if (seg.type === "steal") {
        const interceptor = getTeamArray(seg.toTeam)[seg.toIdx];
        desiredTargets.set(interceptor, { x: seg.tx, y: seg.ty });
      } else if (seg.type === "pass" || seg.type === "gk_pass") {
        const receiver = getTeamArray(seg.team)[seg.toIdx];
        const isBlue = seg.team === "blue";
        const targetX = isBlue ? Math.max(receiver.x, seg.rx) : Math.min(receiver.x, seg.rx);
        desiredTargets.set(receiver, { x: targetX, y: seg.ry });
      } else if (seg.type === "shot_save" || seg.type === "shot_goal") {
        const shooter = getTeamArray(seg.team)[seg.idx];
        const dir = seg.team === "blue" ? 1 : -1;
        desiredTargets.set(shooter, {
          x: shooter.x + dir * Math.min(24, segT * 30),
          y: shooter.y
        });
      }

      if (segIdx + 1 < script.length) {
        const nextSeg = script[segIdx + 1];
        if (nextSeg.type === "pass" && nextSeg.team === attackingTeam) {
          const nextRec = getTeamArray(nextSeg.team)[nextSeg.toIdx];
          const isBlue = nextSeg.team === "blue";
          const leadX = lerp(nextRec.x, nextSeg.rx, 0.72);
          desiredTargets.set(nextRec, {
            x: isBlue ? Math.max(nextRec.x, leadX) : Math.min(nextRec.x, leadX),
            y: lerp(nextRec.y, nextSeg.ry, 0.72)
          });
        }
      }

      allOutfield.forEach((p) => {
        const tgt = desiredTargets.get(p);
        const dx = tgt.x - p.x;
        const dy = tgt.y - p.y;
        const dist = Math.hypot(dx, dy);
        const maxSpeed = exemptPlayers.has(p) ? 285 : 235;
        const desiredSpeed = Math.min(maxSpeed, dist * 5.0);
        const desiredVx = dist > 1 ? (dx / dist) * desiredSpeed : 0;
        const desiredVy = dist > 1 ? (dy / dist) * desiredSpeed : 0;

        p.vx = smoothDamp(p.vx, desiredVx, 13, dt);
        p.vy = smoothDamp(p.vy, desiredVy, 13, dt);
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.speed = Math.hypot(p.vx, p.vy);
        p.runPhase += dt * (4.2 + p.speed * 0.08);
      });

      ballZ = 0;
      if (seg.type === "dribble") {
        const carrier = getTeamArray(seg.team)[seg.idx];
        const dir = seg.team === "blue" ? 1 : -1;
        const dribbleTap = Math.abs(Math.sin(carrier.runPhase * 1.05)) * 4;
        ballX = carrier.x + dir * (9 + dribbleTap);
        ballY = carrier.y + 4 + Math.sin(carrier.runPhase) * 1.4;
      } else if (seg.type === "steal") {
        const interceptor = getTeamArray(seg.toTeam)[seg.toIdx];
        const dir = seg.toTeam === "blue" ? 1 : -1;
        const targetX = interceptor.x + dir * 10;
        const targetY = interceptor.y + 4;
        const ease = segT * segT * (3 - 2 * segT);
        ballX = lerp(segStartBall.x, targetX, ease);
        ballY = lerp(segStartBall.y, targetY, ease);
      } else if (seg.type === "pass") {
        const receiver = getTeamArray(seg.team)[seg.toIdx];
        const dir = seg.team === "blue" ? 1 : -1;
        const destX = receiver.x + dir * 10;
        const destY = receiver.y + 4;
        const ease = 0.5 - 0.5 * Math.cos(Math.PI * segT);
        const curveVal = seg.curve ?? 0;
        const loftVal = seg.loft ?? 0;

        if (curveVal === 0 && loftVal === 0) {
          ballX = lerp(segStartBall.x, destX, ease);
          ballY = lerp(segStartBall.y, destY, ease);
          ballZ = 0;
        } else {
          const { cx, cy } = getCurvedControlPoint(segStartBall.x, segStartBall.y, destX, destY, curveVal);
          ballX = quadBezier(segStartBall.x, cx, destX, ease);
          ballY = quadBezier(segStartBall.y, cy, destY, ease);
          ballZ = Math.sin(ease * Math.PI) * loftVal;
        }
      } else if (seg.type === "gk_pass") {
        const receiver = getTeamArray(seg.team)[seg.toIdx];
        const dir = seg.team === "blue" ? 1 : -1;
        const destX = receiver.x + dir * 10;
        const destY = receiver.y + 4;
        const ease = 0.5 - 0.5 * Math.cos(Math.PI * segT);
        const curveVal = seg.curve ?? 18;
        const { cx, cy } = getCurvedControlPoint(segStartBall.x, segStartBall.y, destX, destY, curveVal);
        ballX = quadBezier(segStartBall.x, cx, destX, ease);
        ballY = quadBezier(segStartBall.y, cy, destY, ease);
        ballZ = Math.sin(ease * Math.PI) * (seg.loft ?? 14);
      } else if (seg.type === "shot_save") {
        const shotP = Math.min(1, segT / 0.62);
        const fastEase = 1 - Math.pow(1 - shotP, 1.8);
        const { cx, cy } = getCurvedControlPoint(segStartBall.x, segStartBall.y, seg.sx, seg.sy, seg.shotCurve || 14);
        ballX = quadBezier(segStartBall.x, cx, seg.sx, fastEase);
        ballY = quadBezier(segStartBall.y, cy, seg.sy, fastEase);
        ballZ = Math.sin(fastEase * Math.PI) * 8;

        const defendingGk = seg.team === "blue" ? redGk : blueGk;
        defendingGk.diveDir = seg.diveDir;
        defendingGk.diveProgress = Math.min(1, shotP * 1.4);
        defendingGk.y = smoothDamp(defendingGk.y, seg.sy, 17, dt);
        defendingGk.x = smoothDamp(defendingGk.x, seg.sx, 14, dt);

        if (shotP > 0.85) {
          saveFlash = { x: seg.sx, y: seg.sy, alpha: Math.max(0, 1 - (segT - 0.52) / 0.48) };
        }
      } else if (seg.type === "shot_goal") {
        const shotP = Math.min(1, segT / 0.34);
        const fastEase = 1 - Math.pow(1 - shotP, 1.75);
        const { cx, cy } = getCurvedControlPoint(segStartBall.x, segStartBall.y, seg.gx, seg.gy, seg.shotCurve || 16);
        ballX = quadBezier(segStartBall.x, cx, seg.gx, fastEase);
        ballY = quadBezier(segStartBall.y, cy, seg.gy, fastEase);
        ballZ = Math.sin(fastEase * Math.PI) * 9;

        const defendingGk = seg.team === "blue" ? redGk : blueGk;
        defendingGk.diveDir = seg.diveDir;
        defendingGk.diveProgress = Math.min(1, shotP * 1.35);
        defendingGk.y = smoothDamp(defendingGk.y, seg.gy - seg.diveDir * 6, 13, dt);
        defendingGk.x = smoothDamp(defendingGk.x, seg.team === "blue" ? 890 : 70, 9, dt);

        if (shotP >= 0.92) {
          const rVal = Math.max(0.8, 3.8 * Math.exp(-(segT - 0.32) * 2.5));
          if (seg.team === "blue") netRippleRed = rVal;
          else netRippleBlue = rVal;
        }
      }

      enforcePlayerAndBallClearance(allOutfield, ballX, ballY, exemptPlayers);

      if (!(seg.type === "shot_save" && seg.team === "red") && !(seg.type === "shot_goal" && seg.team === "red")) {
        blueGk.diveProgress = smoothDamp(blueGk.diveProgress, 0, 9, dt);
        blueGk.x = smoothDamp(blueGk.x, 64, 8, dt);
        const trackY = Math.max(244, Math.min(302, lerp(273, ballY, 0.6)));
        blueGk.y = smoothDamp(blueGk.y, trackY, 8, dt);
      }
      if (!(seg.type === "shot_save" && seg.team === "blue") && !(seg.type === "shot_goal" && seg.team === "blue")) {
        redGk.diveProgress = smoothDamp(redGk.diveProgress, 0, 9, dt);
        redGk.x = smoothDamp(redGk.x, 896, 8, dt);
        const trackY = Math.max(244, Math.min(302, lerp(273, ballY, 0.6)));
        redGk.y = smoothDamp(redGk.y, trackY, 8, dt);
      }
    } else {
      const postSec = elapsedSec - DURATION_SEC;
      if (blueScores) {
        netRippleRed = Math.max(0.3, 2.2 * Math.exp(-postSec * 1.2));
        blueMood = "cheer";
        redMood = "sad";
        bluePlayers.forEach((p) => { p.mood = "cheer"; p.speed = 0; });
        redPlayers.forEach((p) => { p.mood = "sad"; p.speed = 0; });
        blueGk.mood = "cheer";
        redGk.mood = "sad";
        bannerText = t("bannerBlueGoal");
        el.crowdMoodBadge.textContent = t("crowdBlueCheer");
        if (!outcomeSoundPlayed) {
          outcomeSoundPlayed = true;
          soundEngine.playGoalFanfare();
        }
      } else {
        netRippleBlue = Math.max(0.3, 2.2 * Math.exp(-postSec * 1.2));
        blueMood = "sad";
        redMood = "cheer";
        bluePlayers.forEach((p) => { p.mood = "sad"; p.speed = 0; });
        redPlayers.forEach((p) => { p.mood = "cheer"; p.speed = 0; });
        blueGk.mood = "sad";
        redGk.mood = "cheer";
        bannerText = t("bannerRedGoal");
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

    const isFastShot = seg.type === "shot_goal" || seg.type === "shot_save";
    if (!goalReached && isFastShot) {
      ballTrail.push({ x: ballX, y: ballY - ballZ });
      if (ballTrail.length > 7) ballTrail.shift();
    } else if (ballTrail.length > 0) {
      ballTrail.shift();
    }

    ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);
    drawMarathonStandAndBoard(elapsedSec, blueMood, redMood, bannerText);
    drawMatchPitchAndGoals(netRippleBlue, netRippleRed, elapsedSec);

    drawMatchGoalkeeper(blueGk, elapsedSec);
    drawMatchGoalkeeper(redGk, elapsedSec);

    const sortedPlayers = [...bluePlayers, ...redPlayers].sort((a, b) => a.y - b.y);
    sortedPlayers.forEach((p) => drawOutfieldPlayer(p, elapsedSec));

    if (saveFlash && saveFlash.alpha > 0) {
      ctx.save();
      ctx.strokeStyle = `rgba(250, 204, 21, ${saveFlash.alpha.toFixed(2)})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(saveFlash.x, saveFlash.y, 16 + (1 - saveFlash.alpha) * 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    if (ballTrail.length > 1) {
      for (let i = 0; i < ballTrail.length; i++) {
        const pt = ballTrail[i];
        const ratio = (i + 1) / ballTrail.length;
        ctx.fillStyle = `rgba(255, 255, 255, ${(ratio * 0.35).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6.2 * ratio, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const shadowScale = Math.max(0.55, 1 - ballZ * 0.025);
    ctx.fillStyle = "rgba(0,0,0,0.32)";
    ctx.beginPath();
    ctx.ellipse(ballX, ballY + 6, 7.2 * shadowScale, 2.8 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(ballX, ballY - ballZ, 7 + ballZ * 0.14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 1.8;
    ctx.stroke();

    animFrameId = requestAnimationFrame(step);
  }

  animFrameId = requestAnimationFrame(step);
}

// ============================================================================
// PENALTY ANIMATION & TROPHY CEREMONY
// ============================================================================
function drawPenaltyGoalAndNet(netRipple, timeSec) {
  const goalLeft = 335;
  const goalRight = 625;
  const goalTop = 128;
  const goalBottom = 216;

  ctx.fillStyle = "rgba(255, 255, 255, 0.14)";
  ctx.fillRect(goalLeft, goalTop, goalRight - goalLeft, goalBottom - goalTop);

  ctx.strokeStyle = "rgba(226, 232, 240, 0.35)";
  ctx.lineWidth = 1.2;
  for (let x = goalLeft + 18; x < goalRight; x += 18) {
    const wave = netRipple ? Math.sin(timeSec * 12 + x * 0.04) * netRipple : 0;
    ctx.beginPath();
    ctx.moveTo(x, goalTop);
    ctx.lineTo(x + wave, goalBottom);
    ctx.stroke();
  }
  for (let y = goalTop + 16; y < goalBottom; y += 16) {
    const wave = netRipple ? Math.cos(timeSec * 12 + y * 0.08) * netRipple : 0;
    ctx.beginPath();
    ctx.moveTo(goalLeft, y);
    ctx.lineTo(goalRight, y + wave);
    ctx.stroke();
  }

  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 5;
  ctx.strokeRect(goalLeft, goalTop, goalRight - goalLeft, goalBottom - goalTop);
}

function drawPenaltyShooter(shooterState, timeSec) {
  const player = getActivePlayer();
  const { x, y, stepCycle, kickSwing, leanAngle, reactionMood } = shooterState;

  let moodBounceY = 0;
  let headDrop = 0;
  let armWave = 0;
  if (reactionMood === "cheer") {
    moodBounceY = -Math.abs(Math.sin(timeSec * 6.5)) * 8.5;
    armWave = Math.sin(timeSec * 9.5) * 7;
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

function drawPenaltyKeeper(keeperState, timeSec) {
  const { x, y, tilt, reactionMood } = keeperState;
  let gY = y;
  let gTilt = tilt;
  let armOffsetY = -18;
  if (reactionMood === "cheer") {
    gY = y - Math.abs(Math.sin(timeSec * 6)) * 5;
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
  const startTime = performance.now();

  const ballStartX = 480;
  const ballStartY = 334;
  const wideLeft = Math.random() < 0.5;
  const targetX = isGoal ? (wideLeft ? 382 : 578) : (chance === 0 ? (wideLeft ? 265 : 695) : 480);
  const targetY = isGoal ? 162 : (chance === 0 ? 112 : 178);
  const keeperDiveX = isGoal ? (targetX < 480 ? 558 : 402) : 480;
  const keeperDiveTilt = isGoal ? (keeperDiveX > 480 ? 0.45 : -0.45) : 0;

  const setupSec = 0.55;
  const runUpSec = 0.75;
  const flightSec = 0.52;
  const settleSec = setupSec + runUpSec + flightSec;

  let settledTriggered = false;
  let outcomeSoundPlayed = false;

  function step(now) {
    const elapsedSec = (now - startTime) / 1000;

    let shooterX = 446;
    let shooterY = 368;
    let stepCycle = 0;
    let kickSwing = 0;
    let leanAngle = -0.05;
    let shooterReactionMood = "neutral";

    let ballX = ballStartX;
    let ballY = ballStartY;
    let ballRadius = 11.5;
    let netRipple = 0;

    let keeperX = 480;
    let keeperY = 188;
    let keeperTilt = 0;
    let keeperReactionMood = "neutral";

    let takerMood = "neutral";
    let bannerText = "";

    if (elapsedSec <= setupSec) {
      keeperX = 480 + Math.sin(elapsedSec * 7.5) * 11;
    } else if (elapsedSec <= setupSec + runUpSec) {
      const rT = (elapsedSec - setupSec) / runUpSec;
      const rEase = rT * rT * (3 - 2 * rT);
      shooterX = lerp(446, 476, rEase);
      shooterY = lerp(368, 353, rEase);
      stepCycle = rT * Math.PI * 5.5;
      leanAngle = lerp(-0.05, 0.04, rEase);
      keeperX = 480 + Math.sin(elapsedSec * 7.5) * 8;
    } else if (elapsedSec <= settleSec) {
      const fT = (elapsedSec - setupSec - runUpSec) / flightSec;
      const fEase = 1 - Math.pow(1 - fT, 1.55);

      shooterX = 476;
      shooterY = 353;
      kickSwing = Math.sin(Math.min(fT * 1.45, 1) * Math.PI);
      leanAngle = 0.06 * kickSwing;

      const curveOffset = Math.sin(fT * Math.PI) * (targetX >= 480 ? 15 : -15);
      ballX = lerp(ballStartX, targetX, fEase) + curveOffset;
      ballY = lerp(ballStartY, targetY, fEase) - Math.sin(fT * Math.PI) * 26;
      ballRadius = lerp(11.5, 7.8, fEase);

      const diveEase = Math.min(1, fT * 1.12);
      keeperX = lerp(480, keeperDiveX, diveEase);
      keeperY = 188 - Math.sin(diveEase * Math.PI) * 14 + diveEase * 4;
      keeperTilt = keeperDiveTilt * diveEase;
    } else {
      shooterX = 476;
      shooterY = 353;
      ballX = targetX;
      ballY = targetY;
      ballRadius = 7.8;
      keeperX = isGoal ? keeperDiveX : 480;
      keeperY = 192;
      keeperTilt = isGoal ? keeperDiveTilt : 0;

      const postSec = elapsedSec - settleSec;
      const damp = Math.max(0.2, Math.exp(-postSec * 0.8));
      netRipple = isGoal ? (1.35 + Math.sin(elapsedSec * 12) * 0.28) * damp : 0;

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
    drawPenaltySupporterStand(elapsedSec, takerMood, bannerText);

    const stripeCount = 7;
    const stripeH = 280 / stripeCount;
    for (let s = 0; s < stripeCount; s++) {
      ctx.fillStyle = s % 2 === 0 ? "#15803d" : "#166534";
      ctx.fillRect(0, 130 + s * stripeH, el.canvas.width, stripeH + 1);
    }

    if (isGoal && elapsedSec > settleSec) {
      ctx.fillStyle = "rgba(250, 204, 21, 0.12)";
      ctx.fillRect(0, 130, el.canvas.width, 280);
    }

    drawPenaltyGoalAndNet(netRipple, elapsedSec);
    drawPenaltyKeeper({ x: keeperX, y: keeperY, tilt: keeperTilt, reactionMood: keeperReactionMood }, elapsedSec);
    drawPenaltyShooter({ x: shooterX, y: shooterY, stepCycle, kickSwing, leanAngle, reactionMood: shooterReactionMood }, elapsedSec);

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
  const startTime = performance.now();
  const CEREMONY_SEC = 5.0;
  let doneCalled = false;

  soundEngine.playTrophyCelebrationMusic();

  const sparks = Array.from({ length: 36 }, (_, i) => ({
    x: 80 + ((i * 29) % 800),
    y: 130 + ((i * 19) % 240),
    speed: 35 + (i % 5) * 14,
    color: ["#facc15", "#38bdf8", "#4ade80", "#f472b6", "#fb923c"][i % 5]
  }));

  function step(now) {
    const elapsedSec = (now - startTime) / 1000;
    const blueMood = winnerTeam === "blue" ? "cheer" : "sad";
    const redMood = winnerTeam === "red" ? "cheer" : "sad";
    const banner = winnerTeam === "blue"
      ? (currentLang === "tr" ? "🏆 MAVİ TAKIM ŞAMPİYON! KUPA KALKIYOR! 🏆" : "🏆 BLUE TEAM CHAMPIONS! LIFTING THE TROPHY! 🏆")
      : (currentLang === "tr" ? "🏆 KIRMIZI TAKIM ŞAMPİYON! KUPA KALKIYOR! 🏆" : "🏆 RED TEAM CHAMPIONS! LIFTING THE TROPHY! 🏆");

    ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);
    drawMarathonStandAndBoard(elapsedSec, blueMood, redMood, banner);
    drawMatchPitchAndGoals(0, 0, elapsedSec);

    const squad = winnerTeam === "blue"
      ? [
          { x: 480, y: 273, team: "blue", mood: "cheer", liftingTrophy: true, speed: 0 },
          { x: 430, y: 255, team: "blue", mood: "cheer", speed: 0 },
          { x: 430, y: 295, team: "blue", mood: "cheer", speed: 0 },
          { x: 530, y: 255, team: "blue", mood: "cheer", speed: 0 },
          { x: 530, y: 295, team: "blue", mood: "cheer", speed: 0 }
        ]
      : [
          { x: 480, y: 273, team: "red", mood: "cheer", liftingTrophy: true, speed: 0 },
          { x: 430, y: 255, team: "red", mood: "cheer", speed: 0 },
          { x: 430, y: 295, team: "red", mood: "cheer", speed: 0 },
          { x: 530, y: 255, team: "red", mood: "cheer", speed: 0 },
          { x: 530, y: 295, team: "red", mood: "cheer", speed: 0 }
        ];

    squad.forEach((p) => drawOutfieldPlayer(p, elapsedSec));

    sparks.forEach((sp) => {
      const cy = 130 + ((sp.y - 130 + elapsedSec * sp.speed) % 270);
      const cx = sp.x + Math.sin(elapsedSec * 4 + sp.x) * 8;
      ctx.fillStyle = sp.color;
      ctx.fillRect(cx, cy, 6, 9);
    });

    if (elapsedSec < CEREMONY_SEC) {
      animFrameId = requestAnimationFrame(step);
    } else if (!doneCalled) {
      doneCalled = true;
      animFrameId = null;
      if (onDone) onDone();
    }
  }

  animFrameId = requestAnimationFrame(step);
}

// ============================================================================
// SCREEN NAVIGATION & ROUND FLOW
// ============================================================================
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
  currentLoadToken += 1;
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
  currentLoadToken += 1;
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
  currentLoadToken += 1;
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
  setTimeout(() => map.invalidateSize(), 80);
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
  clearCeremonyTimer();
  soundEngine.stopWelcomeTheme();
  syncSettingsFromInputs();
  game.resetMatch(true);

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
  const token = ++currentLoadToken;
  lastRoundSummary = null;
  game.stopTimer();
  showGuessScreen();
  clearGuessMapLayers();
  applyLanguageUI();

  const q = game.getCurrentQuestion();
  el.roundDisplay.textContent = `${game.getRoundNumber()} / ${game.getTotalRounds()}`;
  el.scoreDisplay.textContent = game.getScore();
  el.highscoreDisplay.textContent = game.getHighScore();
  el.timerDisplay.textContent = "...";
  el.timerBox.classList.remove("urgent");
  el.shootBtn.disabled = true;

  el.imageLoader.classList.remove("hidden");
  el.locationImage.src = "";

  const workingUrl = await resolveWorkingImageUrl(q);
  if (token !== currentLoadToken) return;

  const startRoundTimerOnce = () => {
    if (token !== currentLoadToken) return;
    el.imageLoader.classList.add("hidden");
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
  };

  el.locationImage.onload = () => {
    el.locationImage.onload = null;
    startRoundTimerOnce();
  };
  el.locationImage.onerror = () => {
    el.locationImage.onerror = null;
    el.locationImage.src = FALLBACK_PHOTO_URL;
    startRoundTimerOnce();
  };

  el.locationImage.src = workingUrl;
}

function revealResultMapAndDetails(q, latlng, noPinAtAll, distanceKm, chance, isGoal, pointsEarned, isFinalMode) {
  el.penaltyLocationTitle.textContent = `${t("actualPrefix")} ${q.name}`;
  el.distanceDisplay.textContent = noPinAtAll ? t("timeUp") : `${distanceKm.toLocaleString()} km`;
  el.chanceDisplay.textContent = `${chance}%`;
  el.resultDetailText.textContent = noPinAtAll
    ? t("timedOutDetail")(q.name)
    : t("guessDetail")(distanceKm, q.name, chance);

  if (isFinalMode) {
    el.outcomeDisplay.textContent = isGoal ? t("matchBlueGoalText")(pointsEarned) : t("matchRedGoalText");
  } else {
    el.outcomeDisplay.textContent = isGoal ? t("goalText")(pointsEarned) : t("noGoalText");
  }

  clearResultMapLayers();
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
    setTimeout(() => resultMap.invalidateSize(), 80);
    clearResultMapLayers();
    resultMap.setView([25, 15], 1);

    el.penaltyLocationTitle.textContent = isFinalMode ? t("attackInProgress") : t("penaltyInProgress");
    el.distanceDisplay.textContent = "???";
    el.chanceDisplay.textContent = "???";
    el.outcomeDisplay.textContent = t("shooting");
    el.resultDetailText.textContent = t("hiddenDetail");

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

      revealResultMapAndDetails(q, latlng, noPinAtAll, distanceKm, chance, isGoal, pointsEarned, isFinalMode);

      el.scoreDisplay.textContent = game.getScore();
      el.highscoreDisplay.textContent = updatedBest;
      el.nextBtn.textContent = game.hasNextRound() ? t("nextRound") : t("seeSummary");
      el.nextBtn.disabled = false;
    };

    if (isFinalMode) {
      animateMatchPossession(isGoal, chance, onSequenceComplete, q.scenarioVariant || 0);
    } else {
      animatePenaltyShot(isGoal, chance, onSequenceComplete);
    }
  }, 1200);
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

  try {
    if (typeof Chart !== "undefined") {
      const history = game.getHistory();
      const labels = history.map((item) => `R${item.round}`);
      const accuracyScores = history.map((item) =>
        getClosenessScore(item.distanceKm, item.noPinAtAll)
      );
      const barColors = accuracyScores.map((val) => getPerformanceBarColor(val));

      if (resultsChart) {
        resultsChart.destroy();
        resultsChart = null;
      }

      const chartCanvas = document.getElementById("results-chart");
      if (chartCanvas) {
        resultsChart = new Chart(chartCanvas, {
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
    }
  } catch (err) {
    console.error("Summary chart render error:", err);
  }
}

function openSummaryModal() {
  if (isCeremonyRunning) return;
  clearCeremonyTimer();
  soundEngine.stopWelcomeTheme();
  soundEngine.stopSelectionTheme();

  const totalGoals = game.getGoals();
  const redGoals = game.getMissed();
  const totalRounds = game.getHistory().length;

  if (game.getMode() === "final" && totalGoals !== redGoals) {
    isCeremonyRunning = true;
    el.nextBtn.disabled = true;
    el.nextBtn.textContent = t("ceremonyRunningBtn");

    const winnerTeam = totalGoals > redGoals ? "blue" : "red";
    el.penaltyLoading.classList.add("hidden");
    el.penaltyStage.classList.remove("hidden");
    el.canvas.scrollIntoView({ behavior: "smooth", block: "center" });

    let ceremonyFinished = false;
    const finishCeremony = () => {
      if (ceremonyFinished) return;
      ceremonyFinished = true;
      clearCeremonyTimer();
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
      displaySummaryContent(totalGoals, redGoals, totalRounds);
    };

    animateTrophyCeremony(winnerTeam, finishCeremony);
    ceremonyTimeoutId = setTimeout(finishCeremony, 5200);
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

function handleGlobalSoundToggle(e) {
  if (e) e.stopPropagation();
  const nextState = !soundEngine.isSoundEnabled();
  soundEngine.setSoundEnabled(nextState);
  updateSoundButtonsUI();

  if (nextState) {
    if (!el.startScreen.classList.contains("hidden")) {
      soundEngine.startWelcomeTheme();
    } else if (!el.guessScreen.classList.contains("hidden") && !game.isResolved()) {
      soundEngine.updateSelectionTheme(game.getTimeLeft());
    }
  }
}

document.addEventListener(
  "pointerdown",
  (e) => {
    if (e.target && e.target.closest("#floating-sound-btn, #sound-toggle-btn")) return;
    if (!el.startScreen.classList.contains("hidden") && soundEngine.isSoundEnabled()) {
      soundEngine.startWelcomeTheme();
    }
  },
  { once: true }
);

window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    map.invalidateSize();
    resultMap.invalidateSize();
  }, 180);
});

window.addEventListener("resize", () => {
  map.invalidateSize();
  resultMap.invalidateSize();
});

el.floatingSoundBtn.addEventListener("click", handleGlobalSoundToggle);
el.soundToggleBtn.addEventListener("click", handleGlobalSoundToggle);

el.homeBrandBtn.addEventListener("click", () => {
  showStartScreen();
});

el.settingsToggleBtn.addEventListener("click", () => {
  el.settingsPanel.classList.toggle("hidden");
  if (soundEngine.isSoundEnabled() && !el.startScreen.classList.contains("hidden")) {
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
      radius: 9,
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
  if (isCeremonyRunning) return;
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