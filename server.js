const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/your-angular-app'));

// Send all requests to Angular app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/your-angular-app/index.html'));
});

// Set port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Node server is running on port ${PORT}`);
});
