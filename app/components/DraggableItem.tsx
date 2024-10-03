import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import Image from "next/image"; // Make sure you import Image from Next.js

interface DraggableItemProps {
  item: { name: string; image: string }; // Update the prop type to include image
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ITEM,
    item: { name: item.name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={(instance) => {
        if (instance) drag(instance); // Correctly connect the drag functionality to the element
      }}
      className={`p-3 border bg-[#FFE6C5] rounded-md shadow-md cursor-move flex justify-between items-center ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={55} // Specify the width
        height={55} // Specify the height
        className="object-contain"
      />
      <p className="ml-4">{item.name}</p> {/* Added margin to space out text */}
    </div>
  );
};

export default DraggableItem;
