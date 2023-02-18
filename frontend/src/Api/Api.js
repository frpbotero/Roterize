const getRequest = function (url) {
  return fetch(url, {
    method: "GET",
  });
};
const createRequest = function (url, body) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-type": "application/json",
    }),
  });
};
const putRequest = function (url, body) {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-type": "application/json",
    }),
  });
};
const deleteRequest = function (url) {
  return fetch(url, {
    method: "DELETE",
  });
};

export const API = {
  baseURL: "http://localhost:3000/",

  clients: {
    endpoint: function () {
      return API.baseURL + "clients";
    },
    createURL: function (body) {
      return createRequest(this.endpoint(), body);
    },
    updateURL: function (id, body) {
      return putRequest(this.endpoint() + "/" + id, body);
    },
    readAllURL: function () {
      return getRequest(this.endpoint());
    },
    readById: function (id) {
      return getRequest(this.endpoint + "/" + id);
    },
    deleteURL: function (id) {
      return deleteRequest(this.endpoint + "/" + id);
    },
  },
  products: {
    endpoint: function () {
      return API.baseURL + "products";
    },
    createURL: function (body) {
      return createRequest(this.endpoint(), body);
    },
    updateURL: function (id, body) {
      return putRequest(this.endpoint() + "/" + id, body);
    },
    readAllURL: function () {
      return getRequest(this.endpoint());
    },
    readById: function (id) {
      return getRequest(this.endpoint + "/" + id);
    },
    deleteURL: function (id) {
      return deleteRequest(this.endpoint + "/" + id);
    },
  },
  delivery: {
    endpoint: function () {
      return API.baseURL + "delivery";
    },
    createURL: function (body) {
      return createRequest(this.endpoint(), body);
    },
    updateURL: function (id, body) {
      return putRequest(this.endpoint() + "/" + id, body);
    },
    readAllURL: function () {
      return getRequest(this.endpoint());
    },
    readById: function (id) {
      return getRequest(this.endpoint + "/" + id);
    },
    deleteURL: function (id) {
      return deleteRequest(this.endpoint + "/" + id);
    },
  },
};
