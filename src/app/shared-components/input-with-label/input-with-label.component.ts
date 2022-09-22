import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-with-label',
  templateUrl: './input-with-label.component.html',
  styleUrls: ['./input-with-label.component.scss'],
})
export class InputWithLabelComponent implements OnInit {
  @Input()
  public label: string = '';

  @Input()
  public placeholder: string = '';

  @Output()
  public onTyping: EventEmitter<string> = new EventEmitter();

  @Input()
  public content: string = '';

  constructor() {}

  ngOnInit(): void {}

  public emitTypingEvent($event: any) {
    let extractedContent: string = this.extractContent($event);
    this.onTyping.emit(extractedContent);
  }

  private extractContent($event: any): string {
    return $event.key === 'Backspace'
      ? this.content.substring(0, this.content.length - 1)
      : this.content + $event.key;
  }
}
