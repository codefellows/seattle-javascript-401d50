function List(props) {
  return (
    <ul>
      {props.values.map((person, idx) => <li key={idx}>{person}</li>)}
    </ul>
  )
}

export default List;
