import { NgModule, ModuleWithProviders } from '@angular/core';
import { StorageService } from './storage.service';

@NgModule({
  providers: [
    StorageService
  ]
})
export class StorageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StorageModule,
      providers: [
        { provide: StorageService, useClass: StorageService }
      ]
    };
  }
}
