## Задание 1

Напишите реализацию таймера.

Шаг анимации таймера 1 секунда.

Форматирование таймера “hh:mm:ss”.

Например 01:12:59 - один час, 12 минут, 59 секунд.

## Задание 2

Сверстайте страницу по макету.

https://www.figma.com/file/ja6QtJ9gv2JuxSDIAClL1O/Welbex?node-id=0%3A1

---

При выполнении задания 1 в HTML я изменила тип input на number, это решает проблему валидации (т.к. изначально не понятно что делать если введены, например, символы).
Так же добавила автофокус на input для удобства.
Еще хотела обернуть все в форму, чтобы работал submit, но не стала, т.к. в задании говорится что не добавлять новых элементов в верстку.


При выполнении задания 2 я использовала HTML, препрцессор SCSS, методологию БЭМ, сетку Flexbox Grid Pro.
Собирала проект с помощью Parcel.
Использовала принцип Mobile First.
В ходе выполнения работы столкнулась с проблемой: в макете desktop и mobile версиях расхождения в словах
(напр. Благодарственные письма -> Благодарность клиентов), а так же расхождения в порядке перечисления и на главной стринице, и в футере.
В такой ситуации я бы уточнила у дизайнера или тимлида ошибка ли это или так и было задумано.

---

В ответ отправьте ссылку на ваш код в GitHub.