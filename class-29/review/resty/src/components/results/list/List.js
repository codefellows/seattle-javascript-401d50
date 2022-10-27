//import Accordion from 'react-bootstrap/Accordion';
function List(props)
{
  return (
    <ul>
      { props.results.map((result, idx) =>
        <li key={ idx }>
          <button type="button" className="collapsible">Expand</button>
          <div className="result">
            <pre>{ result }</pre>
          </div>
        </li>) }
    </ul>
  )
}
export default List;
