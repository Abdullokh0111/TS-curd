interface inter {
  readonly id: number;
  name: string;
  age: number;
}

class User implements inter {
  id: number;
  public name: string;
  age: number;
  constructor(name: string, age: number) {
    this.id = Math.floor(Math.random() * 100);
    this.name = name;
    this.age = age;
  }
}
