import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.entity';
import { v4 } from "uuid";
import { updateTaskDto } from './DTO/task.dto';

@Injectable()
export class TasksService {

    private tasks : Task[] = [
        {
          id: '1',
          title: 'first task',
          description: 'some task',
          status: TaskStatus.PENDING
        },
      ];

  getAllTask() {
    return this.tasks;
  }

  getTaskById(taskId) {
    return this.tasks.find(task => task.id === taskId)
  }

  createTask(title:string,description:string) {
    const task = {
        id: v4(),
        title : title,
        description : description,
        status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id:string, updateFields:updateTaskDto) : Task {
    const task = this.getTaskById(id)
    const newTask = Object.assign(task, updateFields);
    this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
    return newTask;
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }
}
