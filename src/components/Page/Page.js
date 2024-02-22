import React from 'react';
import Wrapper from '../Wrapper';
import Header from '../Header';
import Main from '../../containers/Main';
import Footer from '../Footer';

import './Page.css';

const Page = () => {
    return (
        <div className="page">
            <div className="page__header">
                <Wrapper>
                    <Header />
                </Wrapper>
            </div>
            <div className="page__content">
                <Wrapper>
                    <Main />
                </Wrapper>
            </div>
            <div className="page__footer">
                <Wrapper>
                    <Footer />
                </Wrapper>
            </div>
        </div>
    )
};

export default Page; 