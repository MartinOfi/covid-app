import { Provider } from "mobx-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/Styles/App.scss";
import Header from "./Layouts/Header";
import Home from "./Layouts/Main";
import DetailsPage from "./Pages/Details";
import countriesStore from "./stores/countriesStore";

function App() {
  return (
    <BrowserRouter>
      <Provider CountriesStore={countriesStore}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:country" element={<DetailsPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
