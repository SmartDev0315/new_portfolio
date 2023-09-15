import './Projects.scss'

import Button from '~/components/Button/Button'
import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import CardProject from '~/components/CardProject/CardProject'

export default function Projects() {
  const listOfProjects = [
    {
      order: 3,
      title: 'Nextbrain',
      description:
        'A company website that gives customers many good informational services',
      techStack: [
        'React / Laravel / Next.js',
        'SEO',
        'I18n',
        'Responsive design',
        'Web Performance',
      ],
      website: 'https://nextbrain.ca',
      imgName: 'Nextbrain.png',
    },
    {
      order: 100,
      title: 'Codepaper',
      description:
        'A feature-rich website to help businesses grow in the era of digital transformation',
      techStack: [
        'React / Express / MongoDB',
        'SEO',
        'Chart.js',
        'Web Performance',
      ],
      website: 'https://codepaper.com',
      imgName: 'Codepaper.png',
    },
    {
      order: 1,
      title: 'Medieval',
      description:
        'An intuitive website for is an online sales website manufactures and supplies helmets, antiques and collectibles.',
      techStack: [
        'React / Redux / Redux-thunk',
        'Node.js',
        'Responsive Design',
      ],
      website: 'https://www.medievaledge.com/',
      imgName: 'Medieval.png',
    },
    {
      order: 5,
      title: 'Rent Faster',
      description:
        'A SEO and interactive website used to search rent home faster near customers',
      techStack: [
        'Node.js',
        'Express.js',
        'MongoDb',
        'Mongoose',
        'Data Validation',
        'Logging & Error Handling',
      ],
      website: 'https://www.rentfaster.ca',
      imgName: 'Rentfaster.png',
    },
    {
      order: 2,
      title: 'NutricaSteel',
      description:
        "A multilingual website used to introduce the company's products to their customers from all over the world.",
      techStack: [
        'Vue.js / Nuxt.js / Vuetify.js',
        'Mongoose',
        'Data Validation',
        'Logging & Error Handling',
      ],
      website: 'https://nutricasteel.com',
      imgName: 'NutricaSteel.jpg',
    },
    {
      order: 4,
      title: 'My Website :)',
      description: 'My first React project you are exploring right now!!',
      techStack: ['React', 'Typescript', 'React-router-dom'],
      website: 'https://norma0315morris.com/',
      repository: 'https://github.com/norma0315morris/Norma0315',
      imgName: 'portfolio.png',
    },
  ]

  return (
    <LayoutDefault>
      <div className="projects-page">
        <div className="grid">
          {listOfProjects
            .sort((a, b) => a.order - b.order)
            .map((e) => (
              <CardProject data={e} key={e.title} />
            ))}
        </div>

        <div className="action-links">
          Isn't it time to
          <Button to="/contact">Contact Me?</Button>
        </div>
      </div>
    </LayoutDefault>
  )
}
