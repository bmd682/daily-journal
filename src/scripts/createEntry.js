const journalFactory = {
    createJournalObject: (newDate, newConcepts, newEntry, newMood) => {
        const newEntry = {
            date: newDate,
            concepts: newConcepts,
            entry: newEntry,
            mood: newMood
        }

        return newEntry
    }
}

export default journalFactory