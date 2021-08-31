const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/login/static/index.html');
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/login/static/login.html')
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});