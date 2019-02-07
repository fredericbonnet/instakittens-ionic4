import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../api/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users$: Observable<User[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.users$ = this.route.data.pipe(map(data => data.users));
  }
}
