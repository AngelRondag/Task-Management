import { Logo } from '../../Components/Logo';
import { ButtonTask } from '../../Components/ButtonTask';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home')
    };

    return (
        <div className='flex colum flex-col items-center'>
            < Logo />
            <h1
                className='font-bold text-center text-xl text-gray-800 mt-8 w-52 '>
                Task Management & To-Do List
            </h1>
            <p className=' w-4/5 max-w-sm mt-4 m font-normal text-center text-gray-600 text-sm'>
                This productive tool is designed to help you better
                manage your task project-wise conveniently!
            </p>
                <ButtonTask
                    content={`Let's start`}
                    onClick={goToHome}>
                </ButtonTask>
        </div>
    )
}

export { WelcomePage };