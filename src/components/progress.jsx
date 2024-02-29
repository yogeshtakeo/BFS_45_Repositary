import style from '../styles/container.module.css'
import check from '../assets/check.png'
import progress from '../assets/progress.png'
import remove from '../assets/remove.png'
function Progress() {
  return (
    <>
    <div className="outerContainer">
      <div className="innerContainer">
        <h2 className="container">PROGRESS</h2>
          <div>
            <h3>Backend with Java</h3>
            <ul>
              <li className={style.container}>
                <img className={style.image} src={check} />
                <p className="task">Core Java</p>
              </li>
              <li className={style.container}>
                <img className={style.image} src={check} />
                <p className="task">Hibernate and JPA</p>
              </li>
              <li className={style.container}>
                <img className={style.image} src={check} />
                <p className="task">Spring Boot</p>
              </li>
            </ul>
          </div>

          <div>
            <h3>Frontend with React</h3>
            <ul>
              <li className={style.container}>
                <img className={style.image} src={check} />
                <p className="task">Fundamental HTML, CSS, & JS</p>
              </li>
              <li className={style.container}>
                <img className={style.image} src={progress} />
                <p className="task">Fundamental React</p>
              </li>
              <li className={style.container}>
                <img className={style.image} src={remove} />
                <p className="task">Full Stack</p>
              </li>
            </ul>
          </div>
      </div>
    </div>


    </>
  )
}

export default Progress