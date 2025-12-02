# 🎄 Advent Calendar Project

A simple and beautiful advent calendar web application with 24 interactive windows. Each window can show a special message, emoji, or photo when you click on it.

---

## 📖 About This Project

This advent calendar was made as a Christmas gift. It helps count down the days until Christmas in a fun way. The project uses HTML, CSS, and JavaScript to create an interactive experience.

Every day from December 1st to 24th, you can open one window to see what's inside. The windows have a nice 3D flip animation when you click them.

---

## ✨ Features

- **24 Interactive Windows** - One for each day before Christmas
- **3D Flip Animation** - Beautiful animation when opening windows
- **Custom Messages** - Each window can have its own text, emojis, and photos
- **Responsive Design** - Works great on phones (3 columns), tablets (4 columns), and computers (6 columns)
- **Hidden Content** - Messages are hidden in the code until you open the window
- **Modal Preview** - Click opened window again to see the message in a bigger popup
- **Date Lock** - Optional: only allow opening windows on the correct date

---

## 🛠️ Technologies Used

- **HTML5** - Structure of the page
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactive functionality
- **Node.js Backend** - Server version available in this repository

---

## 📂 Project Structure

```
Advent-Calendar/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # Main JavaScript logic
├── data.js             # Your custom messages and content
├── img/                # Folder for your photos
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── README.md           # This file
```

---

## 🚀 How to Use

### Basic Setup (Frontend Only)

1. Download or clone this repository
2. Open `data.js` and change the messages to your own
3. Add your photos to the `img/` folder
4. Open `index.html` in your web browser
5. That's it! Your calendar is ready

### Changing Messages

Open `data.js` and edit the messages:

```javascript
window.windows = [
    { id: 1, opened: false, message: "Your message here ❤️" },
    { id: 2, opened: false, message: "Another message 🎅" },
    // ... continue for all 24 days
];
```

### Adding Photos

You can add photos to your messages using HTML in the message text:

```javascript
{ 
    id: 5, 
    opened: false, 
    message: "Look at this photo! <br> <img src='img/photo.jpg' style='width:100%; border-radius:10px;'>" 
}
```

### Enable Date Lock

If you want to only allow opening windows on the correct date, open `script.js` and uncomment these lines:

```javascript
// Remove the // from these lines:
// if (!canOpen(win.id)) {
//     alert("ALERT DATE: " + win.id + ".12");
//     return;
// }
```

---

## 🎨 Customization

### Change Colors

Open `style.css` and change the colors:

```css
/* Background gradient */
background: linear-gradient(135deg, #ffebf0, #fff5e6);

/* Window colors */
background: #d32f2f;  /* Red windows */
background: #e76a6a;  /* Light red opened windows */
```

### Change Text

Edit the title in `index.html`:

```html
<h1 class="title">🎄 Your Title Here 🎁</h1>
```

### Change Number of Columns

In `style.css`, change the grid columns:

```css
/* For phones */
@media screen and (max-width: 600px) {
    #windows {
        grid-template-columns: repeat(3, 1fr); /* Change this number */
    }
}
```

---

## 📱 Responsive Design

The calendar automatically changes layout based on screen size:

- **Mobile phones** (less than 600px): 3 columns
- **Tablets** (600px - 1000px): 4 columns  
- **Computers** (more than 1000px): 6 columns

---

## ⚠️ Frontend-Only Version

**IMPORTANT:** This repository contains a **Node.js backend version** of the advent calendar.

If you want the **simple frontend-only version** (just HTML, CSS, and JavaScript without Node.js), please **contact me** for the files.

### Why Two Versions?

- **Frontend-only**: Simple, just open `index.html` in browser
- **Backend version**: Has server features, needs Node.js installation

Most people will want the frontend-only version because it's easier to use.

---

## 🐛 Known Issues

- Messages are visible in browser developer tools before opening (by design for simplicity)
- Images must be optimized before adding (large images slow down the page)
- Works best in modern browsers (Chrome, Firefox, Safari, Edge)

---

## 🎯 Future Ideas

- [ ] Add sound effects when opening windows
- [ ] Add snow animation background
- [ ] Create admin panel for easy message editing
- [ ] Add ability to send calendar link to friends
- [ ] Create mobile app version

---

## 📄 License

This project is free to use. You can modify it and share it with others.

---

## 📧 Contact

**Author:** kajusenn

If you want the **frontend-only version without Node.js**, please contact me through GitHub.

If you find bugs or have questions, open an issue on GitHub.

---

## 🙏 Credits

Made with ❤️ for special people in my life.

Special thanks to Claude AI for helping with the code.

---

**Merry Christmas! 🎄🎅🎁**
