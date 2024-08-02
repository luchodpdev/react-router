import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to=''>Inicio</Link>
          </li>
          <li>
            <Link to='/portafolio'>Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path='/portafolio'>
            <Portafolio />
          </Route>
          <Route path='/'>
          </Route>
            <Inicio />
         
        </Routes>
      </section>
    </div>
  )
}

export default App;
