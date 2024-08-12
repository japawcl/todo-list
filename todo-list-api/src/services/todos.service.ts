import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { CreateTodoDto } from '@/dtos/todos.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Todo } from '@prisma/client';

@Service()
export class TodoService {
  public todo = new PrismaClient().todo;

  public async findAllTodo(): Promise<Todo[]> {
    const allTodo: Todo[] = await this.todo.findMany();
    return allTodo;
  }

  public async findTodoById(todoId: number): Promise<Todo> {
    const findTodo: Todo = await this.todo.findUnique({ where: { id: todoId } });
    if (!findTodo) throw new HttpException(409, "Todo doesn't exist");

    return findTodo;
  }

  public async createTodo(todoData: CreateTodoDto): Promise<Todo> {
    const createTodoData: Todo = await this.todo.create({ data: { ...todoData } });
    return createTodoData;
  }

  public async updateTodo(todoId: number, todoData: CreateTodoDto): Promise<Todo> {
    const findTodo: Todo = await this.todo.findUnique({ where: { id: todoId } });
    if (!findTodo) throw new HttpException(409, "Todo doesn't exist");

    const updateTodoData = await this.todo.update({ where: { id: todoId }, data: { ...todoData } });
    return updateTodoData;
  }

  public async deleteTodo(todoId: number): Promise<Todo> {
    const findTodo: Todo = await this.todo.findUnique({ where: { id: todoId } });
    if (!findTodo) throw new HttpException(409, "User doesn't exist");

    const deleteTodoData = await this.todo.delete({ where: { id: todoId } });
    return deleteTodoData;
  }
}
