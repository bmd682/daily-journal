/*
    this is to render all of the journal entries to the DOM
    it accepts an array and parses it into HTML, entries (array of objects)
*/

const journalList = {
    renderJournalEntries (entries) {
                // const insertionPoint = document.querySelector(".entryLog")

                for (entry of entries) {
                    entryHTML = journalHTML.makeJournalEntryComponent(entry)
                    document.querySelector(".entryLog").innerHTML += entryHTML
                }
    }
}