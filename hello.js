// Import the http module to create a server
const http = require('http');

// Define the server logic
const server = http.createServer((req, res) => {
  // Set the response HTTP header with the correct content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello, Welcome to the World!\n');
});

// Define the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
})