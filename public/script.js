fetch("http://localhost:3000/windows")
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("windows");

        data.forEach(win => {

            // główny element okienka
            const item = document.createElement("div");
            item.classList.add("window");

            // numer w środku
            const num = document.createElement("span");
            num.classList.add("number");
            num.textContent = win.id;

            // jeśli okno było otwarte → dodaj klasę opened
            if (win.opened) {
                item.classList.add("opened");
            }

            // kliknięcie — wysyłamy PUT
            item.addEventListener("click", () => {
                fetch(`http://localhost:3000/windows/${win.id}`, {
                    method: "PUT"
                })
                .then(res => res.json())
                .then(updated => {
                    item.classList.add("opened");
                });
            });

            item.appendChild(num);
            container.appendChild(item);
        });

    });
