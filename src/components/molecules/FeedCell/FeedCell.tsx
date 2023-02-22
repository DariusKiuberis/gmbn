import * as React from 'react';
import { Image } from '@mantine/core';
import { useStyles } from './styles'

type Props = {
    videoId: string;
    title: string;
    publishDate: Date;
    onClick?: () => void;
};

const FeedCell: React.FC<Props> = ({ videoId, title = 'My Title', onClick }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.container} >
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
