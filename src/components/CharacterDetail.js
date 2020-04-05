import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Load from './Load'
import allActions from '../store/actions'

export default function CharacterDetail() {
    //state
    const { id } = useParams()
    const detail = useSelector(state => state.detail)
    const dispatch = useDispatch()

    let detailsOfCharacter
    //created
    useEffect(() => {
        dispatch(allActions.characterAction.fetchDetail(id))
    }, [dispatch, id])

    //JSX HERE
    //Loading
    if (!detail || detail.length < 1) {
        return <Load />
    } else {
        //declare all informations for one specific character
        detailsOfCharacter = detail[0]
        const { img, name, nickname, birthday, status, portrayed } = detailsOfCharacter

        const clickHandler = (detailsOfCharacter) => {
            dispatch(allActions.favoritesAction.addToFavorites(detailsOfCharacter))
            dispatch(allActions.favoritesAction.isFavorite(detailsOfCharacter))
        }
        //JSX HERE
        return (
            <>
                <div className="box">
                    <div className="columns is-6">
                        <div className="column is-3">
                            <figure className="image is-3by4">
                                <img src={img} alt="detail" />
                            </figure>
                        </div>
                        <div className="column is-3">
                            <p className="is-size-4"><b>{name}</b></p><hr />
                            <p className="is-size-4">Nickname: {nickname}</p>
                            <p className="is-size-4">Birthday: {birthday}</p>
                            <p className="is-size-4">Status: {status} </p>
                            <p className="is-size-4">Portrayed by: {portrayed} </p><hr />
                            <button className="button is-rounded is-warning"
                                onClick={() => clickHandler(detailsOfCharacter)}>
                                <b>Add to Favorites</b>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}