import {Inject} from '@angular/core';
import {SM_FORM_VALIDATION_CONFIG} from '../config';
import {SMFormValidationConfig} from '../interface';

export class ConfigService {
  constructor(@Inject(SM_FORM_VALIDATION_CONFIG) private smFormValidationConfig: SMFormValidationConfig) {
    console.log('in service', this.smFormValidationConfig)
    const root = document.querySelector(':root');
    // @ts-ignore
    root.style.setProperty('--sm-validation-error-color', this.smFormValidationConfig.errorColor)
    console.log('root', root);
  }
}
