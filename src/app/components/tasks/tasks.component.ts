import { Component } from '@angular/core';
import { TaskModalService } from 'src/app/services/taskModal.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  constructor(private taskModal: TaskModalService) {}

  addItem() {
    this.taskModal.opened = true;
  }
}
