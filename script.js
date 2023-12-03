document.addEventListener('DOMContentLoaded',function (){
    const addBookButton= document.getElementById('addBook');
    const bookList= document.getElementById('bookList');

    addBookButton.addEventListener('click', function () {
        const bookTitle= document.getElementById('bookTitle').value;
        const bookAuthor= document.getElementById('bookAuthor').value;
        const publishYear= document.getElementById('publishYear').value;
       
        if (bookTitle && bookAuthor && publishYear){
            const listItem= document.createElement('li');
            listItem.className='list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML= ` <strong> ${bookTitle}</strong>  by ${bookAuthor} , Year: ${publishYear} 
            <button class="btn btn-danger btn-primary " onClick= "removeBook(this)" >Remove</button>`;

            bookList.appendChild(listItem);

            document.getElementById('bookTitle').value='';
            document.getElementById('bookAuthor').value='';
            document.getElementById('publishYear').value='';

        }else{
            alert('Please Enter a valid book detail.');

        }
    });
});

function removeBook(button) {
    const listItem = button.parentElement;
    const bookList = listItem.parentElement;
    bookList.removeChild(listItem);
}