import React, { useState, useEffect } from 'react';
import { useStyles } from './styles'

interface Video {
    description: string;
    public: boolean;
    publishDate: string;
    title: string;
    urlTitle: string;
    __typename: string;
    _id: string;
}

const Main = () => {
    const { classes } = useStyles();

    const [state, setState] = useState<{
        videos: Video[],
        hasDataUpdated: boolean
        limit: number
        offset: number
    }>({
        limit: 12,
        offset: 0,
        videos: [],
        hasDataUpdated: false
    });

    const handleFetchAPI = async () => {
        try {
            const response = await fetch(`https://www.globalcyclingnetwork.com/api/videos?limit=${state.limit}&offset=${state.offset}`);
            const apiData = await response.json();

            console.log(111, apiData);
            setState({ ...state, hasDataUpdated: true, videos: apiData });
        } catch (err) {
            console.log('Error in get data : ', err);
        }
    };
    useEffect(() => {
        handleFetchAPI();
    }, [])

    return (
        <div className={classes.container}  >
            {/* <button onClick={handleFetchAPIClick}>Fetch API Data</button> */}
        </div>
    )
};
export default Main;
