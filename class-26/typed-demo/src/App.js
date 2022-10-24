import "./styles.css";
import "./app.scss";
// import Name from "./Name.jsx";
import Name from "./NameFunction.jsx";
import Article from "./Article.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Name title="My Name" />
      <Article title="My First Article" />
    </div>
  );
}
