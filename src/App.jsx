import Home from './components/home'
import Navbar from './components/navbar'
import Progress from './components/progress'
import './styles/App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className="outerContainer"><hr /></div>
      <Home />
      <div className="outerContainer"><hr /></div>
      <Progress />
      
    </>
  )
}

export default App
