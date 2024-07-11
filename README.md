# Gemini Clone

This project is a Gemini clone created using React and the Google Generative AI API.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/DilshanIndunil/gemini-clone-API.git
    cd gemini-clone
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add your Google Generative AI API key:

    ```
    VITE_GEMINI_API_KEY=your-api-key
    ```

## Usage

1. **Start the development server:**

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.


- **Chat Interface:** A user-friendly interface for interacting with the Generative AI model.
- **Prompt Management:** Ability to store and reuse previous prompts.
- **Dynamic Responses:** Real-time generation of responses with animated typing effect.
- **Contextual Sidebar:** A sidebar that provides quick access to recent prompts and settings.


## Project Structure

```plaintext
gemini-clone/
├── public/
│   └── assets/
│       └── assets.js            # Icons and images used in the project
├── src/
│   ├── assets/                  # Icons and images
│   ├── components/
│   │   ├── Main.jsx             # Main component
│   │   └── Sidebar.jsx          # Sidebar component
│   ├── config/
│   │   └── gemini.js            # Configuration for the Generative AI API
│   ├── context/
│   │   └── Context.js           # Context for managing state
│   ├── styles/
│   │   ├── Main.css             # Styles for the Main component
│   │   └── Sidebar.css          # Styles for the Sidebar component
│   ├── App.js                   # Entry point for the application
│   └── index.js                 # React DOM rendering
├── .env                         # Environment variables
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```





