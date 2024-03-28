// import { useMediaQuery } from "react-responsive";
// import "./App.css";
// import { DesktopList } from "./components/DesktopList";

// export const App = () => {
//   // const phone = useMediaQuery({ query: "(max-width: 600px)" });
//   // const desktop = useMediaQuery({ query: "(min-width: 601px)" });
//   // if (phone) return <DesktopList />;
//   // if (desktop) return <DesktopList />;
//   return <DesktopList />;
// };

import { Outlet } from "react-router-dom";

function App() {
  return <Outlet />;
}
export default App;
