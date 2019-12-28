// Create a "close" button and append it to each list item
// myUL
var todo = document.getElementById("toDo");
var article = document.getElementById("article")
var courselist = document.getElementsByClassName("courseslist")

document.getElementById("todoDiv").style.display = "none"
todo.addEventListener("click", function() {
    console.log("clicked");
    article.style.display = "none";
    courselist.style.display = "none"
    document.getElementById("todoDiv").style.display = "block";
})
console.log(todo);



// Create a "close" button and append it to each list item
var myNodelist = document.getElementById("myUL");

// var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("#myUL")
console.log(list);

// var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    console.log(ev.target);

    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    li.setAttribute("id", "listElem");

    var inputValue = document.getElementById("myInput").value;
    // window.localStorage = inputValue;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}