import inquirer from "inquirer";
// Function to perform calculations
function performCalculation(operator, operand1, operand2) {
    switch (operator) {
        case 'add':
            return operand1 + operand2;
        case 'subtract':
            return operand1 - operand2;
        case 'multiply':
            return operand1 * operand2;
        case 'divide':
            return operand2 !== 0 ? operand1 / operand2 : NaN;
        default:
            throw new Error('Invalid operator');
    }
}
// Function to prompt the user for input
async function getUserInput() {
    const questions = [
        {
            type: 'input',
            name: 'operand1',
            message: 'Enter the first number:',
            validate: (input) => !isNaN(parseFloat(input)),
        },
        {
            type: 'input',
            name: 'operand2',
            message: 'Enter the second number:',
            validate: (input) => !isNaN(parseFloat(input)),
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Select the operation:',
            choices: ['add', 'subtract', 'multiply', 'divide'],
        },
    ];
    const answers = await inquirer.prompt(questions);
    const result = performCalculation(answers.operator, parseFloat(answers.operand1), parseFloat(answers.operand2));
    console.log(`Result: ${result}`);
}
// Call the function to initiate the prompt
getUserInput();
