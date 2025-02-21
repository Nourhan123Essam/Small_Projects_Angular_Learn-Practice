import { Component, input, Input, output, Signal, signal } from '@angular/core';
import { task } from '../task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // @Input({required: true}) task! = signal<task>();
  task = input.required<task>();
  complete = output<string>();

  onComplete(id: string){
    this.complete.emit(id);
  }
}
