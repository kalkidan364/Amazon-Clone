import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Routing from "./Router";
import { useContext, useEffect } from "react";
import { DataContext } from "./components/DataProvider.js/DataProvider";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/actiontype";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
