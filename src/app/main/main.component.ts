import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  selectedTab:string = 'home';

  selectTab(tab: string) {
    this.selectedTab = tab;
    console.log(`from tab: ${this.selectedTab}`);
  }  

  ngOnInit(): void {
  }

}
