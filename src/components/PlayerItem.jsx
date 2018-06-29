import React from 'react';
import { Image } from '../components/index';


const styles = {
    avatar: {
        marginTop: '60px',
        width: 170,
        heigth: 170,
    },
    position: {
        fontSize: 15,
    }
}

const PlayerItem = player => {
    return (
        <div style={styles.container} className="wrapper p-3">
            <div className="clash-card barbarian">
                <div className="clash-card__image clash-card__image--barbarian">
                    <Image style={styles.avatar} src={player.player.photo_url}/>
                </div>
                <div style={styles.position} className="clash-card__level clash-card__level--barbarian">{player.player.positions[0]}</div>
                <div className="clash-card__unit-name">{player.player.name}</div>
                <div className="clash-card__level clash-card__level--barbarian">Valor: {player.player.value}</div>
                <div className="clash-card__level clash-card__level--barbarian">Salário: {player.player.wage}</div>
            
                <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                    <div className="one-third">
                    <div className="stat">{player.player.overall_rating}</div>
                    <div className="stat-value">Overall</div>
                    </div>
            
                    <div className="one-third">
                    <div className="stat">{player.player.potential}</div>
                    <div className="stat-value">Potencial</div>
                    </div>
            
                    <div className="one-third no-border">
                    <div className="stat">{player.player.age}</div>
                    <div className="stat-value">Idade</div>
                    </div>
                </div>
        
            </div> 
        </div>
    );
};

export default PlayerItem;