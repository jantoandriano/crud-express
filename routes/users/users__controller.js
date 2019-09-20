const users = require("../../models/users__model");

module.exports = {
  getUsers: (req, res, next) => {
    res.send(users);
  },


  createUser: (req, res, next) => {
    let newUser = {
      id: users.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };
    users.push(newUser);
    res.send(users)
    res.json({ message : "User created"});
  },


  getSingleUser: (req, res, next) => {
    const user = users.find(data => data.id === parseInt(req.params.id));
    if (!user)
      return res.status(404).send("The game with the given ID was not found.");
    res.json(user);
  },



  deleteUser: (req, res, next) => {
    let idtoremove = parseInt(req.params.id)
    let deletedUser = users.filter(user => user.id !== idtoremove)
    res.send(deletedUser)
  },

  updateUser: (req, res, next) => {
    let id = parseInt(req.params.id)
    let userFound;
    let userIndex;

    users.map((user, index) => {
        if (user.id === id){
            userFound = user
            userIndex = index
        }
    })
    if(!userFound){
        return res.status(404).send({
            message : "user not found"
        })
    }
    if (!req.body.firstName) {
        return res.status(404).send({
            message: "first name required"
        })
    }if (!req.body.lastName) {
        return res.status(404).send({
            message : "last name required"
        })
    }
    const userUpdate = {
        firstName: req.body.firstName || user.firstName,
        lastName: req.body.lastName || user.lastName
    }
    users.splice(userIndex, 1, userUpdate)
    res.send({
        message : "user update",
        userUpdate
    })
  }
};
