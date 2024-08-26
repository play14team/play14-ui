import StaticEventMap from "@/components/events/static-map"
import Expectations from "@/components/home/expectations"
import HomeGallery from "@/components/home/gallery"
import UpcomingEvents from "@/components/home/upcoming"
import CodeOfConduct from "@/components/layout/codeofconduct"
import Manifesto from "@/components/layout/manifesto"
import Title from "@/components/layout/title"
import { Enum_Expectation_Type } from "@/models/graphql"
import Link from "next/link"

export const revalidate = 3600

export default function Home() {
  return (
    <>
      <section id="title">
        <Title />
      </section>
      <section id="summary" className="pt-70">
        <h3 className="pt-4 pb-3">What is #play14?</h3>
        <p>
          Welcome to #play14, a global movement that believes in the{" "}
          <strong>transformative power of play</strong>!
        </p>
        <p>
          We are a worldwide gathering of like-minded people who believe that{" "}
          <strong>
            playing is the best way to learn, share and get creative!
          </strong>{" "}
          We are a movement started in 2014, we are a{" "}
          <strong>global series of events</strong> organized in different cities
          on <strong>all five continents</strong>, we are an unconference
          following <strong>the principles of open-space technology</strong>,
          but above all we are a family whose members{" "}
          <strong>share common values and interests</strong>.
        </p>
        <h3 className="pt-100 pb-3">Discover the power of play</h3>
        <p>
          Play is a better way to learn because it engages both mind and body,
          making learning an active, immersive experience. Through play,
          individuals explore, experiment, and discover concepts in a hands-on
          way, which enhances understanding and retention. It encourages
          creativity, problem-solving, and collaboration, helping learners
          develop critical thinking skills.
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
        <p>
          Play also reduces stress and increases motivation, making the learning
          process enjoyable and effective. By creating a safe space for trial
          and error, play fosters a deeper, more meaningful connection to the
          material being learned.
        </p>
        <h3 className="pt-100 pb-3">What attend?</h3>
        <p>
          Whether you are a facilitator, educator, or curious mind, our events
          are designed to spark creativity, foster collaboration, and ignite new
          ideas. Join us in cities worldwide to connect with like-minded
          individuals and dive into a world of playful experimentation.
        </p>
        <p>
          <ul>
            <li>
              <strong>Global community:</strong> Connect with a diverse network
              of innovators.
            </li>
            <li>
              <strong>Endless fun:</strong> Engage in hands-on, playful
              activities.
            </li>
            <li>
              <strong>Inspire & be inspired:</strong> Share and discover new
              games, tools, and techniques.
            </li>
          </ul>
        </p>
        <p>
          #play14 is an <Link href="/about/schedule">unconference</Link>, where{" "}
          <strong>all attendees are also contributors</strong>. Just show up
          with an open mind, and you’ll have the chance to propose your own
          games or dive into the games suggested by others. It&apos;s all about
          participation, creativity, and shared fun!
        </p>
      </section>

      <section id="upcoming events">
        <UpcomingEvents />
      </section>

      <section id="activities">
        <h3 className="pb-3">What to expect?</h3>
        <p>
          For two and a half days, people with{" "}
          <Link href="/players">many different profiles and experiences</Link>{" "}
          are invited to share{" "}
          <Link href="/games">serious games and fun activities</Link>,
          experiences and tips, knowledge and insights, laughs and smiles.{" "}
          <strong>Everyone is welcome to join</strong>.
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
        <p>
          If you feel like joining but wonder what is going to happen, here are
          some examples of activites we engage in:
        </p>
        <p>
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
            <li>
              A facilitation technique that you can use in your daily work
            </li>
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
              A one-on-one coaching session where you will find some answers
              with the help of a friend
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
        </p>

        <p>
          Join us in order to develop your <strong>facilitation skills</strong>,
          increase your <strong>ability to accompany change</strong> in your
          organization, <strong>foster your creativity</strong> and improve your{" "}
          <strong>capacity to innovate</strong>.
        </p>
      </section>

      <section id="gallery">
        <HomeGallery />
      </section>

      <section id="manifesto and code of conduct" className="pt-100">
        <h3 className="pt-100 pb-3">Our values</h3>
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

      <section id="event map" className="pb-5 pt-70">
        <h3 className="pt-100 pb-3">Where to find us?</h3>
        <p className="pb-4">
          The first event was hosted in Luxembourg, and then we spread through
          all Europe. Now we are a{" "}
          <strong>
            <Link href="/events/map">global event</Link>
          </strong>
          .
        </p>
        <StaticEventMap />
      </section>

      <section id="benefits" className="pt-70">
        <h3 className="pb-3 pt-70">What&apos;s in it for you?</h3>
        <p>
          Here are some of the things that you can expect when attending a
          #play14 event. However, be ready to &quot;Expect the unexpected!&quot;
        </p>
        <Expectations type={Enum_Expectation_Type.Main} />
      </section>
    </>
  )
}
