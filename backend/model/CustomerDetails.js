const mongoose = require ('mongoose')

const CustomerSchema = new mongoose.Schema(
    {
 name: {
    type: String,
    required: true
},
role: {
    type: String,
    required: true
},
    },
    { collection:'customerdetails', timestamps:true }

    );

    const CustomerModel = mongoose.model("customerdetails",CustomerSchema)
    module.exports = CustomerModel;
    
    