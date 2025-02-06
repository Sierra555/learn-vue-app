
# Vue 3 Project with PrimeVue and Custom Theme

## Overview

This project is a Vue.js 3 application that integrates PrimeVue with a custom theme preset using the Aura theme. The application utilizes different colors and styles for both light and dark modes. It also integrates with an AI service to generate various types of coding tasks related to Vue.js 3, including logic puzzles, algorithms, quizzes, and bugs.

## Features

- **Vue.js 3** for frontend development.
- **PrimeVue** as a UI component library with a custom theme.
- **Dynamic task generation** using an AI service.
- **Dark and light mode support**.
- **Code highlighting** for Vue-related tasks.

## Installation

1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/Sierra555/learn-vue-app
    ```

2. Navigate to the project directory.
    ```bash
    cd vue-3-project
    ```

3. Install the dependencies.
    ```bash
    npm install
    ```

4. Set up the `.env` file with your RapidAPI key for the AI service.
    ```
    RAPID_API_KEY=your-api-key-here
    ```

5. Run the development server.
    ```bash
    npm run dev
    ```

## Project Structure

- `src/`: Contains the main application files.
- `src/App.vue`: Main Vue component.
- `src/components/Output.vue`: Component for rendering generated tasks.
- `public/`: Contains static assets like images and fonts.
- `style.css`: Custom styles for the application.
- `tailwind.config.js`: Tailwind CSS configuration.
- `.env`: Environment variables for configuration.

## Configuration

### PrimeVue and Custom Theme

The project uses **PrimeVue** for UI components and a customized **Aura theme**. The theme can be modified by adjusting the colors and properties in the `MyPreset` object, which is applied globally across the app.

The primary color palette is based on the **emerald** color set from Tailwind CSS, and a semantic color scheme is defined for both light and dark modes.

### API Integration

The backend integrates with the **RapidAPI ChatGPT service** to generate Vue.js coding tasks. The tasks are dynamic and can be of different types, such as:

- **Logic puzzles**
- **Algorithmic tasks**
- **Quizzes**
- **Bugs**

The tasks are returned in HTML format with syntax highlighting for code snippets.

## Usage

Once the app is running, you can use the UI to select different task types (logic, algorithm, quiz, bug) and levels (easy, medium, hard). The app will communicate with the backend to generate the requested task and display it.

## Contribution

Feel free to contribute to the project by forking the repository and creating a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- **PrimeVue** for the UI components.
- **Tailwind CSS** for the utility-first CSS framework.
- **OpenAI GPT-3** via RapidAPI for task generation.
