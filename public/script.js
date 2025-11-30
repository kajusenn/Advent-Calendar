// Funkcja dekodująca base64
function decodeBase64(str) {
    try {
        return atob(str);
    } catch {
        return str;
    }
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

            // NIE WSTAWIAMY wiadomości do okienka, żeby nie było jej w inspect element
            back.innerHTML = "";

            if (win.opened) {
                item.classList.add("opened");
            }

            // Funkcja pokazująca modal
            const showModal = (encodedMsg) => {
                const modal = document.getElementById("modal");
                const modalMsg = document.getElementById("modal-message");

                modalMsg.innerHTML = decodeBase64(encodedMsg);
                modal.style.display = "flex";
            };

            item.addEventListener("click", () => {

                // jeśli już otwarte → tylko odczytujemy zakodowaną wersję z win.message
                if (item.classList.contains("opened")) {
                    back.innerHTML = decodeBase64(win.message);
                    showModal(win.message);
                    return;
                }

                // jeśli zamknięte → najpierw otwieramy w backendzie
                fetch(`http://localhost:3000/windows/${win.id}`, {
                    method: "PUT"
                })
                    .then(res => res.json())
                    .then(updated => {
                        item.classList.add("opened");
                        back.innerHTML = decodeBase64(updated.message);
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
