import {
  Http
} from "../utils/http";

class Theme {
  static async getHomeLoacationA() {
    return await Http.request({
      url: 'v1/theme/by/names',
      data: {
        names: 't-1,t-2'
      }
    })
  }
}

export {
  Theme
}