"use strict";
const current_users = ["Hamna", "Rimsha", "hina", "Hamid", "nadir"];
const new_users = ["Nadir", "Iman", "HINA", "Alice", "Hira"];
new_users.map((name) => {
    if (current_users.includes(name.toLowerCase())) {
        console.log("username", name, "already in use. Please try a different one.");
    }
    else {
        console.log("username", name, "is available");
    }
});
