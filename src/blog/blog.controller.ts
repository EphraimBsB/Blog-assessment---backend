import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CommentDto } from './dtos/comment_dto';

@Controller('api/posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getAllPosts() {
    return this.blogService.getAllPosts();
  }

  @Get(':id')
  getPostDetails(@Param('id') id: number) {
    return this.blogService.getPostDetails(id);
  }

  @Post()
  addPost(@Body() body: { title: string; content: string }) {
    return this.blogService.addPost(body.title, body.content);
  }

  @Get('user/:userId')
  getUserBlogs(@Param('userId') userId: number) {
    return this.blogService.getUserBlogs(userId);
  }

  @Post('/comment')
  addComment(@Body() commentDto: CommentDto) {
    return this.blogService.addComment(commentDto);
  }
}
