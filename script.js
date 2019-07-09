'use strict';
let budget;
let yourDate;


var appData = {
    budgetData: budget,
    timeData: yourDate,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: true
}
+prompt("Ваш бюджет на месяц", budget);
prompt("Введите дату в формате YYYY-MM-DD", yourDate);
prompt("Введите обязательную статью расходов в этом месяце",first);
prompt("Во сколько обойдется", second);

appData.expenses = {first:second};
alert(budget/30);
