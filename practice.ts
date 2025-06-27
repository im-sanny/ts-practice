let message: string = 'Hello world!';
let age: number = 24;
let job: boolean = false;
let data: any = 'could be anything';
let skills: string[] = ['html', 'css', 'js'];
let numbers: number[] = [1, 2, 3, 4, 5];
let users: [string, number] = ['sanny', 24];
function logMessage(message: string): void {
  console.log(message);
}
let emptyValue: null = null;
let notAssigned: undefined = undefined;

//union
let id: string | number;
id = 'Hello';
id = 123;

//literal
let role: 'admin' | 'user' | 'guest';
role = 'admin';
role = 'user';

//type alias
type Point = { x: number; y: number };
let position: Point = { x: 2, y: 3 };

//interface
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

let user: User = { name: 'Sanny', age: 69, isAdmin: true };

//enum
enum Status {
  Active,
  Inactive,
  Suspend,
}

let currentStatus: Status = Status.Active;

//function type
function add(a: number, b: number): number {
  return a + b;
}

//optional parameter
function greet(name: string, greetings?: string): string {
  return `${greetings || 'hello'}, ${name} `;
}

//default parameter
function greeting(name: string, greetings: string = 'hi'): string {
  return `${greetings}, ${name}`;
}

//generics
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(123);
let str = identity<string>('hello');
let bool = identity<boolean>(true);

//utility types
//partial
interface Person {
  name: string;
  age: number;
  isAdmin: boolean;
}

let partialUser: Partial<Person> = { name: 'San' };
const readOnlyUser: Readonly<Person> = { name: 'San', age: 69, isAdmin: true };
