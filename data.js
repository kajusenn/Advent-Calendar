const windows = [
    { id: 1, opened: false, message: "MESSAGE" },
    { id: 2, opened: false, message: "MESSAGE" },
    { id: 3, opened: false, message: "MESSAGE" },
    { id: 4, opened: false, message: "MESSAGE" },
    { id: 5, opened: false, message: "MESSAGE" },
    { id: 6, opened: false, message: "MESSAGE" },
    { id: 7, opened: false, message: "MESSAGE" },
    { id: 8, opened: false, message: "MESSAGE" },
    { id: 9, opened: false, message: "MESSAGE" },
    { id: 10, opened: false, message: "MESSAGE" },
    { id: 11, opened: false, message: "MESSAGE" },
    { id: 12, opened: false, message: "MESSAGE" },
    { id: 13, opened: false, message: "MESSAGE" },
    { id: 14, opened: false, message: "MESSAGE" },
    { id: 15, opened: false, message: "MESSAGE" },
    { id: 16, opened: false, message: "MESSAGE" },
    { id: 17, opened: false, message: "MESSAGE" },
    { id: 18, opened: false, message: "MESSAGE" },
    { id: 19, opened: false, message: "MESSAGE" },
    { id: 20, opened: false, message: "MESSAGE" },
    { id: 21, opened: false, message: "MESSAGE" },
    { id: 22, opened: false, message: "MESSAGE" },
    { id: 23, opened: false, message: "MESSAGE" },
    { id: 24, opened: false, message: "MESSAGE" },
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
