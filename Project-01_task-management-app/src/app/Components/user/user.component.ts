import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../../../mock-data/dummy-users';
import { user } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) selectedUser!:user;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelect(){
    this.select.emit(this.selectedUser.id);
  }
}
