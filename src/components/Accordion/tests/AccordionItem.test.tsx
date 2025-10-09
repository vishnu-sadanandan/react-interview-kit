import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import AccordionItem from "../AccordionItem";

describe("AccordionItem", () => {
  it("renders the AccordionItem component", () => {
    render(
      <AccordionItem
        key={"test-id"}
        id={"test-id"}
        title={"Test Title"}
        isOpen={true}
        onToggle={() => {}}
      >
        Test content
      </AccordionItem>
    );
    expect(screen.getByTestId("acordion-title")).toBeInTheDocument();
  });
  it("show the AccordionItem content", () => {
    render(
      <AccordionItem
        key={"test-id"}
        id={"test-id"}
        title={"Test Title"}
        isOpen={true}
        onToggle={() => {}}
      >
        Test content
      </AccordionItem>
    );

    // fireEvent.click(screen.getByTestId("acordion-toggle-down"));
    expect(screen.getByTestId("acordion-content")).toBeInTheDocument();
  });
  it("hide the AccordionItem content", () => {
    render(
      <AccordionItem
        key={"test-id"}
        id={"test-id"}
        title={"Test Title"}
        isOpen={false}
        onToggle={() => {}}
      >
        Test content
      </AccordionItem>
    );
    expect(screen.queryAllByTestId("acordion-content").length).toBe(0);
  });
});
