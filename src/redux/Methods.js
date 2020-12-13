export const getSize = (map) => {
    let size = 0;

    for(let count of map.values()){
        size+=count;
    }

    return size;
}