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
  isSave: boolean = false;
  isEdit: boolean = true;
  totalPages!: number;
  pageNumber: number = 1;
  searchText: any;
  data: any;
  constructor(private list: ListService, private http: HttpClient) { }
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
      for (let i = 0; i < this.items.length; ++i) {
        if (this.items[i].id === id) {
          this.items.splice(i, 1);
        }
      }
      console.log(res, 'deleted')
    })
  }
  isEdiRow(id: any) {
    this.items.map((id: { isEdit: boolean; }) => {
      id.isEdit = true;
    });
    this.isEdit = false
    this.isSave = true
  }
  updateUser(id: any) {
    this.items.push()
    this.items.filter((id: { isEdit: boolean; }) => {
      id.isEdit = false;
    });
    this.isSave = false

    this.isEdit = true
  }

}
