let count=0;
let x = "Previous Entries: ";
document.getElementById("preventry").innerText = x;

function incrementbtn()
{
    count++;
    document.getElementById("count").innerText = count;
}
function resetbtn()
{
    x+=("    " + count);
    document.getElementById("count").innerText = 0;
    document.getElementById("preventry").innerText = x;
    count = 0;
}

function restartbtn()
{
    count=0;
    x = "Previous Entries: ";
    document.getElementById("count").innerText = 0;
    document.getElementById("preventry").innerText = x;
}