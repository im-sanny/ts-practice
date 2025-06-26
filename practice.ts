let message: string = 'Hello world!';
let age: number = 24;
let job: boolean = false;
let data: any = 'could be anything';
let skills: string[] = ['html', 'css', 'js'];
let numbers: number[] = [1, 2, 3, 4, 5];
let user: [string, number] = ['sanny', 24];
function logMessage(message: string): void {
  console.log(message);
}
let emptyValue: null = null;
let notAssigned: undefined = undefined;

//union 
let id: string | number;
id = 'Hello';
number = 123;

//literal
let role: 'admin' | 'user' | 'guest';
role = 'admin'
role = 'user';


