import title from '../../assets/images/title.svg';

const Title = () => {
    return (
        <section classname="w-full flex flex-col items-center justify-center text-text-primary">
            <div className="relative flex items-center justify-center">
                <img classname="" src={title} alt="Boston Hacks"/>
            </div>
        </section>
    )
}

export default Title