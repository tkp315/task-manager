import { IsNotEmpty, IsOptional, IsString, IsEnum, IsDateString } from 'class-validator';
import { Priority, Status } from '../task.schema';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(Priority)
  @IsOptional()
  priority?: Priority;

  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @IsEnum(Status)
  @IsOptional()
  status?: Status;
}
