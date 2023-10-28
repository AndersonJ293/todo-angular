import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-filter-tasks',
  templateUrl: './filter-tasks.component.html',
  styleUrls: ['./filter-tasks.component.scss'],
})
export class FilterTasksComponent {
  @Output() onFilterChange = new EventEmitter<string[]>();

  selectOptions: string[] = ['Todos', 'Planejado', 'Em Andamento', 'Concluido'];
  selected: string = 'Todos';
  filteredOptions: string[] = ['Planejado', 'Em Andamento', 'Concluido'];

  handleFilter(): string[] {
    if (this.selected == 'Todos') {
      this.filteredOptions = ['Planejado', 'Em Andamento', 'Concluido'];
      return this.filteredOptions;
    }
    this.filteredOptions = [this.selected];
    return this.filteredOptions;
  }

  changeSelected() {
    this.onFilterChange.emit(this.handleFilter());
  }
}
