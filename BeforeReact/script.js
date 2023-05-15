class Person{
  constructor(name,age,gender){
    //state
    this.name=name;
    this.age=age;
    this.gender=gender;
  }
  draw()
  {
  var main=  document.querySelector(".main");
  main.insertAdjacentHTML(
              "beforeend",

            `
            <div class="card">
            <h1>Name : ${this.name}</h1>
            <h1>Age  :  ${this.age}</h1>
            <h1>Gender :${this.gender} </h1>
            </div>
            `
  );
  }
}

var rehab=new Person("Rehab",23,"Female");
rehab.draw();

var Zaki=new Person("Zaki",50,"Male");
Zaki.draw();

var cc={
  walk : function()
    {
      // console.log(this)//cc object
      function m(){
        console.log(this)
      }
      m();
    }
};

cc.walk();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.map((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
