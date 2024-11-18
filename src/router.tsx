import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { TeamBuilding } from "./pages";
import Input from "./components/InputButton/index.tsx";
import StudentManage from "./pages/StudentManage/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "test", element: <Input /> },
      {
        path: "teamBuilding",
        element: <TeamBuilding />,
      },
      {
        path: "studentManage",
        element: <StudentManage />,
      },
      {
        path: "matchTable",
        element: <h1>대진표</h1>,
      },
      //   {
      //     path: "",
      //     element: <MenuLayout></MenuLayout>,
      //     children: [
      //       {
      //         path: "",
      //         element: <TodayWord />,
      //       },
      //       {
      //         path: "voca",
      //         element: <Voca />,
      //       },
      //       {
      //         path: "more",
      //         element: <More />,
      //       },
      //     ],
      //   },
    ],
  },
]);

export default router;
