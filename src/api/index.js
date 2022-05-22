import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${url}`);
// export const createPost = (values) => axios.post(`${url}/${Posts}`, values);
// export const deletePost = (id) => axios.delete(`${url}/${Posts}/${id}`);

