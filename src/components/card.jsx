/* eslint-disable react/no-unescaped-entities */
import Image from "./image";

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <p>
            The Northern Lights, also known as Aurora Borealis, are one of the
            most mesmerizing natural phenomena visible in the Earth's polar
            regions.
          </p>
          <Image />
        </div>
      </div>
    </>
  );
}

export default Card;
