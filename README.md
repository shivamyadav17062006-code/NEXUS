# Nexus Movies 🎬

Nexus Movies is a premium, high-performance movie discovery platform designed for a cinematic browsing experience. It features a rich interface with real-time searching, advanced filtering, and dynamic sorting, all powered by a modern React + Vite stack.

![Cinema Theme](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop)

## ✨ Key Features

- **Cinematic UI/UX**: A state-of-the-art interface featuring a premium obsidian dark theme and a refined "Cinema Day" light mode.
- **Real-Time Discovery**: Instant search functionality across movie titles, actors, and directors.
- **Advanced Filtering**: Categorize the library by Genre (Biography, Sci-Fi, Crime, Animation, and more).
- **Dynamic Sorting**: Effortlessly reorder the grid by **Latest Releases** or **IMDb Rating** (8.4+).
- **Interactive Details**: Deep-dive into any title with a rich glassmorphism modal showing plot summaries, metadata, and directors.
- **Favorites System**: Save your most-anticipated titles with a single click.
- **User Login**: Secure authentication to personalize your experience across sessions.
- **Watchlist Sync**: Keep your watchlist in sync across devices in real time.
- **Trailer Previews**: Watch trailers inline without leaving the app.

## 🛠️ Technology Stack

- **Core**: React 18
- **Build Tool**: Vite
- **Icons**: Lucide-React
- **Styling**: Vanilla CSS3 (Custom Design System with Glassmorphism)
- **Data Manipulation**: High-performance Array Higher-Order Functions (`filter`, `sort`, `map`)

## 🚀 Getting Started

To run Nexus Movies locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shivamyadav17062006-code/NEXUS.git
   cd NEXUS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project and add your required keys:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5173/`

## 📂 Project Structure

```
NEXUS/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx       # Individual movie card component
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   └── TrailerModal.jsx    # Inline trailer preview modal
│   ├── hooks/
│   │   └── useAuth.js          # Custom hook for user authentication
│   ├── App.jsx                 # Main application logic, state management, and movie dataset
│   ├── index.css               # Custom cinematic design system and theme variables
│   └── main.jsx                # Entry point for the React application
```

---

Built with ❤️ by Shivam Yadav
