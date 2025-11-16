// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    let undef;
    let boolean = true;
    let str = 'мяу';
    let num = 9;
    let ob = {name: "Мурка", age:2};
    // 1.2 Выведите типы всех переменных
    console.log(typeof undef);
    console.log(typeof boolean);
    console.log(typeof str);
    console.log(typeof num);
    console.log(typeof ob);
}

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    const allStudents = 24;
    if (!Number.isInteger(number) || isNaN(number) || !Number.isInteger(lab) || isNaN(lab)) {
        return "Номер студента и номер лабораторной работы должны быть целыми числами";
    }
    if (lab < 1 || lab > 8) {
        return "Лаб всего 8, выберите от 1 до 8";
    }
    if (number < 1 || number > allStudents) {
        return "Студентов 24,выберите от 1 до 24";
    }
    return ((number + lab - 1) % allStudents) + 1
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов

    const allStudents = 24;
    if (!Number.isInteger(number) || isNaN(number) || !Number.isInteger(variants) || isNaN(variants)) {
        return "Номер и вариант должны быть целыми числами";
    }
    if (number < 1 || number > allStudents) {
        return "Студентов 24,выберите от 1 до 24";
    }
    if (variants < 1){
        return "Вариантов не может быть меньше 1"
    }
    return ((number - 1) % variants) + 1;
}
function calculate(a, b, operation) {
    if (isNaN(a) || isNaN(b)) {
        return "Введите числа";
    }

    if (operation === '+') {
        return a + b;
    }
    if (operation === '-') {
        return a - b;
    }
    if (operation === '*') {
        return a * b;
    }
    if (operation === '/') {
        if (b === 0) {
            return "На ноль не делят";
        }
        return a / b;
    }

    return "Такой операции нет в моем калькуляторе";
}
function calculateArea(figure, a, b, c) {
    if (isNaN(a) || (b !== undefined && isNaN(b)) || (c !== undefined && isNaN(c))) {
        return 'Ошибка: параметры должны быть числами';
    }

    switch (figure) {
        case 'circle':
            if (a <= 0) {
                return "Радиус должен быть положительный";
            }
            return 3.14 * a ** 2; 

        case 'rectangle':
            if (a <= 0 || b <= 0) {
                return "Стороны прямоугольника должны быть положительными";
            }
            return a * b;

        case 'triangle':
            if (a + b <= c || a + c <= b || b + c <= a) {
                return "Стороны не образуют треугольник";
            }

            const p = (a + b + c) / 2;
            return Math.sqrt(p * (p - a) * (p - b) * (p - c));

        default:
            return 'Неизвестная фигура';
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    if (typeof str !== 'string') {
        return "Должно быть строкой";
    }
    return str.split('').reverse().join('');
};

const getRandomNumber = (min, max) => {
    if (typeof min !== 'number' || typeof max !== 'number' || isNaN(min) || isNaN(max)) {
        return "Должны быть числами";
    }
    if (min > max) {
        return "Min должен быть меньше или равен max";
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    name: "Убийство в восточном экспрессе",
    author: "Агата Кристи",
    year: 1934,
    numberOfPages: 320,
    availability: true,
   getInfo: function() {
        return `${this.name} — ${this.author}, ${this.year} год, ${this.numberOfPages} стр. Доступна: ${this.availability ? "да" : "нет"}`;
    },
    
    toggleAvailability: function() {
        this.availability = !this.availability;
        return this.availability;
    }
};
const student = {
    // 3.2 Реализуйте методы объекта "студент" 
    name: "Анна Петрова",
    age: 20,
    course: 2,
    grades: {
        math: 90,
        programming: 95,
        history: 85
    },
    
    // Метод для расчета среднего балла
    getAverageGrade() {
        const values = Object.values(this.grades);
        if (values.length === 0) return 0;
        const sum = values.reduce((acc, val) => acc + val, 0);
        return Number((sum / values.length).toFixed(2));
    },
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        if (typeof subject !== "string" || subject.trim() === "") {
            return "Предмет должен быть непустой строкой";
        }
        if (typeof grade !== "number" || grade < 0 || grade > 100) {
            return "Оценка должна быть числом от 0 до 100";
        }
        this.grades[subject] = grade;
    }
};

// ===== ЗАДАНИЕ 4: Массивы =====
function processArrays() {
    const numbers = [12, 45, 23, 67, 34, 89, 56, 91, 27, 14];
    const words = ["JavaScript", "программирование", "массив", "функция", "объект"];
    const users = [
        { id: 1, name: "Анна", age: 25, isActive: true },
        { id: 2, name: "Борис", age: 30, isActive: false },
        { id: 3, name: "Виктория", age: 22, isActive: true },
        { id: 4, name: "Григорий", age: 35, isActive: true },
        { id: 5, name: "Дарья", age: 28, isActive: false }
    ];
    
    // 1. Используйте forEach для вывода всех чисел больше 50
        numbers.forEach(num => {
            if (num > 50) {
                console.log("Число больше 50:", num);
            }
        });

    // 2. Используйте map для создания массива квадратов чисел

        const squares = numbers.map(function (number) 
        {return number * number})
        console.log("Массив квадратов чисел: " , squares)

    // 3. Используйте filter для получения активных пользователей
    /*const activeUsers =  ваш код */

        const activeUsers = users.filter(function (user) {
             return user.isActive
            })
        console.log(activeUsers)

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    /*const victoria =  ваш код */
    const victoria = users.find(function (user) {
        return user.name === "Виктория";
        });
    console.log(victoria)
    // 5. Используйте reduce для подсчета суммы всех чисел
    /*const sum =  ваш код */
        const sum = numbers.reduce(function (currentSum, currentNumber) {
            return currentSum + currentNumber
            }, 0)
    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    /*const sortedByAge =  ваш код */

    const sortedByAge  = (a, b) => b.age - a.age
    users.sort(sortedByAge)
    console.log("По убыванию " , users)

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults = users.every(function (user) {
        return user.age > 18;
    });
    console.log("18+: " + allAdults)
    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    /*const activeUserNames =  ваш код */
    const activeUserNames = users.filter(user => user.isActive).map(user => user.name).sort();
    console.log("№8: " , activeUserNames);
}

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],
    
    addTask(title, priority = "medium") {
        // 5.1 Добавление задачи
        const nextId = this.tasks.length + 1;
        this.tasks.push({
            id: nextId,
            title,
            completed: false,
            priority
        });
    },
    
    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    },

    // Удаление задачи
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        return this.tasks.filter(task => task.completed === completed);
    },
    
    getStats() {
              
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const pending = total - completed;
        const completionRate = total > 0 ? (completed / total * 100).toFixed(2) : 0;
        return { total, completed, pending, completionRate };
    }
};


// ===== ЗАДАНИЕ 6: Регулярные выражения =====
/*
Дополнительные материалы:
https://regex101.com/ - интерактивный тестер regex
MDN Regular Expressions - https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions
Learn Regex - https://github.com/ziishaned/learn-regex - учебник по regex
 
Задание (по вариантам):
1. Изучите функции с регулярными выражениями по своему варианту
На защите вы должны суметь объяснить структуру регулярного выражения.
2. Напишите тесты, покрывающие все различные варианты. Обратите внимание тесты должны обеспечивать полное покрытие, но не быть дублирующимися.
3. Если предложенное регулярное выражение некорректно, вы можете исправить его.

Вычисление своего варианта:
Номер варианта = Ваш номер % Общее количество вариантов
 */

/**
 * Вариант 1: Валидация email адреса
 * Правила:
 * - Латиница, цифры, спецсимволы: ._%+-
 * - Обязательный символ @
 * - Доменная часть: латиница, цифры, точка
 * - Минимальная длина 5 символов
 */
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

/**
 * Вариант 2: Валидация пароля
 * Правила:
 * - Минимум 8 символов
 * - Хотя бы одна заглавная буква
 * - Хотя бы одна строчная буква  
 * - Хотя бы одна цифра
 * - Хотя бы один специальный символ: !@#$%^&*()
 */
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordRegex.test(password);
}

/**
 * Вариант 3: Валидация номера телефона (российский формат)
 * Поддерживает форматы:
 * - +7 (999) 123-45-67
 * - 8 (999) 123-45-67  
 * - 89991234567
 * - +7(999)123-45-67
 */
function validatePhone(phone) {
    const phoneRegex = /^(\+7|8)[\s(-]?\d{3}[\s)-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    return phoneRegex.test(phone);
}

/**
 * Вариант 4: Валидация даты в формате DD.MM.YYYY
 * Правила:
 * - День: 01-31
 * - Месяц: 01-12
 * - Год: 1900-2099
 */
function validateDate(date) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    return dateRegex.test(date);
}

// Бонус: выполните все остальные варианты. Выполнение бонуса не учитывается в итоговой оценке.


// ===== ТЕСТИРОВАНИЕ =====

function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");
    //Задание 1
    console.log("Задание 1");
    simpleTask();
    // Задание 2
    //2.1
    console.assert(getReviewerNumber(5, 1) === 6, "5 + 1 → 6");
    console.assert(getReviewerNumber(24, 8) === 8, "24 + 8 → 8");
    console.assert(getReviewerNumber(1, 1) === 2, "1 + 1 → 2");
    console.assert(typeof getReviewerNumber(5, "abc") === "string", "Некорректный lab → строка-ошибка");
    console.assert(getReviewerNumber(25, 1).includes("Студентов 24"), "Номер студента >24");
     //2.2
    console.assert(getVariant(1, 10) === 1, "Студент 1, 10 вариантов → 1");
    console.assert(getVariant(10, 10) === 10, "Студент 10 → 10");
    console.assert(getVariant(11, 10) === 1, "Студент 11 → 1");
    console.assert(getVariant(24, 5) === 4, "24 % 5 + 1 = 4");
     //2.3
    console.assert(calculate(10, 5, "+") === 15, "+");
    console.assert(calculate(10, 5, "-") === 5, "-");
    console.assert(calculate(10, 5, "*") === 50, "*");
    console.assert(calculate(10, 5, "/") === 2, "/");
    console.assert(calculate(10, 0, "/").includes("На ноль"), "Деление на 0");
    console.assert(calculate(10, 5, "%").includes("Такой операции"), "Неизвестная операция");
    console.assert(calculate("a", 5, "+").includes("Введите числа"), "Не числа");
     //2.4
    console.assert(calculateArea("circle", 5) === 3.14 * 25, "Площадь круга r=5");
    console.assert(calculateArea("rectangle", 4, 5) === 20, "Прямоугольник 4×5");
    console.assert(calculateArea("triangle", 3, 4, 5) === 6, "Треугольник 3-4-5");
    console.assert(calculateArea("triangle", 5, 5, 5) === 10.825317547305483, "Равносторонний 5-5-5");
    console.assert(calculateArea("triangle", 1, 1, 3).includes("не образуют"), "Не треугольник");
    console.assert(calculateArea("square", 10).includes("Неизвестная"), "Неизвестная фигура");
    console.assert(calculateArea("circle", -1).includes("положительный"), "Отрицательный радиус");
     //2.5
    console.assert(reverseString("мяу") === "уям", "reverseString");
    console.assert(reverseString("radar") === "radar", "палиндром");
    console.assert(typeof reverseString(123) === "string", "не строка → ошибка");
    const rnd = getRandomNumber(1, 10);
    console.assert(rnd >= 1 && rnd <= 10 && Number.isInteger(rnd), "getRandomNumber 1-10 в диапазоне");
    console.assert(typeof getRandomNumber("a", 10) === "string", "не числа → ошибка");

    // Задание 3
     //3.1
    console.assert(book.availability === true, "Изначально доступна"); 
    console.assert(book.getInfo().includes("Убийство в восточном экспрессе"), "getInfo правильный текст");
    book.toggleAvailability();
    console.assert(book.availability === false, "toggleAvailability переключает");
    book.toggleAvailability();
    console.assert(book.availability === true, "toggle обратно");

     //3.2
    student.addGrade("physics", 88);
    console.assert(student.grades.physics === 88, "addGrade добавляет предмет");
    console.assert(student.getAverageGrade() === 89.5, "Средний балл (90+95+85+88)/4");    
  

    //Задание 4
    console.log("Задание 4")
    processArrays();


    //Задание №5
    // 5.2
    console.log("Тест 5.2: изменение статуса задачи (completeTask)");
    taskManager.completeTask(3);
    console.log("Текущее состояние списка задач:");
    console.log(taskManager.tasks);
    console.log("Проверка: значение completed у задачи с id=3 должно быть изменено.");
    console.log();

    // 5.3
    console.log("Тест 5.3: удаление задачи (deleteTask)");
    taskManager.deleteTask(3);
    console.log("Список задач после удаления id=3:");
    console.log(taskManager.tasks);
    console.log("Проверка: задача с id=3 должна отсутствовать в массиве.");
    console.log();

    // 5.4
    console.log("Тест 5.4: получение списка задач по статусу (getTasksByStatus)");
    const doneList = taskManager.getTasksByStatus(true);
    console.log("Задачи со статусом completed=true:");
    console.log(doneList);
    console.log("Проверка: возвращены только завершённые задачи.");
    console.log();
    //5.5
    console.log("Тест 5.5: получение статистики (getStats)");
    const taskStats = taskManager.getStats();
    console.log("Статистические данные:");
    console.log(taskStats);
    console.log("Проверка: объект должен содержать поля total, completed, pending, completionRate.");
    console.log();
    //Задание 6
    //6.2
    console.assert(validatePassword("A1a!123") === false, "Пароль из 7 символов должен быть отклонён");
    console.assert(validatePassword("Aa1!1234") === true, "Минимальный валидный пароль (8 символов) должен пройти");
    console.assert(validatePassword("Aa1!1234567890") === true, "Длинный пароль должен пройти");
    console.assert(validatePassword("A1!12345") === false, "Пароль без строчных букв должен быть отклонён");
    console.assert(validatePassword("a1!bcdefg") === false, "Пароль без заглавных букв должен быть отклонён");
    console.assert(validatePassword("Aa!bcdefG") === false, "Пароль без цифр должен быть отклонён");
    console.assert(validatePassword("Aa1bcdefGHI") === false, "Пароль без спецсимвола должен быть отклонён");
    console.assert(validatePassword("Aa1№bcdef") === false, "Пароль с запрещённым спецсимволом (№) должен быть отклонён");
    console.assert(validatePassword("Aa1!bc def") === false, "Пароль с пробелом должен быть отклонён");
    console.assert(validatePassword("") === false, "Пустой пароль должен быть отклонён");
    console.assert(validatePassword("111!!!@@@") === false, "Пароль без букв должен быть отклонён");
    console.assert(validatePassword("PASSWORD") === false, "Пароль из одних заглавных букв должен быть отклонён");
    console.assert(validatePassword("password") === false, "Пароль из одних строчных букв должен быть отклонён");
    console.assert(validatePassword("Aa1!(test)") === true, "Пароль со скобками () должен пройти");
    console.assert(validatePassword("AAAa111!") === true, "Пароль с повторяющимися символами должен пройти");
    console.assert(validatePassword("A1a!@#%^&*()Bb2") === true, "Пароль со всеми разрешёнными спецсимволами должен пройти");
    //6.4
    console.assert(validateDate("01.01.1900") === true, "Минимально допустимая дата");
    console.assert(validateDate("31.12.2099") === true, "Максимально допустимая дата");
    console.assert(validateDate("15.05.2024") === true, "Обычная валидная дата");
    console.assert(validateDate("00.01.2020") === false, "День 00 невозможен");
    console.assert(validateDate("32.01.2020") === false, "День 32 невозможен");
    console.assert(validateDate("10.00.2020") === false, "Месяц 00 невозможен");
    console.assert(validateDate("10.13.2020") === false, "Месяц 13 невозможен");
    console.assert(validateDate("10.10.1899") === false, "Год меньше 1900");
    console.assert(validateDate("10.10.2100") === false, "Год больше 2099");
    console.assert(validateDate("1.01.2020") === false, "День без ведущего нуля");
    console.assert(validateDate("01.1.2020") === false, "Месяц без ведущего нуля");
    console.assert(validateDate("01-01-2020") === false, "Неверный разделитель");
    console.assert(validateDate("01/01/2020") === false, "Неверный разделитель /");
    console.assert(validateDate("01.01.20") === false, "Год из 2 цифр");
    console.assert(validateDate("01.01.20200") === false, "Год из 5 цифр");
    console.assert(validateDate("") === false, "Пустая строка недействительна");
    console.assert(validateDate("абвгд") === false, "Строка без цифр недействительна");
    console.assert(validateDate("           ") === false, "Пробелы недействительны");
    console.assert(validateDate(null) === false, "null недействителен");
    console.assert(validateDate(undefined) === false, "undefined недействителен");

    console.log("Все тесты пройдены ");
}

// Запуск тестов
runTests();