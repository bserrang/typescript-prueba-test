// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Pru{
  x:string;
  public static y = 5;

  constructor(x:string){
    this.x = x;
  }
  show(){
    console.log(this.x);
  }
}

let a = new Pru('dddd');
a.show();
Pru.y = 30;
console.log(Pru.y);