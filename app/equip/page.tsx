import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ImageLightbox from '@/components/ImageLightbox';

export default function Equip() {
  return (
    <Layout>
      <article>
      <div className="featured-image">
        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/goals.jpg"
          alt="Equip - Make goals, discover goals, dominate your day"
          width={1900}
          height={715}
          className="featured-thumb"
          unoptimized
        />
      </div>

      <h1 className="page-title">Equip.team</h1>

      <div className="catPills">
        <Link href="/portfolio">Case Study</Link>
        <Link href="/portfolio">UI</Link>
        <Link href="/portfolio">UX</Link>
      </div>

      <div className="entry-content">
        <ImageLightbox>
          <p>
            The smartphone changed the world. Instead of just basking in the glory of our 512GB Pacific
            Blue iPhone 12 with Super Retina XDR display we should also be aware of the changes in our
            lifestyle that it could change.
          </p>

          <p>
            Equip addresses these lifestyle changes by facilitating productivity and improving family
            dynamics. This is a collaboration between myself and Kim Yeun.
          </p>

          <h2>Family Centered Design</h2>
        <p>
          Equip allows parents and children to create goals through three methods: converting web
          content, creating custom goals, or selecting from "Discover Goals" categories. Three
          incentive types drive engagement: parental support, rewards, and personal interest.
        </p>

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/create-goal.jpg"
          alt="Create goal interface"
          width={1800}
          height={599}
          className="aligncenter size-full"
        />

        <h2>Branding and Art</h2>
        <p>
          The logo design went through multiple iterations, evolving from early illustration concepts
          featuring a karate teacher metaphor to simpler, more relatable illustration styles. The
          final slogan captures the essence: "Make Goals. Discover Goals. Dominate your day."
        </p>

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/dictionary.jpg"
          alt="definition of Equip"
          width={442}
          height={300}
          style={{ width: '100%', maxWidth: '442px' }}
        />

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/logo.jpeg"
          alt="Logo Designs"
          width={370}
          height={300}
          style={{ width: '100%', maxWidth: '370px' }}
        />

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/illustrations.jpg"
          alt="early illustrations"
          width={1720}
          height={828}
          className="aligncenter size-full"
          style={{ maxWidth: '736px', width: '100%' }}
        />

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/introduction.png"
          alt="introduction screens"
          width={2640}
          height={986}
          className="aligncenter size-full"
        />

        <h2>Personas</h2>
        <p>
          We created personas illustrating diverse family scenarios where Equip could provide value,
          ensuring the product serves a wide range of user needs.
        </p>

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/Personas.jpeg"
          alt="personas"
          width={1722}
          height={1434}
          className="aligncenter size-full"
        />

        <h2>Signup and Setup User Types</h2>
        <p>
          The registration flow identifies users as parents or children, manages team creation, and
          offers flexible account creation options to accommodate different family structures.
        </p>

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/registration-flow-scaled.jpg"
          alt="registration flow"
          width={2560}
          height={1337}
          className="aligncenter size-full"
        />

        <h2>Wireframing and Prototyping</h2>
        <p>
          Extensive wireframes were created in Figma showing various app screens and user flows,
          allowing us to test and refine the experience before development.
        </p>

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/wireframes.jpg"
          alt="wireframes"
          width={843}
          height={1024}
          className="aligncenter size-full"
        />

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/multiple-children.jpg"
          alt="multiple children"
          width={1024}
          height={533}
          className="aligncenter size-full"
        />

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/marking-complete.jpg"
          alt="marking complete"
          width={1024}
          height={534}
          className="aligncenter size-full"
        />

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/signUp.jpg"
          alt="sign up"
          width={1024}
          height={745}
          className="aligncenter size-full"
        />

        <Image
          src="https://wp.aaronheine.com/wp-content/uploads/2021/05/settings.jpg"
          alt="settings"
          width={1024}
          height={857}
          className="aligncenter size-full"
        />

        <h2>Next Steps – Immersive User Research</h2>
        <p>
          Ongoing research plans extend through Summer 2021, emphasizing the importance of user
          testing and iteration to create a product that truly serves families.
        </p>

          <Link href="/portfolio">
            <button>Back to Portfolio</button>
          </Link>
        </ImageLightbox>
      </div>
    </article>
    </Layout>
  );
}
