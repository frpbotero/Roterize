
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
    
    createURL: function (body:clients) {
      return api.post<clients>("/clients" ,body)
    },
    updateURL: function (id:any, body:clients) {
      return api.put<any>("/clients/"+id,body)
    },
    readAllURL: function () {
      return api.get<clients>("/clients")
    },
    readById: function (id:any) {
      return api.get<any>("/clients/"+id)
    },
    deleteURL: function (id:any) {
      return api.delete<any>("/clients/"+id)
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
   
    createURL: function (body:delivery) {
      return api.post<delivery>("/delivery",body)
    },
    updateURL: function (id:any, body:delivery) {
      return api.put<any>("/delivery/"+id,body)
    },
    readAllURL: function () {
      return api.get<delivery>("/delivery")
    },
    readById: function (id:any) {
      return api.get<any>("/delivery/"+id)
    },
    deleteURL: function (id:any) {
      return api.delete<any>("/delivery/"+id)
    },
  },
}

