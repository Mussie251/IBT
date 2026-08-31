const usersContainer = document.getElementById("users-container");
const searchInput = document.getElementById("search-input");

let users = [];

async function getUsers() {
  usersContainer.innerHTML = "<p>Loading users...</p>";

  try{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

   users = await response.json();

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


searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value;

  const filteredUsers = users.filter((user) => {
  return user.name.toLowerCase().includes(searchTerm.toLowerCase());

});

usersContainer.innerHTML = filteredUsers.map(
  (user) => `
     <div class="user-card">
       <h2>${user.name}</h2>
       <p>${user.email}</p>
     </div>
     `
)
.join("");
});

