import { AreaState } from "../../models/app.state.model";
import { AreaAction, AreaActionTypes } from "../actions/area.actions";

const initialState: AreaState = {
    data: [],
    loading: false,
    err: undefined
};

export function AreaReducer(state: AreaState = initialState, action: AreaAction){
    switch(action.type){
        case AreaActionTypes.LOAD_ITEM:
            return { ...state, loading: true }
        case AreaActionTypes.LOAD_ITEM_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case AreaActionTypes.LOAD_ITEM_FAILED:
            return { ...state, loading: false, err: action.payload }
        case AreaActionTypes.ADD_ITEM:
            return { ...state, loading: false }
        case AreaActionTypes.ADD_ITEM_SUCCESS:
            return { ...state, data: [...state.data, action.payload], loading: false }
        case AreaActionTypes.ADD_ITEM_FAILED:
            return { ...state, loading: false, err: action.payload }
        default: 
            return state;
    }
}