import { Rules } from './rules';
import { createForm } from 'effector-forms';
import { createEffect, forward } from 'effector';

interface ICreateToDoDTO {
    todoName: string
    coins: number | null
    isUseful: boolean
}

export const createToDoFx = createEffect(async (values: ICreateToDoDTO) => {
    console.log(values)
})

export const todoForm = createForm({
    fields: {
        todoName: {
            init: '' as string,
            rules: [Rules.notEmpty()]
        },
        coins: {
            init: null as number | null,
            rules: [Rules.notEmpty()]
        },
        isUseful: {
            init: false as boolean
        }
    },
    validateOn: ['submit']
})

forward({
    from: todoForm.formValidated,
    to: createToDoFx
})