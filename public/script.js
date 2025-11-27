fetch("http://localhost:3000/windows")
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("windows");

        data.forEach(win => {

            const item = document.createElement("div");
            item.classList.add("window");

            // FRONT – numer okienka
            const front = document.createElement("div");
            front.classList.add("front");
            front.textContent = win.id;

            // BACK – wiadomość / zdjęcie
            const back = document.createElement("div");
            back.classList.add("back");
            back.innerHTML = win.message; // tu pojawi się tekst

            if (win.opened) {
                item.classList.add("opened");
            }

            item.addEventListener("click", () => {
                fetch(`http://localhost:3000/windows/${win.id}`, {
            method: "PUT"
                })
                .then(res => res.json())
                .then(updated => {
                    item.classList.add("opened");

                    const modal = document.getElementById("modal");
                    const modalMsg = document.getElementById("modal-message");

                   modalMsg.innerHTML = updated.message;  // <<< to jest klucz

                    modal.style.display = "flex";
                });
            });


            item.appendChild(front);
            item.appendChild(back);
            container.appendChild(item);
        });

});

// --- zamykanie modala ---
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

// zamknięcie klikając w tło
document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
    }
});
