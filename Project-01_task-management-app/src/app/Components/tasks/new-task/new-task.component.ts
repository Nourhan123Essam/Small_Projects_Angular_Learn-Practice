import { Component, EventEmitter, Output, Signal, signal } from '@angular/core';
import { task } from '../task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<Signal<task>>();

  newTask: Signal<task> = signal({
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
  });


  onSubmit(){
    this.add.emit(this.newTask);
  }
  onCancel(){
    this.cancel.emit();
  }
}
