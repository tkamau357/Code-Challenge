// Get input from the user
const basicSalary = Number(prompt("Enter your basic salary: "));
const benefits = Number(prompt("Enter your benefits: "));

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate payee (tax)
let payee = 0;
if (grossSalary <= 24000) {
payee = 0;
} else if (grossSalary <= 40000) {
payee = (grossSalary - 24000) * 0.1;
} else if (grossSalary <= 80000) {
payee = (grossSalary - 40000) * 0.2 + 1600;
} else if (grossSalary <= 120000) {
payee = (grossSalary - 80000) * 0.25 + 8800;
} else {
payee = (grossSalary - 120000) * 0.3 + 18400;
}

// Calculate NHIF deductions
let nhifDeductions = 0;
if (grossSalary <= 6000) {
nhifDeductions = 150;
} else if (grossSalary <= 8000) {
nhifDeductions = 300;
} else if (grossSalary <= 12000) {
nhifDeductions = 400;
} else if (grossSalary <= 15000) {
nhifDeductions = 500;
} else if (grossSalary <= 20000) {
nhifDeductions = 600;
} else if (grossSalary <= 25000) {
nhifDeductions = 750;
} else if (grossSalary <= 30000) {
nhifDeductions = 850;
} else if (grossSalary <= 35000) {
nhifDeductions = 900;
} else if (grossSalary <= 40000) {
nhifDeductions = 950;
} else {
nhifDeductions = 1000;
}

// Calculate NSSF deductions
const nssfDeductions = Math.min(0.06 * basicSalary, 2160);

// Calculate net salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Display the results to the user
console.log(`Gross Salary: Ksh ${grossSalary}`);
console.log(`Payee (Tax): Ksh ${payee}`);
console.log(`NHIF Deductions: Ksh ${nhifDeductions}`);
console.log(`NSSF Deductions: Ksh ${nssfDeductions}`);
console.log(`Net Salary: Ksh ${netSalary}`);