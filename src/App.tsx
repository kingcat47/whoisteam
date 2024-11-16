import { BackButton, BottomBar } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./App.module.scss";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/teamBuilding");
  }, []);

  return (
    <div className={styles.container}>
      <Outlet />
      <BottomBar />
      <BackButton />
    </div>
  );
}

export default App;
