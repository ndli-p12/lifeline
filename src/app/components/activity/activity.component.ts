import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  list: any[] = [];

  model: any = {
    date: Date.now(),
    rythme: '',
    tension: '',
    observation: ''
  };

  displayedColumns: string[] = ['date', 'rythme', 'tension', 'observation'];

  constructor() { }

  ngOnInit() {
  }

  addItem(): void {
    this.list.push(JSON.parse(JSON.stringify(this.model)));
  }

}
