// .sort - сортировка. Если нужно установить свой порядок - вводим перед массивом функцию и задаем ей параметры. Пример: 
//  function compareNumeric(a, b) {
//    if (a > b) return 1;
//    if (a < b) return -1;
//  }


function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

let salaries = [1700, 2000, 1560, 2300, 1920, 1400];

//salaries.sort(compareNumeric);
var positiveSalaries = salaries.filter(function(number) {
return number > 1450;
});
