import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

function AccordionContent({ children, className }) {
  const { openedItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const isOpen = openedItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}

export default AccordionContent;
