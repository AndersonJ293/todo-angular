import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {
  filter: string[] = ['Planejado', 'Em Andamento', 'Concluido'];

  getSelectedFilter(filter: string[]) {
    this.filter = filter;
  }
}
