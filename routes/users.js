const express = require("express");
const router = express.Router();
const {
  sayHello,
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

//Initialroute
router.route("/").get(sayHello);

//Users-Endpunkt
router.route("/users").get(getAllUsers).post(createUser);

//Endpunkt für einen User via ID
router.route("/users/:id").get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;
