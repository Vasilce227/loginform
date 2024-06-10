function AddBook(){
    bookName=bookName.value;
    bookID=bookID.value;
    authorName=authorName.value;
    bookPrice=bookPrice.value;
    bookDescription=bookDescription.value;
    window.location="./home.html"


    console.log(bookName,bookID,authorName,bookPrice,bookDescription);

    bookDetails={
        bookName,
        bookID,
        authorName,
        bookPrice,
        bookDescription


    }
    if(bookID in localStorage){
        alert("Already added")
    }
    else{
        localStorage.setItem(bookID,JSON.stringify(bookDetails))
        alert("Book added successfully")
        window.location="./search.html"
    }
}
function Display(){
    bookID=book_details.value
    console.log(bookID);


    if(bookID in localStorage){
        bookDetails=JSON.parse(localStorage.getItem(bookID))

        bookDetailsDiv=document.getElementById('book-details')
        bookDetailsDiv.innerHTML=`
        <div>        <span>book Name:${bookDetails.bookName}</span>
        </div>
        <div>        <span>book ID:${bookDetails.bookID}</span>
        </div>
        <div>Author Name:${bookDetails.authorName}</div>
        <div>Book Description${bookDetails.bookDescription}:</div> `
    
    }
    else{
        alert("Book not found")
    }


}
