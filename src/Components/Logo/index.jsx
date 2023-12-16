import image from '../../../public/static/logo-sm.png';

const Logo = () => {
    return (
        <>
            <picture className='w-72 h-72 mt-13' >
                <img className='w-full h-full' src={image} alt="logo" />
            </picture>
        </>
    )
}

export { Logo };