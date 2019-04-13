'use strict';

/*
Ответы на вопросы:
1. 6
2. console.log();
3. || - или, && - и
*/

var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    exp1 = prompt("Введите обязательную статью расходов в этом месяце"),
    total1 = prompt("Во сколько обойдется?"),
    exp2 = prompt("Введите обязательную статью расходов в этом месяце"),
    total2 = prompt("Во сколько обойдется?"),
    income=[];
var expenses = {
        exp1: total1,
        exp2: total2
    };

var appData = {
    money: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: "",
    income:"",
    savings: false
}
var alert_total = parseInt(expenses.exp1) + parseInt(expenses.exp2),
    alert_total1 = alert_total/30,
    alert_total2 = money/30 - alert_total1;

alert("Ваш бюджет на 1 день: " + alert_total2);
