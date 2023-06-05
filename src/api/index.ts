import axios, { AxiosResponse } from 'axios';
import { IPostWithAd, IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://34.22.77.64:8080/',
});

export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', {
    title,
    contents,
    tag,
  });
};

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

// export const createPost = () => {
//   return null;
// };

export const getPostById = (id: string) => {
  return instance.get('/post/${id}');
};

export const updatePostById = () => {
  return instance.post('/posts', {
    title,
    contents,
    tag,
  });
};

export const deletePostById = () => {
  return instance.delete('/post/${id}');
};
