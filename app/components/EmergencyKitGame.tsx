import React, { useState } from "react";
import DraggableItem from "./DraggableItem";
import CategoryBox from "./CategoryBox";
import Modal from "./Modal";
import Image from "next/image";

// Use CategoryItem interface for items with images
export interface CategoryItem {
  name: string;
  image: string;
}

export type CategoryName =
  | "Overnight Bag"
  | "Important Stuff"
  | "Health and Safety"
  | "Communication Gear"
  | "Essentials"
  | "Emergency Contact Info";

// Items with name and image
const initialItems: CategoryItem[] = [
  { name: "Change of clothes", image: "/clothes.png" },
  { name: "soap and toothpaste", image: "/soap.png" },
  {
    name: "Toilet paper and tissues",
    image: "/toilet-paper.png",
  },
  { name: "Food that lasts a long time", image: "/food.png" },
  { name: "Passport", image: "/passport.png" },
  { name: "Photos", image: "/profile.png" },
  {
    name: "Will and Insurance papers",
    image: "/will.png",
  },
  { name: "Medicines", image: "/medicine.png" },
  { name: "First Aid Kit", image: "/firstaid.png" },
  {
    name: "Mobile phone and charger",
    image: "/phone.png",
  },
  { name: "Battery-powered radio", image: "/radio.png" },
  {
    name: "Flashlight and extra batteries",
    image: "/Flashlight.png",
  },
  { name: "Enough water for everyone", image: "/water.png" },
  { name: "Woolen blankets", image: "/blankets.png" },
  { name: "Doctor’s number", image: "/emergency.png" },
  { name: "Local council", image: "/local-council.png" },
];

// Updated categories to store CategoryItems with CategoryName type
const categories: { name: CategoryName; items: CategoryItem[] }[] = [
  { name: "Overnight Bag", items: [] },
  { name: "Important Stuff", items: [] },
  { name: "Health and Safety", items: [] },
  { name: "Communication Gear", items: [] },
  { name: "Essentials", items: [] },
  { name: "Emergency Contact Info", items: [] },
];

const EmergencyKitGame: React.FC = () => {
  const [availableItems, setAvailableItems] = useState(initialItems);
  const [kitCategories, setKitCategories] = useState(categories);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [buttonColor, setButtonColor] = useState<"green" | "red">("red");

  const handleDrop = (itemName: string, categoryName: CategoryName) => {
    const droppedItem = availableItems.find((item) => item.name === itemName);
    if (!droppedItem) return;

    // Check if the item is correct for the category
    const categoryItems = {
      "Overnight Bag": [
        "Change of clothes",
        "soap and toothpaste",
        "Toilet paper and tissues",
        "Food that lasts a long time",
      ],
      "Important Stuff": ["Passport", "Photos", "Will and Insurance papers"],
      "Health and Safety": ["Medicines", "First Aid Kit"],
      "Communication Gear": [
        "Mobile phone and charger",
        "Battery-powered radio",
        "Flashlight and extra batteries",
      ],
      Essentials: ["Enough water for everyone", "Woolen blankets"],
      "Emergency Contact Info": ["Doctor’s number", "Local council"],
    };

    if (!categoryItems[categoryName].includes(itemName)) {
      setModalMessage("Incorrect item! Please try again.");
      setButtonColor("red"); // Set button color to red for incorrect item
      setModalOpen(true);
      return;
    }

    // Correct item, show success modal
    setModalMessage("Good job, you did well!");
    setButtonColor("green"); // Set button color to green for correct item
    setModalOpen(true);

    // Remove the item from availableItems and add to the correct category
    setAvailableItems((prevItems) =>
      prevItems.filter((i) => i.name !== itemName)
    );
    setKitCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, items: [...category.items, droppedItem] } // Add the dropped item
          : category
      )
    );
  };

  const handleRemove = (itemName: string, categoryName: CategoryName) => {
    const removedItem = kitCategories
      .find((category) => category.name === categoryName)
      ?.items.find((item) => item.name === itemName);
    if (!removedItem) return;

    // Add the removed item back to availableItems and remove from the category
    setAvailableItems((prevItems) => [...prevItems, removedItem]);
    setKitCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? {
              ...category,
              items: category.items.filter((i) => i.name !== itemName),
            }
          : category
      )
    );
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="p-12 w-full">
      <div className="flex flex-col lg:flex-row gap-6 bg-[#FFFBF2] p-4 rounded-lg">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-2 text-black text-center">
            Items to Pack
          </h2>
          <div className="grid grid-cols-2 gap-4 text-black">
            {availableItems.map((item) => (
              <DraggableItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-2 text-center text-black">
            Pack into Categories
          </h2>
          <div className="grid grid-cols-2 gap-4 text-black">
            {kitCategories.map((category) => (
              <CategoryBox
                key={category.name}
                category={category}
                onDrop={handleDrop}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for incorrect and correct item */}
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={handleCloseModal}
        buttonColor={buttonColor} // Pass the button color prop
      />
    </div>
  );
};

export default EmergencyKitGame;
