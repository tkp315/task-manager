import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    getAllTasks(): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    toggleTask(id: string): Promise<Task>;
}
