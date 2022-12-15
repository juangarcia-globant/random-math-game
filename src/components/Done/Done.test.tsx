import { render, screen } from "@testing-library/react";
import { PlayerProvider } from "../../context/PlayerContext";
import Done from "./Done";

describe("<Done />", () => {
  test("Matches the snapshot", () => {
    const { asFragment } = render(
      <PlayerProvider>
        <Done message="Game over" onClick={() => {}} />
      </PlayerProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render GAME OVER text", () => {
    render(
      <PlayerProvider>
        <Done message="Game over" onClick={() => {}} />
      </PlayerProvider>
    );

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(` Game over `)
    expect(screen.getByRole('button', { name: "Play Again" })).toBeInTheDocument();
  });
});
