# E-Commerce Demo [![Netlify Status](https://api.netlify.com/api/v1/badges/8420062b-7baa-4113-bc6d-0abc257c8e65/deploy-status)](https://app.netlify.com/sites/janell-huyck-clothing-ecommerce-demo/deploys)


## Description

E-Commerce Demo is a single-page React application that simulates the experience of an e-commerce site. Users have the ability to register, log in, browse items, add them to a shopping cart, and modify the contents of the shopping cart. The application employs a Firebase database to handle user authentication and manage data.

## Live Demo

This site is hosted live and can be accessed at [https://janell-huyck-clothing-ecommerce-demo.netlify.app/](https://janell-huyck-clothing-ecommerce-demo.netlify.app/).

## Local Installation

You can also install and run this application locally. However, this would require you to create your own Firebase database and update the code to reference it. Here are the steps to run this application locally:

1. Clone the repository to your local machine.
2. Navigate into the project directory.
3. Run `npm install` to install all the dependencies.
4. Create your own Firebase database and set up a new .env file to handle the config.
   1. The Firebase config is stored at src/utils/firebase/firebase.utils.js
   2. Create a .env file with the following environment variables, using your own Firebase data:
   ```
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJET_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID,
    REACT_APP_MEASURENT_ID
    ```
5. Once all these steps are complete, run `npm start` to start the application.

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
# Update the firebase database references in your code
npm start
```

## Usage

Upon launching the application, users are greeted with a login page. From here, users can navigate to the home page by clicking on the icon in the upper left corner. The navigation buttons at the top of the screen provide a seamless way to move between different sections of the website.

Users can easily add an item to the shopping cart by clicking on the desired item. To modify the contents of the shopping cart, click on the cart icon to view its contents, and then adjust the quantities or remove items as desired.

## Features

E-Commerce Demo comes equipped with numerous features including:

* User authentication
* Firebase database integration
* Shopping cart functionality

## Credits

The E-Commerce Demo site owes significant credit for design and CSS assistance to the Zero to Mastery course, Complete React Developer 2023.

## License

The project is open source and available under the [MIT License](LICENSE).
