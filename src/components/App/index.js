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

// TODO add to package.json when the library i sready
// "dependencies": {
//     "@miro/fel-js-utils": "^0.0.1",
//     "@miro/fel-ui": "^0.0.1",
//     "@miro/fel-font-faces": "^0.0.1",
// },
// "devDependencies": {
//     "@miro/fel-eslint": "^0.0.1",
//   },
//   "eslintConfig": {
//     "extends": "@miro/fel-eslint"
//   }
