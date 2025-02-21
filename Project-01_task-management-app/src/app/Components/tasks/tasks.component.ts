import { Component, computed, Input, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { task } from './task.model';
import { dummyTasks } from '../../../mock-data/dummy-tasks';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [NewTaskComponent, TaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  
  @Input({required:true})userId: string = '';
  @Input({required:true}) name: string = '';
  isAddingTask: boolean = false;
  tasks = dummyTasks;
  userTasks = signal<task[]>([]);

  ngOnInit(): void {
    this.userTasks.set(this.tasks().filter(task => task.userId == this.userId));
  }

  //// task component related functions ////
  onTaskCompleted(id: string) {
    this.userTasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  //// add-task component related functions ////
  onAddTask(newTask: Signal<task>){
    this.isAddingTask = false;
    
    const cloneTask = {...newTask()};

    cloneTask.id = new Date().getTime().toString();
    cloneTask.userId = this.userId;

    this.tasks.update((tasks) => [...tasks, cloneTask]);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCancelAddTask(){
    this.isAddingTask = false;
  }
  
}
