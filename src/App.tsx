import { Provider } from "mobx-react";
import "./Assets/Styles/App.scss";
import Header from "./Layouts/Header";
import Home from "./Layouts/Main";
import countriesStore from "./stores/countriesStore";

function App() {
  return (
    <Provider CountriesStore={countriesStore}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
