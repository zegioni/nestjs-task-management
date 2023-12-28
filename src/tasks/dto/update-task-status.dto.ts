import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.interface';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus) //проверяет что мы передаем именно те значения которые перечислены в enum
  status: TaskStatus;
}
