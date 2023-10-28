import { Component } from '@angular/core';
import { TaskModalService } from './services/taskModal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Todo';

  get opened(): boolean {
    return this.taskModal.opened;
  }

  set opened(opened: boolean) {
    this.taskModal.opened = opened;
  }

  constructor(private taskModal: TaskModalService) {}
}
