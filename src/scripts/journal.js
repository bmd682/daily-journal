const journalEntries = []

const journalEntry = {}

/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
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

// Convert the current entry object to HTML

const journalHTML = {
    makeJournalEntryComponent (journalEntry) {
                return `<section class="journalEntry">
                    <div class = "log__date"><h3>${journalEntry.date}</h3> </div >
                    <div class = "log__concepts"><h4>Concepts Learned:</h4> ${journalEntry.concepts}</div>
                    <div class = "log__entry"><h4>Journal Entry:</h4> ${journalEntry.entry}</div>
                    <div class = "log__mood"><h4>Mood:</h4> <p>${journalEntry.mood}</p></div>
                    </section>`
    }
}