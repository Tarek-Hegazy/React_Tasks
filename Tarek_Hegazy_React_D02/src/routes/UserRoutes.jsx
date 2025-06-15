import { v4 } from "uuid";
import { SingleUserPage, UserListPage } from "../page";

export default [
  {
    id: v4(),
    path: "/users",
    element: <UserListPage />,
    children: [],
  },
  {
    id: v4(),
    path: "edit/:userID",
    element: <SingleUserPage />,
  },
  {
    id: v4(),
    path: "/users/:userID",
    element: <SingleUserPage />,
  },
];

// export default [
//   {
//     id: v4(),
//     path: "/users",
//     element: () => <Outlet />,
//     children: [
//       {
//         id: v4(),
//         index: true,
//         element: <UserListPage />,
//       },
//       {
//         id: v4(),
//         path: "users/edit/:userID",
//         element: <SingleUserPage />,
//       },
//       {
//         id: v4(),
//         path: "users/:userID",
//         element: <SingleUserPage />,
//       },
//     ],
//   },
// ];
