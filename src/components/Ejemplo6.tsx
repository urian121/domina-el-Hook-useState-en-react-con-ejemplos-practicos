import { useState } from "react";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "opcion1", label: "Opción 1" },
    { id: 2, name: "opcion2", label: "Opción 2" },
    { id: 3, name: "opcion3", label: "Opción 3" },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <ul className="list-group list-group-flush">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={
            "list-group-item " + (activeItem === item.id ? "active" : "")
          }>
          <a onClick={() => handleItemClick(item.id)} href="#">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
