// import fetch from 'node-fetch';

// fetch('https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=wIhrZ55bkF2j2HIef%2BaMKaIaZeuhCNyuaB2Lh3zRZ3h0A4wQNqNpXHj7rv7y%2FBM%2BzaahxQU8nn%2BtTH%2BYd8imWw%3D%3D&pageNo=1&numOfRows=10&apiType=JSON&q1=2019&q2=5%EC%9D%B8%20~%209%EC%9D%B8&q3=%EB%8C%80%EC%A0%84&q4=27213&q5=%EC%A0%84%EB%A0%A5&q6=%EC%A0%84%EB%A0%A5')
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

document.addEventListener('DOMContentLoaded', function(){
  fetch('/api/read-data')
    .then(response => response.json())
    .then(data => {
      const tableItem = data.response.body.items.item;
      return updateTable(tableItem);
    })
    .catch(error => console.log(error))
})

function updateTable(items) {
  if(items && items.length > 0) {
    document.querySelector("#dataTable thead").innerHTML =
    '<tr>' +
        Object.keys(items[0]).map(key =>
          `<th>${key}</th>`
        ).join("")
      + '</tr>';
    document.querySelector("#dataTable tbody").innerHTML = 
      items.map(item => {
        return '<tr>' +
          Object.keys(item).map(key =>
            `<td>${item[key]}</td>`
          ).join('')
        + '</tr>';
          }).join('');
    } else {
    clearTable();
    }
}

function clearTable() {
document.querySelector("#dataTable thead").innerHTML = '';
document.querySelector("#dataTable tbody").innerHTML = '';
}