// import Image from 'next/image'

// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

import clsx from "clsx";
import { Inter } from "@next/font/google";

const inter = Inter({ variable: "--font-inter" });

export default function Home() {
  return (
    // <div className={clsx('container px-4 mx-auto', inter.className)}>
    //   <h1 className="text-3xl font-bold underline 2xl:text-orange-600">Hello world!</h1>
    // </div>

    <div className="container px-4 mx-auto">
      <h1 className="text-3xl font-bold underline 2xl:text-orange-600">
        Hello world!
      </h1>
      <p className="font-sans">In the example below, we use the font Inter from @next/font/google (You can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter. Then, use inter.variable to add the CSS variable to your HTML document.</p>
      <p className="font-mono">In the example below, we use the font Inter from @next/font/google (You can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter. Then, use inter.variable to add the CSS variable to your HTML document.</p>
    </div>
  );
}
