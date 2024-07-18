const mongoose = require ('mongoose');

const OderSchema = new mongoose.Schema(
    {
        Oders: String
    },
    {
        collection: "OderList", timestamps: true
    },
);
const OderListModel = mongoose.model('OderList', OderSchema)

module.exports = OderListModel;