import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Document Viewer Application", () => {
  it("renders the title without crashing", () => {
    render(<App />);
    expect(screen.getByText("BrightHR tech task")).toBeInTheDocument();
  });
});
