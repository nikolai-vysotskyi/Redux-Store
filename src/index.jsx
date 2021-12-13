import {Provider as StoreProvider} from './components/Store';
import {useSelector} from 'react-redux';
import {onConfig} from "./functions/onConfig";

import {render} from 'react-dom';

const Data = () => {
    const config = useSelector((state) => state.config);

    if (config.exampleVariable === 'tests false') {
        onConfig('exampleVariable', 'tests done');
    }

    return <>
        { config.exampleVariable }
    </>;
}

render(<>
    <StoreProvider>
        <Data/>
    </StoreProvider>
</>, document.getElementById('root'));
