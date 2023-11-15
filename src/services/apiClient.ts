import axios from 'axios';
export const url = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
  baseURL: url,
});

class APIClient<T> {
  constructor(public endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
