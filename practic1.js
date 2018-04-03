function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

let salaries = [1700, 2000, 1560, 2300, 1920, 1400];

salaries.sort(compareNumeric);

