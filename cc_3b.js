inventory = [ 
    {sku: "sku-001",
    name: "Sparkly Phone Case",
    price:15,
    stock:50,
    },
    {sku: "sku-002",    
    name: "Pizza",
    price:75,
    stock:10,
    },
    {sku: "sku-003",
    name: "Iphone",
    price: 40,
    stock: 5,
    },
    {sku: "sku-004",
    name: "Dog",
    price: 100,
    stock: 2,
    }    
]

inventory.forEach(obj => console.log(`Name: ${obj.name}`));