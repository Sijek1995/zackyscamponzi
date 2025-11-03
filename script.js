let balance = 1000000;
let clickCount = 0;

function updateBalance() {
    document.getElementById('balance').textContent = formatRupiah(balance);
}

function formatRupiah(amount) {
    return 'Rp ' + amount.toLocaleString('id-ID');
}

function generateProfit() {
    clickCount++;
    const profit = Math.floor(Math.random() * 50000) + 10000;
    balance += profit;
    
    const messages = [
        `💰 Anda dapat profit ${formatRupiah(profit)}!`,
        `🎉 Profit ${formatRupiah(profit)} masuk!`,
        `💸 Tambahan ${formatRupiah(profit)} untuk Anda!`,
        `🤑 ${formatRupiah(profit)} berhasil di-klaim!`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('profitMessage').textContent = randomMessage;
    document.getElementById('profitMessage').style.color = '#27ae60';
    
    // Ubah warna button
    const colors = ['#e74c3c', '#3498db', '#9b59b6', '#f39c12', '#2ecc71'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('clickBtn').style.background = randomColor;
    
    updateBalance();
}

function buyPackage(price) {
    if (balance >= price) {
        balance -= price;
        
        // Simulasi return tidak realistis
        const fakeReturn = price * (0.2 + Math.random() * 0.8);
        setTimeout(() => {
            balance += price + fakeReturn;
            updateBalance();
            alert(`🎊 "Return" ${formatRupiah(fakeReturn)} telah ditambahkan!\n\n⚠️ INI SIMULASI: Return tidak realistis seperti ini adalah ciri skema ponzi!`);
        }, 2000);
        
        updateBalance();
    } else {
        alert('Saldo tidak cukup! Silakan "klik untuk profit" terlebih dahulu.\n\n⚠️ INI SIMULASI: Skema ponzi sering memaksa korban untuk menarik orang baru.');
    }
}

// Initialize
updateBalance();