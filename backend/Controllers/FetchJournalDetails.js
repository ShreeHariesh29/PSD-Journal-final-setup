const JournalModel = require('../model/JournalsDetailsModel')

async function JournalData (req, res){
    try{
        const journaldata = await JournalModel.find();
        res.json(journaldata);
    }
    catch (error){
        console.error("Error fetching courses:", error);
    res.status(500).json({ status: "error", error: "Failed to fetch courses" });
    }

}
module.exports ={
    JournalData
}