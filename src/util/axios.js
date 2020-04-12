import axios from "axios";
const URL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://mytutor-dashboard-api.herokuapp.com";

export default axios.create({
  baseURL: URL,
});
