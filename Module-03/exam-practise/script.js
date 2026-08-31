const usersContainer = document.getElementById("users-container");

async function getUsers() {
  usersContainer.innerHTML = "<p>Loading users...</p>";

  try{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  usersContainer.innerHTML = users.map(
    (user) => `
      <div class="user-card">
         <h2>${user.name}</h2>
         <p>${user.email}</p>
      </div>
    `
  )

  .join("");
} catch (error) {
  usersContainer.innerHTML =
    "<p>Could not load users. Please try again.</p>";

    console.error(error);
  }
}

getUsers();