import WhyUsSign from '../../assets/images/SponsorPage/WhyUsSign.svg'
// import OpenChest from '../../assets/images/open-chest.png';
// import ClosedChest from '../../assets/images/closed-chest.png';
const WhyUs = () => {
    
    
    return(
        <div className = "items-center flex flex-col text-white">
            <img 
                src={WhyUsSign} 
                alt='WhyUsSign'
                className = "max-w-md"/>
            <div className='text-left'>
                <h1>Connect</h1>
                <div>Give your API or product a test run before sending it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.</div>
            </div>

            <div className='text-right'>
                <h1>Recruit</h1>
                <div>Resumes are two-dimensional (literally). Interviews give only a small snapshot of an individual’s abilities. By watching a project evolve over a hackathon, you can get a much better picture of a candidate. Plus, you’ll have access to a group of students that are extraordinarily passionate about what they do, and a friendly environment to interact with them in.</div>
            </div>

            <div className='text-left'>
                <h1>Get Live Feedback</h1>
                <div>Reach out to future customers, leaders and innovators. Test waters and get a sense of emergent technologies. Collaborate with students on a more intimate level at our comfortably mid-sized hackathon. Offer students advice and/or tech to help them through their projects. Whether you’re looking for brand awareness, technical expertise or personal development, you’ll find it here—with 100 motivated hackers and dozens of skilled mentors.</div>
            </div>
        </div>
    )
}

export default WhyUs