const User = require('../models/User');


module.exports.addUser = async (req, res) => {
    try{
        const newUser = new User({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error){
        res.status(404).json({ message: error.message});     
    }
}

module.exports.getUsers = async (req, res) => {
    try{
        const users = await User.find().sort({_id : -1});
        res.status(200).json(users);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.editUser = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, 
            {new:  true});
        res.status(200).json({msg : 'User has been updated..',data: user});
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.deleteUser = async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({msg : 'User has been deleted..'});
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}



