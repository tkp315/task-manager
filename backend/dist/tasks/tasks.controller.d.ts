import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiResponse } from '../utils/api-response';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Promise<ApiResponse<import("./task.schema").Task[]>>;
    createTask(createTaskDto: CreateTaskDto): Promise<ApiResponse<import("./task.schema").Task>>;
    toggleTask(id: string): Promise<ApiResponse<import("./task.schema").Task>>;
}
