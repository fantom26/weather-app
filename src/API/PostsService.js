import axios from "axios";

export class PostsService {
  static async getAll(LIMIT = 10, page = 1) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: LIMIT,
        _page: page
      }
    });
    return response;
  }
}