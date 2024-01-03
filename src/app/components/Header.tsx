import { Raleway } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Drawer from './Drawer';
import ThemeSwitcher from './ThemeSwitcher';

const raleway = Raleway({ subsets: ['latin'] });

export default function Header() {
  return (
    <div className={`navbar ${raleway.className}`}>
      <div className="flex flex-1">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/lemon.svg"
            alt="Lemon Logo"
            width={50}
            height={50}
            priority
          />
          <span className="">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-500">
              Lemon
            </h1>
          </span>
        </Link>
      </div>
      <div className="flex justify-end flex-1 px-2 gap-1">
        <div className="flex items-stretch">
          <ThemeSwitcher />
        </div>
        <div className="cursor-pointer">
          <Drawer />
        </div>
      </div>
    </div>
  );
}
