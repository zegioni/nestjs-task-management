import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  //http://localhost:3000/tasks/
  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    //Если у нас есть какие-то фильтры, вызывается tasksService.getTasksWilFilters
    //Если ничего нет из фильтров, мы возвращаем все tasks

    if (Object.keys(filterDto).length) {
      return this.taskService.getTasksWithFilter(filterDto);
    } else {
      return this.taskService.getAllTasks();
    }
  }

  //http://localhost:3000/tasks/dsad2132g34
  @Get('/:id') // параметр пути - "/:id"
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
    //Param должен соответствовать параметру пути
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  } //Body декоратор для получения всех параметров тела запроса

  @Delete('/:id')
  deleteTaskByID(@Param('id') id: string): void {
    return this.taskService.deleteTaskById(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string, // параметр пути - "/:id"
    @Body() updateTaskStatusDto: UpdateTaskStatusDto, // body - "status"
  ): Task {
    const { status } = updateTaskStatusDto;
    return this.taskService.updateTaskStatus(id, status);
  }
}
