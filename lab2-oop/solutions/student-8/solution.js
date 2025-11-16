'use strict'

// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    // Создайте базовый класс Vehicle.
    // В конструкторе принимайте и сохраняйте в this свойства: 
    static vehicleCount = 0;
    constructor(make, model, year) {
        Vehicle.vehicleCount++;
        this.make = make;
        this.model = model;
        this.year = year;
    }

    static getTotalVehicles() {
        return Vehicle.vehicleCount;
    }

    // Добавьте метод displayInfo(), который выводит в консоль информацию 
    // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
    displayInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}`);
    }


    // Добавьте геттер age, который возвращает возраст транспортного средства 
    // (текущий год минус год выпуска). Используйте new Date().getFullYear().
    get age() {
        return new Date().getFullYear() - this.year;
    }

    // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
    set year(newYear) {
        const currentYear = new Date().getFullYear();
        if (newYear > currentYear) {
            throw new Error("Год выпуска не может быть больше текущего.");
        }
        this._year = newYear;
    }

    // Геттер для года (чтобы получать значение корректно)
    get year() {
        return this._year;
    }

    // Добавьте статический метод compareAge(vehicle1, vehicle2), 
    // который возвращает разницу в возрасте между двумя транспортными средствами.
    static compareAge(vehicle1, vehicle2) {
        return vehicle1.age - vehicle2.age;
    }
}

class Car extends Vehicle {
    // Создайте дочерний класс Car, который наследуется от Vehicle.
    // Добавьте новое свойство numDoors (количество дверей).
    constructor(make, model, year, numDoors) {
        super(make, model, year); 
        this.numDoors = numDoors; 
    }


    // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей. 
    // Используйте super.displayInfo() для вызова метода родителя.
    displayInfo() {
        super.displayInfo();
        console.log(`Количество дверей: ${this.numDoors}`);
    }

    // Добавьте метод honk(), который выводит "Beep beep!".
    honk() {
        console.log("Beep beep!");
    }
}

// ===== ЗАДАНИЕ 3: Класс ElectricCar (наследуется от Car) =====
class ElectricCar extends Car {
    // Создайте дочерний класс ElectricCar, который наследуется от Car.
    // Добавьте новое свойство batteryCapacity (емкость батареи в кВт·ч).
    constructor(make, model, year, numDoors, batteryCapacity) {
        super(make, model, year, numDoors); 
        this.batteryCapacity = batteryCapacity; 
    }

    // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
    displayInfo() {
        super.displayInfo();
        console.log(`Емкость батареи ${this.batteryCapacity}`);
    }

    // Добавьте метод calculateRange(), который рассчитывает примерный запас хода 
    // (предположим, что 1 кВт·ч = 6 км).
    calculateRange() {
        return this.batteryCapacity * 6;
    }
}


// ===== ЗАДАНИЕ 4: Каррирование =====

// Создайте функцию createVehicleFactory, которая возвращает функцию 
// для создания транспортных средств определенного типа (каррирование).
const createVehicleFactory = (vehicleType) => (make, model, year, numDoors, batteryCapacity) => {
    return new vehicleType(make, model, year, numDoors, batteryCapacity);
};



// ===== ЗАДАНИЕ 5: Статические методы и свойства =====
//Сделано, смотреть в задании 1
// Добавьте статическое свойство vehicleCount в класс Vehicle 
// для подсчета количества созданных транспортных средств.
// Модифицируйте конструктор Vehicle для увеличения счетчика
// (добавьте в начало конструктора: Vehicle.vehicleCount++);
// Создайте статический метод getTotalVehicles(), 
// который возвращает общее количество созданных транспортных средств.


// Автоматические тесты
function runTests() {
    console.log('Запуск тестов...');

    // Расширьте тесты для полного покрытия задания.
    
    // Проверка наследования
    const vehicle = new Vehicle('Toyota', 'Camry', 2015);
    vehicle.displayInfo();
    console.log(`Возраст: ${vehicle.age} лет`);

    const car = new Car('Honda', 'Civic', 2018, 4);
    car.displayInfo();
    car.honk();

    const electricCar = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75);
    electricCar.displayInfo();
    console.log(`Запас хода: ${electricCar.calculateRange()} км`);
    
    // Проверка возраста
    const testVehicle = new Vehicle('Test', 'Model', 2010);
    console.assert(testVehicle.age === (new Date().getFullYear() - 2010), 'Тест возраста провален');
    
    const createCarFactory = createVehicleFactory(Car);
    const myNewCar = createCarFactory('BMW', 'X5', 2022);
    console.log('Создан новый автомобиль:');
    myNewCar.displayInfo();
    
    console.log('Всего создано транспортных средств:', Vehicle.getTotalVehicles());

      // Проверка: compareAge — старый транспорт должен быть старше
    const oldCar = new Vehicle("Old", "Car", 2000);
    const newCar = new Vehicle("New", "Car", 2020);
    console.assert(
        Vehicle.compareAge(oldCar, newCar) > 0,
        "Ошибка: compareAge работает неверно"
    );
    console.log(
        `compareAge: '${oldCar.make} ${oldCar.model}' (${oldCar.year}) старше '${newCar.make} ${newCar.model}' (${newCar.year})`
    );

    // Проверка: Car получил numDoors
    const testCar = new Car("VW", "Polo", 2019, 4);
    console.assert(
        testCar.numDoors === 4,
        "Ошибка: numDoors не установлен"
    );
    console.log(
        `Car.numDoors: машина ${testCar.make} ${testCar.model} имеет ${testCar.numDoors} дверей`
    );

    // Проверка: ElectricCar считает запас хода
    const simpleEV = new ElectricCar("Renault", "Zoe", 2021, 4, 52);
    console.assert(
        simpleEV.calculateRange() === 52 * 6,
        "Ошибка: calculateRange работает неверно"
    );
    console.log(
        `ElectricCar.calculateRange: электромобиль ${simpleEV.make} ${simpleEV.model} (${simpleEV.batteryCapacity} кВт·ч) имеет запас хода ${simpleEV.calculateRange()} км`
    );

    // Проверка: фабрика создаёт Car
    const carFactory = createVehicleFactory(Car);
    const carFromFactory = carFactory("Mazda", "3", 2020, 4);
    console.assert(
        carFromFactory instanceof Car,
        "Ошибка: фабрика не создает Car"
    );
    console.log(
        `Фабрика Car создала автомобиль: ${carFromFactory.make} ${carFromFactory.model}, ${carFromFactory.year} год, дверей: ${carFromFactory.numDoors}`
    );

    console.log('Все тесты пройдены! ✅');
}

runTests();

