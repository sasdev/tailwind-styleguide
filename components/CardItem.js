import React from "react";
import Image from "next/image";

const CardItem = ({ item, onClick, isSelected }) => {
  return (
    <div
      onClick={() => onClick(item.id)}
      className={`p-2 mb-1 bg-white border border-slate-100 rounded-md shadow-sm hover:shadow-lg cursor-pointer 
        ${ isSelected ? "ring-2 ring-blue-500" : "" }`}
    >
      <div className="flex items-center space-x-4">
        {item.imageUrl && (
          <div className="flex-shrink-0">
            <Image
              className="w-12 h-12 rounded-full"
              src={item.imageUrl}
              alt="avatar"
              width={48} // specify width
              height={48} // specify height
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-lg font-semibold text-gray-900 truncate">
            {item.title}
          </p>
          <p className="text-sm text-gray-500 truncate">{item.description}</p>
        </div>
        <div className="inline-flex items-center text-lg font-medium text-gray-800">
          {item.amount}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
