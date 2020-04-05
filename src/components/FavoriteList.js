import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../store/actions'
import FavoriteCard from './FavoriteCard';
import Load from './Load';

export default function FavoriteList() {

    //states
    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    //created
    useEffect(() => {
        dispatch(allActions.favoritesAction.fetchFavorites())
    }, [dispatch])
    console.log(favorites)
    if (!favorites || favorites.length === 0) {
        return <Load />
    } else {
        return (
            <>
                <div className="columns is-multiline">
                    {favorites.map(fav => {
                        return <FavoriteCard
                            fav={fav}
                            key={fav.id}
                        />
                    })}
                </div>
            </>
        )
    }
}