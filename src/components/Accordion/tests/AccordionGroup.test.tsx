import { fireEvent, render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import AccordionGroup from "../AccordionGroup";
const interviewCard = [
  {
    id: "q:1",
    title: "Questions-1",
    content:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula",
  },
  {
    id: "q:2",
    title: "Questions-2",
    content:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula",
  },
  {
    id: "q:3",
    title: "Questions-3",
    content:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula",
  },
];
describe("AccordionGroup", () => {
  // it("renders the AccordionGroup component", () => {
  //   render(<AccordionGroup accordionsItems={interviewCard} />);
  //   expect(screen.getByTestId("accordion-group-id")).toBeInTheDocument();
  // });

  it("show the AccordionItem component", () => {
    render(<AccordionGroup accordionsItems={interviewCard} />);
    fireEvent.click(screen.queryAllByTestId("acordion-toggle-up")[0]);
    expect(screen.queryAllByTestId("acordion-content").length).toBeGreaterThan(0);
    expect(screen.getByTestId("accordion-group-id")).toBeInTheDocument();
  });
  it("hide the AccordionItem component", () => {
    render(<AccordionGroup accordionsItems={interviewCard} />);
    fireEvent.click(screen.queryAllByTestId("acordion-toggle-up")[0]);
    fireEvent.click(screen.queryAllByTestId("acordion-toggle-down")[0]);
    expect(screen.queryAllByTestId("acordion-content").length).toBe(0);
  });
});
