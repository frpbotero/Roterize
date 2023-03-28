const User = require("../model/user.model");

const ObjectId = require("mongoose").Types.ObjectId;

function findAllUsers() {
  return Client.find().select(
    "_id name cnpj address district number complement referencePoint "
  );
}
function findByIdUser(id) {
  const objectId = new ObjectId(id);
  return User.findById(objectId);
}
function createUser(user) {
  return User.create(user);
}
function updateUser(id, item) {
  const objectId = new ObjectId(id);
  return User.findByIdAndUpdate(objectId, item);
}
function deleteByIdUser(id) {
  const objectId = new ObjectId(id);
  return User.findByIdAndDelete(objectId);
}

module.exports = {
  findAllUsers,
  findByIdUser,
  createUser,
  updateUser,
  deleteByIdUser,
};
