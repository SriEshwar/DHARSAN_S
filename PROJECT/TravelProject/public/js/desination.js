
const items = [
    { name: 'India', country: 'India', rating: '★★★★☆', price: '$93', image: '../images/india.jpeg' },
    { name: 'Dubai', country: 'Dubai', rating: '★★★★★', price: '$105', image: '../images/Dubai.jpeg' },
    { name: 'Brazil', country: 'Brazil', rating: '★★★★☆', price: '$89', image: '../images/brazil.jpeg' },
    { name: 'Australia', country: 'Australia', rating: '★★★★★', price: '$110', image: '../images/australia.jpeg' },
    { name: 'Australia', country: 'Australia', rating: '★★★★★', price: '$110', image: '../images/australia.jpeg' },
];

function filterCards() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredHotels = items.filter(hotel => hotel.country.toLowerCase() === searchTerm);

    displayCards(filteredHotels);
}

function displayCards(items) {
    const hotelGrid = document.getElementById('cardGrid');
    hotelGrid.innerHTML = ''; 

    items.forEach(item => {
        const card = `
            <a href="${getLink(item.name)}" target="_blank" class="item-card">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-rating">Rating&nbsp&nbsp&nbsp&nbsp&nbsp${item.rating}</div>
                    <div class="item-price">StartForm&nbsp&nbsp${item.price}</div>
                </div>
            </a>
        `;
        cardGrid.innerHTML += card;
    });
}

function getLink(name) {
    const links = {
        'India': '../views/infoplaces/india/places.html',
        'Dubai': 'https://www.example.com/dubai',
        'Brazil': 'https://www.example.com/brazil',
        'Australia': 'https://www.example.com/australia',
    };
    return links[name] || '#';
}


displayCards(items);
