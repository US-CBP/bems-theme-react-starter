import React from 'react';
import NowPlayingCard from './NowPlayingCard';
import RecipeReviewCard from './RecipeReviewCard';
import SimpleCard from './SimpleCard';
import SimpleMediaCard from './SimpleMediaCard';

const DemoCards = () => {
    return (
        <div>
            <br />
            <NowPlayingCard />
            <br /> <br />
            <RecipeReviewCard />
            <br /> <br />
            <SimpleCard />
            <br /> <br />
            <SimpleMediaCard />
        </div>
    );
};

export default DemoCards;
