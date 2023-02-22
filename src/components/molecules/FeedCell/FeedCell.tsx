import * as React from 'react';
import { Image } from '@mantine/core';
import { useStyles } from './styles'

type VideoData = {
    __typename: string;
    _id: string;
    description: string;
    public: boolean;
    publishDate: Date;
    title: string;
    urlTitle: string;
    videos: [];
}

type Props = {
    videoId: string;
    title: string;
    publishDate: Date;
    setShowFeed: (showFeed: boolean) => void;
};

const FeedCell: React.FC<Props> = ({ videoId, title = 'My Title', setShowFeed }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}
            onClick={() => setShowFeed(true)}
        >
            <Image
                radius="xs"
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt="Image is missing"
            />
            <div>{title}</div>
        </div>
    );
};

export default FeedCell;
