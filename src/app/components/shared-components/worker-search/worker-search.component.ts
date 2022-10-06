import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Worker } from './../../dashboard/components/menu/funcionarios/domain/funcionario';

@Component({
  selector: 'app-worker-search',
  templateUrl: './worker-search.component.html',
  styleUrls: ['./worker-search.component.scss'],
})
export class WorkerSearchComponent implements OnInit, OnChanges {
  @Input()
  public workers: Array<Worker> = [];

  @Output()
  public onSelectWorker: EventEmitter<Worker> = new EventEmitter<Worker>();

  public filteredWorkers: Array<Worker> = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredWorkers = this.workers;
  }

  public search(name: string): void {
    if (name) {
      this.filteredWorkers = this.workers.filter((worker) =>
        worker.name.toUpperCase().match(name.toUpperCase())
      );
    } else {
      this.filteredWorkers = this.workers;
    }
  }

  public selectWorker(worker: Worker): void {
    this.onSelectWorker.emit(worker);
  }
}
