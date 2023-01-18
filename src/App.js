import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import {LoginButton, LogoutButton} from "containers/pages/login"
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

