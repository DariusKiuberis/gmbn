import * as React from 'react';
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
    feedVideo: VideoData;
    setShowFeed?: (showFeed: boolean) => void;
};

const Feed: React.FC<Props> = ({ feedVideo: { _id, description, publishDate, title }, setShowFeed = () => { } }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.container} >
            <div className={classes.backButtonWrapper}>

                <button
                    className={classes.backButton}
                    onClick={() => setShowFeed(false)}
                >Back</button>
            </div>
            <iframe
                className={classes.iframe}
                src={`https://www.youtube.com/embed/${_id}?html5=1`}
                frameBorder={"0"}
                allowFullScreen={true}>
            </iframe>
            <div className={classes.title}>{title}</div>
            <div className={classes.description}>{description}</div>
        </div>
    );
};

export default Feed
