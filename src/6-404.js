import { Route, Routes, Link } from 'react-router-dom';
 

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
         
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>}></Route>
          <Route exact path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route
            exact
            path="/"
            element={<Navigate replace to="/inicio" />}
          ></Route>
        </Routes>
      </section>
    </div>
  );
}
 
export default App;
 