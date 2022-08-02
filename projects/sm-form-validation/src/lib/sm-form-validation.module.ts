import {ModuleWithProviders, NgModule} from '@angular/core';
import {ControlErrorComponent} from './components';
import {ControlErrorContainerDirective, ControlErrorDirective, FormSubmitDirective} from './directives';
import {SMFormValidationConfig} from './interface';
import {defaultErrors, FORM_ERRORS} from './data';

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
  static config(smFormValidationConfig: SMFormValidationConfig): ModuleWithProviders<SmFormValidationModule> {
    if (smFormValidationConfig && isNotEmpty(smFormValidationConfig)) {
      if (smFormValidationConfig.hasOwnProperty('errorColor'))  {
        const root = document.querySelector(':root');
        // @ts-ignore
        root.style.setProperty('--sm-validation-error-color', smFormValidationConfig.errorColor)
      }
      return {
        ngModule: SmFormValidationModule,
        providers:[{
          provide: FORM_ERRORS,
          useFactory:() => ({...defaultErrors, ...(hasErrorMessages(smFormValidationConfig.defaultErrors) && smFormValidationConfig.defaultErrors)})
        }]
      }
    } else {
      return {
        ngModule: SmFormValidationModule,
        providers:[]
      }
    }

  }
}

function hasErrorMessages(obj: object  | undefined): boolean  {
  if (!obj)  {
    return false;
  }
  if (isNotEmpty(obj)) {
    return true
  }
  return false;
}

function isNotEmpty(object: Object): boolean {
  return Object.values(object).some(x => (x !== undefined && x !== null && x !== ''));
}
