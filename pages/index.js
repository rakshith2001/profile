import Head from "next/head";
import {FaGithub} from 'react-icons/fa'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,

} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import raks from "../public/subject5.png"
import code from "../public/code.png";
import Images from "next/image";





export default function Home() {
  

  


  

  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rakshith R</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Rakshith R</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
              <button onClick={(e)=>download(e)}
                  className="bg-gradient-to-r   from-purple-700  to-red-600 text-white px-4 py-2 border-none rounded-md ml-8 "
                 
                   >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-purple-600 font-medium dark:text-purple-600 md:text-6xl">
              Rakshith R
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer and Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I'm a final year student persuing <span className="text-purple-600">Computer Science and Engineering</span> in Shree Devi Institute Of Technology, passionate about learning new technologies
              and improving myself, like to explore and learn somthing new everyday.Currently worked on <span className="text-purple-600">Web Development</span> and <span className="text-purple-600">App Development </span>projects.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
              <a href="https://twitter.com/Rakshit09631777"><AiFillTwitterCircle/></a>
              <a href="https://www.linkedin.com/in/rakshith-r-3a98aa187/"><AiFillLinkedin/></a>
              <a href="https://github.com/rakshith2001/rakshith2001"><FaGithub/></a>
            </div>
            <div className="mx-auto bg-gradient-to-b  from-purple-600 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Images src={raks} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-purple-600 dark:text-purple-600 ">My Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              These are some of the <span className=" text-purple-600">projects</span> that I have created in my University and <span className=" text-purple-600">Internship project</span> and some <span className=" text-purple-600">Freelancing projects</span>.
              
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer variety of skills from programing to testing,I'm a beginner but very passionate about learning,so if you like to collab on anything feel free to dm.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Images src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 py-4 text-purple-600 ">
                hellow
              </h3>
              <h4 className="py-2 text-purple-600">
                Internship project in Django
              </h4>
              
              <p className="text-gray-800 py-1">learned the basics of Python</p>
              <p className="text-gray-800 py-1">Using bootstrap classes</p>
              <p className="text-gray-800 py-1">Creating and maintaing backend</p>
              <p className="text-purple-600 py-1">hellows</p>
            </div>


            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Images src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 py-4 text-purple-600 ">
              <a className=" text-purple-600" href="https://github.com/rakshith2001/UnitConverter">Unit Converter</a>
              </h3>
              <p className="py-2">
                Using Android Studio 
              </p>
              <h4 className="py-4 text-gray-800 py-1">Learned the fundamentals of xml</h4>
              <p className="text-gray-800 py-1">OOP using java</p>
              <p className="text-gray-800 py-1">Learned about Array Addapters</p>
              <p className="text-gray-800 py-1">Making a user login</p>
              
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Images src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 py-4 text-purple-600 ">
              <a className=" text-purple-600" >Mini Games</a>
              </h3>
              <p className="py-2">
                Using Android Studio 
              </p>
              <h4 className="py-4 text-gray-800 py-1">Learned the fundamentals of xml</h4>
              <p className="text-gray-800 py-1">OOP using java</p>
              <p className="text-gray-800 py-1">Implementing a random function for coin toss</p>
              <p className="text-gray-800 py-1">Implementing Spinning function to a bottle</p>
              
            </div>


            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Images src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  py-4 text-purple-600">
              <a href="http://www.radixtechnix.com/">Web development</a>
              </h3>
              <p className="py-2 py-4">
                Had to modify a wordpress website which was given as a freelance 
                contract
              </p>
              <h4 className="py-4 text-gray-800 ">Working with the team</h4>
              <p className="text-gray-800 py-1">Learned about wordpress</p>
              <p className="text-gray-800 py-1">Created a video AD</p>
              
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">My Profile</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            My name is Rakshith and I'm currently studying computer science and engineering, while I was reading this description I thought what could I write that was a sample of my technical writing, it was mainly about freelancing gigs which I thought didn't fit my current description so I will give a brief summary about myself, as I mentioned my name is Rakshith and currently studying computer science and engineering which I will pass out in the year 2023.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I had to learn the skills which are on the spot which is what I am good at and I'm a very good listener, I hope I would get the opportunity to work with this awesome company, and what I have learned from my engineering degree is almost useless when it comes to working in the real world, but that degree has thought me to work hard because the degree itself isn't easy you have to learn a lot of thing in a short amount of time, lots of maths and computer related concepts and with projects and exams, which has taught me how to work with people and how to learn new information in a short amount of time and overall how to work as a group and how to work as a leader and to work under a leader what my engineering journey has thought me.
            </p>
          </div>
          
            
            
        
        </section>
      </main>
    </div>
  );
}
