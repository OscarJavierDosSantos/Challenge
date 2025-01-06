const pets = [
    { id: 1, name: 'Fido', species: 'Dog', isAdopted: false, owner: null },
    { id: 2, name: 'Whiskers', species: 'Cat', isAdopted: false, owner: null }
];

document.getElementById('home-btn').addEventListener('click', showHome);
document.getElementById('list-btn').addEventListener('click', showPetList);
document.getElementById('add-btn').addEventListener('click', showAddPetForm);

function showHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Welcome to the Pet List</h2>
        <p>Manage your pets easily.</p>
    `;
}

function showPetList() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Pet List</h2>';
    const ul = document.createElement('ul');
    pets.forEach(pet => {
        const li = document.createElement('li');
        li.className = 'pet-item';
        li.innerHTML = `
            <h3>${pet.name}</h3>
            <p>Species: ${pet.species}</p>
            <p>Adopted: ${pet.isAdopted ? 'Yes' : 'No'}</p>
            ${pet.isAdopted ? `<p>Owner: ${pet.owner}</p>` : `<button class="adopt-btn" onclick="adoptPet(${pet.id})">Adopt</button>`}
        `;
        ul.appendChild(li);
    });
    content.appendChild(ul);
}

function showAddPetForm() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Add a New Pet</h2>
        <form id="add-pet-form">
            <label>
                Name:
                <input type="text" id="pet-name" required>
            </label>
            <label>
                Species:
                <input type="text" id="pet-species" required>
            </label>
            <button type="submit">Add Pet</button>
        </form>
    `;
    document.getElementById('add-pet-form').addEventListener('submit', addPet);
}

function addPet(event) {
    event.preventDefault();
    const name = document.getElementById('pet-name').value;
    const species = document.getElementById('pet-species').value;
    const newPet = { id: Date.now(), name, species, isAdopted: false, owner: null };
    pets.push(newPet);
    showPetList();
}

function adoptPet(id) {
    const pet = pets.find(p => p.id === id);
    pet.isAdopted = true;
    pet.owner = 'John Doe';
    showPetList();
}

// Show home page by default
showHome();