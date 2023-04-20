import './stackIconsDisplay.scss'

const StackIconsDisplay = ({ item }) => {
    return (
        <div className='stack__element'>
            <img src={process.env.PUBLIC_URL + item.url} alt={item.name} />
            <p>{item.name}</p>
        </div>
    );
}

export default StackIconsDisplay;