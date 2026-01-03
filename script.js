function addBook() {
  let book = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  if (book === "" || author === "") {
    alert("Please fill all fields");
    return;
  }

  let li = document.createElement("li");
  li.innerText = book + " by " + author;

  document.getElementById("bookList").appendChild(li);

  document.getElementById("bookName").value = "";
  document.getElementById("author").value = "";
}
