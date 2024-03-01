import Box from "../Box/box";
import { useState } from "react";
import Button from "../Button/button";

function Page(props) {
  const [current, setCurrent] = useState(0);

  // invoked when button is clicked
  function handleToggle() {
    //console.log("button clicked.");
    // ensures that current stays within the range of boxes.
    setCurrent((current + 1) % props.numBoxes);
  }

  console.log(`current box: ${current + 1}`);

  // rendered once when Page component is created.
  let boxes = []; //stores Box components.

  for (let i = 0; i < props.numBoxes; i++) {
    let isCurrent = i === current; //always true.
    boxes.push(<Box index={i} current={isCurrent} key={i} />);
  }

  return (
    <div>
      <div className="boxes">{boxes}</div>
      <Button onClick={handleToggle} />
      {/*onClick triggers a state update and re-renders the component with the updated
      value of 'current'*/}
    </div>
  );
}

export default Page;
