document.getElementById("formbutton").addEventListener("click",function(){
    document.getElementById("formcontainer").style.display = "block";
});

document.getElementById("formcont").addEventListener("submit",function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var task = document.getElementById("task").value;

    var table = document.getElementById("tablecont");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "<b>Name</b>";
    cell2.innerHTML = "<b>Email</b>";
    cell3.innerHTML = "<b>Task</b>";

    var row1 = table.insertRow(table.rows.length);
    var cell3 = row1.insertCell(0);
    var cell4 = row1.insertCell(1);
    var cell5 = row1.insertCell(2);
    cell3.innerHTML = name;
    cell4.innerHTML = email;
    cell5.innerHTML = task;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("task").value = "";

});