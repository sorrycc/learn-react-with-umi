import Count from "../containers/Count";

export default function (props) {
  return (
    <Count.Provider>
      { props.children }
    </Count.Provider>
  );
}
