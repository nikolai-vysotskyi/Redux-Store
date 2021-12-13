const initialState = {
    exampleVariable: 'tests false',
};

const config = (state = initialState, action) => {
    return action.type === 'config'
        ? action.payload()
        : state;
};

export default config;
