// there is no private props in class, we user functions here

let _instance = null;

class SingleObject {
  constructor(value) {
    this.value = value;
  }
}

class SingleObjectDemo {
  constructor() {
    _instance = _instance ? _instance : new SingleObject();
    this._instance;
  }
  getInstance() {
    return this._instance;
  }
}

const runDemo = () => {
  const instance_1 = (new SingleObjectDemo()).getInstance();
  const instance_2 = new SingleObjectDemo().getInstance();

  console.log('the same instance ?',instance_1 === instance_2);
}
runDemo();