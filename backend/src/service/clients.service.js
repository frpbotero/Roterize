const Client = require("../model/clients.model");

const ObjectId = require("mongoose").Types.ObjectId;

function findAllClients() {
  return Client.find().select(
    "_id name cnpj address district number complement referencePoint "
  );
}
function findByIdClient(id) {
  const objectId = new ObjectId(id);
  return Client.findById(objectId);
}
function createClient(client) {
  return Client.create(client);
}
function updateClient(id, item) {
  const objectId = new ObjectId(id);
  return Client.findByIdAndUpdate(objectId, item);
}
function deleteByIdClient(id) {
  const objectId = new ObjectId(id);
  return Client.findByIdAndDelete(objectId);
}

module.exports = {
  findAllClients,
  findByIdClient,
  createClient,
  updateClient,
  deleteByIdClient,
};
