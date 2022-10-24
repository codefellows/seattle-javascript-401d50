import { useState } from "react";
import Content from "./Content.jsx";

function Article(props) {
  //hooks are functions that start with "use", hook into the React API.
  const [state, setState] = useState({
    title: props.title
  });

  return (
    <div className="article">
      <h2 data-testid="heading">{props.title}</h2>
      <div>
        <Content text="Lorem Ipsum....." />
      </div>
    </div>
  );
}

export default Article;
