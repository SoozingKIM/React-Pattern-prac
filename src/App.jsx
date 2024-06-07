import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

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
      <section>
        <SearchableList items={PLACES} />
        <SearchableList items={["item 1", "item 2"]} />
      </section>
    </main>
  );
}

export default App;
