import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import './Contact.scss'

export default function Contact() {
  const items = [
    {
      iconName: 'phone',
      link: {
        text: '+1 662 854 0831',
        href: 'tel:+1 662-854-0831',
      },
    },
    {
      iconName: 'email',
      link: {
        text: 'normamorris0315@gmail.com',
        href: 'mailto:normamorris0315@gmail.com',
      },
    },
    {
      iconName: 'github',
      link: {
        text: 'github.com/norma0315morris',
        href: 'https://github.com/norma0315morris',
      },
    },
  ]

  return (
    <LayoutDefault>
      <div className="contact-page">
        <ul>
          {items.map((e) => (
            <li key={e.iconName}>
              <div>
                <img
                  src={`icons/${e.iconName}.svg`}
                  alt={`${e.iconName} logo`}
                />
              </div>
              <h3>
                <a href={e.link.href} target="_blank">
                  {e.link.text}
                </a>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </LayoutDefault>
  )
}
