const windows = [
    { id: 1, opened: false, message: "Kocham Cię bardziej niż wczoraj, ale mniej niż jutro ❤️" },
    { id: 2, opened: false, message: "Twoje oczy są moim ulubionym miejscem na świecie ✨" },
    { id: 3, opened: false, message: "Dziękuję, że jesteś — jesteś moją całą magią świąt 🎄💫" },
    { id: 4, opened: false, message: "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLlf-mV4aQJrx0nHUxbNrKJOQTvDp__lPm5OFocs5-Znk1oFzK-FafVIhSm2gGtvsSiU&usqp=CAU' style='width:100%; border-radius:10px;'>" },
    { id: 5, opened: false, message: "Nie mogę się doczekać każdej wspólnej chwili z Tobą 💞" },
];

// Automatycznie generujemy resztę (od 6 do 24, bez wiadomości)
for (let i = 6; i <= 24; i++) {
    windows.push({
        id: i,
        opened: false,
        message: "Brak wiadomości — dodasz później ❤️"
    });
}

module.exports = windows;
