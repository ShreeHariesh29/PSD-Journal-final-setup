const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name : { 
      type: String,
    },
    email : { 
      type: String ,
    },
    mobileno : { 
      type: Number,
    },
    queries : { 
      type: String ,
    },
    oderlist : { 
      type: String ,
    }
  
  },
  { collection: "customerdetails", timestamps: true }
);

const UserModel = mongoose.model("customerdetail", UserSchema);

module.exports = UserModel;
