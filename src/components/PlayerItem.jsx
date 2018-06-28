import React from 'react';
import { colors } from '../styles/index';

const styles = {
    container: {
        backgroundcolor: colors.primary,
        marginTop: 20,
    },
}

const PlayerItem = player => {
    return (
      <div style={styles.container} className="d-flex flex-row flex-wrap">
        <h2>{player.name}</h2>
      </div>  
    );
};

export default PlayerItem;