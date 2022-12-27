import { createEvent, createStore } from 'effector';

export interface IToDo {
    id: number
    title: string
    useful: boolean
    coins: string | number
}

export const setMyList = createEvent<IToDo[]>()
export const setHistory = createEvent<IToDo[]>()
export const setBank = createEvent<number>()

export const $myList = createStore([] as IToDo[]).on(setMyList, (o, newList: IToDo[]) => newList)

export const $history = createStore([] as IToDo[]).on(setHistory, (o, newHistory: IToDo[]) => newHistory)

export const $bank = createStore(0 as number).on(setBank, (o, newBank: number) => newBank)