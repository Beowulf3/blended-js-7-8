// -------------------- Task 1 --------------------------
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

//1
const body = document.querySelector("body");
console.log(body);
//2
const title = document.querySelector("#title");
console.log(title);
//3
const list = document.querySelector(".list");
console.log(list);
//4
const dataTopic = document.querySelectorAll("[data-topic]");
console.log(dataTopic);
//5
const firstTopic = dataTopic[0];
console.log(firstTopic);
//6
const lastTopic = dataTopic[dataTopic.length - 1];
console.log(lastTopic);
//7
const prevEl = title.previousElementSibling;
console.log(`previous element: ${prevEl}`);
const nextEl = title.nextElementSibling;
console.log(nextEl);
//8
const subtitle = document.querySelectorAll("h3");
console.log(subtitle);
//9
subtitle.forEach((item) => item.classList.add("active"));
//10
const navItem = document.querySelector('li[data-topic="navigation"]');
console.log(navItem);
//11
navItem.style.backgroundColor = "yellow";
//12
navItem.querySelector("p").textContent = "Я змінив тут текст!";
//13
const currentTopic = "manipulation";
const currEl = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(currEl);
//14
currEl.style.backgroundColor = "deepskyblue";
//15
const heading = document.querySelector(".completed");
console.log(heading);
//16
const parent = heading.parentElement;
parent.remove();
// //17
const text = "Об'єктна модель документа (Document Object Model)";
title.insertAdjacentHTML("afterend", text);
//18
const newItem = document.createElement("li");
const newTitle = document.createElement("h3");
newTitle.textContent = "Властивість innerHTML";
const newText = document.createElement("p");
newText.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";
newItem.appendChild(newTitle);
newItem.appendChild(newText);
list.append(newItem);
//19
const markup = `
    <li data-topic="navigation">
        <h3>Властивість innerHTML</h3>
        <p>
            Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
            використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
        </p>
    </li>
`;
list.insertAdjacentHTML("beforeend", markup);
//20
list.innerHTML = "";

// -------------------- Task 2 --------------------------
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const container = document.querySelector(".container");
const numContainer = document.createElement("div");
numContainer.classList.add("number-container");
container.append(numContainer);
let block = "";
for (let i = 0; i < 100; i++) {
  const num = randomNumber();
  const classOdd = num % 2 === 0 ? "even" : "odd";
  block += `<div class="number ${classOdd}">${num}</div>`;
}
numContainer.insertAdjacentHTML("beforeend", block);

// -------------------- Task 3 --------------------------
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const output = document.querySelector(".js-username-output");
const userName = document.querySelector(".js-username-input");
userName.addEventListener("input", (event) => {
  const name = event.target.value.trim();
  event.target.classList.add("error");
  if (name.length > 6) {
    event.target.classList.add("success");
    event.target.classList.toggle("error");
  }
  if (!name) {
    output.textContent = "Anonymous";
  } else {
    output.textContent = name;
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

userName.addEventListener("focus", (event) => {
  if (!event.target.value) {
    event.target.style.outline = `3px solid red`;
  } else {
    event.target.style.outline = `3px solid green`;
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

userName.addEventListener("blur", (event) => {
  if (!event.target.value) {
    event.target.style.outline = `3px solid red`;
  } else {
    event.target.style.outline = `3px solid lime`;
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".js-contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    !event.target.elements["userName"] ||
    !event.target.elements["accept"].checked
  ) {
    alert("Input and checkbox should not be empty!");
  } else {
    const userInfo = event.target.elements["userName"].value;
    console.log({ userInfo });
    form.reset();
  }
});

// -------------------- Task 4 --------------------------
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const square = document.querySelector(".box");
const increase = document.querySelector(".js-increase");
const decrease = document.querySelector(".js-decrease");

increase.addEventListener("click", (event) => {
  const squareW = window.getComputedStyle(square).width;
  const newWidth = Number.parseFloat(squareW) + 20;
  square.style.width = `${newWidth}px`;
  square.style.height = `${newWidth}px`;
});
decrease.addEventListener("click", (event) => {
  const squareW = window.getComputedStyle(square).width;
  if (Number.parseFloat(squareW) > 19) {
    const newWidth = Number.parseFloat(squareW) - 20;
    square.style.width = `${newWidth}px`;
    square.style.height = `${newWidth}px`;
  }
  return;
});
