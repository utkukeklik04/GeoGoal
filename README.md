# GeoGoal — Champions League Penalty GeoGame

**Live Demo:** [https://utkukeklik04.github.io/GeoGoal](https://utkukeklik04.github.io/GeoGoal)  
**Course:** GMT 458 Web GIS  
**Author:** Utku Keklik (2220674058)  

---

## 1. Project Overview & Game Rules

**GeoGoal** is an interactive browser-based Web GIS geography and penalty-shootout game built with vanilla HTML, CSS, JavaScript, **Leaflet**, **Turf.js**, and **Chart.js**.

### Gameplay Flow
1. **Start Screen (`GeoGoal`):**
   - Opens in **English** by default with a bilingual toggle (**English / Turkish**).
   - Displays the prompt *"Can you win this duel?"*, a **Play** button, and a **Settings** menu allowing players to customize:
     - **Number of Rounds:** `6` to `9` (default: `6`)
     - **Round Duration:** `10s` to `30s` (default: `15s`)
   - Clicking **Play** preloads all unique round landmark photos (`Loading unique places (X/Y)`) before starting the match.
2. **Map Guess Phase (OpenStreetMap):**
   - Players view a landmark photograph and a difficulty-tiered clue (`Easy`, `Medium`, `Hard` selected from a pool of **150 global and Turkish landmarks**).
   - Clicking anywhere on the **OpenStreetMap** canvas places a guess marker. If the timer expires before clicking confirm, the last placed pin on the map is automatically evaluated.
3. **Geodesic Distance & Penalty Shootout:**
   - **Turf.js (`turf.distance`)** calculates the exact geodesic distance (in kilometers) between the player's pin and the true coordinates.
   - Distance error determines the **Goal Probability**:
     - `≤ 100 km`: **100%** goal chance (`1000` base pts + time bonus)
     - `101 – 500 km`: **80%** goal chance (`750` base pts + time bonus)
     - `501 – 1000 km`: **50%** goal chance (`500` base pts + time bonus)
     - `1001 – 2000 km`: **20%** goal chance (`250` base pts + time bonus)
     - `> 2000 km`: **0%** goal chance (`0` pts)
   - An HTML5 `<canvas>` Champions League penalty shootout animates the run-up, shot, goalkeeper dive, and continuous post-shot crowd, shooter, and goalkeeper reactions until the player clicks **Next Round**.
4. **Match Outcome & Summary Modal:**
   - **4 or more goals (`>= 4`):** **YOU WON!** — Triggers celebratory confetti and the Champions Trophy banner.
   - **3 goals (`=== 3`):** **DRAW!**
   - **Fewer than 3 goals (`< 3`):** **YOU LOST!**
   - Displays total goals, final score, persistent `localStorage` high score, and a **Chart.js** round-by-round closeness accuracy bar chart.

---

## 2. Technical Implementation (GMT 458 Requirements)

### Libraries & Open Data Sources
- **Leaflet (`v1.9.4`):** Renders the interactive guess map and post-shot distance comparison polyline (`L.circleMarker`, `L.polyline`, `fitBounds`) over OpenStreetMap raster tiles (`https://tile.openstreetmap.org/{z}/{x}/{y}.png`).
- **Turf.js (`v6`):** Computes geodesic distance in kilometers between `[lng, lat]` point features via `turf.point()` and `turf.distance()`.
- **Chart.js (`v4.4.1`):** Renders the end-of-match bar chart visualizing round-by-round spatial accuracy (`0–100`) with color-coded performance thresholds.
- **Wikimedia / Wikipedia REST API:** Fetches open-license landmark imagery dynamically with timeout protection and fallback image handling.

### Event Handlers (3+ Interactive Listeners)
1. **Map Click (`map.on("click", ...)`):** Captures geographic coordinates (`e.latlng`), places/moves the player's `L.circleMarker`, updates the coordinate badge in the HUD, and enables the confirmation button.
2. **Confirm Guess (`el.shootBtn.addEventListener("click", ...)`):** Locks the current round, stops the countdown timer, computes geodesic distance with Turf.js, and launches the HTML5 Canvas penalty shootout transition.
3. **Next Round / Summary (`el.nextBtn.addEventListener("click", ...)`):** Advances the state machine to the next location or opens the end-of-game summary modal with the Chart.js performance chart.
4. *(Additional Controls)* Start screen **Play**, **Settings** (`6–9` rounds, `10–30s` timer), **English / Turkish** toggle, and top-left **GeoGoal** home button.

### Closure Architecture (`createGameController`)
- Game state (`questions`, `currentRoundIndex`, `score`, `goals`, `missed`, `timeLeft`, `timerId`, `guessLatLng`, `roundResolved`, `history`, and custom round/timer settings) is encapsulated inside the `createGameController()` factory closure.
- Private variables cannot be mutated directly from the global scope; external UI and event handlers interact exclusively through controlled public methods (`startTimer`, `stopTimer`, `setGuess`, `markResolved`, `addResult`, `nextRound`, `resetMatch`, `updateSettings`).

### DOM Manipulation & Persistence
- Dynamically switches views between `#start-screen`, `#guess-screen`, `#penalty-screen`, and `#summary-modal` via class toggles (`.hidden`).
- Updates HUD counters (`#round-display`, `#timer-display`, `#score-display`, `#highscore-display`), bilingual text labels (`applyLanguageUI`), and end-of-match confetti/trophy elements in real time.
- Persists the player's all-time high score across browser sessions using `localStorage` (`geogoal_highscore`).

---

## 3. AI Development Log & Reflections

- **Design & Prototyping:** Used generative AI assistance to structure the modular state closure (`createGameController`), balance the 150-location dataset across three difficulty tiers (`Easy`, `Medium`, `Hard`), and implement the HTML5 Canvas penalty animation loop.
- **Debugging & Iteration:** Resolved asynchronous image loading bottlenecks by introducing a preloading screen (`preloadAllRoundImages`) with per-image timeout fallbacks, and refined Git/GitHub Pages deployment workflows (`git pull --rebase`, remote URL configuration).