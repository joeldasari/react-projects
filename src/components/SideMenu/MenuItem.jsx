import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [currentItem, setCurrentItem] = useState([]);
  const handleToggle = (label) => {
    const newArray = [...currentItem];
    const index = newArray.indexOf(label);
    if (index === -1) {
      newArray.push(label);
    } else {
      newArray.splice(index, 1);
    }
    setCurrentItem(newArray);
  };
  return (
    <li>
      <li className="my-8 flex w-[200px] items-center gap-2">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <div>
            {currentItem.indexOf(item.label) !== -1 ? (
              <FaAngleUp onClick={() => handleToggle(item.label)} />
            ) : (
              <FaAngleDown onClick={() => handleToggle(item.label)} />
            )}
          </div>
        ) : null}
      </li>

      {item.children &&
      item.children.length &&
      currentItem.indexOf(item.label) !== -1 ? (
        <MenuList menu={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
