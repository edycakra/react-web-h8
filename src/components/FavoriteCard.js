import React from 'react';
import { useDispatch } from 'react-redux'
import allActions from '../store/actions';

export default function FavoriteCard(props) {
    const { id, img, name, nickname, birthday, status, portrayed } = props.fav
    const dispatch = useDispatch()

    return (
        <>
            <div className="column is-2">
                <div className="characterFav card has-text-left">
                    <div className="card-image">
                        <figure className="image is-3by4">
                            <img src={img} alt="favoriteChar" />
                        </figure>
                    </div>
                    <div className="content">
                        <p className="is-size-5"><b>{name}</b></p><hr />
                        <i className="is-size-7">Nickname: {nickname} <br />
                            Birthday: {birthday} <br />
                            Status: {status} <br />
                            Portrayed by: {portrayed}
                        </i>
                    </div><hr />
                    <button className="button is-rounded is-danger"
                        onClick={() => dispatch(allActions.favoritesAction.deleteFromFavorites(id))}>
                        <b>Remove</b>
                    </button>
                </div>
            </div>
        </>
    )
}