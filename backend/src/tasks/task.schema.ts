import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export enum Status {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ enum: Priority, default: Priority.MEDIUM })
  priority: Priority;

  @Prop()
  dueDate: Date;

  @Prop({ enum: Status, default: Status.TODO })
  status: Status;

  @Prop({ type: Date, default: null })
  completedAt: Date | null;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
