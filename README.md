<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GabrielMochi/expenseably-app-web">
    <img src="https://i.imgur.com/MUmCoKc.png" alt="Logo" width="600" height="120">
  </a>

  <h3 align="center">Expenseably</h3>

  <p align="center">
    Manage your expenses and incomes without tears or fears
    <br />
    <a href="https://github.com/GabrielMochi/expenseably-app-web"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://extenseably.com/">View Demo</a>
    ·
    <a href="https://github.com/GabrielMochi/expenseably-app-web/issues">Report Bug</a>
    ·
    <a href="https://github.com/GabrielMochi/expenseably-app-web/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#dev-mode">Dev mode</a></li>
        <li><a href="#dev-mode-with-mock-server">Dev mode with mock server</a></li>
        <li><a href="#build">Build</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://i.imgur.com/BdKPiO4.png)

### Built With

- [Next.js](https://nextjs.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- You need to have `Node.js` installed before installing the dependencies.
- Setup [`Estateably API`](https://github.com/GabrielMochi/expenseably-api) (if you prefer, you can launch with the mock server).

### Installation

Follow these steps

1. Install packages
   ```sh
   yarn install or npm install
   ```
2. create a `.env` file with this content:
   ```js
   NEXT_PUBLIC_API_BASE_URL = "http://localhost:5000";
   ```

<!-- USAGE EXAMPLES -->

## Usage

⚠️ Since the doesn't support creating new users, use the following credentials to get logged in:

```
email: walter_white@gmail.com
password: HelloWorld@123
```

This credential is also valid for the [Demo](https://extenseably.com/).

### Dev mode

1. Run
   ```sh
   yarn dev or npm run dev
   ```
2. Open on the browser: http://localhost:3000

### Dev mode with Mock server

1. Run
   ```sh
   yarn dev:mock or npm run dev:mock
   ```
2. Open on the browser: http://localhost:3000

### Build

To build the project, just run:

```sh
yarn build or npm run build
```

This script will not only build the project but also export it as a static website.

<!-- ROADMAP -->

## Roadmap

- [ ] Add Cypress to E2E test
- [ ] Adapt GUI to be responsible for mobile devices
- [ ] Improve error display

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/20032634?v=4" alt="Profile" width="115" height="115">
  
  <br />

Gabriel Mochi - [Linkedin](https://www.linkedin.com/in/gabriel-mochi/) - gmochi56@icloud.com

</div>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Chakra UI](https://chakra-ui.com)
- [Mirage JS](https://miragejs.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: https://i.imgur.com/BdKPiO4.png
