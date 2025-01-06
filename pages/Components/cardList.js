// filepath: /d:/Software/Tailwind stsyleguide/tailwind-styleguide/pages/Components/cardList.js
import React, { useState } from "react";
import MainContainer from "@components/MainContainer";
import Card1 from "@components/notcards/card1";
import CardItem from "@components/CardItem";

const cardItems = [
  {
    id: 1,
    title: "#435",
    description: "2 Items",
    amount: "$ 400",
    imageUrl: "",
  },
  {
    id: 2,
    title: "#436",
    description: "3 Items",
    amount: "$ 500",
    imageUrl: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 3,
    title: "#437",
    description: "3 Items",
    amount: "$ 500",
    imageUrl: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    title: "#438",
    description: "3 Items",
    amount: "$ 500",
    imageUrl: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 5,
    title: "#439",
    description: "3 Items",
    amount: "$ 500",
    imageUrl: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 6,
    title: "#440",
    description: "3 Items",
    amount: "$ 500",
    imageUrl: "https://reqres.in/img/faces/3-image.jpg",
  },
  // Add more card items as needed
];

function CardList() {
  const [clickedItemId, setClickedItemId] = useState(null);

  const handleItemClick = (id) => {
    setClickedItemId(id);
  };

  return (
    <MainContainer heading="Card List">
      <div className="flex justify-between mx-auto space-x-4">
        <div className="w-1/2">
          <Card1 heading="Card list Example 1">
              {cardItems.map((item) => (
                <CardItem
                  key={item.id}
                  item={item}
                  onClick={handleItemClick}
                  isSelected={clickedItemId === item.id}
                />
              ))}
          </Card1>
        </div>

        <div className="w-1/2">
          <Card1 heading="Card list Example 2"
                 showBorder={false}
                 showShadow={false}
          >
              {cardItems.map((item) => (
                <CardItem
                  key={item.id}
                  item={item}
                  onClick={handleItemClick}
                  isSelected={clickedItemId === item.id}
                />
              ))}
          </Card1>
        </div>

      </div>
    </MainContainer>
  );
}

export default CardList;