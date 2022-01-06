let myLeads = [];

const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.querySelector("#ul-el");
let error = document.querySelector("#error");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLists();
}
saveBtn.addEventListener("click", toSaveLinks);

function toSaveLinks() {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLists();

    inputEl.value = "";
}

function renderLists() {
    let listItems = "";
    for (item = 0; item < myLeads.length; item++) {
        // ulEl.innerHTML += "<li>" + myLeads[item] + "</li>";

        // const li = document.createElement("li");
        // li.textContent = myLeads[item];
        // ulEl.append(li);

        listItems += `
        <li>
             <a href="${myLeads[item]}" target="_blank">
             ${myLeads[item]}
             </a>
             
        </li>`;
    }

    ulEl.innerHTML = listItems;
}