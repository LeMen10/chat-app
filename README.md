<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MERN Stack Chat App</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        code { background: #f4f4f4; padding: 5px; border-radius: 4px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>MERN Stack Project: Build and Deploy a Real Time Chat App</h1>
    <h2>Features:</h2>
    <ul>
        <li><strong>🌟 Tech stack:</strong> MERN + Socket.io + TailwindCSS + Daisy UI</li>
        <li><strong>🎃 Authentication & Authorization:</strong> using JWT</li>
        <li><strong>👾 Real-time messaging:</strong> with Socket.io</li>
        <li><strong>🐞 Error handling:</strong> both on the server and on the client</li>
        <li><strong>⭐ Deployment:</strong> Like a pro for FREE!</li>
        <li><strong>⏳ And much more!</strong></li>
    </ul>
    
    <h2>Setup <code>.env</code> file:</h2>
    <h3>Backend Configuration:</h3>
    <pre>
/chat-app/.env
NODE_ENV=...
JWT_SECRET=...
PORT=5000
MONGO_DB_URI=...
    </pre>
    
    <h3>Frontend Configuration:</h3>
    <pre>
/chat-app/frontend/.env
REACT_APP_BASE_URL = http://localhost:5000
    </pre>
    
    <h2>User Manual:</h2>
    <ol>
        <li>Access the main folder and use the command: <code>npm i</code> to install the necessary packages.</li>
        <li>Then, go to the frontend folder and do the same.</li>
        <li>Finally, start the frontend with: <code>npm start</code></li>
        <li>Run the backend server with: <code>npm run server</code></li>
    </ol>
</body>
</html>
