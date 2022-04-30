import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './components/global/NotFound';


const generatePage = (pagename: string) => {
    const component = () => require(`./pages/${pagename}`).default;

    try {
        return React.createElement(component())
    } catch (error) {
        return <NotFound />
    }
}

const PageRender = () => {
    const { page, slug } = useParams();

    let pagename = '';

    if (page) {
        pagename = slug ? `${page}/[slug]` : `${page}`
    }

    return generatePage(pagename);
}

export default PageRender