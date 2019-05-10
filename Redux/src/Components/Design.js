import React from 'react'
import { connect } from 'react-redux'
import 'react-confirm-alert/src/react-confirm-alert.css'

class Design extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '', text1: '' }
        this.handleCha = this.handleCha.bind(this)

    }
    handleCha(e) {
        this.setState({ text: e.target.value })
        console.log('resultat recherche', this.state.text)
    }
    _toggleFavorite(e) {
        const action = { type: "TOGGLE_FAVORITE", value: e }
        this.props.dispatch(action)
    }
    _toggleNonFavorite(e) {
        const action = { type: "TOGGLE_NONFAVORITE", value: e }
        this.props.dispatch(action)
    }

    componentDidMount() {
        console.log("componentDidMount :", this.props)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate : ")
        console.log(this.props)
    }

    render() {
        console.log('render' + this.props)
        let style = {
            display: 'none'
        }


        return (

            <div className="container">
                <input id="bla" type="text" onChange={this.handleCha} value={this.state.text} />
                {(this.props.favoritesFilm.length > 0) ? (this.props.favoritesFilm.filter(items => items.title.indexOf(this.state.text) !== -1).map(items => {
                    return <div>
                        <div className="col-md-4 col-sm-12 col-xs-12" id="parents" onClick={() => {
                            let v = items.id
                            let d = 'a' + items.id
                            let block = document.getElementById(v)
                            let cache = document.getElementById(d)
                            block.style.display = "block"
                            cache.style.display = "none"
                        }}>
                            <div key={items.id} className="card cardTete" id={'a' + items.id}>
                                <img src={items.image} alt="yes" />
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    {(items.favoris) ? (<center><span role="img" aria-label="favoris">🖤</span></center>) : ("")}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12" >
                            <div key={items.id} className="card cardTete " style={style} id={items.id} >
                                <img src={items.image} alt="yes" />
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    {
                                        (items.favoris) ? (<center><span role="img" aria-label="favoris" onClick={() => this._toggleNonFavorite(items.id)}>🖤</span></center>) : (<center><span role="img" aria-label="favoris" onClick={() => this._toggleFavorite(items.id)}>♡</span></center>)}

                                    <p className="card-text">{items.description}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                })) : ('')}
                {/* 
                <div className="row" id="parentCacher">
                    {
                        (this.props.favoritesFilm.length > 0) ? (this.props.favoritesFilm.map(items =>
                            <div>
                                <div className="col-md-4 col-sm-12 col-xs-12" onClick={() => {
                                    let v = items.id
                                    let d = 'a' + items.id
                                    let block = document.getElementById(v)
                                    let cache = document.getElementById(d)
                                    block.style.display = "block"
                                    cache.style.display = "none"
                                }}>
                                    <div key={items.id} className="card cardTete" id={'a' + items.id}>
                                        <img src={items.image} alt="yes" />
                                        <div className="card-body">
                                            <h5 className="card-title">{items.title}</h5>
                                            {(items.favoris) ? (<center><span role="img" aria-label="favoris">🖤</span></center>) : ("")}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-12 col-xs-12" >
                                    <div key={items.id} className="card cardTete " style={style} id={items.id} >
                                        <img src={items.image} alt="yes" />
                                        <div className="card-body">
                                            <h5 className="card-title">{items.title}</h5>
                                            {
                                                (items.favoris) ? (<center><span role="img" aria-label="favoris" onClick={() => this._toggleNonFavorite(items.id)}>🖤</span></center>) : (<center><span role="img" aria-label="favoris" onClick={() => this._toggleFavorite(items.id)}>♡</span></center>)}

                                            <p className="card-text">{items.description}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>)) : ('')
                    } 


            </div>*/}
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
export default connect(mapStateToProps)(Design)