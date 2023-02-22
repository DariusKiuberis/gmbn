import React, { useState, useEffect } from 'react';
import { Image } from '@mantine/core';
import FeedCell from '../../molecules/FeedCell/FeedCell';
import Feed from '../../organisms/Feed/Feed';
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

    // all useStates should be changed to useReducer
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

    const [showFeed, setShowFeed] = useState<boolean>(false);
    const [feedVideo, setFeedVideo] = useState<VideoData>({ __typename: '', _id: '', description: '', public: false, publishDate: new Date(), title: '', urlTitle: '', videos: [] });

    const handleFetchAPI = async () => {
        try {
            const response = await fetch(`https://www.globalcyclingnetwork.com/api/videos?limit=${state.limit}&offset=${state.offset}`);
            const apiData = await response.json();

            // console.log('apiData:' , apiData);
            setState({ ...state, hasDataUpdated: true, videosLoaded: apiData });
        } catch (err) {
            console.log('Error in get data : ', err);
        }
    };
    useEffect(() => {
        handleFetchAPI();
    }, [])

    // another way to pass multiple state to component instead of using nested usesState
    const handleFeedCellClick = (video: VideoData, show: boolean) => {
        setShowFeed(show)
        setFeedVideo(video)
    }

    return (
        <div className={classes.container} >
            {!showFeed &&
                <Image
                    style={{ marginBottom: '20px' }}
                    radius="xs"
                    src={`/assets/header.png`}
                    alt="Image is missing"
                />
            }
            <div className={classes.feedCellsContainer} >
                {showFeed ?
                    <Feed
                        feedVideo={feedVideo}
                        setShowFeed={setShowFeed}
                    /> :
                    <>
                        {
                            state.videosLoaded && state.videosLoaded.videos.map((video: VideoData) => {
                                return <div
                                    className={classes.feedCellWrapper}
                                    key={video._id}
                                >
                                    < FeedCell
                                        videoId={video._id}
                                        title={video.title}
                                        publishDate={video.publishDate}
                                        setShowFeed={() => handleFeedCellClick(video, true)}
                                    />

                                </div>
                            }
                            )
                        }
                    </>
                }
            </div>
            {!showFeed &&
                <Image
                    radius="xs"
                    src={`/assets/footer.png`}
                    alt="Image is missing"
                />
            }
        </div>
    )
};

export default Main;
