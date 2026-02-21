import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the title", () => {
    render(<App />);
    expect(screen.getByText("BrightHR tech task")).toBeInTheDocument();
  });

  it("renders the table headers", () => {
    render(<App />);
    expect(screen.getByText("Name ▼")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Added")).toBeInTheDocument();
  });

  it("renders table rows", () => {
    render(<App />);
    const listItems = screen.getAllByRole("row");
    expect(listItems.length).toBeGreaterThan(1); // Ensure there are rows in the table
  });

  it("renders folder names with underline", () => {
    render(<App />);
    const folderRows = screen
      .getAllByRole("row")
      .filter((row) => row.textContent?.includes("folder"));
    folderRows.forEach((row) => {
      expect(row).toHaveClass("underline");
    });
  });

  it("clicks on table headers to sort", () => {
    render(<App />);
    expect(screen.getByText("Name ▼")).toBeInTheDocument();
    const nameHeader = screen.getByText("Name ▼");
    const typeHeader = screen.getByText("Type");
    const addedHeader = screen.getByText("Added");
    fireEvent.click(nameHeader);
    expect(nameHeader).toHaveTextContent("Name ▲");
    fireEvent.click(typeHeader);
    expect(typeHeader).toHaveTextContent("Type ▼");
    fireEvent.click(addedHeader);
    expect(addedHeader).toHaveTextContent("Added ▼");
  });

  it("clicks on folder rows to expand", () => {
    render(<App />);
    const folderRow = screen
      .getAllByRole("row")
      .find((row) => row.textContent?.includes("folder"));
    expect(folderRow).toBeInTheDocument();
    expect(screen.queryByText("Expenses claim form")).not.toBeInTheDocument();
    if (folderRow) {
      fireEvent.click(folderRow);
      expect(screen.getByText("Expenses claim form")).toBeInTheDocument();
    }
  });
});
