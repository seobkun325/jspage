document.addEventListener("DOMContentLoaded",(function(){fetch("/api/read-data").then((function(t){return t.json()})).then((function(t){return function updateTable(t){t&&t.length>0?(document.querySelector("#dataTable thead").innerHTML="<tr>"+Object.keys(t[0]).map((function(t){return"<th>".concat(t,"</th>")})).join("")+"</tr>",document.querySelector("#dataTable tbody").innerHTML=t.map((function(t){return"<tr>"+Object.keys(t).map((function(n){return"<td>".concat(t[n],"</td>")})).join("")+"</tr>"})).join("")):function clearTable(){document.querySelector("#dataTable thead").innerHTML="",document.querySelector("#dataTable tbody").innerHTML=""}()}(t.response.body.items.item)})).catch((function(t){}))}));