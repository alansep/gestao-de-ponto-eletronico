import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

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
  public aoDigitar: EventEmitter<string> = new EventEmitter();

  @Input()
  public conteudo: string = '';

  constructor() {}

  ngOnInit(): void {}

  public emitirEventoDeDigitacao($event: any) {
    let conteudoExtraido: string = this.extrairConteudo($event);
    this.aoDigitar.emit(conteudoExtraido);
  }

  private extrairConteudo($event: any): string {
    return $event.key === 'Backspace'
      ? this.conteudo.substring(0, this.conteudo.length - 1)
      : this.conteudo + $event.key;
  }
}
