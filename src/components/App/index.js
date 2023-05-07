// @flow

import React from 'react';
// import { auditUtils } from '@miro/fel-js-utils';

import SideBar from '../SideBar';
import MainContainer from '../MainContainer';
import Modals from '../Modals';

// const { reportEvent } = auditUtils;

function App() {
    // useEffect(() => {
    //     reportEvent('AppInit');
    // }, [])

    return (
        <>
            <div className='app-container' data-testid='app-container'>
                <SideBar />
                <MainContainer />
            </div>
            <Modals />
        </>
    );
}

export default App;