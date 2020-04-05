//import from dependencies
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//import from path
import Load from '../components/Load'
import Header from '../components/Header';
import SearchBar from '../components/Searchbar'
import useFetcher from '../hooks/useFetcher'
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail'
import QuoteGenerator from '../components/QuoteGenerator'
import FavoriteList from '../components/FavoriteList';
import ThemeContext, {themes} from '../context/ThemeContext'

//USING FUNCTION
export default function App() {

  //STATES
  const [characters, loading, error] = useFetcher('https://www.breakingbadapi.com/api/characters')
  const [result, setResult] = useState([])
  const [theme, setTheme] = useState(themes.white)

  //functions
  const searchByKeyword = (keyword) => {
    const searchResult = characters.filter(char => {
      return char.name.toLowerCase().includes(keyword.toLowerCase())
    })
    searchResult.length > 0 ? setResult(searchResult) : setResult([])
  }

  // JSX HERE
  // LOADING
  if (loading) return <Load />

  // ERROR
  if (error) return <p className="has-text-danger">Something went wrong! Message: {error}</p>

  //MAIN JSX
  return (
    <>
      <ThemeContext.Provider value={
        {
          theme: theme,
          setTheme
        }
      }>
        <div style={{backgroundColor: theme.background, color: theme.foreground, minHeight: "100vh"}}>
          <Router>
            <header className="has-text-centered">
              <Header />
              <QuoteGenerator />
              <SearchBar searchByKeyword={searchByKeyword} />
              <hr />
            </header>
            <Switch>
              <Route exact path='/favorites'>
                <FavoriteList />
              </Route>
              <Route exact path='/'>
                {result.length > 0 ? <CharacterList characters={result} /> : <CharacterList characters={characters} />}
              </Route>
              <Route exact path='/:id'>
                <CharacterDetail />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeContext.Provider>
    </>
  )
}
