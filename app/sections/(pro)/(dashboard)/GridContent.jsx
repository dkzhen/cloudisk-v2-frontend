import React from "react";
import CardStorage from "./CardStorage";
import CardUpload from "./CardUpload";
import DropdownStorage from "./DropdownStorage";
// Ensure Tailwind CSS is imported in your CSS file

const data = [
  {
    id: 1,
    name: "Firebase 1",
    total: 10,
    used: 7.5,
    type: "GB",
    color: "#FF3B30",
    image: "/images/firebase-icon.png",
  },
  {
    id: 2,
    name: "Firebase 2",
    total: 100,
    used: 72.5,
    type: "GB",
    color: "#179BAE",
    image: "/images/firebase-icon.png",
  },
  {
    id: 3,
    name: "Firebase 3",
    total: 200,
    used: 75,
    type: "GB",
    color: "#179BAE",
    image: "/images/firebase-icon.png",
  },
];
const GridContent = () => {
  return (
    <div className=" md:px-20 px-2 py-4 mt-2 md:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="md:w-[70%]">
          <CardUpload />
          <DropdownStorage data={data} />
        </div>
        <div className="space-y-3 overflow-y-scroll scrollbar-hidden h-[370px] md:h-[500px]">
          {data.map((item) => (
            <CardStorage
              key={item.id}
              name={item.name}
              total={item.total}
              used={item.used}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridContent;
