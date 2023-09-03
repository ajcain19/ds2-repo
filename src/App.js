// import logo from "./logo.svg";
import "./App.css";
import Badge from "./lib/components/Badge";
import Card from "./lib/components/Card";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Design System #2 | Anthony Cain</h1>
        </header>
      </div>
      <main>
        <h2>Badge</h2>
        <p></p>
        <Badge label="Badge Label" />
        <hr />
        <h2>Card</h2>
        <p>
          A card is a flexible and extensible content container. It includes
          options for headers and footers, a wide variety of content, contextual
          background colors, and powerful display options.
        </p>
        <div
          style={{
            maxWidth: "500px",
          }}
        >
          <Card
            header="This is a Card"
            feature="I'm a Feature"
            introduction="This card makes use of the card-divider element."
            url="This is a link"
          />
        </div>
      </main>
    </>
  );
}

export default App;
