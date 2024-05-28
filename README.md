# Introduction

This is a URL Bookmarker web application built using Next.js, Tailwind CSS, and MongoDB. It allows users to save and organize their favorite URLs for quick access.

![Conversion output](https://github.com/adii1203/bookmark/assets/114096753/0b8623a8-afb3-4bb8-ad7b-781af01e99bb)

## Features

- User Authentication: Users can sign up, log in, and log out securely.

- URL Bookmarking: Users can add, edit, and delete bookmarks.

- Categories: Bookmarks can be organized into categories for easier management.

- Responsive Design: The application is optimized for various screen sizes and devices.

## Technologies Used

- Next.js: React framework for building server-side rendered (SSR) and statically generated web applications.

- Tailwind CSS: Utility-first CSS framework for styling.

- Postgres: Neon postgres serverless database.

### Installation

**Clone the repository:**

```bash
git clone https://github.com/adii1203/bookmark.git
```

**Navigate to the project directory:**

```bash
cd bookmarker
```

**Install dependencies:**

```bash
npm install
```

**Set up MongoDB:**

- Install MongoDB if not already installed.

- Create a MongoDB Atlas cluster or set up a local MongoDB database.

- Configure the MongoDB connection string in .env file:

```javascript
MONGODB_URI = your_mongodb_uri;
```

#### Run the development server:

```bash
npm run dev
```

Access the application at http://localhost:3000.

#### Usage

- Sign up or log in to your account.

- Add new bookmarks by providing the URL and selecting a category.

- Edit or delete existing bookmarks as needed.
  Organize bookmarks into categories for better management.

- Log out when done.

## Todos

- [x] Deploy to vercel
- [x] Creat database schema (w/ zod)
- [x] Connect to database (mongodb)
- [x] Creat register user route
- [x] Send email verification otp
- [ ] Add basic ui with mock data (tailwind, shadcn)
- [ ] Add authentication
- [ ] Add user profile
