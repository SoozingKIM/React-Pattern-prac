import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="reaseon-1"
            className="accordion-item"
            title="1번 이유 입니다."
          >
            <article>
              <p>어쩌구 저쩌구 내용 1</p>
              <p>어쩌구 저쩌구 내용 2</p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="reaseon-2"
            className="accordion-item"
            title="2번 이유 입니다."
          >
            <article>
              <p>어쩌구 저쩌구 내용 1</p>
              <p>어쩌구 저쩌구 내용 2</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
