import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ReactReduxContext } from "./context/reactReduxContext";

import { LoginPage } from "./pages/login/LoginPage";
import { HomePage } from "./pages/home/HomePage";
import { LogisticaPage } from "./pages/logistica/LogisticaPage";
import { ComercializacionPage } from "./pages/comercializacion/ComercializacionPage";
import { UsersPage } from "./pages/users/UsersPage";
import { ProduccionPage } from "./pages/produccion/ProduccionPage";
import { AdministracionPage } from "./pages/administracion/AdministracionPage";

import { NetworkStatus } from "./components/network-status/NetworkStatus";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

NetworkStatus();

function App() {
  const { currentUser, userRol } = useContext(ReactReduxContext);

  return (
    
    <div className="App">
      <title>Ecomotriz</title>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (currentUser ? <Redirect to="/home" /> : <LoginPage />)}
        />
        <Route
          exact
          path="/home"
          render={() => (currentUser ? <HomePage /> : <Redirect to="/" />)}
        />
        <Route
          path="/logistica"
          render={() =>
            currentUser ? (
              userRol === "Administracion" ||
              userRol === "Ventas" ||
              userRol === "Produccion" ? (
                <LogisticaPage />
              ) : (
                <Redirect to="/home" />
              )
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/comercializacion"
          render={() =>
            currentUser ? (
              userRol === "Administracion" ||
              userRol === "Ventas" ||
              userRol === "Produccion" ? (
                <ComercializacionPage />
              ) : (
                <Redirect to="/home" />
              )
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/users"
          render={() =>
            currentUser ? (
              userRol === "Administracion" || userRol === "Produccion" ? (
                <UsersPage />
              ) : (
                <Redirect to="/home" />
              )
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/produccion"
          render={() =>
            currentUser ? (
              userRol === "Administracion" ||
              userRol === "Produccion" ||
              userRol === "Dosificador" ||
              userRol === "Ollero" ||
              userRol === "Operador" ? (
                <ProduccionPage />
              ) : (
                <Redirect to="/home" />
              )
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/dashboard"
          render={() =>
            currentUser ? (
              userRol === "Administracion" ? (
                <AdministracionPage />
              ) : (
                <Redirect to="/home" />
              )
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="*"
          render={() =>
            currentUser ? <Redirect to="/home" /> : <Redirect to="/" />
          }
        />
      </Switch>
    </div>
  );
}

export default App;