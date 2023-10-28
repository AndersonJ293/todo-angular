import { Component } from '@angular/core';
import { Log } from 'src/app/models/log.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent {
  get itemLogs(): Log[] {
    return this.itemService.logs;
  }

  set itemLogs(logs: Log[]) {
    this.itemService.logs = logs;
  }

  constructor(private itemService: ItemService) {}
}
