import axios from "axios";
import { clientsType, deliveryType, productsType } from "../types/types";

const api = axios.create({
  baseURL: "https://roterize.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  clients: {
    createURL: function (body: clientsType) {
      return api.post<clientsType>("/clients", body);
    },
    updateURL: function (id: any, body: clientsType) {
      return api.put<any>("/clients/" + id, body);
    },
    readAllURL: function () {
      return api.get<clientsType>("/clients");
    },
    readById: function (id: any) {
      return api.get<any>("/clients/" + id);
    },
    deleteURL: function (id: any) {
      return api.delete<any>("/clients/" + id);
    },
  },
  products: {
    createURL: function (body: productsType) {
      return api.post<productsType>("/products/", body);
    },
    updateURL: function (id: any, body: productsType) {
      return api.put<any>("/products/:id", body);
    },
    readAllURL: function () {
      return api.get<productsType>("/products/");
    },
    readById: function (id: any) {
      return api.get<any>("/products/:id");
    },
    deleteURL: function (id: any) {
      return api.delete<any>("/products/:id");
    },
  },
  delivery: {
    createURL: function (body: deliveryType) {
      return api.post<deliveryType>("/delivery/", body);
    },
    updateURL: function (id: any, body: deliveryType) {
      return api.put<any>("/delivery/" + id, body);
    },
    readAllURL: function () {
      return api.get<deliveryType>("/delivery/");
    },
    readById: function (id: any) {
      return api.get<any>("/delivery/" + id);
    },
    readByDate: function (body: any) {
      return api.post("/delivery/date/", body);
    },
    deleteURL: function (id: any) {
      return api.delete<any>("/delivery/" + id);
    },
  },
};
