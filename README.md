# **W5-ReactMoviesProject** : 🍿 Popcorn - Movie Discovery App
A responsive React application that allows users to browse movies, filter by genre, search for specific titles, and manage their personal "Watch List" and "Favourites".

## 🚀 Features
- **Browse Movies**: View a grid of movie cards with titles, genres, and ratings.

- **Search Functionality**: Real-time search bar to find movies by title.

- **Genre Filtering**: Dropdown menu to filter movies by categories (Action, Drama, Horror, etc.).

### Interactive State:

- **❤️ Favourites**: Add or remove movies from your Favourites list.

- **➕ Watch List**: Add or remove movies from your Watch List.

- **Local Storage Support**: Your Favourites and Watch List are saved automatically, so they persist even after refreshing the page.

- **Responsive Design**: Responsive layout that adapts to Desktop, Tablet, and Mobile screens.


## 📂 Project Structure
```
src/
├── assets/             # Images and icons
├── components/
│   ├── Dropdown/       # Genre filter component
│   ├── Footer/         # App footer
│   ├── Header/         # Navigation, SearchBar, and Logo
│   ├── MainContent/    # MovieList logic and grid layout
│   ├── MovieCard/      # Individual movie display card
│   ├── SearchBar/      # Search input component
│   └── Skeleton/       # Loading state placeholder
├── App.jsx             # Main application logic and routing
├── App.css             # Global styles
├── movies.json         # Mock data for movies
└── main.jsx            # Entry point
```


## ⚙️ Installation & Setup
Follow these steps to run the project locally on your machine.

Clone the repository:

```bash
git clone https://github.com/your-username/popcorn-movie-app.git
```
Navigate to the project folder:

```Bash
cd popcorn-movie-app
```
Install dependencies:

```Bash
npm install
```
Start the development server:

```Bash
npm run dev
```
Open your browser:

Visit http://localhost:5173 (or the port shown in your terminal)


## 📖 How to Use
- **Home Page**: Shows all available movies.

- **Search**: Type in the search bar in the top right to find a specific movie.

- **Filter**: Use the "All Genres" dropdown to see only specific categories like Horror or Fantasy.

- Click the **+ button** on a movie card to add it to your Watch List.

- Click the **♥ button** to add it to your Favourites.

- **View Lists**: Click "Watch List" or "Favourites" in the top navigation bar to see your saved movies.


## 🔮 Future Improvements

[ ] Add React Router for dedicated pages (/movie/:id).

[ ] Implement a "Dark/Light" mode toggle.

[ ] Add movie trailers and detailed descriptions in a modal.
