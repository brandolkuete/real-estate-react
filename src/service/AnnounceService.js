import axios from 'axios'
import { Buffer } from 'buffer'

const ANNOUNCE_URL= "http://37.187.88.37:7071/api/announce"

const config = {     
headers: { 'content-type': 'multipart/form-data' }
}

class AnnounceService {

  create_announce(data) {
      return axios.post(ANNOUNCE_URL+'/save',data,config)
  }

  all_announces() {
      return axios.get(ANNOUNCE_URL+'/all')
  }

  get_announce(id) {
      return axios.get(ANNOUNCE_URL+'/'+id)
  }

  /* The response that we get from the API is not BASE64 encoded, so we set the responseType: "arraybuffer" 
    in the request and we will now have arrayBuffer which can then be converted to base64 using Buffer*/
  get_image(image_url) {
      return axios.get(image_url, {responseType: "arraybuffer"}).then((res) => {
        let base64ImageString= Buffer.from(res.data, 'binary').toString('base64')

        return base64ImageString;
      })
  }

}

export default new AnnounceService()
