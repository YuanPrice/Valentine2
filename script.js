let enteredPassword = "";

// Fungsi untuk menambah angka ke password
function addNumber(num) {
    if (enteredPassword.length < 8) {
        enteredPassword += num;
        document.getElementById("passwordInput").value = enteredPassword;
    }
}

// Fungsi untuk menghapus password
function clearPassword() {
    enteredPassword = "";
    document.getElementById("passwordInput").value = "";
}

// Fungsi untuk mengecek password
function checkPassword() {
    const correctPassword = "14022025";
    if (enteredPassword === correctPassword) {
        document.getElementById("lockscreen").style.display = "none";
        document.getElementById("suratPage").style.display = "block";
    } else {
        alert("Password salah! Coba lagi.");
        clearPassword();
    }
}

// Fungsi untuk menampilkan pesan di surat
function showMessage() {
    document.getElementById("message").style.display = "block";
}

// Fungsi untuk masuk ke galeri
function goToGallery() {
    document.getElementById("suratPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "block";
}

// Fungsi untuk keluar
function exitPage() {
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("exitPage").style.display = "block";
}