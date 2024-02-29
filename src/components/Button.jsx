function Button() {
  const linkToWebsite = () => {
    // open link in new tab
    window.open(
      "https://www.space.com/15139-northern-lights-auroras-earth-facts-sdcmp.html",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <div className="button-container">
      <button onClick={linkToWebsite} className="button">
        Click Here!
      </button>
    </div>
  );
}

export default Button;
