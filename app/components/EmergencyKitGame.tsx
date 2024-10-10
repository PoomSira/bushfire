import React, { useState } from "react";
import DraggableItem from "./DraggableItem";
import CategoryBox from "./CategoryBox";
import Modal from "./Modal";
import Image from "next/image";

// Use CategoryItem interface for items with images
export interface CategoryItem {
  name: string;
  image: string;
  description: string;
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
  {
    name: "Change of clothes",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/clothes.png",
    description:
      "A fresh set of clothes is essential if you need to stay somewhere overnight due to bushfire evacuation.",
  },
  {
    name: "Soap and toothpaste",
    image: "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/soap.png",
    description:
      "Basic hygiene items like soap and toothpaste are important for cleanliness in emergency situations.",
  },
  {
    name: "Toilet paper and tissues",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/toilet-paper.png",
    description:
      "Toilet paper and tissues are vital for personal hygiene during an evacuation.",
  },
  {
    name: "Food that lasts a long time",
    image: "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/food.png",
    description:
      "Non-perishable food can keep you nourished while waiting for help or during evacuation.",
  },
  {
    name: "Passport",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/passport.png",
    description:
      "Important identification documents like your passport should always be taken during evacuation.",
  },
  {
    name: "Photos",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/profile.png",
    description:
      "Photos hold sentimental value and should be safeguarded in case of property damage.",
  },
  {
    name: "Will and Insurance papers",
    image: "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/will.png",
    description:
      "These legal documents ensure that your affairs are in order in case of an emergency.",
  },
  {
    name: "Medicines",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/medicine.png",
    description:
      "Essential medicines are critical to take with you during an evacuation to ensure continued treatment.",
  },
  {
    name: "First Aid Kit",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/firstaid.png",
    description:
      "A first aid kit is vital for treating minor injuries or medical emergencies during an evacuation.",
  },
  {
    name: "Mobile phone and charger",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/phone.png",
    description:
      "Staying in touch with emergency services and loved ones is crucial, so don't forget your phone and charger.",
  },
  {
    name: "Battery-powered radio",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/radio.png",
    description:
      "A radio allows you to listen to emergency broadcasts, even if the power goes out.",
  },
  {
    name: "Flashlight and extra batteries",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Flashlight.png",
    description:
      "A flashlight ensures you can see in the dark during an evacuation or power outage.",
  },
  {
    name: "Enough water for everyone",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/water.png",
    description:
      "Having sufficient water is crucial for hydration, especially in a bushfire emergency.",
  },
  {
    name: "Woolen blankets",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/blankets.png",
    description:
      "Woolen blankets provide warmth and can help protect you from smoke inhalation in an emergency.",
  },
  {
    name: "Doctor’s number",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/emergency.png",
    description:
      "Having your doctor's number on hand is crucial for any medical emergencies that arise during a bushfire.",
  },
  {
    name: "Local council",
    image:
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/local-council.png",
    description:
      "Contacting the local council can provide information on evacuation routes and emergency services.",
  },
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
        "Soap and toothpaste",
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

    // Correct item, show success modal with item description
    setModalMessage(`Good job, you did well!! ${droppedItem.description}`);
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
