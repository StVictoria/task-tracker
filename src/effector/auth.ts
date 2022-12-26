import { createStore, createEffect, createEvent, forward } from 'effector';
import { ethers } from 'ethers';

const setAccount = createEvent<string>()

export const $account = createStore('' as string).on(setAccount, (o, account: string) => account)

export const getAccountFx = createEffect<void, string, any>(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.listAccounts()
    return accounts[0]
})

forward({
    from: getAccountFx.doneData,
    to: setAccount
})