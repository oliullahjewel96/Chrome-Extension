let myLeads = [];

const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.querySelector("#ul-el");
let error = document.querySelector("#error");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}
saveBtn.addEventListener("click", toSaveLinks);
tabBtn.addEventListener("click", saveTab);
deleteBtn.addEventListener("dblclick", clearStorage);

function render(leads) {
    let listItems = "";
    for (item = 0; item < leads.length; item++) {
        // ulEl.innerHTML += "<li>" + myLeads[item] + "</li>";

        // const li = document.createElement("li");
        // li.textContent = myLeads[item];
        // ulEl.append(li);

        listItems += `
        <li>
             <a href="${leads[item]}" target="_blank">
             ${leads[item]}
             </a>
             
        </li>`;
    }

    ulEl.innerHTML = listItems;
}

function clearStorage() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
}

function saveTab() {
    // console.log(tabs[0].url);

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
}

function toSaveLinks() {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    inputEl.value = "";
}