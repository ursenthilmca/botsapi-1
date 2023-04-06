import { Provider } from "react-redux";
import { store } from "./store/config-store";
import "./styles/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import RootRouter from "./router/root-router";
import { ConfigProvider } from "antd";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ hashed: false }}> 
      <Router>
        <RootRouter />
      </Router>
      </ConfigProvider>
    </Provider>
);
}

export default App;
