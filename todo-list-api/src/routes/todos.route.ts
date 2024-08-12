import { Router } from 'express';
import { TodoController } from '@/controllers/todos.controller';
import { CreateTodoDto } from '@/dtos/todos.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class TodoRoute implements Routes {
  public path = '/todos';
  public router = Router();
  public todo = new TodoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.todo.getTodos);
    this.router.get(`${this.path}/:id(\\d+)`, this.todo.getTodoById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateTodoDto), this.todo.createTodo);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(CreateTodoDto, true), this.todo.updateTodo);
    this.router.delete(`${this.path}/:id(\\d+)`, this.todo.deleteTodo);
  }
}
