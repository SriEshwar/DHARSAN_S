document.addEventListener('DOMContentLoaded', () => {
    const newTurfBtn = document.getElementById('new-turf-btn');
    const modal = document.getElementById('turf-form-modal');
    const closeModal = document.getElementById('close-modal');
    const turfForm = document.getElementById('turf-form');
    const turfList = document.getElementById('turf-list');

    newTurfBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    turfForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(turfForm);
        const turfData = {
            name: formData.get('turf-name'),
            startTime: formData.get('start-time'),
            endTime: formData.get('end-time'),
            imgFile: formData.get('turf-img'),
            fees: formData.get('fees')
        };
        addTurfCard(turfData);
        turfForm.reset();
        modal.style.display = 'none';
    });

    function addTurfCard(turfData) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const turfCard = document.createElement('div');
            turfCard.className = 'card';
            turfCard.innerHTML = `
                <img src="${e.target.result}" alt="Turf Image">
                <h3>${turfData.name}</h3>
                <p>Fees: $${turfData.fees}</p>
                <p>Start: ${turfData.startTime}</p>
                <p>End: ${turfData.endTime}</p>
            `;
            turfList.appendChild(turfCard);
        };
        reader.readAsDataURL(turfData.imgFile);
    }
});
