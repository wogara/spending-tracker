const express = require("express");
const app = express();

app.post("/post", (req,res) => {
  console.log("connected to react");
  res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server started on port ${PORT}`));


