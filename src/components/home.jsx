import logo from '../assets/takeo.jpg';

function Home() {

    const link = () => {
        window.open('https://www.takeo.ai/software-engineering-bootcamp', '_blank');
      };
  return (
    <>
        <div className="outerContainer">
            <div className='container'>
            <img className= "image" src={logo}/>
            <div className='info'>
                <p>Software Engineering Bootcamp
                    <br />BFS45 Spring 2024 Batch
                </p>
                <button onClick={link}>Bootcamp Link</button>
            </div>
            </div>
        </div>
    </>

  )
}

export default Home