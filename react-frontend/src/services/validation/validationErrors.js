import * as ERROR_MESSAGES from './validationMessages'

const validationErrors = {
    show(fieldError, parameters=undefined){
        if( !fieldError ) return '';
        if( fieldError.type === 'required' ) 
            return ERROR_MESSAGES.REQUIRED
        else if (parameters === undefined) 
            return ERROR_MESSAGES.PLEASE_ENTER_VALID_INPUT
        else if(parameters.maxLength !== undefined && parameters.maxLength === 16 && fieldError.type === 'maxLength' ) 
            return ERROR_MESSAGES.CAN_BE_16_CHARACTERS_MAX
        else if(parameters.maxLength !== undefined && parameters.maxLength === 32 && fieldError.type === 'maxLength' ) 
            return ERROR_MESSAGES.CAN_BE_32_CHARACTERS_MAX
        else if(parameters.minLength !== undefined && parameters.minLength === 8 && fieldError.type === 'minLength' ) 
            return ERROR_MESSAGES.MUST_BE_8_CHARACTERS_MIN
        else if(parameters.minLength !== undefined && parameters.minLength === 3 && fieldError.type === 'minLength' )
            return ERROR_MESSAGES.MUST_BE_3_CHARACTERS_MIN
    }
}
export default  validationErrors