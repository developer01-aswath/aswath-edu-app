import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import { setGlobalNavigate } from "./services/httpClient";
import "./assets/styles/global.scss";


function App() {
  const navigate = useNavigate(); // Get navigate function

  useEffect(() => {
    setGlobalNavigate(navigate); // Set the global navigate function
  }, [navigate]);

  return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
  );
}

export default App;
