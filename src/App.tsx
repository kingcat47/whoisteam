import { BackButton, BottomBar } from "./components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import styles from "./App.module.scss";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  // useEffect(() => {
  //   navigate("/teamBuilding");
  // }, []);
  const loginpage = location.pathname != "/login";
  return (
    <div className={styles.container}>
      <Outlet />
      {loginpage && <BottomBar />}
      {loginpage && <BackButton />}
    </div>
  );
}

export default App;
