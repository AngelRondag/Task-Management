import { FaUser, FaBook, FaHeartbeat } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { CgMore } from "react-icons/cg";
import { MdDescription } from "react-icons/md";

const TaskIcon = ({ type }) => {

    const background = {
        'Unspecified': 'bg-[#f2eeee]',
        'Work Project': 'bg-[#FFE4F2]',
        'Personal Project': 'bg-[#EDE4FF]',
        'Daily Study': 'bg-[#FFE6D4]',
        'Welfare': 'bg-[#E6EBFF]',
        'Description': 'bg-[#EFEFEF]'
    }
    const iconTypes = {
        'Unspecified': <CgMore color='#a7a7a7' />,
        'Work Project': <IoBriefcase color='#F478B8' />,
        'Personal Project': <FaUser color='#9260F4' />,
        'Daily Study': <FaBook color='#FF9142' />,
        'Welfare': <FaHeartbeat color='#6D84DB ' />,
        'Description': <MdDescription color='#616161'/>

    }

    return (
        <span className={`${background[type]} inline-block p-1.5 rounded-md text-center text-sm`}>
            {iconTypes[type]}
        </span>
    )
}

export { TaskIcon }