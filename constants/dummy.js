

export const pizzaList = [
    {
        id: 1,
        name: "Pizza Pepperoni",
        description: "lorem ipsum dolor sit amet",
        price: "0.005 ETH",
        data: "0x11",
        thumbnail: require("../assets/images/pizza_pep.png"),
        category: "Pizza"
    },
    {
        id: 2,
        name: "Pizza Cheese",
        description: "lorem ipsum dolor sit amet",
        price: "0.005 ETH",
        data: "0x12",
        thumbnail: require("../assets/images/pizza_cheese.png"),
        category: "Pizza"
    },
    {
        id: 3,
        name: "Pizza Mushrooms",
        description: "lorem ipsum dolor sit amet",
        price: "0.005 ETH",
        data: "0x13",
        thumbnail: require("../assets/images/pizza_mushrooms.png"),
        category: "Pizza"
    },
]

export const drinksList = [
    {
        id: 1,
        name: "Ice Lemon Tea",
        description: "lorem ipsum dolor sit amet",
        price: "0.0005 ETH",
        data: "0x31",
        thumbnail: require("../assets/images/ice-tea.png"),
        category: "Drinks"
    },
    {
        id: 2,
        name: "Coke",
        description: "lorem ipsum dolor sit amet",
        price: "0.0005 ETH",
        data: "0x32",
        thumbnail: require("../assets/images/coke.png"),
        category: "Drinks"
    },
    {
        id: 3,
        name: "Coffee",
        description: "lorem ipsum dolor sit amet",
        price: "0.0005 ETH",
        data: "0x33",
        thumbnail: require("../assets/images/coffee-cup.png"),
        category: "Drinks"
    },
]


export const dessertsList = [
    
    
    {
        id: 1,
        name: "Cheese Cake",
        description: "lorem ipsum dolor sit amet",
        price: "0.001 ETH",
        data: "0x21",
        thumbnail: require("../assets/images/cheesecake.png"),
        category: "Desserts"
    },
    {
        id: 2,
        name: "Cup Cake",
        description: "lorem ipsum dolor sit amet",
        price: "0.001 ETH",
        data: "0x22",
        thumbnail: require("../assets/images/cupcake.png"),
        category: "Desserts"
    },
    {
        id: 3,
        name: "Pudding",
        description: "lorem ipsum dolor sit amet",
        price: "0.001 ETH",
        data: "0x23",
        thumbnail: require("../assets/images/pudding.png"),
        category: "Desserts"
    },
    
]

const dummyData = {
    dessertsList,
    drinksList,
    pizzaList
};

export default dummyData;