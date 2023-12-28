import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.interface';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus; // ? - необязательный
  @IsOptional()
  @IsString()
  search?: string; // ? - необязательный
}
