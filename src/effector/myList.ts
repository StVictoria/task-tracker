import { createEvent, createStore } from 'effector';

export interface IToDo {
    id: number
    title: string
    useful: boolean
    coins: number
}

export const setMyList = createEvent<IToDo[]>()

export const $myList = createStore([
    { id: 0, title: 'Buy food', useful: true, coins: 200 },
    { id: 1, title: 'Take a dog for a walk', useful: true, coins: 100 },
    { id: 2, title: 'Play PS', useful: false, coins: 400 },
    { id: 3, title: 'Hang out', useful: false, coins: 1000 },
] as IToDo[]).on(setMyList, (s, newList: IToDo[]) => newList)