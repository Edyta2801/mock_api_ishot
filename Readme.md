# Mock-API-iShot - Express.js project

This is a simple Express.js API project built with TypeScript. It simulates functionalities similar to an origin API for shooting range iShot.
The (game) range operator sets up a session, generates a QR code.
Users scan this QR code with their phone and are taken to the address:
/sessions/publicId -this session.
The following pages of the application display the results and statistics for players and sessions.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Endpoints](#endpoints)
-   [Project Structure](#project-structure)
-   [Technologies Used](#technologies-used)

## Installation

```
    git clone https://github.com/Edyta2801/mock_api_ishot.git
    npm install
```

## Usage

```
  node server.js
```

## Endpoints

-   GET /Session/GetSessionStatus
-   GET /Session/GetSessionByPlayerID
-   GET /Player/GetPlayer
-   PUT /Player/UpdatePlayerData
-   POST /Player/Player/Register
-   GET /api/sessions/:sessionId/:playerId/scores
-   GET /Score/GetPlayerScores
-   GET /Score/GetDetailedPlayerScores
-   GET /Score/GetRankedPlayerScores
-   GET /Score/GetDetailedScore
-   GET /Score/GetScore
-   GET /Score/GetSessionScores

## Project Structure

```
├── controllers
│   ├── playerController.js
│   ├── scoreController.js
│   └── sessionController.js
├── models
│   ├── Player.ts
│   └── PlayerJoinSessionResponse.ts
├── routes
│   ├── player.ts
│   ├── score.ts
│   └── session.ts
└── app.ts
```

## Technologies Used

-   Express.js: Server environment
-   TypeScript: Main programming language
-   JSON: Used for data storage
