import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined'

export interface IMenu {
    id: number
    title: string
    icon: any
    to: string
}

export const menu: IMenu[] = [
    {
        id: 0,
        title: 'Account',
        icon: AccountBalanceWalletOutlinedIcon,
        to: '/account',
    },
    {
        id: 1,
        title: 'My to-do list',
        icon: FormatListBulletedOutlinedIcon,
        to: '/my-list',
    },
    {
        id: 2,
        title: 'Suggestions',
        icon: TipsAndUpdatesOutlinedIcon,
        to: '/suggestions',
    },
]