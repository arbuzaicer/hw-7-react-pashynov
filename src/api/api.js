import * as axios from 'axios';

const BASE_URL = "https://tweets.globalofficiallottery.com";

const BASE_CONNECTION = axios.create({
  baseURL: BASE_URL,
});

const api = {
  getUsers: () => BASE_CONNECTION.get("/users"),
  createUser: (name, username, avatar) =>
    BASE_CONNECTION.post("/users", {
      name,
      username,
      avatar,
    }),
  getTweets: () => BASE_CONNECTION.get("/tweets"),
  createTweet: (userId, content, image) =>
    BASE_CONNECTION.post("/tweets", {
      userId,
      content,
      image,
    }),
};

export default api;
