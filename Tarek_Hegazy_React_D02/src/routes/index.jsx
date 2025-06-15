import { v4 } from "uuid";
import { HomePage, SingleUserPage, UserListPage } from "../page";
import userRoutes from "./UserRoutes";

export default [
  {
    id: v4(),
    path: "/",
    element: <HomePage />,
  },
  ...userRoutes,
];
