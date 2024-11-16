import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "teambulding",
        // element:<팀빌딩> ,
      },
      {
        path: "studentmanage",
        //element: <학생관리>,
      },
      {
        path: "matchtable",
        //element: <대진표>,
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
