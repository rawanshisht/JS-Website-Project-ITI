var parser = window.location.search.split("?");
var arr = parser[1].split("&").join(",").split("=").join(",").split(",")

var date = new Date();
date.setDate(15);
var name = arr[1];
var age = arr[3];
var gender = arr[5];
var color = arr[7];
var counter = 0;

document.cookie = "";
setCookies = (name, value) => {
    document.cookie = name + "=" + value + ";";
}

getCookies = () => {

    var cookieParts = document.cookie.split(";")
    cookieParts.forEach(function (cookiePart) {
        var nameValuePair = cookiePart.split("=");
        // console.log(nameValuePair);
        if (nameValuePair[0].trim() == "name") {
            name = nameValuePair[1];
            // console.log(nameValuePair[1])
        }
        // console.log(nameValuePair[])
        if (nameValuePair[0].trim() == "age") {
            age = nameValuePair[1];
            // console.log(nameValuePair[1]);

        }
        if (nameValuePair[0].trim() == "gender") {
            gender = nameValuePair[1];
            // console.log(gender)
        }
        if (nameValuePair[0].trim() == "color") {
            color = nameValuePair[1];
        }
        if (nameValuePair[0].trim() == "counter") {
            counter = nameValuePair[1];
            counter = parseInt(counter) + 1;
            console.log(counter);
            setCookies("counter", counter);
            date = new Date();
            date.setDate(31);
            setCookies("date", date.toUTCString());
            // console.log(counter);
            console.log(document.cookie);

        }
    })
}

deleteCookie = () => {
    date = new Date(0);
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // to expire date
    setCookies("date", date.toUTCString());
}

deleteCookie();

getCookies();

setCookies("name", name);
setCookies("age", age);
setCookies("gender", gender);
setCookies("color", color);
setCookies("counter", counter);
setCookies("date", date.toUTCString());
// document.cookie = "date=" + date.toUTCString() + ";";
console.log(document.cookie);


deleteCookie();
deleteCookie();
deleteCookie();
// document.write("<img src=" + gender + ".jpg" + "><h2>Welcome " + name.fontcolor(color) + " you have visited the site " + counter.toString().fontcolor(color) + " times</h2>")
