export class Log {
  user: string;
  taskName: string;
  clickDate: string;

  constructor(taskName: string) {
    this.user = 'Usuario';
    this.taskName = taskName;
    this.clickDate = new Date().toLocaleString('pt-BR');
  }
}
