import Boudha from "../assets/sites/boudha.jpg";
import Pashupatinath from "../assets/sites/pashupatinath.jpg";
import Nyatapola from "../assets/sites/temple.jpg";
function Site() {
  return (
    <div className="feature-container">
      <div className="feature-box">
        <img src={Boudha} alt="Boudha" />
        <div className="text-overlay">
          <h2>Boudhanath Stupa</h2>
        </div>
      </div>
      <div className="feature-box">
        <img src={Pashupatinath} alt="Temple1" />
        <div className="text-overlay">
          <h2>Pashupatinath Temple</h2>
        </div>
      </div>
      <div className="feature-box">
        <img src={Nyatapola} alt="Temple1" />
        <div className="text-overlay">
          <h2>Nyatapola Templa</h2>
        </div>
      </div>
    </div>
  );
}

export default Site;
