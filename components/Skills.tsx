import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] '>
        <h1 className='heading'>Education & <span className='text-yellow-400'>Skills</span></h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkillsItem title="React Developer" year="2021-2022"/>
                <SkillsItem title="MERN Stack Developer" year="2022-2023"/>
                <SkillsLanguage skill1="html" skill2="css" skill3="javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
            </div>
            <div>
                <SkillsItem title="Next Js Developer" year="2021-2022"/>
                <SkillsItem title="Node Js Developer" year="2022-2023"/>
                <SkillsLanguage skill1="React Js" skill2="Next Js" skill3="TypeScript" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]"/>
            </div>
        </div>
    </div>
    
  )
}

export default Skills