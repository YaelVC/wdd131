const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for
for (let i = 0; i < studentReport.length; i++) { 
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }    
}

// while
let j = 0;
while (j < studentReport.length) {
    if (studentReport[j] < LIMIT) {
        console.log(studentReport[j]);
    }
    j++;
}

// forEach
studentReport.forEach(function(score) {
    if (score < LIMIT) {
        console.log(score);
    }   
});

// for...in
for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}