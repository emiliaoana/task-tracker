import {Component, OnInit, Input} from '@angular/core';
import {Task} from "../../Task";
import {TasksComponent} from "../tasks/tasks.component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit{
  @Input() task: Task ;
  faTimes=faTimes;
  ngOnInit(): void {
  }

  constructor() {
    this.task = {
      id: undefined,
      text: '',
      day: '',
      reminder: false
    };
  }

}
