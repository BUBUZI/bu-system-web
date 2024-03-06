import { useRoutes } from "react-router-dom";
import router from "./router";
import "./App.css";

function App() {
  const routes = useRoutes(router);
  return <div>{routes}</div>;
}

export default App;
