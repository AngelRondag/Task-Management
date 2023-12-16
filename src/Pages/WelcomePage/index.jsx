import { useNavigate } from 'react-router-dom';
import { ButtonTask } from '../../Components/ButtonTask';
import { Logo } from '../../Components/Logo';

const WelcomePage = () => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/tasks/all')
    }

    return (
        <div className='flex colum flex-col items-center'>
            < Logo />
            <h1
                className='font-bold text-center text-xl text-secondary mt-8 w-52 '>
                Task Management & To-Do List
            </h1>
            <p className=' w-4/5 max-w-sm mt-4 m font-normal text-center text-cust-intermediate text-sm'>
                This productive tool is designed to help you better
                manage your task project-wise conveniently!
            </p>
            <div className='flex justify-center w-full absolute bottom-3 '>
                <ButtonTask
                    content={`Let's start`}
                    onClick={goToHome}
                    background={'bg-cust-primary'}
                    color={'text-white'}
                />
            </div>
        </div>
    )
}

export { WelcomePage };