import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import Anime from "containers/pages/Anime";
import Manga from "containers/pages/Manga";
import Buscar from "containers/pages/Buscar";
import LoginCreate from "containers/pages/LoginCreate";
/* import {LoginButton, LogoutButton} from "containers/pages/login"; */
import Counter from "containers/pages/counter";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          {/* Home Display */}
          <Route path="/" element={<Home />} />

          {/*Anime page */}
          <Route path="/Anime" element={<Anime />} />

          {/*Manga page */}
          <Route path="/Manga" element={<Manga />} />

          {/*Buscar page */}
          <Route path="/Buscar" element={<Buscar />} />

          {/*Login page */}
          <Route path="/LoginCreate" element={<LoginCreate />} />

          {/* 
          <Route path="/login" element={< LoginButton /> }/>


          <Route path="/logout" element={< LogoutButton /> }/>

          <Route path="/counter" element={< Counter />}/>  */}

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

