const petItems = [
  {
    _id: 1,
    img: require("../imgs/item1.png"),
    title: "Dog Harness BTW",
    price: "$20",
    size: "S M L",
    review: 5
  },
  {
    _id: 2,
    img: require("../imgs/item2.png"),
    title: "Dog Harness BLACK",
    price: "$31-38",
    size: "S M L",
    review: 4
  },
  {
    _id: 3,
    img: require("../imgs/item3.png"),
    title: "cat troys (value pack)",
    price: "$20-$30",
    size: "S M L",
    review: 5
  },
  {
    _id: 4,
    img: require("../imgs/item4.png"),
    title: "dog harness light pink",
    price: "$10-$15",
    size: "S L",
    review: 5
  },
  {
    _id: 5,
    img: require("../imgs/item5.png"),
    title: "DOG harness BLUE",
    price: "$5-$15",
    size: "S M L",
    review: 4
  },
  {
    img: require("../imgs/item6.png"),
    title: "harness lovely PINK",
    price: "$23",
    size: "M L",
    review: 5
  }
];

export function getItems() {
  return petItems;
}
