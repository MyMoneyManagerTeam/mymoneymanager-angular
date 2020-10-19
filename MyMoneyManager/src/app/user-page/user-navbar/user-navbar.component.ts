import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event): void {
    const result = confirm('Les changements apportés pourraient ne pas être sauvegardés.');
    if (result) {
      event.returnValue = true;
    }
    event.returnValue = false; // on reste sur la page
  }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
