"use client";
import Image from "next/image";
import React, { useState } from "react";

function DropdownStorage({ data }) {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  // State to manage selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Set default selected item to the first item in the data
  React.useEffect(() => {
    if (data.length > 0) {
      setSelectedItem(data[0]);
    }
  }, [data]);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="border-1 rounded-[20px] bg-[#F5F5F5] border-[#A9A9A9] flex flex-col mt-2 md:mt-4">
      <div
        className="justify-between flex items-center my-2 md:my-4 px-4 md:px-8 cursor-pointer"
        onClick={handleDropdownToggle}
      >
        <Image
          src={selectedItem ? selectedItem.image : data[0]?.image}
          alt={selectedItem ? selectedItem.name : data[0]?.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-base font-normal ml-2">
          {selectedItem ? selectedItem.name : data[0]?.name}
        </span>
        <svg
          className="w-[16px] h-[12px] ml-auto"
          width="25"
          height="18"
          viewBox="0 0 25 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.6875 0L0 4.6875L12.5 17.1875L25 4.6875L20.3125 0L12.5 7.8125L4.6875 0Z"
            fill="#403F3F"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="flex flex-col space-y-2 my-4 px-4 md:px-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-row justify-start space-x-2 cursor-pointer items-center"
              onClick={() => handleItemClick(item)}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-base font-normal">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownStorage;
