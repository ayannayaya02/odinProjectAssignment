const myLibrary=[];

function Book (title, author, pages, history){
    //the constructor
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.history=history;   
}

function revealLibrary(){
    const booksList =document.querySelector(`#table`);
    booksList.content = ``;
    
}