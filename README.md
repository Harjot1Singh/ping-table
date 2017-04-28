# ping-table
A Ping Pong League Table

# Status
Currently building views. To preview: 
```
cd public
npm install
npm run dev
```
View on `http://localhost:8080`

# Proposed Features
- Add and remove games from the league
- League table showing top 5 players
- List of game results
- Winning % of each user, as won/total games played
- _Visualisation of results_
- _User avatars via Gravatar_
- _List of tweets with hashtag #pingpong#_
- _Autocomplete player names_

# Technology

## Backend
**Node.js (v7.9.0)** - Not yet used

## Database
**Postgres** - Not yet used

### Proposed Schema
![Schema](docs/DB.png) 

## Frontend
**Vue.js (2.0)** and **Bulma CSS* - Vue allows for modular building, encouraging separation of concerns, and code reuse. Bulma provides a modern grid system, as well as some utility classes. 
The frontend has been structued as follows (component-wise), and have Vue components for each:
 - Home
    - Player Board
    - Add Player Box
    - Add Game Box
    - Latest Scoreboard

`App.vue` is the entry point, and contains some global CSS classes for buttons and inputs (however, these can be refactored into Vue components later)