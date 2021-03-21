//Constructor Function

function User(name, lastName, mascot, books) {
  this.name = name || "Lucas";
  this.lastName = lastName || "Cueva";
  this.mascot = mascot == undefined ? [] : mascot;
  this.books = books || [];
}

User.prototype.getFullName = function () {
  return `${this.name} ${this.lastName}`;
};
User.prototype.addMascot = function (mascot) {
  this.mascot.push(mascot);
};
User.prototype.getMascots = function () {
  return this.mascot.length;
};
User.prototype.addBook = function (title, author) {
  const bookConstructor = { title: title, author: author };
  this.books.push(bookConstructor);
};
User.prototype.getBooks = function () {
  const titles = [];
  this.books.forEach((book) => {
    titles.push(book.title);
  });
  return titles;
};

const user = new User(
  "Gordon",
  "Clark",
  ["Alma"],
  [{ title: "The Pragmatic Programmer", author: "Dave Thomas" }]
);

user.getFullName();
user.addMascot("Rata");
user.getMascots();
user.addBook("Clean Code", "Robert C. Martin");
user.getBooks();

console.log(user.getFullName());
console.log(user.getMascots());
console.log(user.getBooks());
