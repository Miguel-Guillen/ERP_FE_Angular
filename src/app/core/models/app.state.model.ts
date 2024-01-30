import { Area } from "./area";
import { EmployeeItem } from "./employee";

export interface EmployeeState {
    data: EmployeeItem[],
    loading: boolean,
    err: Error
}

export interface AreaState {
    data: Area[],
    loading: boolean,
    err: Error
}

export interface AppState {
    readonly employee: EmployeeState,
    readonly area: AreaState
}