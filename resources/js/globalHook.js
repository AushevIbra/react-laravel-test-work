export const addToHomes = (store, homes) => {
    store.setState({homes});
};
export const toggleReady = (store) => {
    store.setState({isReady: !store.state.isReady});
};
