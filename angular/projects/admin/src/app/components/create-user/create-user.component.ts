import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/services/users.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public userData: User;

  constructor(
    private userService: UsersService) { }

  ngOnInit() {
      this.userData = {
        role: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: ""
    };
  }

  createUser(userData){
    this.userService.createUser(userData).subscribe();
  }

}
