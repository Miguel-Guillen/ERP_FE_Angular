import { Injectable } from "@angular/core";
import { EmployeeService } from "../../service/employee.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material/dialog";

import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as EmployeeActions from "../actions/employee.actions";

@Injectable()
export class EmployeeEffects {
    loadEmployee$ = createEffect(() => this.actions$.pipe(
        ofType<EmployeeActions.LoadItemAction>(EmployeeActions.EmployeeActionTypes.LOAD_ITEM),
        mergeMap((data) => this._serviceE.get(data.payload).
        pipe(
            map(res => new EmployeeActions.LoadItemSuccessAction(res)),
            catchError(err => of(new EmployeeActions.LoadItemFailedAction(err)))
        ))
    ))

    addEmployee$ = createEffect(() => this.actions$.pipe(
        ofType<EmployeeActions.AddItemAction>(EmployeeActions.EmployeeActionTypes.ADD_ITEM),
        mergeMap((data) => this._serviceE.add(data.payload).
        pipe(
            map(() => new EmployeeActions.AddItemSuccessAction(data.payload)),
            tap(() => {
                this.modal.closeAll();
                this.toast.success('El empleado ha sido añadido con exito', '', 
                { positionClass: 'toast-bottom-right' });
            }),
            catchError(err => of(new EmployeeActions.AddItemFailedAction(err)))
        ))
    ))

    addEmployeeFailed$ = createEffect(() => this.actions$.pipe(
        ofType<EmployeeActions.AddItemFailedAction>(EmployeeActions.EmployeeActionTypes.ADD_ITEM_FAILED),
        tap(() => {
            this.modal.closeAll();
            this.toast.error('Ha ocurrido un error al guardar el empleado', '', 
            { positionClass: 'toast-bottom-right' });
        })
    ), { dispatch: false })

    deleteEmployee$ = createEffect(() => this.actions$.pipe(
        ofType<EmployeeActions.DeleteItemAction>(EmployeeActions.EmployeeActionTypes.DELETE_ITEM),
        mergeMap((data) => this._serviceE.delete(data.payload).
        pipe(
            map(() => new EmployeeActions.DeleteItemSuccessAction(data.payload)),
            tap(() => {
                this.modal.closeAll();
                this.toast.info('El empleado ha sido eliminado', '', 
                { positionClass: 'toast-bottom-right' });
            }),
            catchError(err => of(new EmployeeActions.DeleteItemFailedAction(err)))
        ))
    ))

    constructor(private actions$: Actions, private _serviceE: EmployeeService,
        private toast: ToastrService, private modal: MatDialog){}
}