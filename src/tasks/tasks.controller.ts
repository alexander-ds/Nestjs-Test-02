import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, updateTaskDto } from './DTO/task.dto'
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTask();
  }
/** 
  @Get(@Body() newTask: any)
  getTaskById() {
    return this.taskService.getTaskById();
  }
*/

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    this.taskService.createTask(newTask.title,newTask.descripcion)
    return 'guardando';
  }

  @Delete(':id')
  deleteTask(@Param('id') id : string) { 
    this.taskService.deleteTask(id)
  }

  @Put(":id")
  updateTask(@Param('id') id : string,@Body() updateFields:updateTaskDto){
    this.taskService.updateTask(id,updateFields)
  }
}
