import { Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class AuthService {
  private readonly users = [
    { id: 1, username: 'testuser1', password: 'password123' },
    { id: 2, username: 'testuser2', password: 'password123' },
    { id: 3, username: 'testuser3', password: 'password123' },
  ];

  async login(username: string, password: string) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Simulate token generation
    return { token: 'dummy-token', userId: user.id };
  }

  async validateToken(token: string) {
    // Check for the dummy token
    return token === 'dummy-token';
  }

  async getUsers() {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  }
}
