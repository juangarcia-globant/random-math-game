import { render, screen } from '@testing-library/react';
import Timmer from './Timmer';

describe("<Timmer />", () => {
  test("Matches the snapshot", () => {
    const { asFragment } = render(<Timmer seconds={10} />);
    expect(asFragment()).toMatchSnapshot()
  });

  test("Seconds should be rendered", () => {
    render(<Timmer seconds={20} />);
    expect(screen.getByText(20)).toBeInTheDocument();
  });
});