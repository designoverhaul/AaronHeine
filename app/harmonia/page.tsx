import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ImageLightbox from '@/components/ImageLightbox';

export default function Harmonia() {
  return (
    <Layout>
      <article>
        <div className="featured-image">
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Group-165-1.png"
            alt="Harmonia"
            width={1900}
            height={715}
            className="featured-thumb"
          />
        </div>

        <h1 className="page-title">Harmonia</h1>

        <div className="catPills">
          <Link href="/portfolio">UI</Link>
          <Link href="/portfolio">UX</Link>
          <Link href="/portfolio">Web Design</Link>
        </div>

        <div className="entry-content">
          <ImageLightbox>
            <p>
              The application, originally called Illiac, was rebranded as Harmonia. It&apos;s a desktop
              and iOS platform for teaching music theory and composition, featuring real-time playback
              and feedback notations and classroom management tools for assessment.
            </p>

            <p>
              I was hired to enhance branding, usability, interface design, and user satisfaction
              across the website and desktop applications.
            </p>

            <h2>Site Reorganization</h2>
            <p>
              The team agreed that simplification and clear separation between dashboard and marketing
              content was essential. The navigation menu was completely restructured, and the project
              received a name rebrand to Harmonia.
            </p>

            <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Navigation.jpg"
            alt="Navigation Structure"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h2>Logo Design</h2>
          <p>
            The logo concept merges a treble clef symbol into the wordmark, creating a memorable
            identity for the music education platform.
          </p>

          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Harmonia-logo-design.jpg"
            alt="Harmonia Logo Design"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h2>Dashboard Wireframes</h2>
          <p>
            Designed collaboratively using Figma, the wireframes included annotated decisions and
            questions in blue for team discussion.
          </p>

          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/dashboard-wireframes.jpg"
            alt="Dashboard Wireframes"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/wireframes.jpg"
            alt="Annotated Wireframes"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h2>Student Connection System Improvement</h2>
          <p>
            The student-teacher connection system was redesigned from a cumbersome 16-digit PIN
            system to an intuitive email notification system, allowing students to confirm class
            connection with one click.
          </p>

          <h2>Design System</h2>
          <p>
            A comprehensive design system was developed to ensure consistency across all touchpoints,
            including decorative styles, typography and color palettes, and page templates.
          </p>

          <h3>Decorative Styles</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Slice-2.jpg"
            alt="Decorative Styles"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h3>Typography & Color</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Slice-1.jpg"
            alt="Typography and Color Palette"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h3>Page Templates</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Slice-3-scaled.jpg"
            alt="Page Templates"
            width={2560}
            height={1600}
            className="aligncenter size-full"
          />

          <h2>Brand Photography Guide</h2>
          <p>
            I created standardized photographic treatments for on-brand visual consistency,
            enabling non-designers to create graphics even with budget constraints.
          </p>

          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/decorative-Styles-1024x801.png"
            alt="Photography Treatment Guide"
            width={1024}
            height={801}
            className="aligncenter size-full"
          />

          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/header-art-1.jpg"
            alt="Header Art Example"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h2>Development Tool</h2>
          <p>
            I created a CodePen prototype for browser-based fine-tuning, testing typography, color,
            and spacing across multiple devices to facilitate designer-developer communication.
          </p>

          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/codePen.jpg"
            alt="CodePen Development"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h2>High-Fidelity Mockups</h2>
          <p>
            The final designs included home page, sign up/sign in interface, teacher-focused pages,
            mobile views, dashboard interfaces, documentation, and assignment editing screens.
          </p>

          <h3>Home Page</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Home-Page-scaled.jpg"
            alt="Home Page"
            width={2560}
            height={1600}
            className="aligncenter size-full"
          />

          <h3>Sign Up / Sign In</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Sign-Up-In.jpg"
            alt="Sign Up Sign In"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h3>For Teachers</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/For-Teachers.jpg"
            alt="For Teachers Page"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h3>Mobile Student View</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/iPhone-X-Courses.jpg"
            alt="Mobile Student Courses"
            width={1125}
            height={2436}
            className="aligncenter size-full"
          />

          <h3>Mobile Dashboard</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-15-at-2.57.26-PM-scaled.png"
            alt="Mobile Dashboard"
            width={2560}
            height={1600}
            className="aligncenter size-full"
          />

          <h3>Course Information</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Course-Information.jpg"
            alt="Course Information"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h3>Documentation</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Documentation.jpg"
            alt="Documentation Page"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h3>Edit Assignment</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Edit-Assignment.jpg"
            alt="Edit Assignment"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

          <h3>Dashboard Homepage</h3>
          <Image
            src="https://wp.aaronheine.com/wp-content/uploads/2019/11/Dashboard-Homepage.jpg"
            alt="Dashboard Homepage"
            width={1900}
            height={1200}
            className="aligncenter size-full"
          />

            <Link href="/portfolio">
              <button>Back to Portfolio</button>
            </Link>
          </ImageLightbox>
        </div>
      </article>
    </Layout>
  );
}
