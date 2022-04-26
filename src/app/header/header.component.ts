import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faCommentDots, faBell, faAngleDown, faUpLong } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchIcon = faMagnifyingGlass;
  bell = faBell;
  chat = faCommentDots;
  down = faAngleDown;
up = faUpLong;

  constructor() { }

  ngOnInit(): void {
  }

}
