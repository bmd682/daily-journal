import API from "./data.js"
import journalList from "./entryList.js"

// const journalEntries = []

// const journalEntry = {}

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files
*/

API.getJournalEntries().then(entryArray => journalList.renderJournalEntries(entryArray))