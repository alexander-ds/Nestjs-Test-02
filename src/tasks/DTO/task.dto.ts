import {TaskStatus} from "../task.entity";
export class CreateTaskDto{
    title:string
    descripcion:string
}

export class updateTaskDto{
    title?:string
    descripcion?:string
    status?:TaskStatus
}