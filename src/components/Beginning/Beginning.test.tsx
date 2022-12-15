import { render, screen, waitFor } from "@testing-library/react"
import { Beginning } from ".";

describe("<Beginning />", () => {
  test("Matches the snapshot", () => {
    const { asFragment } = render(<Beginning time={3} setBeginningDone={() => {}} />);
    expect(asFragment()).toMatchSnapshot()
  });

  test("The beginning component should be render", async () => {
    render(<Beginning time={3} setBeginningDone={() => {}} />);
    const getReadyMsg = screen.getByRole('heading', { level:3 });
    expect(getReadyMsg).toBeInTheDocument();
  });

  test("The numbers should be counting down", async () => {
    render(<Beginning time={3} setBeginningDone={() => {}} />);
    const countingDown = screen.getByRole('heading', { level: 1 });
    await waitFor(() => {
      expect(Number(countingDown.innerHTML)).toBe(2);
    }, {timeout: 1000});

    await waitFor(() => {
      expect(Number(countingDown.innerHTML)).toBe(1);
    }, {timeout: 2000});
  });

  test("mockSetBeginning function should be execute after 3 seconds", async () => {
    const mockSetBeginning = jest.fn(x => {});
    render(<Beginning time={3} setBeginningDone={mockSetBeginning} />);
    await waitFor(() => {
      expect(mockSetBeginning).toHaveBeenCalledTimes(1);
    }, {timeout: 4000})
  });
});