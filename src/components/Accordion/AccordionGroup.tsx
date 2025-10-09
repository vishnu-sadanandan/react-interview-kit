import { useId, useState } from "react";
import AccordionItem from "./AccordionItem";
import type { AccordionItemType, AccordionType } from "./types";

const AccordionGroup: React.FC<AccordionType> = ({ accordionsItems }) => {
  const id = useId();
  const [accordionIndex, setOpenAccordion] = useState();
  const onToggleHandler = (currentIndex: any) => {
    setOpenAccordion(accordionIndex === currentIndex ? null : currentIndex);
  };
  return (
    <div
      id={`accordion-group-id-${id}`}
      data-testid={`accordion-group-id`}
      className="flex flex-col gap-1"
    >
      {accordionsItems.map((accordion: AccordionItemType, index: any) => (
        <AccordionItem
          key={index}
          id={index}
          title={accordion.title}
          onToggle={() => onToggleHandler(index)}
          isOpen={accordionIndex === index}
        >
          {accordion.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default AccordionGroup;
