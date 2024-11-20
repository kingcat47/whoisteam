import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Login, TeamBuilding } from "./pages";
import StudentManage from "./pages/StudentManage/index.tsx";
import MachTable from "./pages/MachTable/index.tsx";
import ListItem from "./components/ListItem/index.tsx";
import TeambuildingFirst from "./pages/TeambuildingFirst/index.tsx";
import TeambuildingSecond from "./pages/TeambuildingSecond/index.tsx";
import Card from "./components/Card/index.tsx";
import MachTableFirst from "./pages/MachTableFirst/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "test", element: <MachTableFirst></MachTableFirst> },
      { path: "login", element: <Login /> },
      {
        path: "teamBuilding",
        element: <TeamBuilding />,
      },
      {
        path: "teambuilding/1",
        element: <TeambuildingFirst />,
      },
      {
        path: "teambuilding/2",
        element: <TeambuildingSecond />,
      },
      {
        path: "studentManage",
        element: <StudentManage />,
      },
      {
        path: "matchTable",
        element: <MachTable />,
      },
    ],
  },
]);

export default router;
