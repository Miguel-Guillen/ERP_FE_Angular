import { Action } from '@ngrx/store';
import { EmployeeItem } from '../../models/employee';

export enum EmployeeActionTypes {
    LOAD_ITEM = '[EMPLOYEE] Load items',
    LOAD_ITEM_SUCCESS = '[EMPLOYEE] Load items success',
    LOAD_ITEM_FAILED = '[EMPLOYEE] Load items failed',
    ADD_ITEM = '[EMPLOYEE] Add item',
    ADD_ITEM_SUCCESS = '[EMPLOYEE] Add item success',
    ADD_ITEM_FAILED = '[EMPLOYEE] Add item failed',
    DELETE_ITEM = '[EMPLOYEE] Delete item',
    DELETE_ITEM_SUCCESS = '[EMPLOYEE] Delete item success',
    DELETE_ITEM_FAILED = '[EMPLOYEE] Delete item failed',
}

// load items
export class LoadItemAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_ITEM;

    constructor(public payload: boolean){ }
}
export class LoadItemSuccessAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_ITEM_SUCCESS

    constructor(public payload: Array<EmployeeItem>){ }
}
export class LoadItemFailedAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_ITEM_FAILED

    constructor(public payload: Error){ }
}
// add item
export class AddItemAction implements Action {
    readonly type = EmployeeActionTypes.ADD_ITEM;

    constructor(public payload: EmployeeItem){ }
}
export class AddItemSuccessAction implements Action {
    readonly type = EmployeeActionTypes.ADD_ITEM_SUCCESS

    constructor(public payload: EmployeeItem){ }
}
export class AddItemFailedAction implements Action {
    readonly type = EmployeeActionTypes.ADD_ITEM_FAILED

    constructor(public payload: Error){ }
}
// delete item
export class DeleteItemAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_ITEM;

    constructor(public payload: number){ }
}
export class DeleteItemSuccessAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_ITEM_SUCCESS

    constructor(public payload: number){ }
}
export class DeleteItemFailedAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_ITEM_FAILED

    constructor(public payload: Error){ }
}

export type EmployeeAction =
LoadItemAction |
LoadItemSuccessAction |
LoadItemFailedAction | 
AddItemAction |
AddItemSuccessAction |
AddItemFailedAction |
DeleteItemAction |
DeleteItemSuccessAction |
DeleteItemFailedAction;