import { useId, useState } from "react";
import AccordionItem from "./AccordionItem";
import type { AccordionStandAloneType } from "./types";



const Accordion: React.FC<AccordionStandAloneType> = ({ title, children }) => {
  const id = useId();
  const [open, setOpen] = useState(false);
  const onChangeHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AccordionItem
      key={id}
      id={id}
      title={title}
      onToggle={onChangeHandler}
      isOpen={open}
    >
      {children}
    </AccordionItem>
  );
};

export default Accordion;
