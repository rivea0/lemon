'use client';

import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { theme: activeTheme, setTheme } = useTheme();

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="p-2 m-1" data-testid="themeOpen">
        <span className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="inline mr-1"
          >
            <path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path>
          </svg>
          Theme
        </span>
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block ml-[.4rem]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] p-2 w-32">
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start"
            aria-label="Light"
            value="light"
            onChange={() => setTheme('light')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start"
            aria-label="Dark"
            value="dark"
            onChange={() => setTheme('dark')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start"
            aria-label="Dim"
            value="dim"
            onChange={() => setTheme('dim')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start"
            aria-label="Lemonade"
            value="lemonade"
            onChange={() => setTheme('lemonade')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start"
            aria-label="Dracula"
            value="dracula"
            onChange={() => setTheme('dracula')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start"
            aria-label="Synthwave"
            value="synthwave"
            onChange={() => setTheme('synthwave')}
          />
        </li>

        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start"
            aria-label="Nord"
            value="nord"
            onChange={() => setTheme('nord')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block justify-start"
            aria-label="Autumn"
            value="autumn"
            onChange={() => setTheme('autumn')}
          />
        </li>
      </ul>
    </div>
  );
}
