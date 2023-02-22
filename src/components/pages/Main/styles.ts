import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    container: {
        // border: 'solid red',
        width: '100%',
        height: '100vh',

        // temporary while I create header and footer
        padding: '120px 0 150px 0'
    },
    feedCellsContainer: {
        // border: 'solid 4px blue',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // padding: '0 20px',
    },
    feedCellWrapper: {
        // border: 'solid green',
        margin: '20px 20px',
    }
}));
