import {
  Http
} from "../utils/http";

class Category {
  static async getGridCategory() {
    return await Http.request({
      url: `/v1/category/grid/all`
    })
  }
}

export {
  Category
}