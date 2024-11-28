# Users Module - EGYM

This project is an Angular-based application that fetches user data from the [Random User Generator API](https://randomuser.me/) and displays it to the user. It serves as a module to demonstrate the integration of external APIs within an Angular framework.

## Features

- **User Data Fetching:** Retrieves random user data from an external API.
- **Data Display:** Presents the fetched user information in a structured and readable format.
- **Modular Architecture:** Designed as a module to facilitate easy integration and scalability within Angular applications.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js:** JavaScript runtime environment.
- **npm:** Node package manager, typically installed alongside Node.js.
- **Angular CLI:** Command-line interface for Angular development.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/fahad-git/users-module-egym.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd users-module-egym
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

To start the development server:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/` to view the application.

## Code Scaffolding

To generate a new component, directive, pipe, service, class, guard, interface, enum, or module, use the following Angular CLI command:

```bash
ng generate component component-name
```

Replace `component` with the desired type and `component-name` with the desired name.

## Build

To build the project for production, run:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

To execute the unit tests via [Karma](https://karma-runner.github.io), run:

```bash
ng test
```

## Running End-to-End Tests

To execute end-to-end tests via a platform of your choice, run:

```bash
ng e2e
```

Note: To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

For more information on the Angular CLI and its commands, use:

```bash
ng help
```

You can also refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

Special thanks to the [Random User Generator](https://randomuser.me/) for providing the user data API utilized in this project.
