const mongoose = require ('mongoose');

const JournalSchema = new mongoose.Schema(
    {
        image: String
    },
    {
        collection: "JournalsDetails", timestamps: true
    },
);
const JournalModel = mongoose.model('JournalsDetail', JournalSchema)

module.exports = JournalModel;