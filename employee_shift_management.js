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
