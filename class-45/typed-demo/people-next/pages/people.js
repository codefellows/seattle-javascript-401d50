export async function getServerSideProps() {

  let response = await fetch('http://localhost:3000/api/people');
  let json = await response.json();
  console.log(json);
  return {
    props: {
      people: json,
    }
  }
}

export default function People(props) {
  console.log(props);
  return (
    <div className="people-container">
      <h1>Welcome to People</h1>
      {props.people.map(person => <li key={person.id}>{person.name}</li>)}
    </div>
  )
}
