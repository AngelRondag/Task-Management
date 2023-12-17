
const Indicator = ({ activeIndex }) => {
    const transformValue = `translateX(${70 * activeIndex}px)`;
    return (
        <div className={`indicator rounded-full transition-transform duration-300 ease-in-out w-20 h-20 bg-red-500 transform ${transformValue}`}></div>
    )
}

export { Indicator }