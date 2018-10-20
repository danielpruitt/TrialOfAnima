import axios from "axios";

const token = localStorage.getItem("token");

export default {
  // Gets all users
  getUserId: function () {
    if(token) {
      const tokenParts = token.split('.');
      const encodedPayload = tokenParts[1];
      const rawPayload = atob(encodedPayload);
      const user = JSON.parse(rawPayload);
      return user.sub;
    }
  },
  getUsers: function () {
    return axios.get("/api/users", { headers: { "Authorization": `Bearer ${token}` } });
  },
  // Gets the user with the given username(unique)
  getUser: function (id) {
    return axios.get("/api/users/?_id=" + id, { headers: { "Authorization": `Bearer ${token}` } });
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // Authenticates a user
  authenticateUser: function (userData) {
    return axios.post("/auth/login", userData);
  },
  // Sign up a user
  signUp: function (userData) {
    return axios.post("/auth/signup", userData);
  }
};
