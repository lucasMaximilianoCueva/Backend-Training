//Class Constructor ES6

class User {
    constructor (name, lastName, mascot, books) {
      this.name = name || 'Lucas';
      this.lastName = lastName || 'Cueva';
      this.mascot = (mascot == undefined) ? [] : mascot;
      this.books = books || [];
    }
    getFullName() {
      return `${this.name} ${this.lastName}`;
    }
    addMascot(mascot) {
      this.mascot.push(mascot)
    }
    getMascots() {
      return this.mascot.length
    }
            addBook(title, author) {
      const bookConstructor = { title: title, author: author };
      this.books.push(bookConstructor);
    }
    getBooks() {
      const titles = [];
      this.books.forEach(book => {
        titles.push(book.title);
      })
        return titles;
    }
  }
  
  const user = new User( 'Gordon', 'Clark', ['Alma', 'Rata'], [ { title: 'The Pragmatic Programmer', author: 'Dave Thomas'} ])
  
  user.getFullName();
  user.addMascot('Lola');
  user.getMascots();
  user.addBook('Clean Code', 'Robert C. Martin');
  user.getBooks();
  
  console.log(user.getFullName());
  console.log(user.getMascots());
  console.log(user.getBooks());
  
  