import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
home="nav-link sactive";
  tools="nav-link";
  health="nav-link ";
  education="nav-link";
  about="nav-link";

  constructor() { }

  ngOnInit(): void {
  }

}
