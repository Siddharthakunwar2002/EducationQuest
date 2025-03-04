const bcrypt = require("bcrypt");

const storedHashedPassword = "$2b$10$HoUWp6/B5hX6ILFRbrUfDOH0XsEHLecMalDosNlbRKG0aUZJfW4j2"; // Get from DB
const enteredPassword = "12"; // The password you are testing

bcrypt.compare(enteredPassword, storedHashedPassword, (err, result) => {
    if (err) {
        console.error("Error comparing passwords:", err);
    } else {
        console.log("Password Match:", result);
    }
});
