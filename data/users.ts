export const users = [
    {
        username: "admin",
        password: "admin",
        isAdmin: true,
        level: 1,
        gold: 10000,
        experience: 0,
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
    {
        username: "user",
        password: "user",
        isAdmin: false,
        level: 2,
        gold: 20,
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