const table = document.getElementById("table");
const input = document.getElementById("input");
const row = document.getElementsByClassName("row");
let notes = "";

function newnote() {
  window.location.replace("index.html");
}

function back() {
  window.location.replace("main.html");
}

function refresh() {
  table.innerHTML = localStorage.getItem("notes");
}

function save() {
  if(!localStorage.getItem("counter")){
    localStorage.setItem("counter","0");
  }
  localStorage.setItem(localStorage.getItem("counter"),input.value);
  localStorage.setItem("counter",JSON.stringify(parseInt(localStorage.getItem("counter"))+1));
  notes = "";
  for (let i=0; i<=parseInt(localStorage.getItem("counter")); i++){
    if(localStorage.getItem(JSON.stringify(i))){
      notes += `
        <tr><th>${localStorage.getItem(JSON.stringify(i))}</th><th><button onclick="del(${i})">Delete</button></th></tr>
      `
    }
  }
  localStorage.setItem("notes",notes);
}

function del(num) {
  localStorage.removeItem(JSON.stringify(num));
  notes ="";
  for (let i=0; i<=parseInt(localStorage.getItem("counter")); i++){
    if(localStorage.getItem(JSON.stringify(i))){
      notes += `
        <tr><th>${localStorage.getItem(JSON.stringify(i))}</th><th><button onclick="del(${i})">Delete</button></th></tr>
      `
    }
  }
  localStorage.setItem("notes",notes);
  refresh()
}

