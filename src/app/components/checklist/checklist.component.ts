import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  taskList = [
    { text: 'Activité 1', checked: false },
    { text: 'Activité 2', checked: true },
    { text: 'Activité 3', checked: false },
    { text: 'Activité 4', checked: false },
    { text: 'Activité 5', checked: false },
    { text: 'Activité 6', checked: false },
    { text: 'Activité 7', checked: false },
  ];

  taskFormControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.taskList.push({text: this.taskFormControl.value, checked: false});
    this.taskFormControl.setValue('');
  }

}
