import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { TodoRoute } from './routes/todos.route';

ValidateEnv();

const app = new App([new TodoRoute()]);

app.listen();
