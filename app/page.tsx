'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function Home() {
  useEffect(() => {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
      video.addEventListener('mouseover', function() {
        video.play();
      });

      video.addEventListener('mouseout', function() {
        video.pause();
      });
    });

    // Cleanup
    return () => {
      videos.forEach(video => {
        video.removeEventListener('mouseover', () => {});
        video.removeEventListener('mouseout', () => {});
      });
    };
  }, []);

  return (
    <Layout>
      <section className="opening">
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
          <Image
            src="/Aaron-Heine-photo.jpg"
            alt="Aaron Heine"
            width={116}
            height={116}
            className="profile-photo-blur"
            style={{
              width: '116px',
              height: '116px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
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

        <h3 style={{ 
          color: '#868686', 
          fontSize: '15px', 
          fontWeight: 400, 
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: '1.2rem',
          marginTop: '2rem'
        }}>
          Lately in the community
        </h3>
        <p>
          • I have enjoyed working with{' '}
          <a target="_blank" href="https://troop18atl.org/">
            Scout Troop 18
          </a>
          . Both my boys are in the troop. Would highly recommend a scouting for any boy or girl.
        </p>
        <p>
          • Also working with the{' '}
          <a target="_blank" href="https://atlantaboychoir.org/">
            Atlanta Boy Choir
          </a>
          . They are rebuilding the program and really looking to grow the choir this year.
        </p>
        <p>
          • I have been on the board of our community pool for a few years and leading the redesign and remodeling of the clubhouse. Hopefully that happens in the Fall of 2026.
        </p>

        <h3 style={{ 
          color: '#868686', 
          fontSize: '15px', 
          fontWeight: 400, 
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: '1.2rem',
          marginTop: 'calc(2rem + 20px)'
        }}>
          Problems I <span style={{ fontStyle: 'italic' }}>had</span>
        </h3>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
          <a href="https://headcount-five-chi.vercel.app" target="_blank" style={{ textDecoration: 'none' }}>
            <Image
              src="/headcount-icon.png"
              alt="HeadCount app icon"
              width={60}
              height={60}
              style={{
                borderRadius: '18px',
                flexShrink: 0
              }}
            />
          </a>
          <div style={{ flex: 1 }}>
            <a href="https://headcount-five-chi.vercel.app" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong style={{ fontSize: '1.8rem', fontWeight: 700 }}>HeadCount</strong>
            </a>
            <p style={{ fontSize: '1.6rem', lineHeight: '2.7rem', marginTop: '0.5rem', marginBottom: 0 }}>
              Renting a beach house with several families is great until it&apos;s time to split the bill — different size families staying different numbers of nights. HeadCount does the math by person-nights, and everyone with the link can edit the same numbers together. No accounts, no sign-in.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
          <a href="https://thevinylsolutions.com/" target="_blank" style={{ textDecoration: 'none' }}>
            <Image
              src="/vinyl-solutions-icon.jpg"
              alt="Vinyl Solutions app icon"
              width={60}
              height={60}
              style={{
                borderRadius: '18px',
                flexShrink: 0
              }}
            />
          </a>
          <div style={{ flex: 1 }}>
            <a href="https://thevinylsolutions.com/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong style={{ fontSize: '1.8rem', fontWeight: 700 }}>Vinyl Solutions</strong>
            </a>
            <p style={{ fontSize: '1.6rem', lineHeight: '2.7rem', marginTop: '0.5rem', marginBottom: 0 }}>
              I catalog my records on Discogs, but I wanted to actually play them on my phone — with the real jacket art, the exact pressing, and a turntable that feels real. Nothing did that. So I built it. Photograph your records, import your Discogs collection, drop the needle, and stream full albums with Apple Music.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
          <a href="https://apps.apple.com/eg/app/north-pole-christmas-lists/id6755366177" target="_blank" style={{ textDecoration: 'none' }}>
            <Image
              src="/north-pole-icon.jpg"
              alt="North Pole app icon"
              width={60}
              height={60}
              style={{ 
                borderRadius: '18px',
                flexShrink: 0
              }}
            />
          </a>
          <div style={{ flex: 1 }}>
            <a href="https://apps.apple.com/eg/app/north-pole-christmas-lists/id6755366177" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong style={{ fontSize: '1.8rem', fontWeight: 700 }}>North Pole</strong>
            </a>
            <p style={{ fontSize: '1.6rem', lineHeight: '2.7rem', marginTop: '0.5rem', marginBottom: 0 }}>
              Christmas is kind of a mess with everyone trying to figure out what each other want. I just need a shared lists where we can mark items off so that others won&apos;t buy it(while keeping secrets for the list owner). Unexpected result… my kids made huge lists and now they&apos;re getting more gifts because sharing lists with links to specific items makes it so easy to buy.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
          <a href="https://eventsnearme.me/" target="_blank" style={{ textDecoration: 'none' }}>
            <Image
              src="/events-near-me-icon.png"
              alt="Events Near Me app icon"
              width={60}
              height={60}
              style={{ 
                borderRadius: '18px',
                flexShrink: 0
              }}
            />
          </a>
          <div style={{ flex: 1 }}>
            <a href="https://eventsnearme.me/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong style={{ fontSize: '1.8rem', fontWeight: 700 }}>www.EventsNearMe.me</strong>
            </a>
            <p style={{ fontSize: '1.6rem', lineHeight: '2.7rem', marginTop: '0.5rem', marginBottom: 0 }}>
              I often do a Google search for weekend events here in Atlanta. My goal it to produce better search results than Google. It uses AI and a multi stage search process. Just in Atlanta for now.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
          <a href="https://apps.apple.com/us/app/channel-lab-a-yt-kids-only/id6448315155" target="_blank" style={{ textDecoration: 'none' }}>
            <Image
              src="/channel-lab-icon.jpg"
              alt="Channel Lab app icon"
              width={60}
              height={60}
              style={{ 
                borderRadius: '18px',
                flexShrink: 0
              }}
            />
          </a>
          <div style={{ flex: 1 }}>
            <a href="https://apps.apple.com/us/app/channel-lab-a-yt-kids-only/id6448315155" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong style={{ fontSize: '1.8rem', fontWeight: 700 }}>Channel Lab</strong>
            </a>
            <p style={{ fontSize: '1.6rem', lineHeight: '2.7rem', marginTop: '0.5rem', marginBottom: 0 }}>
              It frustrates me that there is so much good content on YouTube that my kids like, but that is not what they watch! I blame YouTube for simply giving users more of what they click on. I fixed this for my kids and many more!
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
          <a href="https://apps.apple.com/us/app/hobby-hunt-video-courses/id6755356738" target="_blank" style={{ textDecoration: 'none' }}>
            <Image
              src="/hobby-hunt-icon.jpg"
              alt="Hobby Hunt app icon"
              width={60}
              height={60}
              style={{ 
                borderRadius: '18px',
                flexShrink: 0
              }}
            />
          </a>
          <div style={{ flex: 1 }}>
            <a href="https://apps.apple.com/us/app/hobby-hunt-video-courses/id6755356738" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong style={{ fontSize: '1.8rem', fontWeight: 700 }}>Hobby Hunt</strong>
            </a>
            <p style={{ fontSize: '1.6rem', lineHeight: '2.7rem', marginTop: '0.5rem', marginBottom: 0 }}>
              Channel Lab improves what my kids watch, but I want to make YouTube more ACTIONABLE. Hobby Hunt is a collection of courses adults and kids can earn badges for completing. They are based on videos carefully curated by professionals.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
          <a href="https://apps.apple.com/us/app/itinerary-maker-by-get-gone/id6747410879" target="_blank" style={{ textDecoration: 'none' }}>
            <Image
              src="/get-gone-icon.jpg"
              alt="Get Gone app icon"
              width={60}
              height={60}
              style={{ 
                borderRadius: '18px',
                flexShrink: 0
              }}
            />
          </a>
          <div style={{ flex: 1 }}>
            <a href="https://apps.apple.com/us/app/itinerary-maker-by-get-gone/id6747410879" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <strong style={{ fontSize: '1.8rem', fontWeight: 700 }}>Get Gone</strong>
            </a>
            <p style={{ fontSize: '1.6rem', lineHeight: '2.7rem', marginTop: '0.5rem', marginBottom: 0 }}>
              I wanted a vacation planner that plans destinations and events around those destinations. Don&apos;t need flights or hotels. If I want to explore Puerto Rico for 10 days(I do) show me where to go and what to do. No app does this. Until now!
            </p>
          </div>
        </div>

        <div style={{ marginTop: '47px', marginBottom: '3rem' }}>
        <a
          target="_blank"
          className="tableRow"
          data-social="linkedin"
          href="https://www.linkedin.com/in/aaronheine/"
        >
          <strong className="socialNames">LinkedIn&nbsp;&nbsp;</strong>
          <hr className="myLine" />
          <span>&nbsp;&nbsp;Connect</span>
        </a>

        <a
          target="_blank"
          className="tableRow"
          data-social="x"
          href="https://twitter.com/aaronheine"
        >
          <strong className="socialNames">X&nbsp;&nbsp;</strong>
          <hr className="myLine" />
          <span>&nbsp;&nbsp;Follow</span>
        </a>

        <a
          target="_blank"
          className="tableRow"
          data-social="youtube"
          href="https://www.youtube.com/@aaronheine"
        >
          <strong className="socialNames">YouTube&nbsp;&nbsp;</strong>
          <hr className="myLine" />
          <span>&nbsp;&nbsp;Subscribe</span>
        </a>

        <a
          target="_blank"
          className="tableRow"
          data-social="facebook"
          href="https://www.facebook.com/AaronMaxHeine"
        >
          <strong className="socialNames">Facebook&nbsp;&nbsp;</strong>
          <hr className="myLine" />
          <span>&nbsp;&nbsp;Add&nbsp;Friend</span>
        </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Home</h3>
          <h3 style={{ fontWeight: 300 }}>Atlanta Georgia</h3>
        </div>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Decatur,Georgia"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', cursor: 'pointer' }}
        >
          <img
            style={{ borderRadius: '4px' }}
            alt="Atlanta Georgia Map"
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/where.jpg"
          />
        </a>
      </section>

      <div className="grid-wrapper">
        <div className="videoContainer">
          <object
            className="playButton"
            data="/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://wp.aaronheine.com/wp-content/uploads/2023/11/demo.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/beachbike.jpeg"
            alt="Electric bike on the beach"
          />
        </div>
        <div className="tall">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/brock.jpeg"
            alt="My dog"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/fish.jpeg"
            alt="My fish tank"
          />
        </div>
        <div className="tall">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/coco.jpeg"
            alt="My son Collin in Miami"
          />
        </div>
        <div className="big">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/bike.jpeg"
            alt="My Mountain Bike"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/floor.jpeg"
            alt="Building a new floor for my shop"
          />
        </div>
        <div className="wide videoContainer">
          <object
            className="playButton"
            data="/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://wp.aaronheine.com/wp-content/uploads/2023/11/ramp.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="big">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/swim.jpeg"
            alt="My son Evan swimming under water"
          />
        </div>
        <div className="tall">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/flowers.jpeg"
            alt="Flowers we collected"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/rainbow.jpeg"
            alt="Kids and colorful lighting in the kitchen"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/mepoint.jpeg"
            alt="Photo of Aaron Heine"
          />
        </div>
        <div className="tall">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/irt.jpeg"
            alt="Dirty Aaron"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/terrarium.jpeg"
            alt="Terrariums"
          />
        </div>
        <div className="wide videoContainer">
          <object
            className="playButton"
            data="/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://wp.aaronheine.com/wp-content/uploads/2023/11/crab.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="big videoContainer">
          <object
            className="playButton"
            data="/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://wp.aaronheine.com/wp-content/uploads/2023/11/skeleton.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="big">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/buildboat.jpeg"
            alt="A toy boat"
          />
        </div>
        <div className="tall">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/young.jpeg"
            alt="Aaron Heine as a child"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/grac.jpeg"
            alt="Grace"
          />
        </div>
        <div className="tall videoContainer">
          <object
            className="playButton"
            data="/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://wp.aaronheine.com/wp-content/uploads/2023/11/Megan.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="big videoContainer">
          <object
            className="playButton"
            data="/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://wp.aaronheine.com/wp-content/uploads/2023/11/kite.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/cybertruck.jpeg"
            alt="Kids drive a remote controlled Cybertruck"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/shroom.jpeg"
            alt="Mushroom"
          />
        </div>
        <div className="big videoContainer">
          <object
            className="playButton"
            data="/tryangle.svg"
          ></object>
          <video id="videoone" loop preload="auto" muted>
            <source
              src="https://wp.aaronheine.com/wp-content/uploads/2023/11/hike.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="tall">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/turtle.jpeg"
            alt="Kids find a box turtle"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/thing.jpeg"
            alt="Kids made a strange object"
          />
        </div>
        <div>
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/sunshade.jpeg"
            alt="Aaron at the beach"
          />
        </div>
        <div className="tall">
          <img
            src="https://wp.aaronheine.com/wp-content/uploads/2023/11/log.jpeg"
            alt="Walking over a log"
          />
        </div>
      </div>
    </Layout>
  );
}
