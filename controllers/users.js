const sayHello = (req, res) => {
  res.send("hello world");
};

const getAllUsers = (req, res) => {
  res.send("all users");
  //SELECT * FROM users;
};

const createUser = (req, res) => {
  res.send("create a new user");
};

const getOneUser = (req, res) => {
  res.send("get one user via id");
};

const updateUser = (req, res) => {
  res.send("update users");
};

const deleteUser = (req, res) => {
  res.send("delete users");
};

module.exports = {
  sayHello,
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
};
