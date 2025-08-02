let text: string = 'hello world!';
let age1: number = 20;
let adult: boolean = true;
let dataType: any = 'write anything here!';
let names: string[] = ['tom', 'jerry', 'butch', 'bulldog'];
let nums: number[] = [1, 2, 3, 4];
let person: [string, number] = ['Sanny', 69];

function hello(message: string): void {
  console.log(message);
}

let empty: null = null;
let und: undefined = undefined;

//union
let id1: string | number;

id1 = 'Dragon';
id1 = 20;

// literal
let role1: 'admin' | 'user' | 'guest';
role1 = 'admin';
role1 = 'user';
