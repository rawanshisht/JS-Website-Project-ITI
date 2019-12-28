// document.getElementById("todoDiv").style.display = "none"
// todo.addEventListener("click", function(){
//     console.log("clicked");
//     article.style.display="none";
//     document.getElementById("todoDiv").style.display = "block";
// })
// console.log(todo);

var mainContainer = document.getElementById("mainContainer")
var homeTab = document.getElementById("homeTab")
var profileTab = document.getElementById("profileTab")
var aboutTab = document.getElementById("aboutTab")
var contasctTab = document.getElementById("contasctTab")

var itemContainer = document.getElementsByClassName("itemContainer")
var toDo = document.getElementById("toDo")
var courseItem = document.getElementById("courseItem")
var gamesItem = document.getElementById("gamesItem")

var detailContainer = document.getElementsByClassName("detailContainer")
var profile = document.getElementById("profile")
var profileData = document.getElementById("profileData")
var artical = document.getElementById("artical")
var todoDiv = document.getElementById("todoDiv")
var myDIV = document.getElementById("myDIV")
var myInput = document.getElementById("myInput")
var addBtn = document.getElementsByClassName("addBtn")
var myUL = document.getElementById("myUL")

var CourseContainer = document.getElementById("CourseContainer")

create

function show_hide() {
    var click = courseItem.click()
    if (click.style.display == "non") {
        click.style.display = "block"
    } else {
        click.style.display = "non"
    }
}