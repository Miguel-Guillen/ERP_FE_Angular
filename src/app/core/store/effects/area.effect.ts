import { Injectable } from "@angular/core";
import { AreaService } from "../../service/area.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material/dialog";

import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as AreaActions from "../actions/area.actions";

@Injectable()
export class AreaEffects {
    loadEmployee$ = createEffect(() => this.actions$.pipe(
        ofType<AreaActions.LoadAreaAction>(AreaActions.AreaActionTypes.LOAD_ITEM),
        mergeMap(() => this._serviceA.get().
        pipe(
            map(res => new AreaActions.LoadAreaSuccessAction(res)),
            catchError(err => of(new AreaActions.LoadAreaFailedAction(err)))
        ))
    ))

    addEmployee$ = createEffect(() => this.actions$.pipe(
        ofType<AreaActions.AddAreaAction>(AreaActions.AreaActionTypes.ADD_ITEM),
        mergeMap((data) => this._serviceA.add(data.payload).
        pipe(
            map(() => new AreaActions.AddAreaSuccessAction(data.payload)),
            tap(() => {
                this.modal.closeAll();
                this.toast.success('El empleado ha sido añadido con exito', '', 
                { positionClass: 'toast-bottom-right' });
            }),
            catchError(err => of(new AreaActions.AddAreaSuccessAction(err)))
        ))
    ))

    addEmployeeFailed$ = createEffect(() => this.actions$.pipe(
        ofType<AreaActions.AddAreaFailedAction>(AreaActions.AreaActionTypes.ADD_ITEM_FAILED),
        tap(() => {
            this.modal.closeAll();
            this.toast.error('Ha ocurrido un error al guardar el empleado', '', 
            { positionClass: 'toast-bottom-right' });
        })
    ), { dispatch: false })

    // deleteEmployee$ = createEffect(() => this.actions$.pipe(
    //     ofType<AreaActions.DeleteItemAction>(EmployeeActions.EmployeeActionTypes.DELETE_ITEM),
    //     mergeMap((data) => this._serviceA.delete(data.payload).
    //     pipe(
    //         map(() => new EmployeeActions.DeleteItemSuccessAction(data.payload)),
    //         tap(() => {
    //             this.modal.closeAll();
    //             this.toast.info('El empleado ha sido eliminado', '', 
    //             { positionClass: 'toast-bottom-right' });
    //         }),
    //         catchError(err => of(new EmployeeActions.DeleteItemFailedAction(err)))
    //     ))
    // ))

    constructor(private actions$: Actions, private _serviceA: AreaService,
        private toast: ToastrService, private modal: MatDialog){}
}