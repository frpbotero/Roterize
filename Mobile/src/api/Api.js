import axios from "axios";

const Api = axios.create({
  baseURL: "https://roterize.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
    delivery: {
        createURL: function (body) {
          return api.post<>("/delivery/", body);
        },
        updateURL: function (id, body) {
          return api.put("/delivery/" + id, body);
        },
        readAllURL: function () {
          return api.get("/delivery/");
        },
        readById: function (id) {
          return api.get("/delivery/" + id);
        },
        readByDate: function (body) {
          return api.post("/delivery/date/", body);
        },
        deleteURL: function (id) {
          return api.delete("/delivery/" + id);
        },
      },
    };