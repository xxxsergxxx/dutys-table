function addTable()
{

var numRows = document.getElementById("rows"),
rows = numRows.value ,
tr = "",
td = "",
firstTable = document.querySelector("table");
console.log(rows);

table = document.createElement("table");

for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");

text = document.createTextNode((i + 1) + "." + (j + 1));
          td.appendChild(text);
          tr.appendChild(td);
          }
        table.appendChild(tr);
      }
      console.log(tr);
      console.log(td);
      if (firstTable == null) {
        return body.appendChild(table);
      } else {
        var newTable = body.appendChild(table);
        return document.body.replaceChild(newTable, firstTable);
      }
    