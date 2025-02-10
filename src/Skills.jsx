import React from 'react'
import FancyText from "@carefully-coded/react-text-gradient";
import { Popup } from "semantic-ui-react";
import { motion } from "framer-motion";

export function Skills(){
  return (
    <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
    >
        <FancyText
          gradient={{ from: "#FF6F61", to: "#6B5B95", type: "linear" }}
          animateTo={{ from: "#6B5B95", to: "#FF6F61" }}
          animateDuration={2000}
        >
        <h1 className='text-center text-sm m-2 p-2 font-bold md:text-xl md:ml-20'> Every skill you acquire doubles your odds of success - Scott Adams </h1>
        </FancyText>
        <motion.div 
        initial={{y:-1000}}
        animate={{y:0}}
        transition={{duration:1}}
        className='mt-1 text-xl font-bold ml-2 p-2 md:text-2xl md:-mt-3'>
            <h1>Skills</h1>   
        </motion.div>
        <div className='grid grid-cols-3 w-full h-full gap-y-10 justify-center items-center p-2 ml-6 md:grid-cols-5 md:gap-x-0 md:w-[70%]'>
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>HTML</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15 grayscale hover:grayscale-0' src='./Icon/html.png'/>} 
            />
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>CSS</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15  grayscale hover:grayscale-0' src='./Icon/text.png'/>}
            />
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>Java Script</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15  grayscale hover:grayscale-0' src='./Icon/js.png'/>}
            />
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>Node</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15  grayscale hover:grayscale-0' src='./Icon/programing.png'/>}
            />
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>React</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15  grayscale hover:grayscale-0' src='./Icon/science.png'/>}
            />
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>Python</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15  grayscale hover:grayscale-0' src='./Icon/python.png'/>}
            />
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>SnowFlake</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15  grayscale hover:grayscale-0' src='./Icon/snowflake.png'/>}
            />
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>SQL</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15  grayscale hover:grayscale-0' src='./Icon/sql-server.png'/>}
            />
            <Popup
            className='text-xs mb-0.5 font-normal md:mb-1'
            content={<p>Microsoft Office</p>}
            position='top center'
            trigger = {<motion.img whileHover={{scale:1.2}} transition={{duration:1}} className='w-10 h-10 md:w-15 md:h-15  grayscale hover:grayscale-0' src='./Icon/office.png'/>}
            />
        </div>
        <div>
            <motion.div 
            initial={{y:-1000}}
            animate={{y:0}}
            transition={{duration:1}}
            >
            <h1 className='mt-3 text-xl font-bold ml-2 p-2 md:text-2xl'>Certification</h1>
            </motion.div>
        <div className='flex gap-5 justify-center mt-2 md:gap-20'>
            <div className='md:-ml-150'>
                <p className='text-center -mt-2 mb-2 font-bold'>Lean Six Sigma</p>
            <motion.img
                whileHover={{ scale: 2 }}
                transition={{ duration: 1 }} 
                position = "top center"
                className='w-40 h-30 md:w-50 md:h-40'
                src='/lss.jpg' 
                alt='lss' />
            </div>
            <div>
            <p className='text-center -mt-2 mb-2 font-bold md:-mt-3'>Agile Project</p>
            <motion.img 
                whileHover={{scale:2}}
                transition={{duration:1}}
                className='w-40 h-30 md:w-50 md:h-40' 
                src='/agile.jpg' 
                alt='agile' />
            </div>
        </div>
        </div>
    </motion.div>
  )
}