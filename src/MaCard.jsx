import {ThemeContext} from './contexte'

import {useContext} from 'react'

export function MaCard() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ color: theme === 'light' ? '#335' : '#fff'}}>
            Les hooks React sont des fonctions spécialisées qui permettent <br />
            d'ajouter des fonctionnalités aux composants fonctionnels. Ils <br />
            offrent une alternative plus flexible et plus puissante aux <br />
            composants de classe traditionnels.<br />
        </div>
    );
}