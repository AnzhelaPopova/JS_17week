class Worker {
    constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
    }
  
    getSalary() {
      return this.rate * this.days;
    }
  }
  const worker = new Worker('Иван', 'Иванов', '10', '31');
  console.log(worker.name); //выведет 'Иван'
  console.log(worker.surname); //выведет 'Иванов'
  console.log(worker.rate); //выведет 10
  console.log(worker.days); //выведет 31
  console.log(worker.getSalary()); //выведет 310 — то есть 10*31

  const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];
  class Transport {
    constructor(type, brand, price) {
      this.type = type;
      this.brand = brand;
      this.price = price;
    }
    getInfo() {
      return {
        type: this.type,
        brand: this.brand
      };
    }
    getPrice() {
      return this.price;
    }
  }
  class Car extends Transport {
    constructor( brand, doors) {
      super('car');
      this.doors = doors;
      this.brand = brand;
    }
    getDoorsCount() {
      return this.doors;
    }
  }
  class Bike extends Transport {
    constructor(brand, maxSpeed) {
      super('bike');
      this.maxSpeed = maxSpeed;
      this.brand = brand;
    }
    getMaxSpeed() {
      return this.maxSpeed;
    }
  }

  console.log ( data.map (vehicle => {
    if(vehicle.type === 'car') {
      return new Car(vehicle.brand, vehicle.doors);
    } else {
      return new Bike(vehicle.brand, vehicle.maxSpeed);
    }
  }));
  
