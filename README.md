# Artizano

![Current Version](https://img.shields.io/badge/version-v1.0-blue)
![GitHub contributors](https://img.shields.io/github/contributors/Hafedh-Jendoubi/Artizano)
![GitHub stars](https://img.shields.io/github/stars/Hafedh-Jendoubi/Artizano)
![GitHub top language](https://img.shields.io/github/languages/top/Hafedh-Jendoubi/Artizano)

&nbsp;&nbsp;&nbsp;**Coached by:** `Mehdy Ben Romdhane`<br>
&nbsp;&nbsp;&nbsp;**Created by:** &nbsp;`Hafedh Jendoubi` &nbsp;`Nour Trabelsi` &nbsp;`Meriem Touzri` &nbsp;`Wala Ammar` &nbsp;`Wiem Ben Mansour`<br>

## Table of Contents
- [Project Overview](#project-overview)
- [Team Members and Contributions](#team-members-and-contributions)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Tools Required](#tools-required)
- [License](#license)

## Project Overview

Artizano is an innovative e-commerce platform designed to bridge the gap between artisans and consumers. Built using React and styled with **Tailwind CSS**, the platform delivers a seamless, user-friendly, and highly responsive shopping experience for handmade and artisanal products.

## Team Members and Contributions

The project is developed by a team of five members, each contributing to specific interfaces:

- **Hafedh Jendoubi**: 
  - Interface de panier
  - Interface de suivi commande
- **Nour Trabelsi**: 
  - Interface de donner avis
  - Interface de prendre rendez-vous
- **Meriem Touzri**: 
  - Interface sponsoring
  - Interface de recommendation look
- **Wiem Ben Salah**: 
  - Interface de service d'échange
  - Interface de détails atelier
- **Wala Ammar**: 
  - Interface d'accueil including its animation

## Project Structure

The project's directory structure is organized as follows:

```
Artizano
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── CartInterface.jsx
│   │   ├── OrderTrackingInterface.jsx
│   │   ├── ReviewSubmissionInterface.jsx
│   │   ├── AppointmentSchedulingInterface.jsx
│   │   ├── SponsorshipInterface.jsx
│   │   ├── LookRecommendationInterface.jsx
│   │   ├── HomeInterface.jsx
│   │   ├── ExchangeServiceInterface.jsx
│   │   └── WorkshopDetailsInterface.jsx
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/Hafedh-Jendoubi/Artizano.git
   ```
2. **Navigate to the project directory**:
   ```
   cd Artizano
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Start the development server**:
   ```
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

IMPORTANT for Developers: **Want to update the CSS of Tailwind?**
```
npx tailwindcss -i ./src/index.css -o ./public/style.css --watch
```

### Tools Required

To develop and run this project, you will need:

- **Node.js**: Ensure you have the latest stable version installed.
- **npm**: Comes bundled with Node.js.
- **A code editor**: Such as Visual Studio Code or any other of your choice.

## License

`Artizano` is licensed under the Academic Free License v3.0 [AFL-3.0]. 
