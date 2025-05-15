# Kino - Movie Reviews & News Platform

A modern web application built with Next.js and MongoDB for movie reviews and entertainment news.

## Features

- Movie reviews and ratings
- Newsletter subscription system
- Modern, responsive UI
- RESTful API endpoints
- MongoDB integration

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- MongoDB with Mongoose
- Tailwind CSS
- ESLint

## Prerequisites

- Node.js 18.x or later
- MongoDB database
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd kino
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Routes

- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create a new review
- `DELETE /api/reviews/[id]` - Delete a review
- `POST /api/newsletter/send` - Send newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/preview` - Preview newsletter

## Project Structure

```
src/
├── app/                 # App router pages and API routes
├── components/          # React components
├── lib/                 # Utility functions and database models
│   ├── models/         # MongoDB models
│   └── mongodb.ts      # Database connection
└── styles/             # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
