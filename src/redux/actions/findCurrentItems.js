export const type ='findCurrentItems'

const findCurrentItems = (id) => {
    return (
        {type,
        payload: id}
    );
};

export default findCurrentItems;