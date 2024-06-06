import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title className="accordion-item-title" id="reaseon-1">
              1번 이유 입니다.
            </Accordion.Title>
            <Accordion.Content
              className="accordion-item-content"
              id="reaseon-1"
            >
              <article>
                <p>어쩌구 저쩌구 내용 1</p>
                <p>어쩌구 저쩌구 내용 2</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Title className="accordion-item-title" id="reaseon-2">
              2번 이유 입니다.
            </Accordion.Title>
            <Accordion.Content
              className="accordion-item-content"
              id="reaseon-2"
            >
              <article>
                <p>어쩌구 저쩌구 내용 1</p>
                <p>어쩌구 저쩌구 내용 2</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
