import React, { Component } from 'react';
import { colors } from '../styles/index';
import PlayerItem from './PlayerItem'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayersActions from '../store/actions/players';
import * as PageActions from '../store/actions/page';

const styles = {
    container: {
        marginTop: 63,
        backgroundColor: colors.secondary,
        padding: 20,
        flex: 1,
    } ,
    buttonFilter: {
        margin: '20px',
    }  
}

class Players extends Component {

    componentDidMount() {
       this.props.fetchPlayersRequest(this.props.page)
    }

    render() {
        return(
            <div style={styles.container} className="d-flex flex-wrap flex-row align-items-center justify-content-center">
                <div style={styles.buttonFilter} className="dropdown d-flex">
                    <button className="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Posições
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item">Action</a>
                        <a className="dropdown-item">Another action</a>
                        <a className="dropdown-item">Something else here</a>
                    </div>
                </div>

                <div style={styles.buttonFilter} className="dropdown d-flex">
                    <button className="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Overall
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item"> maior que 90</a>
                        <a className="dropdown-item"> maior que 80 </a>
                        <a className="dropdown-item"> menor que 70 </a>
                    </div>
                </div>

                <div style={styles.buttonFilter} className="dropdown d-flex">
                    <button className="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Potencial
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item"> maior que 90</a>
                        <a className="dropdown-item"> maior que 80 </a>
                        <a className="dropdown-item"> menor que 70 </a>
                    </div>
                </div>
                <div className="d-flex flex-wrap flex-row align-items-center justify-content-center">
                    { this.props.data.map(player => <PlayerItem key={player.id} player={player}/>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.players,
    page: state.page,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({...PlayersActions, ...PageActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Players);