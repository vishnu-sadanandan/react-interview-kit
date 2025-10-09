import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import type { AccordionItemType } from "./types";

const AccordionItem: React.FC<AccordionItemType> = ({
  id,
  title,
  children,
  onToggle,
  isOpen,
}) => {
  
  return (
    <div
      id={`accordion-id-${id}`}
      className="rounded-sm border-2 flex gap-2 flex-col items-start w-60 p-2"
    >
      <div
        data-testid="acordion-title"
        className={`w-full flex justify-between`}
      >
        {title}
        <button onClick={onToggle}>
          {!isOpen ? (
            <MdKeyboardArrowDown data-testid="acordion-toggle-up" />
          ) : (
            <MdKeyboardArrowUp data-testid="acordion-toggle-down" />
          )}
        </button>
      </div>
      {isOpen ? (
        <div data-testid="acordion-content" className="w-full flex items-start">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default AccordionItem;
