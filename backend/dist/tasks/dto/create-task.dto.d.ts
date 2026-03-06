import { Priority, Status } from '../task.schema';
export declare class CreateTaskDto {
    title: string;
    description?: string;
    priority?: Priority;
    dueDate?: string;
    status?: Status;
}
