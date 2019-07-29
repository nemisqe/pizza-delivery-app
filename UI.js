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