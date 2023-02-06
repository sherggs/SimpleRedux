
let lastId = 0;


export default function Reducer (state = [], action){
    switch (action.type) {
        case 'bugAdded':
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case 'bugRemoved':
            return [

            ]
        default:
            return state;
    }
}