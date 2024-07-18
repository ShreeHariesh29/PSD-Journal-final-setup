const UserModel = require("../model/Users.model");


async function getdata(req, res) {
    try {
      const Users = await UserModel.find();
      // conver data to json
      res.json(Users);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ status: "error", error: "Failed to fetch courses" });
    }
  }
  

module.exports={
    getdata
}
