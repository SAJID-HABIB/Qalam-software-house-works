import express from "express";
import cors from "cors";
import contactRoute from "./modules/contact/contact.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
)
app.use(express.json());
app.use((req, res, next) => {
  console.log("BODY AFTER JSON:", req.body);
  next();
});
app.use("/api/v1/contact",contactRoute);

export default app;