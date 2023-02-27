import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CodeOfConduct from "../components/layout/codeofconduct";
import Manifesto from "../components/layout/manifesto";
import Title from "../components/layout/title";
import UpcomingEvents from "../components/home/upcoming";
import HomeGallery from "../components/home/gallery";
import EventMap from "../components/events/map";
import Expectations from "../components/home/expectations";
import { Enum_Expectation_Type } from "../models/graphql";

const Home: NextPage = () => {
  return (
    <section id="home">
      <Head>
        <title>#play14 - play is the way</title>
      </Head>
      <section id="title">
        <Title />
      </section>
      <section id="summary" className="pt-70">
        <h3 className="pb-4">What is #play14?</h3>
        <p>
          #play14 is a{" "}
          <strong>worldwide gathering of like-minded people</strong> who believe
          that{" "}
          <strong>
            playing is the best way to learn, share and be creative!&nbsp;
          </strong>
        </p>
        <p>
          It is a movement started in 2014, it is is a global series of events
          organized in many cities in all five continents, it is a format of
          unconference following the principles of open-space, but above all, it
          is a family, with people who share common values and interests.
        </p>
        <div className="d-flex justify-content-center">
          <blockquote>
            Tell me and I forget, teach me and I may remember, involve me and I
            learn
            <br />
            <strong>
              <em className="d-flex justify-content-end pt-4">
                Benjamin Franklin
              </em>
            </strong>
          </blockquote>
        </div>
        <p className="pt-3">
          #play14 is an <Link href="/about/schedule">unconference</Link>, where{" "}
          <strong>all attendees are also contributors</strong>. All you need to
          do is show up, and you will be given the opportunity to propose some
          games, or play the games proposed by the others.
        </p>
      </section>
      <section id="upcoming events">
        <UpcomingEvents />
      </section>
      <section id="activities">
        <h3 className="pb-4">Activities</h3>
        <p>
          For two and a half days, people with{" "}
          <Link href="/players">many different profiles and experiences</Link>{" "}
          are invited to share{" "}
          <Link href="/games">serious games and fun activities</Link>,
          experiences and tips, knowledge and insights, laughs and smiles.{" "}
          <strong>Everyone is welcome to join</strong>.
        </p>
        <p>
          If you want to join and wonder what is going to happen, here are some
          examples of activites we engage in:
        </p>
        <ul>
          <li>
            A{" "}
            <Link href="/games/ball-pointLinkgame" target="_blank">
              serious game
            </Link>{" "}
            that you use as a metaphor in order to understand a new concept
          </li>
          <li>
            An{" "}
            <Link href="/games/eggolution" target="_blank">
              ice breaker
            </Link>{" "}
            game where people learn more about one another
          </li>
          <li>
            A{" "}
            <Link href="/games/brain-shock" target="_blank">
              warm up
            </Link>{" "}
            or an{" "}
            <Link href="/games/happy-salmon" target="_blank">
              energizer
            </Link>{" "}
            that you can use to raise the level of awareness and energy
          </li>
          <li>A facilitation technique that you can use in your daily work</li>
          <li>
            A{" "}
            <Link href="/games/cupcake-design-factory" target="_blank">
              team building
            </Link>{" "}
            exercise that fosters collaboration and self organization
          </li>
          <li>
            A{" "}
            <Link href="/games/ball-runner" target="_blank">
              game design
            </Link>{" "}
            session where you invent a new game to teach something new
          </li>
          <li>
            A soul searching, deep-dive introspection session where you learn
            about yourself
          </li>
          <li>
            A one-on-one coaching session where you will find some answers with
            the help of a friend
          </li>
          <li>
            A brainstorming session on a question or problem that wakes you up
            at night
          </li>
          <li>
            A{" "}
            <Link href="/games/doodling-together" target="_blank">
              creative session
            </Link>{" "}
            where you sketch, doodle, or build something together
          </li>
          <li>
            A fun and energetic time with{" "}
            <Link href="https://youtu.be/N2quY1ZPF50" target="_blank">
              dancing
            </Link>
            ,{" "}
            <Link href="https://youtu.be/jpLCTQgHhqs" target="_blank">
              singing
            </Link>{" "}
            or being silly together
          </li>
          <li>
            An{" "}
            <Link href="https://youtu.be/T7HPg2-xowc" target="_blank">
              improv theater
            </Link>{" "}
            session where you can work on your confidence and ability to speak
            publicly
          </li>
          <li>
            A more esoteric session on a practice/hobby you want to share like
            yoga, laughter yoga, Tai Chi, Qigong, meditation, mindfulness,
            aikido, ...
          </li>
        </ul>
      </section>

      <section id="gallery">
        <HomeGallery />
      </section>

      <section id="manifesto and code of conduct" className="pt-100">
        <h3 className="pb-4">Our values</h3>
        <p>
          A game/activity at #play14 could be pretty much anything as long as it
          respects our{" "}
          <Link href="/about/values">Manifesto and Code of Conduct</Link>.
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-12 pt-5">
            <Manifesto />
          </div>
          <div className="col-lg-6 col-md-12 pt-5">
            <CodeOfConduct />
          </div>
        </div>
      </section>

      <section id="event map">
        <h3 className="pb-5 pt-70">Event map</h3>
        <EventMap />
      </section>

      <section id="benefits" className="pt-70">
        <p>
          Join us in order to develop your <strong>facilitation skills</strong>,
          increase your <strong>ability to accompany change</strong> in your
          organization, <strong>foster your creativity</strong> and improve your{" "}
          <strong>capacity to innovate</strong>.
        </p>
        <div className="d-flex justify-content-center">
          <blockquote>
            You can discover more about a person in an hour of play than a year
            of conversation
            <br />
            <strong>
              <em className="d-flex justify-content-end pt-4">Plato</em>
            </strong>
          </blockquote>
        </div>
        <h3 className="pb-5 pt-70">What to expect</h3>
        <p>
          Here are some of the things that you can expect when attending a
          #play14 event. However, be ready to &quot;Expect the unexpected!&quot;
        </p>
        <Expectations type={Enum_Expectation_Type.Main} />
      </section>
    </section>
  );
};

export default Home;
