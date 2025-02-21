import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from "./Components/user/user.component";
import { DUMMY_USERS } from '../mock-data/dummy-users';
import { TasksComponent } from "./Components/tasks/tasks.component";
import { user } from './Components/user/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-management-app';
  users = DUMMY_USERS;
  selectedUserId: string | null = null;
  selectedUser: user | undefined = undefined;

  onUserSelected(id: string){
    this.selectedUserId = id;
    this.selectedUser = this.users.find(user => user.id === this.selectedUserId);
  }
}
