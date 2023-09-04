# Brain mini project
# Brain mini project

This project is a small application built on the Next.js framework and integrated with Firebase. This README will provide you with information on installation, setting up the .env file, and running tests.

## Installation

Follow these steps to set up and run the project:

### 1. Install Node.js

Before getting started, ensure that you have Node.js installed on your machine. You can download it from the official Node.js website: [Node.js](https://nodejs.org/en/).

### 2. Install pnpm

To manage project dependencies, I recommend using [pnpm](https://pnpm.io/). If you haven't already installed pnpm globally, you can do so with the following command:

```bash
npm install -g pnpm
```

### 3. Create a Firebase Database

This application uses Firebase for data management. You need to create a Firebase project and set up a Realtime Database. Follow the Firebase documentation to create your project and database: [Firebase Documentation](https://firebase.google.com/docs/web/setup).

### 4. Clone the Repository

Next, clone the repository from GitHub using the following command:

```bash
git clone git@github.com:JakubMrozek/brain-mini-project.git
```

### 5. Install Dependencies

Navigate to the root directory of the project and install dependencies using the following command:

```bash
pnpm install
```

### 6. Set up the .env File

The application uses Firebase for data management. Create a .env file in the root directory of the project and add the following variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY= # api key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= # auth domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID= # project id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= # storage bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= # messaging sender id
NEXT_PUBLIC_FIREBASE_APP_ID= # app id
NEXT_PUBLIC_FIREBASE_DATABASE_URL= # database url
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID= # measurement id
```

### 7. Set up Firebase Rules

In order to use the application, you need to set up the Firebase rules. Navigate to the Firebase console and set up the following rules:

```bash
{
  "rules": {
    ".read": false,
    ".write": false,
    "expenses": {
      ".read": true,
      ".write": true,
      ".indexOn": "date",
      "$expense_id": {
        ".validate": "newData.child('date').isNumber() && newData.child('value').isNumber() && newData.child('channel').isString()"
      }
    }
  }
}
```

## Running

You can start the project as follows:

```bash
pnpm run dev
```

This command will launch the Next.js development server, allowing you to see the project in action at http://localhost:3000.

## Testing

The project includes tests that you can run as follows:

```bash
pnpm run test
```

