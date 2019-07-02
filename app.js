let navHover = false;
var data;
var xhttp = new XMLHttpRequest();
window.onload = function () {

    xhttp.onload = function () {
        data = JSON.parse(xhttp.responseText);

        console.log(data)
        for (repo of data) {
            console.log(repo);

            var node = document.createElement("LI");

            var a = document.createElement("a");
            a.style.color = 'white';
            // debugger;
            a.setAttribute("href", repo.html_url)
            a.innerText = repo.name;
            node.appendChild(a);
            // console.log(repo.)
            document.getElementById('UL').appendChild(node);


        }

    };
    xhttp.open("GET", "https://api.github.com/users/karan-sah/repos", true);
    xhttp.send();
}
var hoveredfromPane = () => {
    document.getElementById('gitHubPane').style.display = "block";
}
var gitHubPane = () => {
    document.getElementById('gitHubPane').style.display = "block";
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

        document.getElementById('gitHubPane').style.display = "none";
    }, 500)
}