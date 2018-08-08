import React, { Component } from 'react';

const API_KEY = '1c8e7c42'

export class Detail extends Component {

    static propTypes = {
        id: this.propTypes.string
    }

    _fetchMovie = (id) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${ id }`)
        .then(res => res.json())
        .then(movie => {
            console.log(movie);
        });
    }

    componentDidMount() {
        const { id } = this.props;
        this._fetchMovie({ id });
    }

    render() {
        return (
            <div>Pagina de detalle</div>
        )
    }
}