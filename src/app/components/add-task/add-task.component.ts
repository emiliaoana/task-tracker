import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>()
  private task: { reminder: boolean; id: undefined; text: string; day: string };

  id: undefined;
  text: string
  day: string
  reminder: boolean
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
    this.task = {
      id: undefined,
      text: '',
      day: '',
      reminder: false
    };
    this.reminder = true;
    this.day = '';
    this.text = '';

  }

  onSubmit() {
    if (!this.text) {
      alert('You forgot to add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

  ngOnInit(): void {

  }

}
