export const swords = [
    {
        id: 200,
        name: "Canyon Sword",
        type: "wood",
        category: "sword",
        level: 1,
        craftable: true,
        recipe: [
            {
                id: 10000,
                quantity: 1,
            },
        ],
        tier: 1,
        price: 10,
        description: "A wooden sword.",
        image: "/items/swords/woodsword.png",
    },
    {
        id: 201,
        name: "Stone Sword",
        type: "stone",
        category: "sword",
        level: 2,
        craftable: true,
        recipe: [
            {
                id: 200,
                quantity: 1,
            },
            {
                id: 10000,
                quantity: 5,
            },
        ],
        tier: 2,
        price: 20,
        description: "A stone sword.",
        image: "/items/swords/stonesword.png",
    },
    {
        id: 202,
        name: "Gold Sword",
        type: "gold",
        category: "sword",
        level: 2,
        craftable: true,
        recipe: [
            {
                id: 201,
                quantity: 1,
            },
            {
                id: 10000,
                quantity: 10,
            },
            {
                id: 10001,
                quantity: 5,
            },
        ],
        tier: 3,
        price: 50,
        description: "A gold sword.",
        image: "/items/swords/goldsword.png",
    },
]