import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    container: {
        width: '100%',
        height: '100vh',
    },

    backButtonWrapper: {
        // border: '1px solid red',
        margin: '20px 20px',
        display: 'flex',
    },

    backButton: {
        backgroundColor: 'tomato',
        borderRadius: 5,
        border: 'none',
        color: 'white',
        fontSize: '12px',
        padding: '3px 10px 3px 10px',
    },

    iframe: {
        width: '100%',
        height: 200,
    },

    title: {
        margin: '20px 0 20px 0',
        color: 'black',
        fontFamily: 'Oswald, sans-serif',
        fontWeight: 500,
        fontSize: '22px',
        letterSpacing: '-1px',
        lineHeight: '1.1',
        fontStyle: 'normal',
        boxSizing: 'border-box',
    },

    description: {
        color: 'black',
        fontFamily: 'Oswald, sans-serif',
        fontWeight: 400,
        fontSize: '16px',
    },

}));

