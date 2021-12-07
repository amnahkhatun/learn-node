const http = require("http");

const host = 'localhost';
const port = 8000;

const cities = ["Mumbai", "London", "New York", "Rome", "Tokyo"];

const getCityName = function () {
  let city = cities[Math.floor(Math.random() * cities.length)];
  return city
}

const requestListener = function (req, res) {
  let message = getCityName();
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "${message}"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
