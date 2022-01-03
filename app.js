const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.querySelector("#ul-el");

let myLeads = ["google", "amazon", "tesla", "sillicon valley"];

saveBtn.addEventListener("click", toSaveLinks);

function toSaveLinks() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
}

for (item = 0; item < myLeads.length; item++) {
    // ulEl.innerHTML += "<li>" + myLeads[item] + "</li>";

    const li = document.createElement("li");
    li.textContent = myLeads[item];
    ulEl.append(li);
}