let wrapper = document.querySelector('.wrapper');

let clients = document.createElement('div');
clients.className = 'clients';
wrapper.appendChild(clients);

let clientsList = document.createElement('ul');
clientsList.className = 'clients-list';
clients.appendChild(clientsList);

setInterval(() => {
    let clientsListItem = document.createElement('li');
    clientsListItem.className = 'clients-list__item';
    clientsList.appendChild(clientsListItem);
}, 1000);

//////////////////////////////////////////

let chiefs = document.createElement('div');
chiefs.className = 'chiefs';
wrapper.appendChild(chiefs);

let chiefsList = document.createElement('ul');
chiefsList.className = 'chiefs-list';
chiefs.appendChild(chiefsList);

setInterval(() => {
    let chiefsListItem = document.createElement('li');
    chiefsListItem.className = 'chiefs-list__item';
    chiefsList.appendChild(chiefsListItem);
}, 5000);