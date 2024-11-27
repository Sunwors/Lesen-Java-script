let users = [
    {
        id: 1,
        name: "John Doe",
        age: 25,
        email: "john.doe@example.com",
        status: true
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 30,
        email: "jane.smith@example.com",
        status: false
    },
    {
        id: 3,
        name: "Mike Johnson",
        age: 22,
        email: "mike.johnson@example.com",
        status: true
    },
    {
        id: 4,
        name: "Emma Brown",
        age: 28,
        email: "emma.brown@example.com",
        status: false
    },
    {
        id: 5,
        name: "Chris Green",
        age: 35,
        email: "chris.green@example.com",
        status: true
    },
    {
        id: 6,
        name: "Olivia White",
        age: 27,
        email: "olivia.white@example.com",
        status: false
    },
    {
        id: 7,
        name: "James Black",
        age: 24,
        email: "james.black@example.com",
        status: true
    },
    {
        id: 8,
        name: "Sophia Miller",
        age: 29,
        email: "sophia.miller@example.com",
        status: false
    },
    {
        id: 9,
        name: "Liam Wilson",
        age: 31,
        email: "liam.wilson@example.com",
        status: true
    },
    {
        id: 10,
        name: "Mia Taylor",
        age: 26,
        email: "mia.taylor@example.com",
        status: false
    },
    {
        id: 11,
        name: "Noah Martinez",
        age: 23,
        email: "noah.martinez@example.com",
        status: true
    }
];
// debugger
// for (let i=2;i < users.length-1; i++) {
// console.log(users[i]);
// }

for (let i=0;i < users.length; i++) {
    document.write(`<h3>user info - ${users[i].name}</h3>`);
}