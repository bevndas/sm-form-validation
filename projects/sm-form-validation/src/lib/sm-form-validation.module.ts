import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import {ControlErrorComponent} from './components';
import {ControlErrorContainerDirective, ControlErrorDirective, FormSubmitDirective} from './directives';
import {SMFormValidationConfig} from './interface';
import {SM_FORM_VALIDATION_CONFIG} from './config';
import {ConfigService} from './services';




@NgModule({
  declarations: [
    ControlErrorComponent,
    ControlErrorDirective,
    ControlErrorContainerDirective,
    FormSubmitDirective

  ],
  imports: [
  ],
  exports: [
    ControlErrorComponent,
    ControlErrorDirective,
    ControlErrorContainerDirective,
    FormSubmitDirective
  ]
})
export class SmFormValidationModule {
  static forRoot(smFormValidationConfig: SMFormValidationConfig): ModuleWithProviders<SmFormValidationModule> {
    console.log('config', smFormValidationConfig);
    const root = document.querySelector(':root');
    // @ts-ignore
    root.style.setProperty('--sm-validation-error-color', smFormValidationConfig.errorColor)
    return {
      ngModule: SmFormValidationModule,
      providers:[]
    }
  }
}
