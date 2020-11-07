let counter = 1
window.onload = function() {
    document.getElementById('button').onclick = onclick

}

function onclick() {
    fetch('https://pgracia.azurewebsites.net/Posts')
        .then(response => response.json())
        .then(response => {
            response.forEach(post => insertPost(post))
        })
}

function insertPost(obj) {
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = obj.id
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = obj.title
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = obj.content
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}