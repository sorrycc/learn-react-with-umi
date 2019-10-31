
export default function Num(props) {
  const num = props.resource.num.read();
  return (
    <div>
      Number: {num}
    </div>
  );
}
