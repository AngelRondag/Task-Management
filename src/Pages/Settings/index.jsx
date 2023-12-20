import { Toggle } from '../../Components/Toggle';

const Settings = () => {

    return (

        <div className='w-full h-5/6  '>
            <h2 className='text-lg font-bold text-center text-cust-secondary mt-4'>Settings</h2>
            <div className=' flex justify-center w-4/5 h-5/6 max-w-md mx-auto mt-4  bg-white shadow-lg rounded-lg '>
                <div className='w-4/5 mx-auto mt-8 '>
                    <ul>
                        <li className='flex justify-between items-center border-b-2 border-b-gray-100 py-2 '>
                            <p className='text-sm text-gray-600'>Show calculator in App</p>
                            <Toggle id={0} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export { Settings }