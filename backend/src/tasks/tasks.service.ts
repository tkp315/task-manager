import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
import { Task, TaskDocument } from './task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiError } from '../utils/api-error';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().sort({ createdAt: -1 }).exec();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel(createTaskDto);
    return task.save();
  }

  async toggleTask(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id);
    if (!task) {
      throw new ApiError('Task not found', HttpStatus.NOT_FOUND);
    }

    task.completed = !task.completed;
    task.status = task.completed ? 'done' as any : 'todo' as any;
    task.completedAt = task.completed ? new Date() : null;
    return task.save();
  }
}
