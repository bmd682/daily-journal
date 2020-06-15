/* Retrieve the journal entries from the JSON database,
    convert the array, and send to the render function
*/

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
            .then((parsedResponse) => {
                return parsedResponse
            })
    }
}

export default API