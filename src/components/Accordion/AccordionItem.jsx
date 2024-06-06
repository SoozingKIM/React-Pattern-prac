import { useAccordionContext } from "./Accordion";

function AccordionItem({ id, className, title, children }) {
  const { openedItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openedItemId === id;

  function handleClick() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li className={className}>
      <h3 onClick={handleClick}>{title}</h3>
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
