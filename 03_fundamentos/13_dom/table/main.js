let counter = 1

window.onload = function(e) {
    document.getElementById('add').onclick = onClick
}

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = counter++
        tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td')
    let a = document.createElement('a')

    a.href = 'http://localhost/edit/' + (counter - 1)
    a.innerText = 'Editar'
    tr.appendChild(a)
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}