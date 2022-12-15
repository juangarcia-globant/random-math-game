import { renderHook, waitFor } from "@testing-library/react";
import { useCountdown } from "./useCountDown";

describe("useCountdown()", () => {
  test("useCountDown hook needs to return seconds", async () => {
    const { result } = renderHook(() => useCountdown(5));
    
    expect(result.current).toBe(5);

    await waitFor(() => {
      expect(result.current).toBe(3);
    }, {timeout: 3000});
  });
});
