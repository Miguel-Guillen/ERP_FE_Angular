import { Action } from '@ngrx/store';
import { IArea } from '../../models/area';

export enum AreaActionTypes {
    LOAD_ITEM = '[AREA] Load area',
    LOAD_ITEM_SUCCESS = '[AREA] Load area success',
    LOAD_ITEM_FAILED = '[AREA] Load area failed',
    ADD_ITEM = '[AREA] Add area',
    ADD_ITEM_SUCCESS = '[AREA] Add area success',
    ADD_ITEM_FAILED = '[AREA] Add area failed',
}

// load items
export class LoadAreaAction implements Action {
    readonly type = AreaActionTypes.LOAD_ITEM;
}
export class LoadAreaSuccessAction implements Action {
    readonly type = AreaActionTypes.LOAD_ITEM_SUCCESS

    constructor(public payload: Array<IArea>){ }
}
export class LoadAreaFailedAction implements Action {
    readonly type = AreaActionTypes.LOAD_ITEM_FAILED

    constructor(public payload: Error){ }
}
// add item
export class AddAreaAction implements Action {
    readonly type = AreaActionTypes.ADD_ITEM;

    constructor(public payload: IArea){ }
}
export class AddAreaSuccessAction implements Action {
    readonly type = AreaActionTypes.ADD_ITEM_SUCCESS

    constructor(public payload: IArea){ }
}
export class AddAreaFailedAction implements Action {
    readonly type = AreaActionTypes.ADD_ITEM_FAILED

    constructor(public payload: Error){ }
}
// delete item
// export class DeleteItemAction implements Action {
//     readonly type = EmployeeActionTypes.DELETE_ITEM;

//     constructor(public payload: number){ }
// }
// export class DeleteItemSuccessAction implements Action {
//     readonly type = EmployeeActionTypes.DELETE_ITEM_SUCCESS

//     constructor(public payload: number){ }
// }
// export class DeleteItemFailedAction implements Action {
//     readonly type = EmployeeActionTypes.DELETE_ITEM_FAILED

//     constructor(public payload: Error){ }
// }

export type AreaAction =
LoadAreaAction |
LoadAreaSuccessAction |
LoadAreaFailedAction | 
AddAreaAction |
AddAreaSuccessAction |
AddAreaFailedAction
    // DeleteItemAction |
    // DeleteItemSuccessAction |
    // DeleteItemFailedAction;