let currentId = 'id-0'

let getNextId = () => {
    let currentNumber = parseInt(currentId.substr(3), 10);
    let nextNumber = currentNumber + 1;
    let nextId = 'id-' + nextNumber;

    currentId = nextId;

    return nextId;
}

export default getNextId;