import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataCollectionItemList, ResponseItem } from 'src/app/survey-form/survery-form.component.model';

@Component({
  selector: 'app-text-area-comp',
  templateUrl: './text-area-comp.component.html',
  styleUrls: ['./text-area-comp.component.scss']
})
export class TextAreaCompComponent implements OnChanges {

  textAreaContentData: any;
  textAreaContent: any;
  
  ngOnChanges(changes: SimpleChanges): void {
   
    let contentData = changes['TextAreaDataItem'].currentValue as DataCollectionItemList;

    if(contentData != null && contentData != undefined)
    {
      this.textAreaContentData = contentData;
    }
  }

  @Input()
  TextAreaDataItem: DataCollectionItemList | undefined;
}
