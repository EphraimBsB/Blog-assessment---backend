import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [],
  controllers: [BlogController, AuthController],
  providers: [BlogService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      { path: 'api/posts/:id/comment', method: RequestMethod.POST }, // Protects comment endpoint
    );
  }
}
