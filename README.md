<h1 align="center">MERN Stack Project: Build and Deploy a Real Time Chat App</h1>
<br>

<h2>Some Features:</h2>

-   Tech stack: MERN + Socket.io
-   Authentication && Authorization with JWT
-   Real-time messaging with Socket.io
-   Error handling both on the server and on the client
-   And much more!

<h2>User manual:</h2>
<ul>
    <li>Access the main folder and use the "npm i" command to install the necessary packages.</li>
    <li>Then access frontend and do the same.</li>
    <li>Finally "npm start" for the frontend folder and "npm run server" for the main folder to run the project.</li>
</ul>

<h2>Setup .env file:</h2>

### /chat-app/.env
```
NODE_ENV=...
JWT_SECRET=...
PORT=5000
MONGO_DB_URI=...
```

### /chat-app/frontend/.env
```
REACT_APP_BASE_URL=http://localhost:5000
```
