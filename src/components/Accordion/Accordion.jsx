import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "아코디언 관련 컴포넌트가 <Accordion>으로 감싸져야 합니다."
    );
  }
  return ctx;
}

function Accordion({ children, className }) {
  const [openedItemId, setOpenedItemId] = useState();

  function openItem(id) {
    setOpenedItemId(id);
  }
  function closeItem() {
    setOpenedItemId(null);
  }
  const contextValue = {
    openedItemId,
    openItem,
    closeItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

export default Accordion;
