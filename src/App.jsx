import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { toggleLanguage } from "./redux/language/actions"


const App = () => {
  // from the right: lang (last lang) is key in object lang (lang in the middle), which is key in object state (default name of object in store(redux))
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();

  //change theme, add attribute data-bs-theme from bootstrap. Use state instead of redux to make code simpler
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme)
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <button onClick={() => dispatch(toggleLanguage())} className="btn btn-outline-primary mb-3">{lang === 'en' ? 'EN': 'ID'}</button>
          <button onClick={changeTheme} className="btn btn-outline-primary mb-3">{theme === 'dark' ? 'Light': 'Dark'}</button>
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">{lang === 'en' ? "To-Do List" : "Daftar To-Do"}</h1>
              <TodoInput />
              <TodoList />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default App;
