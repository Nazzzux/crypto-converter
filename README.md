# [Demo link](https://nazzzux.github.io/crypto-converter)

# Crypto Converter

Crypto Converter is a React-based web application that allows users to view cryptocurrency prices, sort and filter crypto assets, and load more data with infinite scrolling. The app fetches data from external APIs and provides a clean and user-friendly interface for crypto enthusiasts and traders.

## Features

- Display a list of cryptocurrencies with their icons, names, and current prices.
- Infinite scrolling and "Load More" button to fetch additional assets.
- Sorting assets by name or price in ascending/descending order.
- Error handling with UI notifications.
- Responsive and accessible UI components.

## Tech Stack

| Category             | Technology                   | Rationale                                                             |
| ---------------------| ---------------------------- | --------------------------------------------------------------------- |
| Core Framework       | React + TypeScript           | Ensures type safety and modern standards in frontend development      |
| Routing              | React Router DOM             | Provides SPA navigation between Home and Trade pages                  |
| State Management     | Zustand                      | Chosen for its simplicity and lightweight footprint compared to Redux |
| Data Fetching        | React Query                  | Enables caching, background updates, and pagination with ease         |
| Styling              | SCSS Modules                 | Offers scoped styles without external UI libraries                    |
| Authentication       | Local modal with state       | Simplifies login without backend integration                          |
| Exchange APIs        | CoinGecko, ExchangeRate Host | Chosen due to availability of free public endpoints                   |
| Code Quality         | ESLint                       | Enforces consistent code style and catches potential bugs early       |
| Code Formatting      | Prettier                     | Automatically formats code for readability and consistency            |
| Unit Testing         | Vitest                       | Fast, modern testing framework designed for Vite + TypeScript         |
| UI Testing           | React Testing Library        | Encourages testing UI the way users interact with it                  |



## Getting Started

### Prerequisites

- Node.js >= 16.x
- npm or yarn

### Installation
git clone https://github.com/Nazzzux/crypto-converter.git
cd crypto-converter
npm install
or if you prefer yarn:
yarn install


Running Locally
Start the development server:

npm run dev

yarn dev
Open your browser and visit http://localhost:5173 to see the app.

### Tests

Unit tests are located in the corresponding folders of the components. To run tests use

npm run test

yarn test

## Project Structure

src/
│
├── assets/            # Icons and images
├── components/        # Reusable UI components (Button, Modal, etc.)
├── constants/         # Route paths and static values
├── layouts/           # App layouts like BaseLayout
├── pages/             # HomePage and TradePage
├── services/          # API services and hooks
├── store/             # Zustand state store
├── styles/            # SCSS global and variables
└── AppProviders.tsx   # React Query and context providers

##Assumptions

- Authentication is mocked via a modal and state — no backend.
- API calls are read-only and public (e.g., CoinGecko, ExchangeRate).
- Users can only view or simulate trading (no wallet or backend integration).
- Minimal UI libraries are allowed; custom styling used instead.

##Trade-offs
| Decision              | Pros                                 | Cons                                            |
| --------------------- | ------------------------------------ | ----------------------------------------------- |
| 🧠 Zustand over Redux | Simple setup, no boilerplate         | Less tooling, less common in enterprise         |
| ⚡ React Query         | Auto-caching, built-in re-fetch      | May introduce complexity for beginners          |
| ❌ No UI library       | Total design freedom, smaller bundle | Slower development, lacks accessibility helpers |
| 🔐 Local-only auth    | Easy to implement                    | No real security for production use             |

##Future Improvements

- Add end-to-end and integration tests
- Improve responsive styling for mobile
- Connect to a real backend for authentication
- Use i18n for multi-language support
- Dark mode toggle
- Accessibility enhancements


Feel free to open issues or pull requests. Contributions are welcome!
