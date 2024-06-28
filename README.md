# EventFinder

EventFinder is a full-stack web application built with Next.js and Python that allows users to search for and discover upcoming events based on their input keywords. This project leverages modern web technologies to provide a seamless and responsive user experience for event discovery.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Introduction
EventFinder is designed to help users find upcoming events based on their interests. By entering a keyword, users can search for events that match their criteria. The application fetches event data using the SerpAPI and displays it in a user-friendly interface.

## Features
- Search for upcoming events based on keywords
- Responsive design for optimal viewing on any device
- Full-stack implementation using Next.js for the frontend and Python with Flask for the backend

## Requirements
- Node.js
- npm
- Python 3
- Flask
- SerpAPI API Key

## Installation
To get started with EventFinder, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/byteninja9/event-finder.git
    cd event-finder
    ```

2. Make the install script executable:
    ```bash
    chmod +x install.sh
    ```

3. Run the install script to set up the project:
    ```bash
    ./install.sh
    ```

## Usage
After installation, you can start the application by running the following commands:

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Run the backend server:
    ```bash
    python3 app.py
    ```

3. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

4. Run the frontend development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Configuration
To configure the backend with your SerpAPI key:

1. Open the `backend/app.py` file.
2. Find the line where the API key is set.
3. Replace `your-serpapi-key` with your actual SerpAPI key:
    ```python
    "api-key" : "your-serpapi-key"
    ```

## Contributing
Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
