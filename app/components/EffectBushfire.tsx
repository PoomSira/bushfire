import React, { useState } from "react";
import TableauCluster from "./TableauCluster";
import TableauViz from "./TableauViz";
import TableauPictograph from "./TableauPictograph";
import Image from "next/image"; // Assuming you are using Next.js for image optimization

const EffectBushfire: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeViz, setActiveViz] = useState<null | string>(null);

  const openModal = (viz: string) => {
    setActiveViz(viz);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveViz(null);
  };

  return (
    <div className="relative py-8 flex flex-col items-center justify-center">
      <div className="relative z-10">
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative aspect-square bg-[#FFFBF2] rounded-full overflow-visible">
              <div className="absolute bg-[#FFE6C5] right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md hover:bg-orange-300">
                <button onClick={() => openModal("cluster")}>
                  Click to see risk
                </button>
              </div>
              <Image
                src="/koala-t.png"
                alt="Koala Tableau Cluster"
                width={200}
                height={200}
                className="object-cover animate-moveSideways"
              />
            </div>

            <div className="relative aspect-square bg-[#FFFBF2] rounded-full overflow-visible">
              <div className="absolute bg-[#FFE6C5] right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md hover:bg-orange-300">
                <button onClick={() => openModal("viz")}>
                  Click to see history
                </button>
              </div>
              <Image
                src="/koala-t.png"
                alt="Koala Tableau Cluster"
                width={200}
                height={200}
                className="object-cover animate-moveSideways"
              />
            </div>

            <div className="relative aspect-square bg-[#FFFBF2] rounded-full overflow-visible">
              <div className="absolute bg-[#FFE6C5] right-3 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md hover:bg-orange-300">
                <button onClick={() => openModal("pictograph")}>
                  Click to see school risk
                </button>
              </div>
              <Image
                src="/koala-t.png"
                alt="Koala Tableau Cluster"
                width={200}
                height={200}
                className="object-cover animate-moveSideways"
              />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4 relative">
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-black z-50"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="w-full h-full overflow-auto">
              {activeViz === "cluster" && <TableauCluster />}
              {activeViz === "viz" && <TableauViz />}
              {activeViz === "pictograph" && <TableauPictograph />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EffectBushfire;
