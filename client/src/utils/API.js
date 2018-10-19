import axios from "axios";

var token = localStorage.getItem("token");

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users", { headers: {"Authorization" : `Bearer ${token}`} });
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    return axios.post("/auth/login", userData);
  },
  // Sign up a user
  signUp: function(userData) {
    return axios.post("/auth/signup", userData);
  }
};
