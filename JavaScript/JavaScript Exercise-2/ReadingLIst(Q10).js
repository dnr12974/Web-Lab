let books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false }
  ];
  
  books.forEach(book => {
    if (book.alreadyRead) {
      console.log(`You already read "${book.title}" by ${book.author}.`);
    } else {
      console.log(`You still need to read "${book.title}" by ${book.author}.`);
    }
  });

  
 /*OUTPUT: 
You already read "The Hobbit" by J.R.R. Tolkien.
You still need to read "The Lord of the Rings" by J.R.R. Tolkien.*/