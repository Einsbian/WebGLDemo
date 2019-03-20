class Animal  {
  type = 'animal';
  constructor(){
    if(new.target === Animal) {
      throw new Error('抽象类不能实例化!');
    }
  }
  move(){
    console.log('animal can move')
  }
  eat(){
    console.log('animal can eat')
  }
}

class Dog extends Animal {
  type = 'dog';
  name = '';
  color = '';
  constructor(dogOptions){
    super();
    let { name, color } = dogOptions
    console.log(name, color)
    this.name = name;
    this.color = color
  }
  move(){
    console.log('dog running')
  }
  eat(){
    console.log('dog eat bones')
  }
}

class Cat extends Animal {
  type = 'cat';
  name = '';
  color = '';
  constructor(catOptions){
    super();
    let { name, color } = catOptions
    this.name = name;
    this.color = color
  }
}

let dog1 = new Dog({
  name: 'dog1',
  color: 'waite'
})
let cat1 = new Cat({
  name: 'cat1',
  color: 'black'
})
console.log(dog1)
console.log(cat1)