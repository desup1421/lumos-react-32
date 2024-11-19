import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//CSS (Bootstrap)
import "bootstrap/dist/css/bootstrap.min.css";

//Redux
import { Provider } from 'react-redux';
import store from './redux/store.js'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
