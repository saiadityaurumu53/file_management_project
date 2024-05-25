import Image from "next/image";
import {UserButton} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon, Video } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="" >
      <div className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dopbox. <br/>
            <br/>
            Storing everything for you and your business needs. All in one place
          </h1>

          <p className="pb-20">
            Enhance your personal storage with  DropBox filemanagement system, offering a simple and efficient 
            way to upload, organize and access files from anywhere.
            Securely store important documents and media, and experience the 
            conevenience of easy file management and sharing in one centralized solution. 
          </p>

          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit">
            Try it for free!
            <ArrowRightIcon className="ml-10" />
          </Link>

        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">

          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" 
              type="video/mp4"
             />
             Your Browser does not support the video tag
            
          </video>
          
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This Project of "Dropbox File Management System" is made for practice and educational purposes only for building my project portfolio. 
        I donot own or affliate with Dropbox and/or it's subsidaries in any form. 
        Copyright disclaimer under section 107 of the Copyright Act 1976, allowance is made for "fair use" for the educational purposes. 
      </p>
      
      </main>
  );
}
