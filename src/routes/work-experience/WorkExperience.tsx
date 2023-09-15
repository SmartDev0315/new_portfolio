import Button from '~/components/Button/Button'
import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import SkillBadge from '~/components/SkillBadge/SkillBadge'
import './WorkExperience.scss'

export default function WorkExperience() {
  return (
    <LayoutDefault>
      <div className="work-experience-page">
        {/* <!-- bazarkhodro --> */}
        <div className="work-exp">
          <div className="work-exp--icon">
            <img src="icons/suitcase.svg" alt="suitcase" />
          </div>
          <div className="work-exp--title">
            <div>Full Stack and Blockchain Engineer at Upwork</div>
            <span>Sep. 2022 - present (~1 year)</span>
          </div>

          <p className="work-exp--description">
            Working on five repositories including two websites and three admin
            panels.
          </p>

          <ul className="work-exp--tech">
            {[
              'React',
              'Redux',
              'MongoDB',
              'Express',
              'SEO',
              'API calls',
              'Responsive design',
            ].map((e) => (
              <li>
                <SkillBadge text={e} />
              </li>
            ))}
          </ul>

          <ul className="work-exp--products">
            <li>
              <img src="logos/Medieval.png" alt="bazarkhodro fav icon" />
              <span>
                <a href="https://www.medievaledge.com/" target="_blank">
                  MedieValedge.com
                </a>
                is an online sales website manufactures and supplies helmets, antiques and collectibles.
              </span>
            </li>

            <li>
              <img src="logos/florida.svg" alt="bazarkhodro fav icon" />
              <span>
                <a href="https://www.visitflorida.com/" target="_blank">
                  VisitFlorida.com
                </a>
                is an intuitive website for travellers to explore the wide-open beauty of Florida.
              </span>
            </li>

            <li>
              <img src="logos/bazarkhodro.svg" alt="bazarkhodro fav icon" />
              <span>
                <a href="https://musicalfunctions.com.au/" target="_blank">
                  MusicalFunctions.com.au
                </a>
                is a feature-rich website to perform heart-thumping songs that sweep you off your feet, make you weak at the knees, and have you dancing all night long.
              </span>
            </li>
          </ul>
        </div>

        {/* <!-- Ryca --> */}
        <div className="work-exp">
          <div className="work-exp--icon">
            <img src="icons/suitcase.svg" alt="suitcase" />
          </div>

          <div className="work-exp--title">
            <div>Full Stack Developer at Codepaper</div>
            <span>May. 2020 - Sep. 2022 (~2 years)</span>
          </div>

          <p className="work-exp--description">
            My internship job which I worked on two admin panels. I worked with
            awesome people there!
          </p>

          <ul className="work-exp--tech">
            {[
              'React',
              'Redux',
              'Express',
              'MongoDB',
              'GIT',
              'API calls',
              'Responsive Design',
              'SEO',
            ].map((e) => (
              <li>
                <SkillBadge text={e} />
              </li>
            ))}
          </ul>

          <ul className="work-exp--products">
            <li>
              <img
                src="logos/123.png"
                alt="bazarkhodro fav icon"
                className="square"
              />
              <span>
                <a href="https://www.johnfowlerholidays.com/" target="_blank">
                  JohnFowlerHolidays.com
                </a>
                is a service website which provides entertainments and places
                for people on holidays.
              </span>
            </li>
          </ul>
        </div>

        {/* <!-- freelance --> */}
        <div className="work-exp">
          <div className="work-exp--icon">
            <img src="icons/suitcase.svg" alt="suitcase" />
          </div>

          <div className="work-exp--title">
            <div>Front-end Developer at Nextbrain</div>
            <span>Sep 2018 - March. 2020 (~2 years)</span>
          </div>

          <ul className="work-exp--tech">
            {[
              'React',
              'Redux',
              'Responsive Design',
              'HTML5',
              'CSS3',
              'JAVASCRIPT',
            ].map((e) => (
              <li>
                <SkillBadge text={e} />
              </li>
            ))}
          </ul>

          <ul className="work-exp--products">
            <li>
              <img
                src="logos/nutrica.png"
                alt="bazarkhodro fav icon"
                className="square"
              />
              <span>
                <a href="https://nutricasteel.com/" target="_blank">
                  Nutricasteel.com
                </a>
                is a website belonging to a start-up called "Nutricasteel" to
                introduce their products to their customers from various
                countries.
              </span>
            </li>

            <li>
              <img
                src="logos/nextbrain.png"
                height={30+'%'}
                alt="bazarkhodro fav icon"
                className="square"
              />
              <span>
                <a href="https://nextbrain.ca/" target="_blank">
                  Nextbrain.ca
                </a>
                is an interative website that gives customers many good digital transformation services
              </span>
            </li>
          </ul>
        </div>
      </div>
    </LayoutDefault>
  )
}
