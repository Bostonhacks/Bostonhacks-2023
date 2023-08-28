import treasureChest from '../../assets/images/BigTreasureChest_Open.png'

const WhyUs = () => {
    return (
        <div className='flex items-center mt-[100px] flex-col mb-[100px]'>
            <div className="flex space-x-3 w-[930px] flex-col">
                <div className="flex items-center space-x-8 pb-4 border-b-4 border-[#3D3C6A] w-[550px]">
                    <img src={treasureChest} alt="Image" className="ml-4 w-15 h-12" />
                    <h1 className="text-[28px] font-minecraft font-bold text-white">
                        Connect
                    </h1>
                </div>

                <div className="mt-8 w-full">
                    <h1 className="text-[24px] leading-[1] font-minecraft text-white">
                        Give your API or product a test run before send ing it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.
                    </h1>
                </div>
            </div>

            <div>
                <div className="flex space-x-3 w-[930px] mt-[100px] justify-end">
                    <div className="flex items-center space-x-8 pb-4 border-b-4 border-[#3D3C6A] w-[550px] justify-end">
                        <h1 className="text-[28px] font-minecraft font-bold text-white">
                            Recruit
                        </h1>
                        <img src={treasureChest} alt="Image" className="pr-4 w-15 h-12" />
                    </div>
                </div>

                <div className="mt-8 text-right flex space-x-3 w-[930px] ">
                    <h1 className="text-[24px] leading-[1] font-minecraft text-white pr-[10px] pl-[50px]">
                        Resumes are two-dimensional (literally). Interviews give only a small snapshot of an individual’s abilities. By watching a project evolve over a hackathon, you can get a much better picture of a candidate. Plus, you’ll have access to a group of students that are extraordinarily passionate about what they do, and a friendly environment to interact with them in.
                    </h1>
                </div>
            </div>

            <div className="flex space-x-3 w-[930px] flex-col mt-[100px]">
                <div className="flex items-center space-x-8 pb-4 border-b-4 border-[#3D3C6A] w-[550px]">
                <img src={treasureChest} alt="Image" className="ml-4 w-15 h-12" />
                    <h1 className="text-[28px] font-minecraft font-bold text-white">
                        Get Live Feedback
                    </h1>
                </div>

                <div className="mt-8 w-full">
                    <h1 className="text-[24px] leading-[1] font-minecraft text-white">
                        Reach out to future customers, leaders and innovators. Test waters and get a sense of emergent technologies. Collaborate with students on a more intimate level at our comfortably mid-sized hackathon. Offer students advice and/or tech to help them through their projects. Whether you’re looking for brand awareness, technical expertise or personal development, you’ll find it here—with 100 motivated hackers and dozens of skilled mentors.
                    </h1>
                </div>
            </div>
        </div>
    );
  };

export default WhyUs;