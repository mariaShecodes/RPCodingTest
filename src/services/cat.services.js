import axios from 'axios';

export default class Services {
  constructor() {

    this.cataas = axios.create({
      baseURL: 'https://cataas.com',
      withCredentials: false
    })
    this.catfacts = axios.create({
      baseURL: 'https://cat-fact.herokuapp.com',
      withCredentials: false
    })
  }
  
  catPictures = () => this.cataas.get('/cat')
  catFacts = () => this.catfacts.get('/facts/random')
}