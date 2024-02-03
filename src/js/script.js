function getRandomNumber() {
    return Math.floor(Math.random() * 6);
}

function updateBalance(win = false) {
    let balance = parseInt(localStorage.getItem('ctbBalance')) || 100;

    if (win) {
        balance += 100;
    } else {
        balance -= 1; 
        if (balance <= 0) {
            balance = 100; 
        }
    }

    localStorage.setItem('ctbBalance', balance); 
    document.querySelector('.ctb-balance').textContent = balance; 
}

function spinSlots() {
    const icons = [
        './src/img/bell.png',
        './src/img/cherry.png',
        './src/img/gampe.png',
        './src/img/seven.png',
        './src/img/gold-pot.png',
        './src/img/bar.png'
    ];

    const slots = document.querySelectorAll('.slot');

    let spins = 0;
    const maxSpins = 10

    const spinInterval = setInterval(() => {
        slots.forEach(slot => {
            const icon = icons[getRandomNumber()];
            const slotIcon = slot.querySelector('.slot-icon');
            slotIcon.src = icon;
        });

        spins++;

        if (spins >= maxSpins) {
            clearInterval(spinInterval);
            displayResult();
        }
    }, 100);
}

function displayResult() {
    const icons = [
        './src/img/bell.png',
        './src/img/cherry.png',
        './src/img/gampe.png',
        './src/img/seven.png',
        './src/img/gold-pot.png',
        './src/img/bar.png'
    ];

    const slots = document.querySelectorAll('.slot');

    slots.forEach(slot => {
        const icon = icons[getRandomNumber()];
        const slotIcon = slot.querySelector('.slot-icon');
        slotIcon.src = icon;
    });

    const icon1 = slots[0].querySelector('.slot-icon').src.split('/').pop();
    const icon2 = slots[1].querySelector('.slot-icon').src.split('/').pop();
    const icon3 = slots[2].querySelector('.slot-icon').src.split('/').pop();

    if (icon1 === icon2 && icon2 === icon3) {
        updateBalance(true);
    } else {
        updateBalance();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (!localStorage.getItem('ctbBalance')) {
        localStorage.setItem('ctbBalance', 100); 
    }
    document.querySelector('.ctb-balance').textContent = localStorage.getItem('ctbBalance');
});
