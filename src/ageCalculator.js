

export function calculateAge(birthdate) {
  var currentDate = new Date();
  var birthdateObj = new Date(birthdate);

  var years = currentDate.getFullYear() - birthdateObj.getFullYear();
  var months = currentDate.getMonth() - birthdateObj.getMonth();
  var days = currentDate.getDate() - birthdateObj.getDate();

  // Adjust months and days
  if (days < 0) {
    months--;
    days += daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  
  let resObj = {
    years: years,
    months: months,
    days: days
  }
  return resObj;
}

// Function to get the number of days in a month
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

// // Example usage:
// var birthdate = "2001-12-14"; // Format: "YYYY-MM-DD"
// var age = calculateAge(birthdate);
// console.log(age);
// console.log(age.years) //// YYYY

