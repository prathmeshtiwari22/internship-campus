import React from 'react';
import './RankingCards.css';

const rankings = [
    {
        title: "#7 IN THE ASIA-PACIFIC",
        source: "Bloomberg Businessweek",
        detail: "Best B-Schools",
        year: "(2023-24)"
    },
    {
        title: "TOP 15 IN THE WORLD",
        source: "Forbes",
        detail: "The Best International MBAs: 1-Year Programs",
        year: "(2019-21)"
    },
    {
        title: "#4 IN THE WORLD",
        source: "Times Higher Education–Wall Street Journal",
        detail: "1-year MBAs",
        year: "(2018-19)"
    },
    {
        title: "TOP 100 IN THE WORLD",
        source: "The Economist",
        detail: "Full-Time MBAs",
        year: "(2015)"
    },
    {
        title: "TOP 50 IN THE WORLD",
        source: "Poets & Quants",
        detail: "Best International MBAs",
        year: "(2015)"
    },
    {
        title: "TOP 100 IN THE WORLD",
        source: "Financial Times",
        detail: "Global MBA Rankings",
        year: "(2011 & 2012)"
    }
];

const RankingCards = () => {
    return (
        <div className="ranking-container">
            <h2>ABOUT SP JAIN GLOBAL</h2>
            <p>SP Jain School of Global Management is an Australian business school with campuses in Dubai, Singapore, and Sydney. We relentlessly strive to reimagine business education and offer innovative courses in these dynamic and world-class cities. Year after year, our efforts have been recognised by highly regarded global rankings that include:</p>
            <div className="ranking-grid">
                {rankings.map((ranking, index) => (
                    <div className="ranking-card" key={index}>
                        <h3>{ranking.title}</h3>
                        <p>{ranking.source}</p>
                        <p>{ranking.detail}</p>
                        <p>{ranking.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RankingCards;
