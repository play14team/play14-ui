import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Page from "../../components/layout/page";

const Format: NextPage = () => {
  return (
    <Page name="Our format">
      <section id="open space" className="container pt-70">
        <h2>What is an unconference ?</h2>
        <p>
          <strong>#play14</strong> is organized as an unconference, a conference
          format that follows the
          <Link
            href="http://en.wikipedia.org/wiki/Open_Space_Technology#Guiding_principles_and_one_law"
            target="_blank"
          >
            Open Space Technology
          </Link>
        </p>
        <p>
          In this format,{" "}
          <strong>attendees are also session contributors</strong>. Anyone who
          wants to initiate a topic can claim a time slot in the agenda, and the
          schedule is done every morning, on the spot, as we will explain later.
        </p>
        <p>
          Once you are there, the <strong>organizers job is over</strong>. They
          have provided a location, food and drinks for the rest of the event,
          then it's{" "}
          <strong>up to you as a participant to make it a great event</strong>.
        </p>
        <p>
          Check out the{" "}
          <a href="/openspace/Open-Space-Principles.pdf" target="_blank">
            funny drawings
          </a>{" "}
          of <a href="https://twitter.com/agilesensei">Claudio Perrone</a>
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
          <li>
            <strong>Wherever it is, is the right place</strong>
            <p>
              You will be offered several spaces for your session. Choose the
              one that fits your needs as a facilitator or as a participant.
            </p>
          </li>
          <li>
            <strong>Whatever happens is the only thing that could have</strong>
            <p>
              Be prepared to be surprised. Don't be annoyed if you get feedback.
              Don't be disappointed if it doesn't work. Try again if need be.
            </p>
          </li>
          <li>
            <strong>When it's over, it's over</strong>
            <p>
              As a facilitator, it's up to you to mind your timebox. The
              organizers will not do it for your. Keep in mind that the
              participants of your session might want to go to another session
              after yours, and that the room might be reserved after. Feel free
              to continue in a different location with whoever is interested.
            </p>
          </li>
        </ul>
        <div className="pt-5">
          <Image
            src="/openspace/open-space.jpg"
            alt="open space principles"
            height={800}
            width={800}
          ></Image>
          <p>
            Many thanks to{" "}
            <Link href="/players/mari-luz-garcia/">Mari Luz Garcia</Link> for
            the wonderful images.
          </p>
        </div>

        <div className="pt-70">
          <h3>The Law of Two Feet</h3>
          <div className="row">
            <div className="col-lg-6 col-md-12 pt-5">
              <p>
                Any time a person feels a session is not contributing to their
                learning, they have the responsibility to themselves to get up
                and move. That is, use their two feet or four wheels to move to
                a more interesting place.
              </p>
              <p>
                Neither the facilitator nor the other participants should feel
                offended about that. It's just what it is.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 pt-5">
              <Image
                src="/openspace/two-feet.png"
                alt="law of two feet"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="container pt-70">
          <h3>Bumblebees and Butterflies</h3>
          <div className="row">
            <div className="col-lg-4 col-md-12 pt-5">
              <Image
                src="/openspace/bumblebee.png"
                alt="Bumblebee"
                width={400}
                height={400}
              />
              <p>
                Bumblebees fly from group to group cross-pollinating the
                discussions.
              </p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-12 pt-5">
              <p>
                Butterflies sit around looking relaxed and interesting
                discussions may emerge around them as people find them and pause
                to chat.
              </p>
              <Image
                src="/openspace/butterfly.png"
                alt="Butterfly"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace">
        <div className="container pt-100">
          <h2>How does the schedule come up ?</h2>
          <p>
            <strong>#play14</strong> being an unconference, it's up to the
            participants to come up with the schedule. This is done every
            morning after some warm-up games, when we fill up the marketplace.
          </p>
          <Image
            src="/openspace/marketplace.jpg"
            alt="Marketplace"
            width={2000}
            height={2000}
          />
          <p className="pt-3">
            The marketplace is a large board where you find vertically the list
            of all the spaces/rooms available, and horizontally all the time
            slots during the day. The participants come up with the schedule by
            adding their game/activity on the board.
          </p>
        </div>
        <div className="pt-5">
          <h3>How do I propose a game ?</h3>
          <p>
            If you feel like proposing a game, you will have to pitch it in
            front of everyone, and then add it to the marketplace.
          </p>
          <p>In order to do that, you need to:</p>
          <ol>
            <li>Take a large sticky note</li>
            <li>
              Write down the name of your game/activity. You can also draw
              someting.
            </li>
            <li>
              Add the minimum and maximum number of people you need, and the
              time the game will approximately last.
            </li>
            <li>Add your name so we know who the stiky belongs to</li>
            <li>Enter the queue and pitch your game to the audiance</li>
            <li>
              Pick a time slot and room on the marketplace and stick your sticky
              note
            </li>
          </ol>
          <Image
            src="/openspace/propose_game.jpg"
            alt="Propose a game"
            width={2000}
            height={2000}
          />
        </div>
        <div className="pt-5">
          <h3>Should I bring any material with me ?</h3>
          <p>
            If your game requires specific material, please bring it with you.
          </p>
          <p>
            Otherwise, #play14 will provide the basics
            <ul>
              <li>Post-it notes</li>
              <li>Markers</li>
              <li>Scissors</li>
              <li>Paper</li>
              <li>Cards</li>
              <li>...</li>
            </ul>
          </p>
        </div>
      </section>
    </Page>
  );
};

export default Format;
