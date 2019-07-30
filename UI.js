let wrapper = document.querySelector('.wrapper');

/////////////////CLIENTS BLOCK////////////////////////

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

///////////////////ORDERS BLOCK///////////////////////

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

//////////////////TITLES////////////////////////

let ordersTitle = document.createElement('h3');
ordersTitle.className = 'orders-title';
ordersTitle.textContent = 'Cooked orders';
wrapper.appendChild(ordersTitle);

let clientsTitle = document.createElement('h3');
clientsTitle.className = 'clients-title';
clientsTitle.textContent = 'Clients list';
wrapper.appendChild(clientsTitle);
