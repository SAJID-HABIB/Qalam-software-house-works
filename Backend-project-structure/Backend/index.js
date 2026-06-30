const express = require('express');
const app = express();
const cors = require('cors');
const {routes} = require('./Routes/authroutes');
const {Connect} =  require('./Config.js/Db');

app.use(cors());
app.use(express.json());

Connect();

app.use("/", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});