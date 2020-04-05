import React, { useState } from 'react'

export default function Header(props) {
    const [keyword, setKeyword] = useState('')

    //Search function (onChange)
    const handleChange = (event) => {
        setKeyword(event.target.value)
        props.searchByKeyword(event.target.value)
    }

    //JSX HERE
    return (
        <>
            <div className="box has-text-centered">
                <form>
                    <input type="search" value={keyword} placeholder="type to search character"
                        onChange={(event) => handleChange(event)}>
                    </input>
                </form>
            </div>
        </>
    )
}