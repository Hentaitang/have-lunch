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
    <main className={`flex min-h-screen flex-col items-center justify-between py-24 px-10 ${inter.className}`}>
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
        <div className="flex" style={{ flexFlow: 'wrap' }}>
          {stateLunchList[0].map((item, key) => (
            <div className="flex" key={item} style={{ paddingRight: '10px', paddingBottom: '10px' }}>
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
                <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.49414 2.4H0.869141C0.74482 2.4 0.625592 2.35259 0.537684 2.2682C0.449777 2.18381 0.400391 2.06935 0.400391 1.95C0.400391 1.83065 0.449777 1.71619 0.537684 1.6318C0.625592 1.54741 0.74482 1.5 0.869141 1.5H11.1816C11.306 1.5 11.4252 1.54741 11.5131 1.6318C11.601 1.71619 11.6504 1.83065 11.6504 1.95C11.6504 2.06935 11.601 2.18381 11.5131 2.2682C11.4252 2.35259 11.306 2.4 11.1816 2.4H2.43164V10.35C2.43164 10.4485 2.45185 10.546 2.49111 10.637C2.53037 10.728 2.58792 10.8107 2.66046 10.8803C2.73301 10.95 2.81913 11.0052 2.91392 11.0429C3.0087 11.0806 3.1103 11.1 3.21289 11.1H8.83789C8.94049 11.1 9.04208 11.0806 9.13686 11.0429C9.23165 11.0052 9.31777 10.95 9.39032 10.8803C9.46286 10.8107 9.52041 10.728 9.55967 10.637C9.59893 10.546 9.61914 10.4485 9.61914 10.35V2.31C9.61914 2.19065 9.66853 2.07619 9.75644 1.9918C9.84434 1.90741 9.96357 1.86 10.0879 1.86C10.2122 1.86 10.3314 1.90741 10.4193 1.9918C10.5073 2.07619 10.5566 2.19065 10.5566 2.31V10.35C10.5566 11.2612 9.78711 12 8.83789 12H3.21289C2.26367 12 1.49414 11.2612 1.49414 10.35V2.4ZM4.77539 0.9C4.65107 0.9 4.53184 0.852589 4.44393 0.768198C4.35603 0.683807 4.30664 0.569347 4.30664 0.45C4.30664 0.330653 4.35603 0.216193 4.44393 0.131802C4.53184 0.0474106 4.65107 0 4.77539 0H7.27539C7.39971 0 7.51894 0.0474106 7.60685 0.131802C7.69475 0.216193 7.74414 0.330653 7.74414 0.45C7.74414 0.569347 7.69475 0.683807 7.60685 0.768198C7.51894 0.852589 7.39971 0.9 7.27539 0.9H4.77539ZM4.30664 4.95C4.30664 4.83065 4.35603 4.71619 4.44393 4.6318C4.53184 4.54741 4.65107 4.5 4.77539 4.5C4.89971 4.5 5.01894 4.54741 5.10685 4.6318C5.19476 4.71619 5.24414 4.83065 5.24414 4.95V8.55C5.24414 8.66935 5.19476 8.78381 5.10685 8.8682C5.01894 8.95259 4.89971 9 4.77539 9C4.65107 9 4.53184 8.95259 4.44393 8.8682C4.35603 8.78381 4.30664 8.66935 4.30664 8.55V4.95ZM6.80664 4.95C6.80664 4.83065 6.85603 4.71619 6.94393 4.6318C7.03184 4.54741 7.15107 4.5 7.27539 4.5C7.39971 4.5 7.51894 4.54741 7.60685 4.6318C7.69475 4.71619 7.74414 4.83065 7.74414 4.95V8.55C7.74414 8.66935 7.69475 8.78381 7.60685 8.8682C7.51894 8.95259 7.39971 9 7.27539 9C7.15107 9 7.03184 8.95259 6.94393 8.8682C6.85603 8.78381 6.80664 8.66935 6.80664 8.55V4.95Z"
                    fill="#1D1D1D"
                  />
                </svg>
              </div>
              ,
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex place-items-center ">
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
          <div className="text-center font-bold p-8 text-8xl">{stateCurrent[0]}</div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
});

export default Home;
