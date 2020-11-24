const user = require('../model/user.model');
const userController = {};

userController.getUsers = async(req, res) => {
    // console.log(req.headers.store);

    const result = await user.find({ store: req.headers.store });

    res.json(result);
};

userController.getUser = async(req, res) => {
    console.log(req.headers);

    const result = await user.find({ _id: req.params.id, store: req.headers.store });
    res.json(result);
};

userController.createUser = async(req, res) => {
    var result = {};
    try {
        result = await user.create(req.body);
    } catch (err) {
        result = err;
    }
    res.json(result);
};

userController.updateUser = async(req, res) => {
    const { id } = req.params;

    const result = await user.findByIdAndUpdate(req.params.id, { $set: req.body });

    res.json(result);
};

userController.deleteUser = async(req, res) => {
    const { id } = req.params;

    const result = await user.findByIdAndDelete(req.params.id);

    res.json(result);
};


module.exports = userController;