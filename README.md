# Voice123 Search Application

A React-based application that implements text search functionality using the Voice123 API. This project was created as part of the Senior Full Stack Engineer application process at Voice123.

## Features

- Search for voice actors using keywords
- Display search results with:
  - Voice actor name with profile link
  - Profile picture
  - Highlighted text matching search terms
  - Audio player for relevant samples
- Pagination support
- Material UI implementation
- Redux state management
- Responsive design
- Unit tests

## Application Setup Guide

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Bighero0122/voice123-test.git
cd voice123-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Running Tests

```bash
npm test
```

## Worklog

### Session 1 (1.5 hours)
- [x] Project initialization and setup
- [x] Basic project structure and dependencies
- [x] Material UI implementation
- [x] Redux store setup
- [x] Basic API integration

### Session 2 (1 hours)
- [x] Search functionality implementation
- [x] Voice actor card component
- [x] Search results display with pagination
- [x] Audio player integration
- [x] Styling and responsive design

### Session 3 (0.5 hours)
- [x] Unit tests implementation
- [x] Code cleanup and optimization
- [x] Documentation
- [x] Final testing and bug fixes

## Project Structure

```
src/
├── components/
│   ├── Search/
│   ├── SearchBar/
│   ├── SearchResults/
│   └── VoiceActorCard/
├── store/
│   ├── searchSlice.js
│   └── store.js
├── services/
│   └── api.js
├── utils/
│   └── helpers.js
└── App.jsx
```

## Future Improvements and Recommendations

1. **Performance Optimizations**
   - Implement infinite scrolling as an alternative to pagination
   - Add result caching to reduce API calls
   - Implement virtual scrolling for large result sets

2. **Feature Enhancements**
   - Advanced search filters
   - Search history
   - Favorite voice actors
   - Sort functionality
   - More detailed voice actor profiles

3. **Technical Improvements**
   - Implement error boundaries
   - Add end-to-end testing
   - Implement proper TypeScript support
   - Add proper loading states and skeletons
   - Improve accessibility features

4. **UI/UX Improvements**
   - Add animations for better user feedback
   - Implement dark mode
   - Add more responsive design breakpoints
   - Improve mobile experience

## Technologies Used

- React
- Redux Toolkit
- Material UI
- Axios
- Jest & React Testing Library

## API Integration

The application integrates with the Voice123 API endpoint:
```
https://api.sandbox.voice123.com/providers/search/
```

Query Parameters:
- `service`: voice_over
- `keywords`: search text
- `page`: pagination number

## Testing

The project includes unit tests for:
- Helper functions
- Components

## Notes

This project was completed as part of the Voice123 technical assessment within the 48-hour timeframe. The focus was on creating a clean, maintainable codebase while implementing all required features and following best practices.
