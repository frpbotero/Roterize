import axios from "axios";

const Api = axios.create({
  baseURL: "https://roterize.onrender.com",
  // "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  delivery: {
    createURL: function (body) {
      return Api.post("/delivery/", body);
    },
    updateURL: function (id, body) {
      return Api.put("/delivery/" + id, body);
    },
    readAllURL: function () {
      return Api.get("/delivery");
    },
    readById: function (id) {
      return Api.get("/delivery/" + id);
    },
    readByDate: function (body) {
      return Api.post("/delivery/date/", body);
    },
    deleteURL: function (id) {
      return Api.delete("/delivery/" + id);
    },
  },
};
export default Api;
