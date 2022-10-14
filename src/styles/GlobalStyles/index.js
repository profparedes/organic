import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        --text-gray: #666;
        --text-white: #fff;
        
        --primary-color: #97ae76;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html, body, #root{
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
    }

    .text-gray{
        color: var(--text-gray);
    }

    .text-white{
        color: var(--text-white);
    }

    .fs-7 { font-size: 3rem};
    .fs-8 { font-size: 3.5rem};
    .fs-9 { font-size: 4rem};
    .fs-sm { font-size: 0.9rem};

    .bg-green {
        background-color: var(--primary-color);
    }

    .border-green {
        border: 1px solid var(--primary-color);
    }
`;
