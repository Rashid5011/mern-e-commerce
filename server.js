const app = require("./app");
const dotenv = require("dotenv");
const database = require("./config/database");

// config
dotenv.config({ path: "./config/config.env" });

database();

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🔥`)
);
