/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// console.log("users: ", users);

// console.log("todos: ", todos);

// alert(users)

let message = "";

for (let i = 0; i < users.length; i++) {
  const id = users[i].id;
  const Name = users[i].name;
  const city = users[i].address.city;

  const row = `${id} | ${Name} | ${city}\n`;

  message = message + row;

  console.log("Iteration #", i + 1);
  console.log("message: ", message);
}

console.log(message);
alert(message);

const userID = prompt("Who's list do you want to have a look at? (Use ID)");

let toDo = "";

for (let i = 0; i < todos.length; i++) {
  const userId = todos[i].userId;
  const title = todos[i].title;
  const completed = todos[i].completed;

  const list = `${userId} | ${title} | ${completed}\n`;

  toDo = toDo + list;

  if (lastNameToCheck === "Rico") {
    positionOfMyLastName = i;

    // console.log("positionOfMyLastName inside IF: ", positionOfMyLastName);
  }

  console.log("Iteration #", i + 1);
  console.log("To Do: ", toDo);
}

console.log(toDo);
alert(toDo);

