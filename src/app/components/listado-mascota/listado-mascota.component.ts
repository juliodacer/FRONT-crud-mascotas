import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const LIST_MASCOTAS: Mascota[] = [
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(LIST_MASCOTAS);

  @ViewChild(MatPaginator) paginator!: MatPaginator //! --> No es nulo

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'items por página';
  }

}
