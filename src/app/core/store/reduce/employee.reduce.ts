import { EmployeeState } from "../../models/app.state.model";
import { EmployeeAction, EmployeeActionTypes } from "../actions/employee.actions";

const initialState: EmployeeState = {
    data: [],
    loading: false,
    err: undefined
};

export function EmployeeReducer(state: EmployeeState = initialState, action: EmployeeAction){
    switch(action.type){
        case EmployeeActionTypes.LOAD_ITEM:
            return { ...state, loading: true }
        case EmployeeActionTypes.LOAD_ITEM_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case EmployeeActionTypes.LOAD_ITEM_FAILED:
            return { ...state, loading: false, err: action.payload }
        case EmployeeActionTypes.ADD_ITEM:
            return { ...state, loading: false }
        case EmployeeActionTypes.ADD_ITEM_SUCCESS:
            return { ...state, data: [...state.data, action.payload], loading: false }
        case EmployeeActionTypes.ADD_ITEM_FAILED:
            return { ...state, loading: false, err: action.payload }
        case EmployeeActionTypes.DELETE_ITEM:
            return { ...state, loading: true }
        case EmployeeActionTypes.DELETE_ITEM_SUCCESS:
            return { 
                ...state, 
                data: state.data.filter(employee => employee.id != action.payload), 
                loading: false
            }
        case EmployeeActionTypes.DELETE_ITEM_FAILED:
            return { ...state, loading: false, err: action.payload }
        default: 
            return state;
    }
}