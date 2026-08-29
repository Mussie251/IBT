import Menu from "./Menu/Menu.jsx";
import SideBar from "./SideBar/SideBar.jsx";

function Main({ dishes }) {
  return (
    <main className="main">
      <Menu dishes={dishes} category="All" />
      <SideBar />
    </main>
  );
}

export default Main;