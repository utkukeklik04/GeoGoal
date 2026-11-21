# GeoGoal
Hacettepe University GMT 458 GeoGoal Game

# GeoGoal

This is a browser-based GeoGame I am building for the GMT 458 Web GIS course[cite: 1, 2]. In the game, a photo appears on the screen and the player guesses where it is on a map. Then, the distance between the guess and the real location changes the chance of scoring a penalty kick against a goalkeeper.

Live page (when GitHub Pages is ready): `https://utkukeklik04.github.io/GeoGoal/`[cite: 2]

---

## How the Game Works

One round has **6 questions**, and the difficulty goes from easy to hard:
- **Questions 1–2:** Easy (more well-known places or structures)
- **Questions 3–4:** Medium
- **Questions 5–6:** Hard

### Time Limit
Each question has **15 seconds**. You need to pick a point on the map and confirm your shot before the time ends. If time runs out, you lose the shot chance for that question.

### Distance and Goal Chance
After you click on the map, the app calculates the distance (in km) between your guess and the real place. Closer guesses give a higher chance to score in the penalty animation:

- **0 - 100 km:** 100% goal chance
- **100 - 500 km:** 80% goal chance
- **500 - 1000 km:** 50% goal chance
- **1000 - 2000 km:** 20% goal chance
- **More than 2000 km:** 0% goal chance

Then the penalty animation runs with a goalkeeper. If you score, you get base points plus a bonus for the remaining time. The highest score is saved in the browser with `localStorage`.

---

## Layout Sketch

+-------------------------------------------------------------------+
| GeoGoal               Round: 1/6 (Easy)    Time: 15s    Score: 0  |
+---------------------------------+---------------------------------+
|                                 |                                 |
|   [ TARGET LOCATION PHOTO ]     |     [ OPENSTREETMAP MAP ]       |
|                                 |   (Click to place your guess)   |
|                                 |                                 |
+---------------------------------+---------------------------------+
|                     [ CONFIRM GUESS & SHOOT ]                     |
+-------------------------------------------------------------------+
| PENALTY SCENE                                                     |
| Distance: -- km  |  Goal Chance: --%  |  Goalkeeper & Ball Anim.  |
+-------------------------------------------------------------------+
