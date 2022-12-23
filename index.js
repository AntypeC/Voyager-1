/* ====== create node.js server with express.js framework ====== */
// dependencies
const express = require("express");

const app = express();
app.use(express.static('./'))

app.get("/", (req, res) => {
   res.sendFile("index.html", {root: __dirname});
});

// PORT
const PORT = 8080;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
