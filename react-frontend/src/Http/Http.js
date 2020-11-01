import axios from 'axios'
import Snackbar from '../services/Snackbar'
import AuthToken from '../services/AuthToken'

export default {
  instance () {
    let headers =  {
      common: { 'X-Requested-With': 'XMLHttpRequest' }
    };
    if(AuthToken.has()){
      headers.Authorization = `Token ${AuthToken.token()}`;
    }
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    axios.defaults.xsrfCookieName = "csrftoken"
    return axios.create({
      baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
      headers: headers
    })
  },

  errorHandler (error) {
    const data= error.response.data
    const status = error.response.status
    const isUnauthorized = status === 401
    const isLimitExceeded = status === 429
    const isNotFound = status === 404
    if (isUnauthorized) {
      Snackbar.error('Please sign in')
    } else if (isLimitExceeded || isNotFound) {
      return {}
    } else if (data) {
      const firstKey = Object.keys(data)[0];
      let message = ""
      console.log("i am here");
      console.log(data);
      console.log(data[firstKey]);
      console.log(typeof data[firstKey]);
      console.log(firstKey);
      if(typeof data[firstKey] === "object"){
        console.log("i am in this condition");
        message = data[firstKey][0]
        console.log("message", message);
      }else{
        message = data[firstKey]
      }
      Snackbar.error(message);
    }
    return {}
  },

  async get (url, params) {
    try {
      const config = { params }
      const response = await this.instance().get(url, config)
      return response.data
    } catch (error) {
      return this.errorHandler(error)
    }
  },

  async post (url, data) {
    try {
        const response = await this.instance().post(url, data)
        return response.data
    } catch (error) {
        return this.errorHandler(error)
    }
  },

  async put (url, data) {
    try {
        const response = await this.instance().put(url, data)
        return response.data
    } catch (error) {
        return this.errorHandler(error)
    }
  },

  async delete (url, data) {
    try {
        const response = await this.instance().delete(url, data)
        return response.data
    } catch (error) {
        return this.errorHandler(error)
    }
  },
}
