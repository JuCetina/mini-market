export const loadState = () => {
    try {
        const myStateInit = localStorage.getItem('marketState');
        if (myStateInit === null) {
            return undefined;
        }

        return JSON.parse(myStateInit);

    } catch (error) {
        return undefined;
    }
}


export const saveState = (state) => {
    try {
        let myStateInit = JSON.stringify(state);
        localStorage.setItem('marketState', myStateInit);

    } catch (error) {
        console.log(error);   
    }
}