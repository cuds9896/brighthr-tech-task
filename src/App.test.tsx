import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the title", () => {
    render(<App />);
    expect(screen.getByText("BrightHR tech task")).toBeInTheDocument();
  });

  it("renders the table headers", () => {
    render(<App />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Added")).toBeInTheDocument();
  });

  it("renders table rows", () => {
    render(<App />);
    expect(screen.getByText("Cost centres")).toBeInTheDocument();
    expect(screen.getByText("csv")).toBeInTheDocument();
    expect(screen.getByText("2016-08-12")).toBeInTheDocument();
  });
});
