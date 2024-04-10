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
    <div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className={activeItem === item.id ? "active" : ""}>
            <a onClick={() => handleItemClick(item.id)} href="#">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
