import img1 from '../assets/1.jpg'
function Header() {
  return (

    <>
        <div className="section-header">
          <h1 className="brand">HIMALI <br />8000 METER DOWN SUIT</h1>
          <p className="motto">Unrivaled Performance, Unmatched Protection: 
              <br />Conquer the Heights with Our Elite 8000m Down Suit.
          </p>
        </div>
        <div className="img-header" >

          <img src={img1} />

        </div>
        
    
    </>
  )
}

export default Header