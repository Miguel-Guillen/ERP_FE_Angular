import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';
import { EmployeeService } from 'src/app/core/service/employee.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['nombre'];

  myControl = new FormControl();
  options: string[] = ['Miguel Angel', 'German', 'Daniel', 'Roberto'];
  filteredOptions: Observable<string[]>;

  constructor(private _employee: EmployeeService){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  ngOnInit(): void {
    this._employee.get(true).subscribe(res => {
      this.dataSource.data = res;
    })
  }

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  filterTable(value: string) {
    const data = this.dataSource.data;
    const newData = data.filter(item => item.nombre == value);
    this.dataSource.data = newData;
  }  
}
