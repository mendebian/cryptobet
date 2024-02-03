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
            alert('Você perdeu todo o seu saldo! O saldo foi resetado para 100 CTB.');
        }
    }

    localStorage.setItem('ctbBalance', balance); 
    document.querySelector('.ctb-balance').textContent = `CTB ${balance}`; 
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
    document.querySelector('.ctb-balance').textContent = `CTB ${localStorage.getItem('ctbBalance')}`;
});
