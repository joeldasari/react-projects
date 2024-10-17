import MenuList from "./MenuList";
import { menuItems } from "./data";
const SideMenu = () => {
  return (
    <div className="border-b-300  relative flex h-max min-h-screen items-center justify-center border">
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        6. Side Menu
      </h1>
      <div className="">
        <MenuList menu={menuItems} />
      </div>
    </div>
  );
};

export default SideMenu;
