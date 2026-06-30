const mongooose = require("mongoose")


const Connect = async ()=>{
    try{
        await mongooose.connect("mongodb://127.0.0.1:27017/ecommerce")
        console.log("Connection Successful")
    }catch(err){
        console.log(`Db Connection Error: ${err}`);
    }
}

module.exports = {Connect}