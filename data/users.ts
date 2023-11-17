export const users = [
    {
        username: "admin",
        password: "admin",
        isAdmin: true,
        level: 1,
        gold: 10000,
        experience: 0,
        hp: 50,
        maxHp: 100,
        inventorySlots: 50,
        skillsLevels: [
            {
                name: "Mining",
                level: 1,
                experience: 0,
            },
            {
                name: "Woodcutting",
                level: 1,
                experience: 0,
            }
        ],
        inventory: [    {
            id: 11103,
            name: "Full Health Potion",
            type: "health",
            category: "potion",
            level: 2,
            tier: 3,
            regenerate: 1000000,
            quantity: 1,
            price: 50,
            description: "A full health potion.",
            image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Potion_of_Healing_JE2_BE2.png/revision/latest?cb=20191027040649",
        },],
    },
    {
        username: "user",
        password: "user",
        isAdmin: false,
        level: 2,
        gold: 20,
        hp: 100,
        maxHp: 100,
        experience: 100,
        inventorySlots: 50,
        skillsLevels: [
            {
                name: "Mining",
                level: 1,
                experience: 0,
            },
            {
                name: "Woodcutting",
                level: 1,
                experience: 0,
            }
        ],
        inventory: [],
    },
]