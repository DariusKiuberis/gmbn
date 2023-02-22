import React, { useState, useEffect } from 'react';
import FeedCell from '../../molecules/FeedCell/FeedCell';
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

interface Video {
    videos: VideoData[];
}

type Props = {};

const Main: React.FC<Props> = () => {
    const { classes } = useStyles();

    const [state, setState] = useState<{
        videosLoaded: Video,
        hasDataUpdated: boolean
        limit: number
        offset: number
    }>({
        limit: 12,
        offset: 0,
        videosLoaded: { videos: [] },
        hasDataUpdated: false
    });

    const handleFetchAPI = async () => {
        try {
            const response = await fetch(`https://www.globalcyclingnetwork.com/api/videos?limit=${state.limit}&offset=${state.offset}`);
            const apiData = await response.json();

            // console.log(111, apiData);
            setState({ ...state, hasDataUpdated: true, videosLoaded: apiData });
        } catch (err) {
            console.log('Error in get data : ', err);
        }
    };
    useEffect(() => {
        handleFetchAPI();
    }, [])

    return (
        <div className={classes.container}  >
            <div className={classes.feedCellsContainer} >
                {
                    state.videosLoaded && state.videosLoaded.videos.map((video: VideoData) => {
                        return <div className={classes.feedCellWrapper} >
                            <FeedCell
                                key={video._id}
                                videoId={video._id}
                                title={video.title}
                                publishDate={video.publishDate}
                                onClick={() => console.log('clicked')} />
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default Main;
