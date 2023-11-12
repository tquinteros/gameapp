export const axes = [
    {
        id: 100,
        name: "Wooden Axe",
        type: "wood",
        category: "axe",
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
        description: "A wooden axe.",
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Wooden_Axe_JE2_BE2.png/revision/latest?cb=20200217234355",
    },
    {
        id: 101,
        name: "Stone Axe",
        type: "stone",
        category: "axe",
        level: 2,
        craftable: true,
        recipe: [
            {
                id: 100,
                quantity: 1,
            },
            {
                id: 10000,
                quantity: 5,
            },
        ],
        tier: 2,
        price: 20,
        description: "A stone axe.",
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Stone_Axe_JE2_BE2.png/revision/latest?cb=20200217234417",
    },
    {
        id: 102,
        name: "Gold Axe",
        type: "gold",
        category: "axe",
        level: 2,
        craftable: true,
        recipe: [
            {
                id: 101,
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
        description: "A gold axe.",
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Golden_Axe_JE3_BE2.png/revision/latest?cb=20200217234513",
    },
]