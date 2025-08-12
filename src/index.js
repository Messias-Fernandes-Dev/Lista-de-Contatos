const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello API with Express");
});

app.listen(3000, () =>
  console.log("✅ Server started at http://localhost:3000")
);
