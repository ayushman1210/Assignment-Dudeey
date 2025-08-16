# Rider API with PostgreSQL

This project is a Node.js Express API for managing riders and finding nearby riders using PostgreSQL.

## Features
- Add a rider with name, rating, latitude, and longitude
- Fetch riders within 5km of a given location
- PostgreSQL database integration

## Setup
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure your `.env` file:
   ```
   DATABASE_URL=postgres://username:password@localhost:5432/database_name
   PORT=3000
   ```
4. Start the server:
   ```
   npm start
   ```

## API Endpoints
### Add Rider
- **POST** `/api/rider/addrider`
- **Body:**
  ```json
  {
    "name": "ayush",
    "rating": 4.8,
    "lat": 28.6139,
    "long": 77.2090
  }
  ```

### Get Nearby Riders
- **GET** `/api/rider/getrider?lat=28.6139&long=77.2090`
- Returns all riders within 5km of the given latitude and longitude

## Notes
- The `riders` table is created automatically if it does not exist.
- Do not commit `node_modules` to git. Use `.gitignore`.

<<<<<<< HEAD
## POSTMAN  DOCUMENTATION LINK
https://documenter.getpostman.com/view/43871527/2sB3BHkoZ3

## POSTMAN  COLLECTION LINK
https://www.postman.com/ayushman-8490114/workspace/assignment/collection/43871527-6fa06db6-d453-4981-9e45-7db4f154c704?action=share&creator=43871527
=======
>>>>>>> 757bc4f2d826b69b3ae74583e2b9f2b6502d630d
