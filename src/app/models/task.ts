export class Task {
  id: string;
  title: string;
  description: string;
  expectedConclusion: string;
  createdAt: string;
  price: string;
  status: string;

  constructor(
    title: string,
    description: string,
    expectedConclusion: string,
    price: string
  ) {
    this.id = '1';
    this.title = title;
    this.description = description;
    this.expectedConclusion = expectedConclusion;
    this.createdAt = new Date().toLocaleString('pt-BR');
    this.price = price;
    this.status = 'Planejado';
  }

  generateRandomId() {
    const maxId = 1000000000;
    return ((Math.random() * maxId) | 0).toString(36);
  }
}
