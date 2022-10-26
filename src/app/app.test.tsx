import { render } from "@/shared";
import { describe, expect, it } from "vitest";
import { App } from "./app";

describe("App", () => {
  it("should render correctly", () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
