# 🌍⚽ GeoGoal — Champions League Penalty & Final Match GeoGame

**Game Link:** `https://utkukeklik04.github.io/GeoGoal/`  
**GitHub Repository:** `https://github.com/utkukeklik04/GeoGoal`  
**Course:** GMT 458 – Web GIS (Hacettepe University, Department of Geomatics Engineering)  
**Author:** Utku Keklik (`2220674058`)

---

## 1. Game Description & Functional Requirements

**GeoGoal** is an interactive, browser-based Web GIS geography game inspired by UEFA Champions League nights. Instead of simply clicking on a map to earn abstract points, players turn their spatial estimation accuracy directly into football action: the closer your guess is to the real-world target location, the higher your probability of scoring a goal on the pitch.

### Core Functional Requirements
- **Interactive Global Map Guessing:** In every round, players view an uncropped real-world photograph of a landmark, city skyline, monument, or natural wonder alongside a structured geographic clue, and place their guess pin on an interactive **Leaflet / OpenStreetMap** map before the countdown ends.
- **Two Distinct Game Modes:**
  1. **Penalty Mode:** Players select one of three stars—**Lionel Messi (#10)**, **Cristiano Ronaldo (#7)**, or **Arda Güler (#15)**—each with custom kits, dominant-foot kick animations, and a reactive supporter stand featuring a 6-circle live scoreboard.
  2. **6v6 Final Match Mode:** A full 5v5 + Goalkeepers showdown on an HTML5 `<canvas>` pitch with 6 distinct attacking choreographies (tiki-taka passes, wing switches, curved lofted balls, and flat ground passes), active defensive pressing/lane coverage, and a 5-second animated trophy ceremony for the winning team (plus a rematch button if the final ends in a draw).
- **Post-Shot Geodesic Visualization:** Immediately after each shot or attack, a secondary result mini-map displays both the player's pin and the actual target connected by a dashed geodesic line, reporting the exact distance error in kilometers.
- **Bilingual Interface & Synthesized Web Audio:** Instant **English / Turkish (`EN / TR`)** switching across all screens and clues, paired with a zero-asset **Web Audio API** synthesizer and a global floating mute/unmute button (`🔊 / 🔇`).
- **Cross-Platform Mobile Portrait Support:** Responsive layout optimized for desktop browsers as well as iOS Safari and Android Chrome in vertical portrait orientation.

---

## 2. Game Rules & The Luck / Chance Factor

### Core Game Rules
- **One Pin Per Round & Early Lock-In:** Players can click or tap anywhere on the OpenStreetMap world map to place or move their guess marker while the round timer is active. Clicking **Confirm Guess & Go to Arena** locks in the guess immediately and transitions to the stadium arena.
- **No-Pin & Timeout Rule:** If the timer expires (`0s`) and no pin has been placed on the map, the round automatically resolves as a miss (`0%` goal chance, `0 pts`), and the opponent/keeper takes the advantage. If a pin was placed before timeout, that last pin is evaluated automatically.
- **Strict Non-Repeating Location Pool:** Each match draws from 300 real-world locations (`100 Easy`, `100 Medium`, `100 Hard`). A session-wide `Set` (`usedLocationIds`) and a previous-match `Set` (`lastMatchLocationIds`) prevent consecutive repeats.
- **Match Outcome & Draw Handling:** Across all rounds (`6–9`), each goal scored counts toward the player (`BLUE`), while misses or opponent goals count toward `RED`. In **Final Match Mode**, if the match ends in a tie (`totalGoals === redGoals`), a **Rematch** button appears in the summary modal so players can settle the tie.

### How the Luck / Chance Factor Works
GeoGoal intentionally combines **geographic skill** with a **football chance/luck factor** so that medium-range guesses still carry real dramatic tension like a real Champions League match:
- **Guaranteed vs. Probabilistic Shots:** Guessing within `≤ 100 km` gives a **100% goal chance** (skill-guaranteed goal if the shot is on target), whereas guessing between `101–500 km` (`80%`), `501–1,000 km` (`50%`), or `1,001–2,000 km` (`20%`) rolls a probability check (`Math.random() * 100 < chance`).
- **Why Luck Matters:** Even if a player is slightly off target (for example, `650 km` away with a `50%` chance), a clutch save by the goalkeeper or a lucky finish can swing a tight match—while guesses beyond `2,000 km` have a **0% chance** regardless of luck.
- **Varied Match Choreography:** In Final Match Mode, each round selects a non-repeating attack variant (`0–5`), ensuring passing angles, runners, and finishing spots vary from round to round.

---

## 3. How to Play (Step-by-Step Gameplay Flow)

1. **Configure Settings & Language (Start Screen):**
   - Choose between **English (`EN`)** and **Turkish (`TR`)** directly on the home screen (or toggle mid-game from the top HUD).
   - Optionally open **Settings** to customize the number of rounds (**6–9 rounds**), countdown timer duration (**10–30s** for Penalty Mode, **10–20s** for Final Match Mode), and synthesized sound effects.
2. **Select Your Game Mode (and Star Player):**
   - Click **Play** and pick either **Penalty Mode** or **Final Match (6v6)**.
   - If you choose **Penalty Mode**, pick your penalty taker (**Lionel Messi #10**, **Cristiano Ronaldo #7**, or **Arda Güler #15**) before entering the arena.
3. **Analyze the Photo & Geographic Clue:**
   - Each round displays an uncropped real-world photo fetched dynamically from Wikipedia/Wikimedia Commons alongside a geographic clue badge at the top of the photo panel.
   - Use architectural features, terrain, and regional hints to deduce where in the world the landmark is located.
4. **Drop Your Pin on OpenStreetMap Before Time Runs Out:**
   - Pan and zoom the interactive **OpenStreetMap** panel and click/tap to place your cyan guess marker. You can reposition your pin as many times as you like while the timer is still running.
   - Click **Confirm Guess & Go to Arena** to lock in your coordinates early and earn a higher speed bonus—or let the timer hit `0s` for automatic submission.
5. **Watch the Live 2D Stadium Simulation & Inspect Geodesic Results:**
   - Your geodesic distance error is converted into a **Goal Chance (%)** and played out on the 2D stadium `<canvas>`—either as a one-on-one penalty kick or a full 6v6 attacking sequence.
   - Once the sequence finishes, inspect the **Result Mini-Map** showing the yellow dashed geodesic line between your guess and the true landmark, then click **Next Round →**.
6. **Full-Time Trophy Ceremony & Match Analytics:**
   - After the final round, winning a Final Match triggers a **5-second animated on-pitch trophy ceremony** with celebration music, followed by the **Full-Time Summary Modal** featuring your total goals, final score, `localStorage` best record, and a **Chart.js** round-by-round accuracy bar chart.

---

## 4. Proposed Frontend Layout & Wireframe Sketch

The interface is organized into clean, dedicated screens (Start Menu, Mode Selection, Penalty Taker Selection, Map Guessing Screen, Stadium Arena Screen, and Full-Time Summary Modal) so players always have a clear spatial view:

```text
+-------------------------------------------------------------------------+
| [🌍 GeoGoal • UK]        [Round 1/6] [Time 15s] [Score] [Best] [EN/TR]  |  <- Sticky HUD
+-----------------------------------+-------------------------------------+
|  Where is this place?  [Clue: ..] |  OpenStreetMap Guess Area  [Lat,Lng]|
| +-------------------------------+ | +---------------------------------+ |
| |                               | | |                                 | |
| |   Uncropped Real-World Photo  | | |      Interactive Leaflet        | |
| |     (Wikipedia / Commons)     | | |       OpenStreetMap View        | |
| |                               | | |            (Pin 📍)             | |
| +-------------------------------+ | +---------------------------------+ |
|  Tap on the map to place pin...   |                                     |
+-----------------------------------+-------------------------------------+
|                    [ Confirm Guess & Go to Arena ]                      |
+-----------------------------------+-------------------------------------+
                                      |
                                      v  (Geodesic Distance & Goal Chance)
+-------------------------------------------------------------------------+
|  Actual Place: ...                      [Crowd: Blue Stand Cheering 🎉] |
|  Distance Error: 142 km   |   Goal Chance: 80%   |   Outcome: GOAL!     |
+-------------------------------------------------------------------------+
|               [ 960 x 410 HTML5 2D Stadium & Match Canvas ]             |
+-----------------------------------+-------------------------------------+
| [ Post-Shot Result Mini-Map ]     |  You guessed 142 km away from...    |
|   (Blue Pin --- Yellow Line ---   |                                     |
|    Green Target Pin)              |               [ Next Round → ]      |
+-----------------------------------+-------------------------------------+