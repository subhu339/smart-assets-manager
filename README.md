# Smart Assets Manager

A lightweight desktop application built with Neutralinojs to clean up cluttered directories. It prompts you to select a folder, inspects the files, and automatically organizes them into sub-folders based on their file extensions.

## Features

- **Native Folder Picker:** Uses Neutralinojs OS APIs to select any directory on your computer.
- **Extension-Based Sorting:** Categorizes files automatically (e.g., `.png`, `.jpg` $\rightarrow$ `Images`; `.pdf` $\rightarrow$ `Documents`; others $\rightarrow$ `Others`).
- **Non-Destructive Folder Creation:** Automatically creates missing target sub-folders without overwriting existing ones.
- **Error Handling:** Gracefully handles edge cases like cancelled folder dialogs and pre-existing directory collisions.

## How It Works

1. Click **Select & Organize Folder**.
2. Pick the folder you want to clean up.
3. The app scans the directory using native file system calls, creates category sub-folders, and moves each file asynchronously into its respective folder.

## Tech Stack

- **Framework:** [Neutralinojs](https://neutralino.js.org/)
- **Frontend:** Vanilla JavaScript, HTML5, CSS3

## Running Locally

1. Install the Neutralinojs CLI globally (if you haven't already):
   ```bash
   npm install -g @neutralinojs/neu
