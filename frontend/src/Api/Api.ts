import axios from "axios";
import { IUser, clientsType, deliveryType, productsType } from "../types/types";

const token = localStorage.getItem("user");
console.log("Token:", token); // Verifica o token no console

const api = axios.create({
  baseURL: "https://roterize.onrender.com",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const apiService = {
  clients: {
    createURL: function (body: clientsType) {
      return api.post<clientsType>("/client", body);
    },
    updateURL: function (id: any, body: clientsType) {
      return api.put<any>("/client/" + id, body);
    },
    readAllURL: function () {
      return api.get<clientsType>("/client");
    },
    readById: function (id: any) {
      return api.get<any>("/client/" + id);
    },
    deleteURL: function (id: any) {
      return api.delete<any>("/client/" + id);
    },
  },
  products: {
    createURL: function (body: productsType) {
      return api.post<productsType>("/product/", body);
    },
    updateURL: function (id: any, body: productsType) {
      return api.put<any>("/product/:id" + id, body);
    },
    readAllURL: function () {
      return api.get<productsType>("/product/");
    },
    readByName: function (body: Partial<productsType>) {
      return api.post("/product/search", body);
    },
    readById: function (id: any) {
      return api.get<any>("/product/:id" + id);
    },
    deleteURL: function (id: any) {
      return api.delete<any>("/product/:id" + id);
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
    readByDate: function (date: string) {
      return api.get<deliveryType[]>(`/delivery/date/${date}`);
    },
    deleteURL: function (id: any) {
      return api.delete<any>("/delivery/" + id);
    },
  },
  auth: {
    loginUser: function (body: IUser) {
      return api.post("/auth", body);
    },
  },
};
