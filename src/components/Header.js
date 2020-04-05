import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext, { themes } from '../context/ThemeContext'


export default function Header() {
    const { setTheme } = useContext(ThemeContext)
    return (
        <>
            <h1>
                <strong className="title has-text-centered is-size-1">The Breaking Bad </strong><br />
                <b className="sublist is-size-4"><Link to='/'>Character List | </Link></b>
                <b className="sublist is-size-4"><Link to='/favorites'>Favorite Characters</Link></b>
            </h1>
            <button className="button" onClick={() => setTheme(themes.white)}>LIGHT</button>
            <button className="button is-black" onClick={() => setTheme(themes.black)}>DARK</button><br />
        </>
    )
}