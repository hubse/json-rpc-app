# JSON-RPC Demo

JSON-RPC is a lightweight remote procedure call (RPC) protocol that uses JSON for encoding messages. It lets one program call functions or methods on another program over a network, as if they were local functions.

The protocol is simple: a client sends a JSON object describing the method to call and its parameters, and the server responds with a JSON object containing the result or an error.

A sample app used to demonstrate JSON-RPC sample.

---

## Project Structure

- **server/**
  - Express server running on **http://localhost:3000**
  - Exposes:
    - **POST `/add`** — expects `{ "num1": number, "num2": number }`
    - Responds with `{ "success": true, "result": num1 + num2 }`

- **client/**
  - Node.js script that uses `node-fetch` to call the server endpoint
  - Currently sends `{ num1: 5, num2: 3 }` and logs the JSON response

---

## Requirements

- Node.js (version that supports ES modules)

---

## Run the Server

```bash
cd server
npm install
node index.js
```

Server will start on **port 3000**.

---

## Run the Client

In a separate terminal:

```bash
cd client
npm install
node index.js
```

Expected console output (example):

```text
Server Response: { success: true, result: 8 }
```

---

## API Details

### `POST /add`

**Request**

- Content-Type: `application/json`
- Body:

```json
{
  "num1": 5,
  "num2": 3
}
```

**Response**

```json
{
  "success": true,
  "result": 8
}
```

---

## Notes

- The server uses `express.json()` to parse incoming JSON.
- The client uses `node-fetch` (ESM `type: module`).

