var nameInput = document.getElementById ("name");
var urlInput = document.getElementById("url");
var addBtn = document.getElementById("addBtn");


var tableBody = document.getElementById("tableBody");


var bookMarks;
var mainIndex = 0;

if(localStorage.getItem("bookMarks")==null){
    bookMarks=[];
}
else{
    bookMarks = JSON.parse( localStorage.getItem ("bookMarks"));
    displayBook(bookMarks);
}
addBtn.onclick= function(){
if(addBtn.innerHTML == "Update"){
    addBtn.innerHTML= "Submit";
    var bookMark ={
        name : nameInput. value,
        url : urlInput. value
    }
    bookMarks.splice(mainIndex,1,bookMarks);
}else{
    var bookMark ={
        name : nameInput. value,
        url : urlInput. value
    }
}
   
    bookMarks. push(bookMark);
    // console. log(bookMarks);
    localStorage.setItem("bookMarks",JSON.stringify(bookMarks));
    displayBook(bookMarks);
    clearData();
}
    

function displayBook(AnyArray){
var marks = '';

for(var i = 0; i< AnyArray.length; i++){
marks+=`<tr>
        <td>${AnyArray[i].name}</td>
       
        <td> <button onclick="updateBook(${i})" class="btn btn-info">Update </button>
        <td> <button onclick="deleteBook(${i})" class="btn btn-danger">Delete </button>
        </td>`
}

tableBody.innerHTML=marks ;
}

function deleteBook(index){
bookMarks.splice(index,1);
localStorage.setItem("bookMarks",JSON.stringify(bookMarks));
displayBook(bookMarks);
}

function clearData(){
    nameInput.value="";
    urlInput.value="";
}

function updateBook(index){
nameInput.value = bookMarks[index].name;
urlInput.value = bookMarks[index].url;
addBtn.innerHTML= "Update";
mainIndex =index;
}

function search(term){
    var wantedBook=[];
    for(var i =0; i<bookMarks.length; i++){
        if(bookMarks[i].name.toLowercase.includes(term))
        wantedBook.push(bookMarks[i]);
    }
    displayBook(wantedBook);
}