import API from "./data.js"
import journalList from "./entryList.js"
import journalFactory from "./createEntry.js"

const saveElement = document.querySelector(".saveBtn")
console.log(saveElement)

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files
*/

API.getJournalEntries().then(entryArray => journalList.renderJournalEntries(entryArray))

saveElement.addEventListener("submit", /*Placeholder function for when submit is pressed*/)

let newEntry = journalFactory.createJournalObject()

console.log(newEntry)