import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{
      backgroundImage: `url('./p.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white', /* Set font color to white */
      height: '100vh', /* Set height to viewport height to cover the entire screen */
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Center align text
      padding: '20px' // Add padding for better readability
    }}>
      <h1>Menda W Dorji</h1>
      <p>Name: Menda W Dorji</p>
      <p>Email: wangchukmenda@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/mendawdorji" style={{ color: 'white' }}>www.linkedin.com/in/mendawdorji</a></p>
      <p>Accomplished Full Stack Java Developer with a proven track record in designing and implementing robust software solutions across diverse industries. Expertise in Java, JavaScript, and .NET frameworks, coupled with a strong foundation in web technologies and cloud platforms. Demonstrated ability in leading development teams, optimizing workflows, and delivering high-quality, scalable applications that enhance user experiences and drive business success. Seeking a challenging role as a Full Stack Developer to leverage extensive technical skills in Java, JavaScript, and .NET frameworks. Aiming to contribute to innovative projects, drive technological advancements, and further develop expertise in cutting-edge technologies for impactful solutions.</p>
      <div style={{ marginTop: '20px' }}> {/* Add margin top */}
        <a href="/" style={{ color: 'white', marginRight: '20px' }}>Home</a> {/* Change href to "/" */}
        <a href="https://github.com/mwdorji13?tab=projects" style={{ color: 'white' }}>Projects</a> {/* Change href to GitHub projects */}
      </div>
    </div>
  );
}

export default Home;
