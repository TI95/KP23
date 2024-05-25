import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild,} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {NgbModal,} from "@ng-bootstrap/ng-bootstrap";

declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit{
  private subs: Subscription = new Subscription();
  @ViewChild('popup')
  popup!:TemplateRef<ElementRef>
  private isModalOpened: boolean = false;

  constructor(private modalService: NgbModal,) {
  }

  ngOnInit() {
    $("#accordion").accordion({
        collapsible: true
      });

  }


  ngAfterViewInit() {
    this.subs.add(interval(10000).subscribe(() => {
      if (!this.isModalOpened) {
        this.modalService.open(this.popup, {});
        this.isModalOpened = true;
      }
    }));
  }

  ngOnDestroy() {
    this.modalService.dismissAll()
      this.subs.unsubscribe();

  }
}
