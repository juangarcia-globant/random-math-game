import { render, screen } from "@testing-library/react"
import { PlayerProvider } from "../context/PlayerContext";
import { Start } from "./Start";

describe("<Start />", () => {
  test("Matches the snapshot", () => {
    const { asFragment } = render(
      <PlayerProvider>
        <Start onClick={() => {}} />
      </PlayerProvider>
    );
    expect(asFragment()).toMatchSnapshot()
  });

  test("Start container should be rendered", () => {
    render(
      <PlayerProvider>
        <Start onClick={() => {}} />
      </PlayerProvider>
    );
    expect(screen.getByText('Insert your username')).toBeInTheDocument();
    expect(screen.getByText('Then press to start the game')).toBeInTheDocument();
    expect(screen.getByText('Start')).toBeInTheDocument();
  });
});