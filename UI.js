let wrapper = document.querySelector('.wrapper');
const orders = require('./client');
const Chief = require('./chief');

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

let chiefCounter = 1;


function addChief () {
    setInterval(() => {
        let chiefsListItem = document.createElement('li');
        chiefsListItem.className = 'chiefs-list__item';
        chiefsList.appendChild(chiefsListItem);
    }, 5000);
}

addChief();


//////////////////TITLES////////////////////////

let ordersTitle = document.createElement('h3');
ordersTitle.className = 'orders-title';
ordersTitle.textContent = 'Cooked orders';
wrapper.appendChild(ordersTitle);

let clientsTitle = document.createElement('h3');
clientsTitle.className = 'clients-title';
clientsTitle.textContent = 'Clients list';
wrapper.appendChild(clientsTitle);



//////////////////////


let addChiefButton = document.createElement('button');
addChiefButton.className = 'add-chief';
addChiefButton.textContent = 'ADD CHIEF';
chiefs.appendChild(addChiefButton);


console.log(orders.orders);

addChiefButton.addEventListener('click', () => {

    addChief();

    ++chiefCounter;

    let chiefId = document.createElement('h4');
    chiefId.textContent = ('Chief number ' + chiefCounter + ' was added!');
    chiefsList.appendChild(chiefId);

    let chief2 = new Chief();
    setInterval(() => chief2.getCookedOrder(), 5000)
});
