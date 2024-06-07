import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="reaseon-1" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              1번 이유 입니다.
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>어쩌구 저쩌구 내용 1</p>
                <p>어쩌구 저쩌구 내용 2</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="reaseon-2" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              2번 이유 입니다.
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
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
