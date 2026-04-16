import type { Metadata } from 'next';
import { Italiana } from 'next/font/google';
import Layout from '@/components/Layout';

const italiana = Italiana({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Resume - Aaron Heine',
  description: 'Designed and built by Aaron Heine out of Atlanta Georgia.',
};

const RESUME_PDF =
  'https://wp.aaronheine.com/wp-content/uploads/2025/09/Aaron_Heine.pdf';

type Job = {
  title: string;
  employer?: string;
  date: string;
  location: string;
  description: string;
  bullets?: string[];
};

const jobs: Job[] = [
  {
    title: 'Freelance',
    employer: 'Self-employed',
    date: 'February 2025',
    location: 'Decatur, GA',
    description:
      'Using AI tools to build various iOS apps such as Channel Lab and Get Gone. Also building Next.js, React TypeScript web apps. Working on websites with the AtlantaBoyChoir.org and Troop18.org.',
  },
  {
    title: 'Product Designer - Contract',
    employer: 'Black & Decker - Cribmaster',
    date: 'August 2022 - February 2025',
    location: 'Marietta, GA',
    description:
      'Working with Cribmaster Cloud we investigate, prototype and design features for a total rebuild of their cloud and on-device software. This software keeps track of tool inventory, users, and material sales. I also help maintain the design system and plan user research methods.',
  },
  {
    title: 'UX/UI Designer',
    employer: 'Howard Capital Management - 401k Optimizer',
    date: 'September 2019 - August 2022',
    location: 'Roswell, GA',
    description:
      'Responsibilities include UI design, marketing, front-end web development, and research. I lead user research and continuous discovery efforts for the 401k Optimizer. In addition, I designed and built the marketing website for a new SaaS 401k product that included onboarding flows, UI design and financial calculators.',
  },
  {
    title: 'Freelance',
    date: 'August 2016 - September 2019',
    location: 'Tuscaloosa, AL',
    description:
      'I worked with a wide variety of small businesses and startups. This has led me to really push for business success and not just project success. I have found one of my most valuable contributions has been my ability to showcase a product or concept in a way that excites stakeholders and customers, and helps them quickly find value and communicate strategy.',
    bullets: [
      'Built a fully featured boat customization and ordering tool with Blue Bayou',
      'Led product development and design for a fully social touch therapy service',
      'Acquired beauty industry clients through direct mail and cold calling',
      'Product development, strategy and with Credit Union Deals, an online auto auction',
      'Built rent calculators and targeted user content distribution for Rent.com',
      'Web design with Emory University Campus Life',
    ],
  },
  {
    title: 'Web Design, Development, and Marketing',
    employer: 'Randall-Reilly',
    date: 'January 2013 - August 2016',
    location: 'Tuscaloosa, AL',
    description:
      'Responsibilities included designing and building websites for trucking related events such as the CCJ Symposiums, The Great American Trucking Show, and Pride & Polish. I also contributed by creating promotional videos and photography for these events. I also built complex registration systems that included lodging and recreation for these events.',
  },
  {
    title: 'Web and Graphic Designer',
    employer: 'Goodwyn Building',
    date: 'December 2010 - November 2012',
    location: 'Montgomery, AL',
    description:
      'Work with Goodwyn began with a total company rebranding and new website. Modern marketing strategy and fine tuned advertising strategy were a great success. We went from building two homes a month, to eight per month in my time there.',
    bullets: [
      'Built custom calls-to-action, infographics, and optimized our presentation of home models and features',
      'Created videos and print campaigns promoting our low energy home features',
      'Build tablet optimized tool for agents to showcase home models and features to buyers',
      'Generated leads through Google AdWords',
    ],
  },
  {
    title: 'Web Designer',
    employer: 'The Logo Loft',
    date: 'June 2008 - November 2010',
    location: 'Montgomery, AL',
    description:
      'The Logo Loft was where I first really learned to build websites and work in a fast paced environment with many designers.',
    bullets: [
      'Work with numerous clients simultaneously from initial idea to design',
      'After design and content approval, development begins with HTML and CSS',
      'Some logo design, Wordpress and Javascript',
      'Provided the sales team with web-related estimates as well as strategy for upsells',
    ],
  },
];

export default function Resume() {
  return (
    <Layout>
      <section className="resume">
        <section className="jobs">
          <h1
            className={italiana.className}
            style={{ fontSize: 'calc(37px + 2.5vw)' }}
          >
            Résumé
          </h1>

          <a target="_blank" rel="noopener noreferrer" href={RESUME_PDF}>
            <button className="rainbow" style={{ marginBottom: '5rem' }}>
              <i className="fas fa-download"></i>&nbsp; Download PDF
            </button>
          </a>

          {jobs.map((job, i) => (
            <div className="singleJob" key={i}>
              <span className="rezTitle">{job.title}</span>
              <br />
              <p>
                {job.employer && (
                  <>
                    <span className="rezEmployeer">{job.employer}</span>
                    <br />
                  </>
                )}
                <span className="rezDateLocation">
                  <i className="fas fa-calendar"></i>
                  {job.date}
                </span>
                <br />
                <span className="rezDateLocation">
                  <i className="fas fa-map-pin"></i>
                  {job.location}
                </span>
              </p>
              <p>{job.description}</p>
              {job.bullets && (
                <ul>
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="resumeSidebar">
          <h3 style={{ marginTop: 0 }}>Contact</h3>
          <ul className="contactLinks">
            <li>
              <i className="fas fa-envelope"></i>{' '}
              <a href="mailto:aaronheine@gmail.com">aaronheine@gmail.com</a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>{' '}
              <a
                href="https://www.linkedin.com/in/aaronheine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>{' '}
              <a
                href="https://twitter.com/aaronheine"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <i className="fas fa-map-pin"></i> Atlanta Georgia
            </li>
          </ul>

          <h3>Other Projects</h3>
          <ul>
            <li>
              Web design and branding for{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://continentalexpedited.com/"
              >
                Continental Expedited
              </a>{' '}
              since launch in 2008
            </li>
            <li>Co-founder of Family 500 charity</li>
            <li>
              Finally got my kids to watch quality YouTube videos without ads
              with{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/us/app/channel-lab-youtube-videos/id6448315155"
              >
                Channel Lab
              </a>
            </li>
            <li>
              Built a fully featured boat customization tool with{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bluebayouboats.com/"
              >
                Blue Bayou
              </a>
            </li>
          </ul>

          <h3>Education</h3>
          <p>
            <strong>Shelton State Community College</strong>
            <br />
            AAS Commercial Art, 2004
            <br />
            Montevallo, AL
          </p>

          <p>
            <strong>University of Montevallo</strong>
            <br />
            BFA Graphic Design, 2007
            <br />
            Tuscaloosa, AL
          </p>
        </section>
      </section>
    </Layout>
  );
}
