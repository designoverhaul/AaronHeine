import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="opening">
        <h1
          style={{
            fontSize: '6rem',
            marginBottom: '8rem',
            fontWeight: 800,
            lineHeight: '6rem',
          }}
        >
          I&apos;m a product designer, dad, and maker of things{' '}
          <span className="spin-emoji">🤪</span>
        </h1>

        <Link href="/portfolio">
          <button style={{ width: '100%', marginBottom: '8px' }}>
            Looking for my work?
          </button>
        </Link>

        <h3>Currently</h3>
        <p>
          I&apos;m working with Stanley Black & Decker to rebuild{' '}
          <a target="_blank" href="https://www.cribmaster.com/">
            Cribmaster
          </a>{' '}
          Cloud. We work closely with some of the largest manufacturing
          companies to make sure 2.0 brings the improvements their users need
          most.
        </p>

        <h3>Side Projects</h3>
        <p>
          I&apos;ve fixed my kid&apos;s bad YouTube habits by building{' '}
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/channel-lab-youtube-videos/id6448315155"
          >
            Channel Lab
          </a>
          . It&apos;s an app that features only the best YouTube artist, makers,
          and educators.
        </p>

        <p>
          I&apos;m also looking to improve the amount and quality of music played
          in our house by utilizing the TV.{' '}
          <a href="https://aaronheine.com/front-row/">Front Row</a> is a curated
          collection of concerts by your favorite artist. Get it on your Apple
          TV.
        </p>

        <p>
          I build a similar product as Front Row called{' '}
          <a href="https://aaronheine.com/i-recreated-mtv-hit-rewind/">
            Hit Rewind
          </a>
          . It&apos;s the top music videos grouped by year, kinda like MTV used to
          be! On the Apple TV only. (We like it much better than Front Row)
        </p>

        <h3>Online</h3>

        <a
          target="_blank"
          className="tableRow"
          href="https://www.linkedin.com/in/aaronheine/"
        >
          <strong className="socialNames">LinkedIn&nbsp;&nbsp;</strong>
          <hr className="myLine" />
          <span>&nbsp;&nbsp;Connect</span>
        </a>

        <a
          target="_blank"
          className="tableRow"
          href="https://twitter.com/aaronheine"
        >
          <strong className="socialNames">X&nbsp;&nbsp;</strong>
          <hr className="myLine" />
          <span>&nbsp;&nbsp;Follow</span>
        </a>

        <a
          target="_blank"
          className="tableRow"
          href="https://www.youtube.com/@aaronheine"
        >
          <strong className="socialNames">YouTube&nbsp;&nbsp;</strong>
          <hr className="myLine" />
          <span>&nbsp;&nbsp;Subscribe</span>
        </a>

        <a
          target="_blank"
          className="tableRow"
          href="https://www.facebook.com/AaronMaxHeine"
        >
          <strong className="socialNames">Facebook&nbsp;&nbsp;</strong>
          <hr className="myLine" />
          <span>&nbsp;&nbsp;Add&nbsp;Friend</span>
        </a>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Home</h3>
          <h3>Atlanta Georgia</h3>
        </div>
        <img
          style={{ borderRadius: '4px' }}
          alt="Atlanta Georgia Map"
          src="https://aaronheine.com/wp-content/uploads/2023/11/where.jpg"
        />
      </section>

      <div className="grid-wrapper">
        <div className="videoContainer">
          <object
            className="playButton"
            data="https://aaronheine.com/wp-content/uploads/2023/11/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://aaronheine.com/wp-content/uploads/2023/11/demo.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/beachbike.jpeg"
            alt="Electric bike on the beach"
          />
        </div>
        <div className="tall">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/brock.jpeg"
            alt="My dog"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/fish.jpeg"
            alt="My fish tank"
          />
        </div>
        <div className="tall">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/coco.jpeg"
            alt="My son Collin in Miami"
          />
        </div>
        <div className="big">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/bike.jpeg"
            alt="My Mountain Bike"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/floor.jpeg"
            alt="Building a new floor for my shop"
          />
        </div>
        <div className="wide videoContainer">
          <object
            className="playButton"
            data="https://aaronheine.com/wp-content/uploads/2023/11/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://aaronheine.com/wp-content/uploads/2023/11/ramp.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="big">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/swim.jpeg"
            alt="My son Evan swimming under water"
          />
        </div>
        <div className="tall">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/flowers.jpeg"
            alt="Flowers we collected"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/rainbow.jpeg"
            alt="Kids and colorful lighting in the kitchen"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/mepoint.jpeg"
            alt="Photo of Aaron Heine"
          />
        </div>
        <div className="tall">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/irt.jpeg"
            alt="Dirty Aaron"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/terrarium.jpeg"
            alt="Terrariums"
          />
        </div>
        <div className="wide videoContainer">
          <object
            className="playButton"
            data="https://aaronheine.com/wp-content/uploads/2023/11/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://aaronheine.com/wp-content/uploads/2023/11/crab.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="big videoContainer">
          <object
            className="playButton"
            data="https://aaronheine.com/wp-content/uploads/2023/11/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://aaronheine.com/wp-content/uploads/2023/11/skeleton.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="big">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/buildboat.jpeg"
            alt="A toy boat"
          />
        </div>
        <div className="tall">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/young.jpeg"
            alt="Aaron Heine as a child"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/grac.jpeg"
            alt="Grace"
          />
        </div>
        <div className="tall videoContainer">
          <object
            className="playButton"
            data="https://aaronheine.com/wp-content/uploads/2023/11/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://aaronheine.com/wp-content/uploads/2023/11/Megan.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="big videoContainer">
          <object
            className="playButton"
            data="https://aaronheine.com/wp-content/uploads/2023/11/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://aaronheine.com/wp-content/uploads/2023/11/kite.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/cybertruck.jpeg"
            alt="Kids drive a remote controlled Cybertruck"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/shroom.jpeg"
            alt="Mushroom"
          />
        </div>
        <div className="big videoContainer">
          <object
            className="playButton"
            data="https://aaronheine.com/wp-content/uploads/2023/11/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://aaronheine.com/wp-content/uploads/2023/11/hike.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="tall">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/turtle.jpeg"
            alt="Kids find a box turtle"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/thing.jpeg"
            alt="Kids made a strange object"
          />
        </div>
        <div>
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/sunshade.jpeg"
            alt="Aaron at the beach"
          />
        </div>
        <div className="tall">
          <img
            src="https://aaronheine.com/wp-content/uploads/2023/11/log.jpeg"
            alt="Walking over a log"
          />
        </div>
      </div>
    </Layout>
  );
}
