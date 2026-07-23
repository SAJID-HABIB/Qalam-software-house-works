const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const otpRoutes = require("./routes/otp.routes.js");
app.use("/api/otp", otpRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("mongo db is connect");
  
});
