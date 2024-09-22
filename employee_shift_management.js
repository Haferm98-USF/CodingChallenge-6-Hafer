// Task 1: Create an Employees Array of Employee Objects

let employees = 
[
    {name: Morgan, shifts: [{day: 'Monday', hours: 6}, {day: 'Friday', hours: 10}]},
    {name: Matthew, shifts: [{day: 'Tuesday', hours: 6}, {day: 'Saturday', hours: 10}]},
    {name: Elton, shifts: [{day: 'Wednesday', hours: 6}, {day: 'Sunday', hours: 10}]},
    {name: Amelia, shifts: [{day: 'Thursday', hours: 6}, {day: 'Wednesday', hours: 10}]}, 
];

//Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts (employee)
{
    employee.shifts.forEach((shift) => {console.log('${employee.name} Schedule: ${shift.day}, Hours: ${shift.hours}')});
};

//Task 3: Create a Function to Assign a New Shift

function assignShift (employee, day, hours)
{
    const employee = employees.find((employee) => employee.name === employeeName);

    const scheduledAlready = employee.shifts.some((shift) => shift.day === day);
        if (scheduledAlready)
            {
            console.log('Employee already scheduled for this day');
            }
        else 
            {
            employee.shifts.push({day, hours});
            }
};

//Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours (employee)
{
    const employee = employees.find((employee) => employee.name === employeeName);
    let totalHours = 0
    totalHours = employee.shifts.reduce((total,shift) => total + shift.hours);
    console.log('This employee worked ${totalHours} this week');
};

//Task 5: Create a Function to List Employees with Free Days

function listAvailableEmployees (day)
{
    let freeEmployee = employee.find((employee) => shift.day != day);
    console.log(employee.name);
};