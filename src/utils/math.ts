/**
 * Get a random math symbol
 */
const getRandomSymbol = () => {
  const symbols = ["+", "-", "/", "*", "+", "-"]; // Adding other "+" and "-" to increse the posibilities
  var max = symbols.length - 1;
  var random = Math.round(Math.random() * max);
  return symbols[random];
}

/**
 * Get a random number from zero to range parameter. range default 10
 * 
 * @param {number} range 
 */
const getRandomNumber = (range?: number) => {
  return (Math.random() * (range || 10)).toFixed();
}

/**
 * Return math expression
 * 
 * @param {number} range
 */
export const generateProblem = (range?: number) => {
  let firstNumber =  getRandomNumber(range);
  let secondNumber = getRandomNumber(range) || 1;
  let symbol = getRandomSymbol();

  const problem = `${firstNumber} ${symbol} ${secondNumber}`;

  return problem;
};

/**
 * Evaluate the math expression
 * 
 * @param {string} expression 
 * @param {number} value 
 */
export const compare = (expression: string, value: number) => eval(expression) === value;
