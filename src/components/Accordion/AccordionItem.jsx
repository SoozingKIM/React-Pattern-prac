import { useAccordionContext } from "./Accordion";

function AccordionItem({ id, className, title, children }) {
  const { openedItemId, toggleItem } = useAccordionContext();

  const isOpen = openedItemId === id;

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content "
        }
      >
        {children}
      </div>
    </li>
  );
}

export default AccordionItem;
