# JsLearn
## Переменные
```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```
Преимущества:

> COLOR_ORANGE гораздо легче запомнить, чем "#FF7F00".
> Гораздо легче допустить ошибку при вводе "#FF7F00", чем при вводе COLOR_ORANGE.
> При чтении кода COLOR_ORANGE намного понятнее, чем #FF7F00.

## Ковычки
В JavaScript существует три типа кавычек.

Двойные кавычки: "Привет".
Одинарные кавычки: 'Привет'.
Обратные кавычки: `Привет`.
Двойные или одинарные кавычки являются «простыми», между ними нет разницы в JavaScript.

Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например:
```js
let name = "Иван";

// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3
```
Выражение внутри ${…} вычисляется, и его результат становится частью строки. Мы можем положить туда всё, что угодно: переменную name, или выражение 1 + 2, или что-то более сложное.

Обратите внимание, что это можно делать только в обратных кавычках. Другие кавычки не имеют такой функциональности встраивания!
## Типы данных

В JavaScript есть 8 основных типов данных.

Семь из них называют «примитивными» типами данных:
number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
bigint для целых чисел произвольной длины.
string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
boolean для true/false.
null для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
symbol для уникальных идентификаторов.
И один не является «примитивным» и стоит особняком:
object для более сложных структур данных.
Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

Имеет две формы: typeof x или typeof(x).
Возвращает строку с именем типа. Например, "string".
Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.

## Форма для ввода аля input
```js
let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK
```

> alert
> показывает сообщение.
> prompt
> показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный в поле ввода текст или null, если была нажата кнопка «Отмена» или Esc с > клавиатуры.
> confirm
> показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true, если нажата OK, и false, если нажата кнопка «Отмена» или Esc с клавиатуры.
> Все эти методы являются модальными: останавливают выполнение скриптов и не позволяют пользователю взаимодействовать с остальной частью страницы до тех пор, пока окно > не будет закрыто.

На все указанные методы распространяются два ограничения:

Расположение окон определяется браузером. Обычно окна находятся в центре.
Визуальное отображение окон зависит от браузера, и мы не можем изменить их вид.

## Численное преобразование 
```js
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```
## Логическое преобразование
Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции Boolean(value).

Правило преобразования:

Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
Все остальные значения становятся true.
Например:
```js
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false
```


