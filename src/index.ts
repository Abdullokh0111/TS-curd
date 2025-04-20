//  1 - Topshiriq:

type productType = {
  readonly id: number;
  name: string;
  price: number;
};

let Book: productType = {
  id: 34,
  name: "Ming bir kecha",
  price: 40.0,
};

let pen: productType = {
  id: 86,
  name: "najot",
  price: 4.0,
};

console.log(Book, pen);

//----------------------------------------------------------

//  2 - Topshiriq:

function greet(name: string): void {
  console.log(`Salom, ${name}`);
}

greet("Abdullokh");
