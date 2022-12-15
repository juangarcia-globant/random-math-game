import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe("<Input />", () => {
  test("Matches the snapshot", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Input  should be render", () => {
    render(<Input placeholder='placeholder' error='Error message' hasError={true} />);
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
  });

  test("Error message should be render", () => {
    render(<Input placeholder='placeholder' error='Error message' hasError={true} />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});