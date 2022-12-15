import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button';

describe("<Button />", () => {
  test("Matches the snapshot", () => {
    const { asFragment } = render(<Button text="Test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Button should be render", () => {
    render(<Button text="Test" />);
    expect(screen.getByRole('button', { name: "Test" })).toBeInTheDocument();
  });

  test("The function should be executed on click", async () => {
    const func = jest.fn();
    render(<Button text="Test" onClick={func} />);
    fireEvent.click(screen.getByRole('button', { name: "Test" }));
    expect(func).toHaveBeenCalledTimes(1);
  });
});