import axios from 'axios';

// You can create multiple instances for different use cases.

// Creates an instance of the axios object.
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Auth'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json'

// instance.interceptors.request...

export default instance;