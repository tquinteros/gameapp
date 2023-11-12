export const pickaxes = [
    {
        id: 1,
        name: "Wooden Pickaxe",
        type: "wood",
        category: "pickaxe",
        level: 1,
        craftable: true,
        recipe: [
            {
                id: 7,
                quantity: 1,
            },
        ],
        tier: 1,
        price: 10,
        description: "A wooden pickaxe.",
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d2/Wooden_Pickaxe_JE3_BE3.png/revision/latest?cb=20200226194132",
    },
    {
        id: 2,
        name: "Stone Pickaxe",
        type: "stone",
        category: "pickaxe",
        level: 2,
        craftable: true,
        recipe: [
            {
                id: 7,
                quantity: 2,
            },
            {
                id: 8,
                quantity: 2,
            },
        ],
        tier: 2,
        price: 20,
        description: "A stone pickaxe.",
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Stone_Pickaxe_JE2_BE2.png/revision/latest?cb=20200217234007",
    },
    {
        id: 3,
        name: "Gold Pickaxe",
        type: "gold",
        category: "pickaxe",
        level: 2,
        craftable: true,
        recipe: [
            {
                id: 7,
                quantity: 2,
            },
            {
                id: 8,
                quantity: 2,
            },
            {
                id: 9,
                quantity: 2,
            },
        ],
        tier: 3,
        price: 50,
        description: "A gold pickaxe.",
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a6/Golden_Pickaxe_JE4_BE3.png/revision/latest?cb=20200226194041",
    },
]