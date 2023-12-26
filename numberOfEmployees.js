var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.filter(el=>el>=target).length
};
console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2],6))