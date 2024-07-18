const UserModel = require('../model/Users.model')

 async function createpost (req, res){
    const post = req.body;
    const newpost = new UserModel(post);

    try{
        await newpost.save();

        res.status(201).json(newpost);

    } catch (error) {
        res.status(409).json({message:error.message})
    }
}
module.exports = {
    createpost
}