import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-e2668.firebaseio.com/'
})