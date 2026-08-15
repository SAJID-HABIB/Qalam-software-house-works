import "dotenv/config";
import app from "./app.js"
import connectDB from "./config/database.js"

// const app = express();
const port = 5000;

const startSever =async () => {
await connectDB();
try {
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    
  });
}catch(err) {
    console.log("MongooDB connection failed",err);
    
  }
};

startSever();



