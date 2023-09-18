import React, { useState } from 'react';
import track1 from '../../assets/images/LandingPage/track1.png';
import track2 from '../../assets/images/LandingPage/track2.png';
import track3 from '../../assets/images/LandingPage/track3.png';
import Modal from '@mui/material/Modal';
import TrackModal from './TrackModal';
import TracksTitleBG from '../../assets/images/LandingPage/TracksTitleBG.svg';

const TrackModals = () => {
  const [track1Open, setTrack1Open] = useState(false);
  const [track2Open, setTrack2Open] = useState(false);
  const [track3Open, setTrack3Open] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className="relative flex items-center justify-center md:h-[132px] md:w-[431px] h-[57px] w-[186px] mb-20 max-sm:mb-0 max-sm:mt-10"
        id="tracks"
      >
        <h2 className="z-50 text-center relative md:text-5xl text-4xl pb-1 text-text-primary">
          TRACKS
        </h2>
        <img
          className="z-20 absolute"
          src={TracksTitleBG}
          alt="TracksTitleBG"
        />
      </div>
      <div className="w-full flex flex-row items-center justify-center">
        <div className="w-[75vw] flex flex-col md:flex-row  items-center justify-around">
          <button
            className="mt-[10vh] md:mt-0 z-50"
            onClick={() => {
              setTrack1Open(true);
            }}
          >
            <img src={track1} alt="track 1" />
          </button>
          <button
            className="mt-[10vh] md:mt-0 z-50"
            onClick={() => {
              setTrack2Open(true);
            }}
          >
            <img src={track2} alt="track 2" />
          </button>
          <button
            className="mt-[10vh] md:mt-0 z-50"
            onClick={() => {
              setTrack3Open(true);
            }}
          >
            <img src={track3} alt="track 3" />
          </button>
        </div>
        <Modal
          open={track1Open}
          onClose={() => {
            setTrack1Open(false);
          }}
        >
          <TrackModal
            title1="DIGITAL"
            title2="DREAMERS"
            description="As we grow older, we often reminisce about the days when we were young children—when our imagination ran free and our minds weren’t constrained by reality. We could create new worlds and entire stories with our toys and embark on journeys to the uncharted territories of our mind. This track brings us back in touch with the creative child we once were, where we can construct new worlds with technology. How can we leverage technology, AI, and collaborative platforms to push the boundaries of interactive storytelling, artistic expression, and immersive experiences?"
            guiding={[
              'How can you create an interactive narrative experience where players make choices that shape the story?',
              'How can you create a challenging yet rewarding gameplay loop that keeps players engaged?',
              'How can you create engaging automated interactions between the user and in-characters?',
              'How can you incorporate choices and branching storylines to make the game more immersive?',
              'How can you train a machine learning model to generate unique and visually appealing art pieces?',
              'How can you train a machine learning model to generate unique and acoustically appealing music pieces?',
              'How can you develop a system where teams can collaboratively build and design various aspects of a fantasy world?',
            ]}
          />
        </Modal>
        <Modal
          open={track2Open}
          onClose={() => {
            setTrack2Open(false);
          }}
        >
          <TrackModal
            title1="INCLUSIVE"
            title2="INNOVATION"
            description="With the growing and ever-evolving landscape of technology, it is essential as creators and innovators to embrace our responsibility to address the challenge of upholding fairness, inclusivity, and basic human rights. As developers, we have the unique opportunity to utilize technology to bring people together and empower those who might not be as fortunate. The world is a big place with a diverse group of people from all walks of life—think of how you can utilize technology to create a more culturally-connected, accessible, and healthier society and foster a more inclusive and/or equitable society."
            guiding={[
              'How can you leverage technology to bridge language barriers and facilitate communication between people who speak different languages?',
              'Can you develop a real-time translation tool or language learning platform to enhance intercultural communication?',
              'Can you design virtual reality or augmented reality experiences that simulate cultural environments?',
              'How can you build an educational platform that caters to different learning needs and styles that are currently underrepresented such as visual, auditory, and kinesthetic learning?',
              'How can you improve  features such as text-to-speech, closed captions, or interactive learning tools?',
              'How can you use augmented reality to address accessibility challenges like visual impairments or navigation difficulties in everyday life?',
              'How can you leverage technology such as computer vision and natural language processi to assist individuals with disabilities navigate daily life?',
            ]}
          />
        </Modal>
        <Modal
          open={track3Open}
          onClose={() => {
            setTrack3Open(false);
          }}
        >
          <TrackModal
            title1="SUSTAINABLE"
            title2="SOLUTIONS"
            description="In our rapidly evolving society and technologically driven society, it is easy to lose touch with the natural world that has supported human life for billions of years. While we immerse ourselves in the technological world, we must not forget about the sanctuary this earth has provided. Thus we must utilize technology to bring about the preservation and conservation of nature. How can we harmonize our technological progress with maintaining our natural world?"
            guiding={[
              'How can you build a platform to educate users about the importance of nature and sustainable practices?',
              'Can you provide personalized recommendations or challenges to encourage users to adopt sustainable behaviors?',
              'Can you create features that educate users on ways they can contribute to sustainability and where they can take action (eg.  locate things like  recycling centers, learn about recycling guidelines, or track their environmental impact?) ',
              'Can you create features that educate users about various ways of practicing sustainability and empower them to take action?',
              'How can you create a platform that facilitates the organization of group cleanups, tree planting events, or other nature-focused activities through features like event management or volunteer coordination?',
              'How can you leverage technology to support environmental protests and lobbying efforts for sustainability advocacy?',
            ]}
          />
        </Modal>
      </div>
    </div>
  );
};

export default TrackModals;
