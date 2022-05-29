import { Component, OnInit } from '@angular/core';
import { UserModel } from '../common/UserModel';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userModelObj: UserModel = new UserModel();
  userData!: any;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(res=>{
      this.userData = res;
    })
  }

}
