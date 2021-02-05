import {
  Http
} from "../utils/http";

class Activity {
  static locationD = 'a-2'
  static async getHomeLocationD() {
    return Http.request({
      url: `activity/name/${this.locationD}`
    })
  }
}

export {
  Activity
}