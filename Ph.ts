class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

// Derived classes
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! 🐶");
  }
}

class Cat extends Animal {
  makeSound(age:number): void {
    console.log("Meow! 🐱");
  }
}

const newcat = new Cat()
newcat.makeSound()


