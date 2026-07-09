import './card.css'

const Card = ({ iconUrl, title, description }: {
    iconUrl: string
    title: string
    description: string
}) => {
    return (
        <div className='courseCard'>
            <img src={iconUrl} alt="Icon" width={56} />
            <b>{title}</b>
            <p>{description}</p>
            <a href="">Get Started</a>
        </div>
    )
}

export default Card