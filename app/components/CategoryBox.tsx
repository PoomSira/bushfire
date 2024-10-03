import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { CategoryItem, CategoryName } from "./EmergencyKitGame"; // Import CategoryItem type

interface CategoryBoxProps {
  category: {
    name: CategoryName;
    items: CategoryItem[]; // Update the type to handle CategoryItem (with name and image)
  };
  onDrop: (item: string, categoryName: CategoryName) => void;
  onRemove: (item: string, categoryName: CategoryName) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  category,
  onDrop,
  onRemove,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: (item: { name: string }) => onDrop(item.name, category.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(instance) => {
        if (instance) drop(instance);
      }}
      className={`p-4 border rounded-md h-64 bg-gray-100 shadow-md ${
        isOver ? "bg-orange-100" : ""
      }`} // Increase height from h-48 to h-64
    >
      <h3 className="font-bold mb-2">{category.name}</h3>
      <div className="overflow-y-auto max-h-48">
        {" "}
        {/* Increase the scrollable area */}
        {category.items.length === 0 ? (
          <p className="text-sm text-gray-500">Drop items here</p>
        ) : (
          <ul className="list-disc pl-4">
            {category.items.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <img src={item.image} alt={item.name} className="w-10 h-10" />
                {/* <button
                  className="ml-2 text-sm text-red-500 hover:underline"
                  onClick={() => onRemove(item.name, category.name)}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button> */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryBox;
