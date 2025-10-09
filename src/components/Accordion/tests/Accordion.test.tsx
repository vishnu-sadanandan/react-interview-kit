import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Accordion from "..";

describe("Accordion", () => {
  it("renders the Accordion component", () => {
    render(<Accordion title={"Test Data"}>Test content</Accordion>);
    expect(screen.getByTestId("acordion-title")).toBeInTheDocument();
  });
  it("show the AccordionItem component", () => {
    render(<Accordion title={"Test Data"}>Test content</Accordion>);
    fireEvent.click(screen.getByTestId("acordion-toggle-up"));
    expect(screen.getByTestId("acordion-title")).toBeInTheDocument();
  });
  it("hide the AccordionItem component", () => {
    render(<Accordion title={"Test Data"}>Test content</Accordion>);
    fireEvent.click(screen.getByTestId("acordion-toggle-up"));
    fireEvent.click(screen.getByTestId("acordion-toggle-down"));
    expect(screen.queryAllByTestId("acordion-content").length).toBe(0);
  });
});
