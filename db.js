const createQuery = "CREATE TABLE IF NOT EXISTS STUDENT(ID INTEGER PRIMARY KEY, NAME TEXT)";
db.run(createQuery, (err) => {
    if (err) {
        return console.error("Error creating table:", err.message);
    }
})
console.log("Table created successfully");