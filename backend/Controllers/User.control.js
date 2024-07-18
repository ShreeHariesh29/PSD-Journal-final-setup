const CustomerModel = require('../model/CustomerDetails')

async function getuser(req, res) {
   try{
    const Users = await CustomerModel.find();
    res.json(Users);
   } catch(error){
    console.error("Error fetching courses:", error);
    res.status(500).json({ status: "error", error: "Failed to fetch courses" });
   }
}

module.exports ={
    getuser
}