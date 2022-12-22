import { VALIDATION_ERRORS } from '../constants/VALIDATION_ERRORS';

export const Rules = {
    notEmpty: () => ({
        name: "notEmpty",
        validator: (value: string | number | null) => value !== null && value.toString().length !== 0,
        errorText: VALIDATION_ERRORS.FILL_FIELD
    }),
}