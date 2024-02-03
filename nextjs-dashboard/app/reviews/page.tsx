import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {roboto} from '@/app/ui/fonts';
import {lusitana} from '@/app/ui/fonts';
import {motion, AnimatePresence} from "framer-motion";

import Image from 'next/image';

export default function Page() {


    return (
        <main className="flex min-h-screen flex-col p-6">
          <div className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 p-4 md:h-52">
             <p className={`${lusitana.className} text-xl text-white md:text-5xl md:leading-normal`}>Reviews</p>
          </div>
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex flex-col justify-left gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            
              <p className={`${roboto.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>The Hub</strong>
              </p>
            </div>
            <div className="flex flex-col justify-left gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            
              <p className={`${roboto.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>The Vue</strong>
              </p>
            </div>
            <div className="flex flex-col justify-left gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            
              <p className={`${roboto.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>The Edge</strong>
              </p>
            </div>
            <div className="flex flex-col justify-left gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            
              <p className={`${roboto.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>The Hub</strong>
              </p>
            </div>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              {/* Add Hero Images Here */}
             
            </div>
          </div>
        </main>
      );
  }