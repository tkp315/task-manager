import { Controller, Get, Post, Patch, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiResponse } from '../utils/api-response';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks() {
    const tasks = await this.tasksService.getAllTasks();
    return new ApiResponse('Tasks fetched successfully', tasks);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const task = await this.tasksService.createTask(createTaskDto);
    return new ApiResponse('Task created successfully', task);
  }

  @Patch(':id/toggle')
  async toggleTask(@Param('id') id: string) {
    const task = await this.tasksService.toggleTask(id);
    return new ApiResponse('Task updated successfully', task);
  }
}
