function addRow() {

    var v1 = "V1";
    var v2 = "v2";
    var v3 = "v3";
    var v4 = "v4";
    var v5 = "v5";
    var v6 = "v6";
    var v7 = "v7";

    var table = document.getElementById("clientViewContainerTable");
    var rowCount = table.rows.length;

    for (var i = 0; i <= 10; i++) {
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML = v1;
        row.insertCell(1).innerHTML = v2;
        row.insertCell(2).innerHTML = v3;
        row.insertCell(3).innerHTML = v4;
        row.insertCell(4).innerHTML = v5;
        row.insertCell(5).innerHTML = v6;
        row.insertCell(6).innerHTML = v7;
    }
}