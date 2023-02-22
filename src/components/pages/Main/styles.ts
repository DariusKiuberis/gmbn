import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    container: {
        // border: 'solid red',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    feedCellsContainer: {
        // border: 'solid 4px blue',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // padding: '0 20px',
        flex: 1,
    },
    feedCellWrapper: {
        // border: 'solid green',
        margin: '20px 20px',
    }
}));
