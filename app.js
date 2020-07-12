function dark()
{
    document.getElementById("h1").innerHTML = "---Dark-Mode---";
    document.getElementById("background").style.backgroundColor = "#333";
    document.getElementById("h1").style.color = "aliceblue";
    document.getElementById("btn1").style.color = "goldenrod";
    document.getElementById("btn2").style.color = "goldenrod";
    document.getElementById("btn1").style.borderColor = "goldenrod";
    document.getElementById("btn1").style.backgroundColor = "#333";
    document.getElementById("btn2").style.borderColor = "goldenrod";
    document.getElementById("btn2").style.backgroundColor = "#333";
}
function light()
{
    document.getElementById("h1").innerHTML = "---Light-Mode---";
    document.getElementById("background").style.backgroundColor = "aliceblue";
    document.getElementById("h1").style.color = "#333";
    document.getElementById("btn1").style.color = "purple";
    document.getElementById("btn2").style.color = "purple";
    document.getElementById("btn1").style.borderColor = "purple";
    document.getElementById("btn1").style.background = "aliceblue";
    document.getElementById("btn2").style.borderColor = "purple";
    document.getElementById("btn2").style.background = "aliceblue";
}