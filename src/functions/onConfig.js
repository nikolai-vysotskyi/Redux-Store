import Store from '../components/Store';

const onConfig = (variable, value) => {
    const config = Store().getState().config;

    config[variable] = value;

    Store().dispatch({
        type: 'config',
        payload: () => config
    });
};

export {
    onConfig
};
