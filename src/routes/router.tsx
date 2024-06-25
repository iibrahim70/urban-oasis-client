import MainLayout from "@/components/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>hello</div>,
      },
    ],
  },
]);

export default router;
