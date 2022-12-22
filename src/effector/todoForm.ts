import { Rules } from './rules';
import { createForm } from 'effector-forms';
import { createEffect, createEvent, forward } from 'effector';
import { $myList, setMyList } from './userInfo';

interface ICreateToDoDTO {
    todoName: string
    coins: string | number
    isUseful: boolean
}

export const clearToDoForm = createEvent()

export const createToDoFx = createEffect(async (values: ICreateToDoDTO) => {
    setMyList([
        ...$myList.getState(),
        {
          id: $myList.getState().length,
          title: values.todoName,
          useful: values.isUseful,
          coins: +values.coins,
        },
      ])
      clearToDoForm()
})

export const todoForm = createForm({
    fields: {
        todoName: {
            init: '' as string,
            rules: [Rules.notEmpty()]
        },
        coins: {
            init: '' as string,
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

forward({
    from: clearToDoForm,
    to: todoForm.reset
})