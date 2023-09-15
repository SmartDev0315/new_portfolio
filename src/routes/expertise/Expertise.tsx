import Button from '~/components/Button/Button'
import CardExpertise from '~/components/CardExpertise/CardExpertise'
import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import './Expertise.scss'

export default function Expertise() {
  return (
    <LayoutDefault>
      <div className="expertise-page">
        <CardExpertise
          level="Senior"
          technology="Front End Development"
          duration="4 years"
          skills={[
            'React',
            'Redux',
            'Next.js',
            'Tailwind CSS',
          ]}
          links={[
            'https://nextbrain.ca',
            'https://codepaper.com',
            'https://www.rentfaster.ca',
            'https://www.medievaledge.com/',
          ]}
        />
        <CardExpertise
          level="Senior"
          technology="Back End Development"
          duration="3 years"
          skills={[
            'Node.js',
            'Express',
            'Mongoose',
            'Jest',
            'Winston',
            'Joi',
            'Config',
          ]}
          links={['https://github.com/0xLe0x']}
        />
        <CardExpertise
          level="Junior"
          technology="Blockchain Development"
          duration="1 year"
          skills={[
            'Cryptocurrency',
            'Ethereum',
          ]}
          links={['https://github.com/0xLe0x']}
        />

        <div className="action-links">
          Click to see full list and description of
          <Button to="/projects">My Projects</Button>
          or
          <Button to="/work-experience">My Work Experience</Button>
        </div>
      </div>
    </LayoutDefault>
  )
}
