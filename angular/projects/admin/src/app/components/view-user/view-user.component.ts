import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  public userData: User;

  constructor(
    private user: UsersService,
    private aR: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.aR.snapshot.params.id;
    this.user.getUserByID(id).subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    });
  }

}
