import MenuItem from "./MenuItem";

const MenuList = ({ menu }) => {
  return <ul>{menu && menu.map((item) => <MenuItem item={item} />)}</ul>;
};

export default MenuList;
