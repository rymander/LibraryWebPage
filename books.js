const myLibrary = []
const table = document.getElementById('table')

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const addNewBook = document.querySelector("#addNewBook")
const newBookForm = document.querySelector("#newBookForm")


// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", (event) => {
  event.preventDefault()
  newBookForm.reset()
  dialog.close();
});

addNewBook.addEventListener("click", (event)=>{
  event.preventDefault()
  const newTitle = document.querySelector("#newTitle")
  const newAuthor = document.querySelector("#newAuthor")
  const newPageNum = document.querySelector("#newPageNum")
  console.log(newTitle.value)
  const newBook = new Book(newTitle.value, newAuthor.value, parseInt(newPageNum.value))
  addBookToLibrary(newBook)
  newBookForm.reset()
  dialog.close()
})



function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pageNum = pages;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pageNum} pages`}
  }

  const goodByeEri = new Book('Goodbye Eri', 'Tatsuki Fujimoto', 208)
  const dune = new Book('Dune', 'Frank Herbert', 896)

  function addBookToLibrary(book){
    myLibrary.push(book)
    const newBody = document.createElement('tbody')
    const newTableRow = document.createElement('tr')
    const title = document.createElement('td')
    const read = document.createElement('button')
    read.innerText = 'READ'
    read.classList.add('notRead')
    read.addEventListener('click', (event)=>{
      event.preventDefault()      
      read.classList.toggle('yesRead')
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'REMOVE';
    deleteBtn.addEventListener('click', (event) => {
      event.preventDefault();
      // Remove book from myLibrary
      const index = myLibrary.indexOf(book);
      if (index > -1) {
        myLibrary.splice(index, 1); // Remove the book from the library
      }
      // Remove the row from the table
      newTableRow.remove();
    });
    

    title.innerHTML = `${book.title}`
    
    const author = document.createElement('td')
    author.innerText = `${book.author}`
    
    const pages = document.createElement('td')
    pages.innerText = `${book.pageNum}`
    
    console.log(`${book.title} added to myLibrary`)

    newTableRow.append(title, author, pages, read, deleteBtn)
    newBody.append(newTableRow)
    table.append(newBody)
  }

  addBookToLibrary(goodByeEri)
  addBookToLibrary(dune)

 