// ES6 Syntax
class Es6 {
  constructor() {
    this.myName = 'Max';
    this.myAge = 78;
  }

  talk1() {
    console.log(`My name is ${this.myName} and my age is ${this.myAge}`)
  }
}

class Es6_v2 extends Es6 {
  constructor() {
    super();
    this.myHight = "5ft 10'";
    this.myWeight = '75kg';
  }

  talk2() {
    console.log(`My name is ${this.myName}, my age is ${this.myAge},
    my height is ${this.myHight} and I weigh ${this.myWeight}`)
  }
}

const talk2 = new Es6;
talk2.talk2();

// ES7 Syntax
class Es7 {
  myName = 'Max';
  myAge = 78;

  talk3 = () => {
    console.log(`My name is ${this.myName} and my age is ${this.myAge}`)
  }
}

class Es7_v2 extends Es7 {
  myHeight = "5ft 10'";
  myWeight = '75kg';

  talk4 = () => {
    console.log(`My name is ${this.myName}, my age is ${this.myAge},
    my height is ${this.myHight} and I weigh ${this.myWeight}`)
  }
}

const talk4 = new Es7;
talk4.talk4();