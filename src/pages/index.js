import React, { useState, useEffect, useCallback, memo } from 'react';
import { Inter } from 'next/font/google';
import * as R from 'ramda';

const inter = Inter({ subsets: ['latin'] });
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
const Home = memo(() => {
  const stateValue = useState('');
  const stateCurrent = useState('');
  const stateLunchList = useState([]);
  useEffect(() => {
    document.title = '今天吃什么呢?';
    const lunchList = JSON.parse(localStorage.getItem('eat_somethings'));
    stateLunchList[1](R.is(Array, lunchList) ? lunchList : []);
  }, []);
  const handleInput = useCallback(
    e => {
      e.preventDefault();
      if (R.findIndex(n => R.equals(stateValue[0], n))(stateLunchList[0]) === -1) {
        stateLunchList[1](prev => {
          const res = [...prev, stateValue[0]];
          localStorage.setItem('eat_somethings', JSON.stringify(res));
          return res;
        });
      } else {
        alert(`${stateValue[0]}已经存在了`);
      }
      stateValue[1]('');
    },
    [stateValue[0], stateLunchList[0]],
  );
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        <form onSubmit={handleInput}>
          <input
            type="text"
            name="name"
            className="bg-gray px-4 py-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md"
            placeholder="请输入你想吃的"
            value={stateValue[0]}
            onChange={e => stateValue[1](e.target.value)}
          />
          <button className="py-4 px-3 bg-blue-500 text-white m-2 rounded-md">保存</button>
        </form>
        <div className="flex">
          {stateLunchList[0].map((item, key) => (
            <div className="flex" key={item} style={{ paddingRight: '10px' }}>
              <div style={{ paddingRight: '5px' }}>{item}</div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  stateLunchList[1](prev => {
                    const res = R.filter(n => !R.equals(item, n), prev);
                    localStorage.setItem('eat_somethings', JSON.stringify(res));
                    return res;
                  })
                }
              >
                <img src="/delete.png" alt="delete Logo" className="dark:invert" width={18} height={18} />
              </div>
              ,
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-center">
          <div>
            今天吃什么呢?{' '}
            <button
              className="py-4 px-3 bg-blue-500 text-white m-2 rounded-md"
              onClick={() => {
                const length = stateLunchList[0].length;
                if (length > 0) {
                  stateCurrent[1](stateLunchList[0][getRandomInt(0, stateLunchList[0].length)]);
                } else {
                  alert('请输入要吃的午饭');
                }
              }}
            >
              随机生成
            </button>
          </div>
          <div className="text-center font-bold p-8 text-8xl" >
            {stateCurrent[0]}
          </div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
});

export default Home;
