import { Component } from '@angular/core';
import { ListService } from '../list.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  items: any

  totalPages!: number;
  pageNumber: number = 1;
  searchText: any;
  data: any;
  constructor(private list: ListService, private http : HttpClient) { }
  ngOnInit() {

    this.listData()
  }
  listData() {
    this.list.getData().subscribe((res: any) => {
      this.items = res
      console.log(res, 'resdata')

    })
  }
  onTableDataChange(event: any) {
    this.pageNumber = event;
    this.listData();
  }

  onDeleteItem(id: number) {
    this.list.dltData(id).subscribe((res: any) => {
      alert(JSON.stringify(res))
      console.log(res, 'deleted')
    })
  }

}
