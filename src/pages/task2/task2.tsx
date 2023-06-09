import { useState } from 'react';
import Header from '../../components/header/header';

export default function Task2() {

  const awaitTimer = (timer: number) => new Promise<void>(resolve => setTimeout(resolve, timer));

  const [count, setCount] = useState('Go!');
  const [hovered, setHovered] = useState(false);

  const onBtnClick = async (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.target as HTMLInputElement;
    btn.classList.toggle('active');

    let i = 1;

    while (btn.classList.contains('active')) {
      await awaitTimer(700);
      setCount(i.toString());
      i += 1;

      if (i > 4) {
        setCount('Go!');
        i = 1;
      }
    }

    if (!btn.classList.contains('active')) {
      setCount('Go!');
      setHovered(false);
    }
  }

  const toggleHover = (e: React.MouseEvent<HTMLElement>, isHovered: boolean) => {
    const btn = e.target as HTMLInputElement;

    if (!btn.classList.contains('active')) {
      return;
    }

    setHovered(isHovered)
  };

  return(
    <div
      className={hovered ? 'page hovered' : 'page'}
    >
      <Header />
      <main className='page__main'>
        <div className='page__flex-layout container'>
          <button 
            className='diamond' 
            type='button'
            onClick={onBtnClick}
            onMouseEnter={(e) => toggleHover(e, true)}
            onMouseLeave={(e) => toggleHover(e, false)}
          >
            {count}
          </button>
        </div>
      </main>
    </div>
  )
}
