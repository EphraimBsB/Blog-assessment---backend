import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CommentDto } from './dtos/comment_dto';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class BlogService {
  private comments: CommentDto[] = [];

  async getAllPosts() {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    return data;
  }

  async getPostDetails(id: number) {
    const post = await axios.get(`${BASE_URL}/posts/${id}`);
    const comments = await axios.get(`${BASE_URL}/posts/${id}/comments`);
    const user = await axios.get(`${BASE_URL}/users/${post.data.userId}`);
    return { ...post.data, comments: comments.data, user: user.data };
  }

  async addPost(title: string, body: string) {
    return { message: 'Post submitted successfully', data: { title, body } };
  }

  async getUserBlogs(userId: number) {
    const { data } = await axios.get(`${BASE_URL}//users/${userId}/posts`);
    return data;
  }

  async getPostDetailWithAddedComment(id: number) {
    const post = await axios.get(`${BASE_URL}/posts/${id}`);
    const comments = this.comments.filter((comment) => comment.postId === id);
    const user = await axios.get(`${BASE_URL}/users/${post.data.userId}`);
    return { ...post.data, comments, user: user.data };
  }

  async addComment(commentDto: CommentDto) {
    this.comments.push(commentDto);
    return { message: 'Comment added successfully', comment: commentDto };
  }
}
