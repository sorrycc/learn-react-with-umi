
export default function Person(props) {
  const person = props.resource.person.read();
  return (
    <div>
      name: {person.name.first}
    </div>
  );
}
