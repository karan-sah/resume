let navHover = false;
var data;
var xhttp = new XMLHttpRequest();
window.onload = function () {

    xhttp.onload = function () {
        data = JSON.parse(xhttp.responseText);

        console.log(data)
        for (repo of data) {
            console.log(repo.name);

            var node = document.createElement("LI");
            var a = document.createElement("a");

            a.setAttribute("href", repo.url)
            a.innerText = repo.name;
            node.appendChild(a);
            document.getElementById('UL').appendChild(node);

        }

    };
    xhttp.open("GET", "https://api.github.com/users/karan-sah/repos", true);
    xhttp.send();
}
var hoveredfromPane = () => {
    document.getElementById('demo').style.display = "block";
}
var gitHubPane = () => {
    document.getElementById('demo').style.display = "block";
}
// var hideGitHubPane = () => {

//     document.getElementById('demo').style.display = "none";
//     setTimeout(() => {

//         if (!navHover) {
//             document.getElementById('demo').style.display = "none";
//         }
//     }, 500);
// }
var hideGitHubPanefromPane = () => {
    setTimeout(() => {

        document.getElementById('demo').style.display = "none";
    }, 500)
}