import { FC } from 'react'
import SectionTitle from '../_common/SectionTitle'
import s from './styles.module.sass'

interface IHowItWorks {
  setCurrentSection: (section: string) => void
}

const HowItWorks: FC<IHowItWorks> = ({ setCurrentSection }) => {
  return (
    <>
      <SectionTitle title='How it works' />
      <>
        <div className={s.howItWorks_block}>
          <h3 className={s.howItWorks_title}>&#128400; My motivation</h3>
          <p>
            Sometimes people spend some time on useless (to varying degrees)
            things.
            <br /> And sometimes they do something very useful, after which they
            almost have to take a break.
          </p>
          <p>
            It seemed to me that it would be nice to develop a system based on
            trust in the user, which would show useful progress on the things
            done. Thus, it is possible to track whether the progress goes into
            the red and whether the "useless" things outweigh the "useful" ones.
          </p>
          <p>
            The most difficult part is to set the right and reasonable price for
            each case. But personally, I believe that each person should
            realistically evaluate such things, <br />
            if the person, of course, needs it &#128521;
          </p>
        </div>

        <div className={s.howItWorks_block}>
          <h3 className={s.howItWorks_title}>&#129300; How to use this app</h3>
          <p>
            To start your todo progress, you need to{' '}
            <button
              className={s.howItWorks_link}
              onClick={() => setCurrentSection('my-list')}
            >
              Create todo
            </button>
            .
          </p>
          <p>New item will appear in your list of todos.</p>
          <p>
            When you complete a todo, check it and an item will appear in the
            history of your{' '}
            <button
              className={s.howItWorks_link}
              onClick={() => setCurrentSection('account')}
            >
              Account
            </button>
          </p>
          <p>Also you'll see your changed balance.</p>
        </div>

        <div className={s.howItWorks_block}>
          <h3 className={s.howItWorks_title}>
            &#128064; How the app collects data
          </h3>
          <p>This app stores your data at localStorage of your browser.</p>
          <p>
            <b style={{ color: '#e94a15' }}>Note: </b>If you will clean browser
            data, your history and todo list will be cleaned too.
          </p>
        </div>
      </>
    </>
  )
}

export default HowItWorks
