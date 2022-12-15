import { generateProblem, compare } from './math';

describe("Math utils", ()=> {
  test('Generate a random problem', () => {
    const problem = generateProblem();
    expect(problem.length).toBeLessThanOrEqual(10);
    expect(problem).not.toBeNaN();
  });

  test('Return the value of an valid math operation', () => {
    const expression = generateProblem(100);
    expect(
      typeof Number(generateProblem(eval(expression)))
    ).toBe("number");
  });

  test('Compare the expression generated with another value', () => {
    const expression = generateProblem(1000);
    const result = Number(eval(expression));
    expect(compare(expression, result)).toBe(true);
    expect(compare(expression, 1111111111)).toBe(false)
  });
});
