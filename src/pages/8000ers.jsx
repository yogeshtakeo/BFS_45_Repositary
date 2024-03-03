import { useState } from "react";
import Everest from "../assets/8000ers/Everest.jpg";
import Kanchenjunga from "../assets/8000ers/Kanchenjunga.jpg";
import Lhotse from "../assets/8000ers/Lhotse.jpg";
import CloseIcon from "../assets/remove.png";
import PlusIcon from "../assets/plus.png";

function Mountain() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedMountain, setSelectedMountain] = useState(null);

  const handleImageClick = (mountain) => {
    setSelectedMountain(mountain);
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
    setSelectedMountain(null);
  };

  return (
    <div className="feature-container">
      <div className="feature-box" onClick={() => handleImageClick("Everest")}>
        <img src={Everest} alt="Everest" />
        <div className="text-overlay">
          <ul>
            <li>
              <h2>EVEREST</h2>
            </li>
            <li>
              <h3>8848.86m</h3>
            </li>
          </ul>
        </div>
        <div className="overlay-image">
          <img src={PlusIcon} alt="Overlay Image" />
        </div>
      </div>

      <div
        className="feature-box"
        onClick={() => handleImageClick("Kanchenjunga")}
      >
        <img src={Kanchenjunga} alt="Kanchenjunga" />
        <div className="text-overlay">
          <ul>
            <li>
              <h2>KANCHENJUNGA</h2>
            </li>
            <li>
              <h3>8586m</h3>
            </li>
          </ul>
        </div>
        <div className="overlay-image">
          <img src={PlusIcon} alt="Overlay Image" />
        </div>
      </div>

      <div className="feature-box" onClick={() => handleImageClick("Lhotse")}>
        <img src={Lhotse} alt="Lhotse" />
        <div className="text-overlay">
          <ul>
            <li>
              <h2>LHOTSE</h2>
            </li>
            <li>
              <h3>8516m</h3>
            </li>
          </ul>
        </div>
        <div className="overlay-image">
          <img src={PlusIcon} alt="Overlay Image" />
        </div>
      </div>

      {showOverlay && (
        <div className="overlay">
          <button className="close-icon" onClick={handleCloseClick}>
            <img src={CloseIcon} alt="Close Icon" />
          </button>
          <div className="content">
            <h2>{selectedMountain}</h2>
            {selectedMountain === "Everest" && (
              <p>
                Mount Everest is Earth's highest mountain above sea level,
                located in the Mahalangur Himal sub-range of the Himalayas. The
                international border between Nepal and China (Tibet Autonomous
                Region) runs across its summit point.
              </p>
            )}
            {selectedMountain === "Kanchenjunga" && (
              <p>
                Kanchenjunga is the third highest mountain in the world, with an
                elevation of 8,586 meters (28,169 feet) above sea level. It is
                located on the border between Nepal and the Indian state of
                Sikkim. The name Kanchenjunga translates to "Five Treasures of
                Snow" in the local language, referring to its five peaks.
              </p>
            )}
            {selectedMountain === "Lhotse" && (
              <p>
                Lhotse is the fourth highest mountain in the world, situated on
                the border between Nepal and the Tibet Autonomous Region of
                China. It is adjacent to Mount Everest, with which it shares the
                same massif. The name Lhotse translates to "South Peak" in
                Tibetan, reflecting its location south of Everest.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Mountain;
