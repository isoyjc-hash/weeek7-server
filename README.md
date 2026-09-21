# Bubble Express Laundromat API

Backend API created for HCI Week 7 Meeting 1 using Node.js and Express.

## How to Run

1. Open terminal inside the project directory.
2. Run `npm install` to install dependencies.
3. Start the server: `node server.js`
4. Access the API at `http://localhost:3000`

## API Endpoints

- `GET /` — Server check / welcome screen.
- `GET /info` — Returns basic business details (flat object).
- `GET /services` — Returns a list of available services (array).
- `GET /hours` — Returns store operating schedule (nested object).
- `GET /pricing` — Returns detailed pricing for services (array of objects).
- `GET /branches` — Returns contact numbers and store locations (nested object with array).