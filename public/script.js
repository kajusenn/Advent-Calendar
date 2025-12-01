

// AUTOMATYCZNE BLOKOWANIE OD 1 DO 24 GRUDNIA
function canOpen(id) {
    const today = new Date();

    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;

    // TYLKO GRUDZIEŃ DZIAŁA
    if (currentMonth !== 12) return false;

    // Możesz otworzyć tylko jeśli numer okienka <= numer dnia
    return id <= currentDay;
}

fetch("http://localhost:3000/windows")
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("windows");

        data.forEach(win => {

            const item = document.createElement("div");
            item.classList.add("window");

            const front = document.createElement("div");
            front.classList.add("front");
            front.textContent = win.id;

            const back = document.createElement("div");
            back.classList.add("back");
            back.innerHTML = "";

            if (win.opened) item.classList.add("opened");

            const showModal = (msg) => {
                const modal = document.getElementById("modal");
                const modalMsg = document.getElementById("modal-message");

                modalMsg.innerHTML = msg;
                modal.style.display = "flex";
            };

            item.addEventListener("click", () => {

                // BLOKADA KALENDARZA (1–24 grudnia)
                // if (!canOpen(win.id)) {
                //     alert("ALERT DATE:  " + win.id + ".12");
                //     return;
                // }

                // Gdy już otwarte
                if (item.classList.contains("opened")) {
                    back.innerHTML = win.message;
                    showModal(win.message);
                    return;
                }

                // Otwieranie w backendzie
                fetch(`http://localhost:3000/windows/${win.id}`, {
                    method: "PUT"
                })
                    .then(res => res.json())
                    .then(updated => {
                        item.classList.add("opened");
                        back.innerHTML = updated.message;
                        showModal(updated.message);
                    });
            });

            item.appendChild(front);
            item.appendChild(back);
            container.appendChild(item);
        });

    });

// zamykanie modala
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

// zamykanie klikając poza okienkiem
document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
    }
});
