import React from 'react';
import PortfolioModal from "./PortfolioModal";

import cabin from '../assets/portfolio/cabin.png'
import cake from '../assets/portfolio/cake.png'
import circus from '../assets/portfolio/circus.png'
import game from '../assets/portfolio/game.png'
import safe from '../assets/portfolio/safe.png'
import submarine from '../assets/portfolio/submarine.png'

const Modals = () => {
    const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.";
    return (
        <>
            <PortfolioModal id="portfolioModal1" title="Log Cabin" image={cabin} content={content} />
            <PortfolioModal id="portfolioModal2" title="Tasty Cake" image={cake} content={content} />
            <PortfolioModal id="portfolioModal3" title="Circus Tent" image={circus} content={content} />
            <PortfolioModal id="portfolioModal4" title="Controller" image={game} content={content} />
            <PortfolioModal id="portfolioModal5" title="Locked Safe" image={safe} content={content} />
            <PortfolioModal id="portfolioModal6" title="Submarine" image={submarine} content={content} />
    </>
    );
};

export default Modals;