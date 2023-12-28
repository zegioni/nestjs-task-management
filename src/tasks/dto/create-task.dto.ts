// DTO нужны для определения формы данных входящего запроса
// и позволяют нам повторно их использовать во всем приложении

import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty() //проверка на не пустую строку
  title: string;

  @IsNotEmpty()
  description: string;
}
