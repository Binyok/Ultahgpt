document.getElementById("birthdayForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var fullName = document.getElementById("fullName").value;
    var birthDate = document.getElementById("birthDate").value;
    
    // Validasi tanggal lahir
    var today = new Date();
    var selectedDate = new Date(birthDate);
    
    if (selectedDate >= today) {
        alert("Tanggal lahir harus lebih kecil dari hari ini.");
        return;
    }
    
    var age = calculateAge(selectedDate);
    var birthdayMessage = generateBirthdayMessage(fullName, age);
    
    // Menampilkan pesan ulang tahun di halaman baru
    var birthdayPage = window.open();
    birthdayPage.document.write(birthdayMessage);
});

function calculateAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function generateBirthdayMessage(name, age) {
    var message = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ucapan Selamat Ulang Tahun</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="wrapper">
                <div class="container birthday-message">
                    <h2>Selamat Ulang Tahun, ${name}!</h2>
                    <p>Selamat ulang tahun yang ke-${age}! ya temanku, semoga dihari ulangtahunmu ini kamu mendapatkan banyakkkk kabarr bahagiaa.doa dariku sii semoga dapat menjadi pribadi yang lebih baik dari sebelumnyaaa dan semoga semua doa doa mu terkabull. <br> gilaak kamu kerenn bangett sii bertahan sampek ulang tahun mu yang ke-${age}! pasti ada suka dukanya kann. udahlah ga tau mau ngomong apalagi owkkwokwkowkw, sampai ketemu di ulangtahunmu yang selanjutnyaa ${name}!</p>
                    <img src="gambr.jpg" alt="Selamat Ulang Tahun">
                </div>
            </div>
        </body>
        </html>
    `;
    return message;
}
