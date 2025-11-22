fetch("http://localhost:3000/windows")
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("windows");

        data.forEach(win => {
            const item = document.createElement("div");
            item.textContent = `ID okna: ${win.id} - otwarte: ${win.opened}`;
            container.appendChild(item);
        });
    });