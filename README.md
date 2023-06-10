# Filmboard-Front

This project is a dynamic form builder for creating JSON-based forms with data validation, Redux storage, and tabular display. It allows users to add and remove form fields, and it saves the data to Redux state for persistence (as well as local storage for additional protection).

## Features

- Add form fields dynamically
- Remove form fields
- Data validation for duplicate fields

## Data Storage

- Store form data in Redux state
- Save form data to local storage

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bit-by-bits/Filmboard-Front.git
   ```

2. Install the dependencies:

   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

   The app should now be running on [localhost](http://127.0.0.1:5173/).

4. To use prettier or eslint features:

   ```bash
   yarn pretty | yarn lint
   ```

## Usage

1. Access the application in your web browser by visiting [localhost](http://127.0.0.1:5173/).

2. Use the array in the [data file](src/data/form.js) to add and remove form fields.

3. The form fields are validated to prevent duplicate entries.

4. The form data is stored in Redux state for persistence during the session.

5. The form data is also saved to local storage for further protection and can be retrieved even after closing the browser.

## Technologies Used

- React.js
- Redux
- Redux Toolkit

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Ant Design](https://ant.design/) - UI library used for styling and components.
- [Redux](https://redux.js.org/) - State management library for managing the form data.