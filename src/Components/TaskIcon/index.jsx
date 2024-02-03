import { FaUser, FaBook, FaHeartbeat } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { CgMore } from "react-icons/cg";
import { MdDescription } from "react-icons/md";

const TaskIcon = ({ type,size }) => {

    const background = {
        'unspecified': 'bg-[#f2eeee]',
        'work_project': 'bg-[#FFE4F2]',
        'personal_project': 'bg-[#EDE4FF]',
        'daily_study': 'bg-[#FFE6D4]',
        'welfare': 'bg-[#E6EBFF]',
        'description': 'bg-[#EFEFEF]'
    }
    const iconTypes = {
        'unspecified': <CgMore color='#a7a7a7' />,
        'work_project': <IoBriefcase color='#F478B8' />,
        'personal_project': <FaUser color='#9260F4' />,
        'daily_study': <FaBook color='#FF9142' />,
        'welfare': <FaHeartbeat color='#6D84DB ' />,
        'description': <MdDescription color='#616161'/>
    }

    return (
        <span className={`${background[type]} inline-block p-1.5 rounded-md text-center ${size}`}>
            {iconTypes[type]}
        </span>
    )
}

export { TaskIcon }