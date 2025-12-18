import uniqid from "uniqid";

const ShoppingReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, { id: uniqid(), title: action.payload, count: 0 }];

        case "remove":
            return state.filter((item) => item.id !== action.payload);

        case "addOne":
            return state.map((item) =>
                item.id === action.payload ? { ...item, count: item.count + 1 } : item
            );

        case "removeOne":
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, count: Math.max(item.count - 1, 0) }
                    : item
            );

        case "set":
            return action.payload;

        default:
            return state;
    }
};

export default ShoppingReducer;
