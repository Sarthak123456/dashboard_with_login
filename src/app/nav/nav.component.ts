import { Component, OnInit } from '@angular/core';
import {faHouse,
  faChartBar,
  faEnvelope,
  faFileInvoice,
  faUserAlt,
  faCommentDots,
  faCalendar,
  faCircleQuestion,
  faGear,
  faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  house = faHouse;
  message = faEnvelope;
  building = faChartBar;
  user = faUserAlt;
  comment = faCommentDots;
  invoice = faFileInvoice;
  calender=faCalendar;
  help=faCircleQuestion;
  gear=faGear;
  constructor() { }

  ngOnInit(): void {
  }

}
