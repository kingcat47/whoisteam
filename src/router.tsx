import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Login, TeamBuilding } from "./pages";
import StudentManage from "./pages/StudentManage/index.tsx";
import MachTable from "./pages/MachTable/index.tsx";
import ListItem from "./components/ListItem/index.tsx";
import TeambuildingFirst from "./pages/TeambuildingFirst/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "test", element: <ListItem></ListItem> },
      { path: "login", element: <Login /> },
      {
        path: "teamBuilding",
        element: <TeamBuilding />,
      },
      {
        path: "teambuildingfirst",
        element: <TeambuildingFirst />,
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
