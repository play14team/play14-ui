import { getFormat } from "@/components/about/get.action"
import Expectations from "@/components/home/expectations"
import HtmlContent from "@/components/layout/html-content"
import Page from "@/components/layout/page"
import { Enum_Expectation_Type } from "@/models/strapi"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Our format",
}

export default async function FormatPage() {
  const format = await getFormat()
  const { openspace, bumblebee, butterfly, lawOfTwoFeet, schedule } =
    format || {}

  return (
    <Page name="Our format">
      <section id="open space" className="container pt-70">
        <h2>What is an unconference?</h2>
        <p>
          #play14 is organized as an unconference, a conference format that
          follows the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://en.wikipedia.org/wiki/Open_Space_Technology#Guiding_principles_and_one_law"
          >
            Open Space Technology
          </a>
        </p>
        <p>
          In this format,{" "}
          <strong>attendees are also session contributors</strong>. Anyone who
          wants to initiate a topic can claim a time slot in the agenda, and the
          schedule is done every morning, on the spot, as we will explain later.
        </p>
        <p>
          Once you are there, the organizers&apos; job is over. They have
          provided a location, food, and drinks for the rest of the event, then{" "}
          <strong>
            it&apos;s up to you as a participant to make it a great event
          </strong>
          .
        </p>
        <p>
          Check out the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play14-cdn.azureedge.net/strapi-uploads/assets/Open_Space_Principles_90f3d4c6a3.pdf?updated_at=2023-02-28T19:36:28.496Z"
          >
            funny drawings
          </a>{" "}
          of{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/agilesensei"
          >
            Claudio Perrone
          </a>
        </p>
        <h3 className="pt-5">Principles</h3>
        <p>There are some simple rules for participants.</p>
        <ul>
          <li>
            <strong>Whoever comes is the right people</strong>
            <p>
              As a facilitator, you should welcome anyone who has decided to
              join your session, and not be frustrated if you expected different
              people.
              <br />
              As a participant, you should be ready to collaborate with anyone.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Whenever it starts is the right time</strong>
            <p>
              As a facilitator, if you need some time to prepare, take it. Just
              think that people might get bored and go join another session. The
              best is to prepare anything in advance.
              <br />
              As a participant, there is nothing wrong with joining a session in
              progress. But respect the people who have already started, and try
              to jump in quietly.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Wherever it is, is the right place</strong>
            <p>
              You will be offered several spaces for your session. Choose the
              one that fits your needs as a facilitator or as a participant.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Whatever happens, is the only thing that could have</strong>
            <p>
              Be prepared to be surprised. Don&apos;t be annoyed if you get
              feedback. Don&apos;t be disappointed if it doesn&apos;t work. Try
              again if need be.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <strong>When it&apos;s over, it&apos;s over</strong>
            <p>
              As a facilitator, it&apos;s up to you to mind your timebox. The
              organizers will not do it for you. Keep in mind that the
              participants of your session might want to go to another session
              after yours and that the room might be reserved after. Feel free
              to continue in a different location with whoever is interested.
            </p>
          </li>
        </ul>
        <div className="centered pt-70">
          <Image
            src="/openspace/open-space-gray.jpg"
            alt="law of two feet"
            className="shadow"
            width={925}
            height={577}
            style={{
              borderRadius: "10px",
            }}
            unoptimized
          />
        </div>
        <div className="pt-70">
          <h3>The Law of Two Feet</h3>
          <div className="row">
            <div className="col-lg-6 col-md-12 pt-5">
              <p>
                Any time a person feels a session is not contributing to their
                learning, they have the responsibility to themselves to get up
                and move. That is, use their two feet or four wheels to move to
                a more interesting place. Neither the facilitator nor the other
                participants should feel offended about that. It&apos;s just
                what it is.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 pt-5">
              <Image
                src="/openspace/two-feet-gray.jpg"
                alt="law of two feet"
                className="shadow"
                width={925}
                height={577}
                style={{
                  borderRadius: "10px",
                }}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="container pt-70">
          <h3>Bumblebee and Butterfly</h3>
          <div className="row">
            <div className="col-lg-4 col-md-12 pt-5">
              <Image
                src="/openspace/bumblebee-gray.jpg"
                alt="Bumblebee"
                className="shadow"
                width={603}
                height={614}
                style={{
                  borderRadius: "10px",
                }}
                unoptimized
              />
              <p className="pt-3">
                A butterfly sits around looking relaxed and interesting
                discussions may emerge around them as people find them and pause
                to chat.
              </p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-12 pt-5">
              <p>
                A bumblebee flies from one group to the other and
                cross-pollinating the discussions.
              </p>
              <Image
                src="/openspace/butterfly-gray.jpg"
                alt="Butterfly"
                className="shadow"
                width={1083}
                height={1033}
                style={{
                  borderRadius: "10px",
                }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace">
        <div className="container pt-100">
          <h2>How does the schedule come up?</h2>
          <p>
            #play14 being an unconference, it&apos;s up to the participants to
            come up with the schedule. This is done every morning after some
            warm-up games when we fill up the marketplace.
          </p>
          <p className="centered">
            <Image
              src="/openspace/marketplace.jpg"
              alt="Marketplace"
              className="shadow"
              width={1083}
              height={1033}
              style={{
                borderRadius: "10px",
              }}
              unoptimized
            />
          </p>
          <p>
            The marketplace is a large board where you find vertically the list
            of all the spaces/rooms available, and horizontally all the time
            slots during the day. The participants come up with the schedule by
            adding their game/activity to the board.
          </p>
          <h3 className="pt-5">How do I propose a game?</h3>
          <p>
            If you feel like proposing a game, you will have to pitch it in
            front of everyone, and then add it to the marketplace.
          </p>
          <p>In order to do that, you need to:</p>
          <ol>
            <li>Take a large sticky note</li>
            <li>
              Write down the name of your game/activity. You can also draw
              something.
            </li>
            <li>
              Add the minimum and maximum number of people you need, and the
              time the game will approximately last.
            </li>
            <li>Add your name so we know who the sticky belongs to</li>
            <li>Enter the queue and pitch your game to the audience</li>
            <li>
              Pick a time slot and room on the marketplace and stick your sticky
              note
            </li>
          </ol>
          <div className="centered">
            <Image
              src="/openspace/propose_game.jpg"
              alt="How to propose a game"
              className="mt-5 shadow"
              width={1083}
              height={1033}
              style={{
                borderRadius: "10px",
              }}
              unoptimized
            />
          </div>

          <p className="pt-5">
            You do not need to go into many details. Just explain the main
            concept of your game, and list some of the takeaways. The goal is to
            give enough information so that people want to come to your session.
          </p>
          <p>To keep it fun, make sure to keep it short.</p>
          <h3 className="pt-5">What if the game I propose is not new?</h3>
          <p>
            It is perfectly fine to propose that has already been proposed by
            someone else or played before. Actually, it is encouraged, if you
            want to get better at facilitating. Over the years, some games have
            become the #play14 classics. Facilitating one of these is a great
            way to progress.
          </p>
          <p>
            Remember that #play14 is about experimenting. It is by taking some
            risks and getting out of your comfort zone that you will get better.
            We have seen people who discovered a game one day as a player and
            facilitated that same game the next day.
          </p>
          <h3 className="pt-5">Should I plan on debriefing my game?</h3>
          <p>
            YES, YES, and again YES. There is nothing sadder than a great game,
            full of learning opportunities, without a good debrief. Always keep
            some time to debrief your game/activity at the end of your session.
            It&apos;s your responsibility as a facilitator to make sure that all
            the participants can learn as much as possible from your game.
          </p>
          <p>
            Remember that debriefing is about asking questions, not explaining
            to people what they should feel or understand. Try not to project
            your own understanding of the game, but instead ask powerful
            questions that will lead the group to insights linked to their own
            experience.
          </p>
          <p>
            A great tool to help you do that is{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://thedebriefingcube.com/"
            >
              The Debriefing Cube
            </a>
            .
          </p>
          <h3 className="pt-5">
            What if I don&apos;t have any game/activity to propose?
          </h3>
          <ul>
            <li>
              It&apos;s perfectly fine to attend #play14 without proposing any
              game/activity.
            </li>
            <li>
              Just make sure you get the most out of your days by participating
              the the games/activities you are most interested in
            </li>
            <li>
              Use the law of two feet if you don’t get enough value out of the
              session or think you can make yourself useful elsewhere
            </li>
            <li>
              Next time you attend, maybe you will have some game/activity to
              share
            </li>
          </ul>
          <h3 className="pt-5">What kind of material will be available?</h3>
          <p>Common workshop materials and stationery will be available.</p>
          <ul>
            <li>Sticky notes</li>
            <li>Markers</li>
            <li>Whiteboard</li>
            <li>Flipchart</li>
            <li>Masking tape</li>
            <li>Paper</li>
            <li>Scissors</li>
            <li>Playing cards</li>
            <li>Dice</li>
            <li>LEGO bricks</li>
            <li>...</li>
          </ul>
          <p>
            If your game requires specific material, make sure you bring it with
            you or ask the hosting team in advance. If you cannot find what you
            are looking for, feel free to improvise.
          </p>
          <h3 className="pt-70">What else do I need to know?</h3>
          <p>Here is what you need to know when attending a #play14 event.</p>
          <Expectations type={Enum_Expectation_Type.Secondary} />
        </div>
      </section>
    </Page>
  )
}
