import React, { useState } from "react";
import DraggableItem from "./DraggableItem";
import CategoryBox from "./CategoryBox";

// EmergencyKitGame.tsx
export type CategoryName =
  | "Overnight Bag"
  | "Important Stuff"
  | "Health and Safety"
  | "Communication Gear"
  | "Essentials"
  | "Emergency Contact Info";

const categoryItems: Record<CategoryName, string[]> = {
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

interface Category {
  name: CategoryName;
  items: string[];
}

const initialItems = [
  "Change of clothes",
  "soap and toothpaste",
  "Toilet paper and tissues",
  "Food that lasts a long time",
  "Passport",
  "Photos",
  "Will and Insurance papers",
  "Medicines",
  "First Aid Kit",
  "Mobile phone and charger",
  "Battery-powered radio",
  "Flashlight and extra batteries",
  "Enough water for everyone",
  "Woolen blankets",
  "Doctor’s number",
  "Local council",
];

const categories: Category[] = [
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

  const handleDrop = (item: string, categoryName: CategoryName) => {
    // Check if the item is valid for the category
    if (!categoryItems[categoryName].includes(item)) {
      alert("Incorrect item! Please try again.");
      return; // Do not add the item if it's incorrect
    }

    // Remove item from availableItems and add to category if valid
    setAvailableItems((prevItems) => prevItems.filter((i) => i !== item));
    setKitCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, items: [...category.items, item] }
          : category
      )
    );
  };

  const handleRemove = (item: string, categoryName: CategoryName) => {
    // Add item back to availableItems and remove from the category
    setAvailableItems((prevItems) => [...prevItems, item]);
    setKitCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, items: category.items.filter((i) => i !== item) }
          : category
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Emergency Kit Packing Game</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Items to Pack</h2>
          <div className="grid grid-cols-2 gap-4">
            {availableItems.map((item) => (
              <DraggableItem key={item} item={item} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Pack into Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {kitCategories.map((category) => (
              <CategoryBox
                key={category.name}
                category={category}
                onDrop={handleDrop}
                onRemove={handleRemove} // Pass the handleRemove function to CategoryBox
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyKitGame;
