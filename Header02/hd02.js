fetch('./hd02_json.json')
.then(results => results.json())
.then(console.log)
let placeholder = document.querySelector("#data-output");