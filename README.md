# Notice Board Backend

A robust backend application for a Notice Board system, built with TypeScript, Express, and MongoDB. This application manages notices and handles media uploads using Cloudinary.

## Tech Stack

- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose)
- **Validation:** Zod
- **Image Storage:** Cloudinary
- **Logging:** Winston
- **Package Manager:** pnpm

## Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd notice-board-backend
    ```

2.  **Install dependencies**

    Make sure you have [pnpm](https://pnpm.io/) installed.

    ```bash
    pnpm install
    ```

3.  **Environment Configuration**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4.  **Run the application**

    Development mode (with hot reload):

    ```bash
    pnpm dev
    ```

    Build the project:

    ```bash
    pnpm build
    ```

    Start production server:

    ```bash
    pnpm start
    ```

## Project Structure

- `src/server.ts`: Entry point of the application.
- `src/app.ts`: Express app setup.
- `src/config/`: Configuration files (Database, Cloudinary, Logger).
- `src/modules/`: Application modules (likely Notice, User, etc.).
- `src/middlewares/`: Express middlewares.
