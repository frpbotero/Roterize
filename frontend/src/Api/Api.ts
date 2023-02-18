
import axios from "axios"
import { clients, delivery, products } from "../types/types";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers:{
    "Content-Type":"application/json"
  }
})




export const apiService = {
  

  clients: {
    endpoint: function () {
      return api 
    },
    createURL: function (body:clients) {
      return api.post<clients>(this.endpoint()+ "clients/" ,body)
    },
    updateURL: function (id:any, body:clients) {
      return api.put<any>(this.endpoint()+ "clients/"+id,body)
    },
    readAllURL: function () {
      return api.get<clients>(this.endpoint()+ "clients/")
    },
    readById: function (id:any) {
      return api.get<any>(this.endpoint()+ "clients/"+id)
    },
    deleteURL: function (id:any) {
      return api.delete<any>(this.endpoint()+ "clients/"+id)
    },
  },
  products: {
    endpoint: function () {
      return api+"products"
    },
    createURL: function (body:products) {
      return api.post<products>(this.endpoint(),body)
    },
    updateURL: function (id:any, body:products) {
      return api.put<any>(this.endpoint()+"/"+id,body)
    },
    readAllURL: function () {
      return api.get<products>(this.endpoint())
    },
    readById: function (id:any) {
      return api.get<any>(this.endpoint()+"/"+id)
    },
    deleteURL: function (id:any) {
      return api.delete<any>(this.endpoint()+"/"+id)
    },
  },
  delivery: {
    endpoint: function () {
      return api+"delivery"
    },
    createURL: function (body:delivery) {
      return api.post<delivery>(this.endpoint(),body)
    },
    updateURL: function (id:any, body:delivery) {
      return api.put<any>(this.endpoint()+"/"+id,body)
    },
    readAllURL: function () {
      return api.get<delivery>(this.endpoint())
    },
    readById: function (id:any) {
      return api.get<any>(this.endpoint()+"/"+id)
    },
    deleteURL: function (id:any) {
      return api.delete<any>(this.endpoint()+"/"+id)
    },
  },
}

