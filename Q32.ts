const current_users: Array<string> = ["Hamna", "Rimsha", "hina", "Hamid", "nadir"];
  const new_users: Array<string> = ["Nadir", "Iman", "HINA", "Alice", "Hira"];
  
  new_users.map((name: string) => {
    if (current_users.includes(name.toLowerCase())) {
      console.log("username", name, "already in use. Please try a different one.");
    } else {
      console.log("username", name, "is available");
    }

  });