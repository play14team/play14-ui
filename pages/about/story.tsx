import type { NextPage } from "next";
import Link from "next/link";
import HistoryItem from "../../components/about/historyitem";
import Page from "../../components/layout/page";

const Story: NextPage = () => {
  return (
    <Page name="Our story">
      <section className="history-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="section-title">
            <h2>Key moments</h2>
          </div>

          <ol className="timeline history-timeline">
            <HistoryItem
              year="2013"
              month="December"
              title="The meeting"
              image="/history/alpha-mercure.jpg"
              imageAlt="bar at hotel alpha mercure luxembourg"
            >
              <p>
                After all the tickets for{" "}
                <Link href="https://play4agile.wordpress.com/">play4agile</Link>{" "}
                were sold out in a few hours,{" "}
                <Link href="/players/yann-gensollen">Yann</Link>,{" "}
                <Link href="/players/pierre-neis">Pierre</Link> and{" "}
                <Link href="/players/cedric-pontet">Cédric</Link> gathered at
                the Alpha Mercure hotel bar in Luxembourg to give a serious
                thought about organizing a playful event of their own. It turned
                out that, all it would take was a venue, a date, and a cool
                name. The date would be March 14
                <sup>th</sup>, 2014. The name, just guess... And yes, the
                hashtag is actually part of tha name.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2014"
              month="January"
              title="The logo"
              image="/logo/play14_500x500_black_bg.png"
              imageAlt="play14 logo"
            >
              <p>
                We had a cool name, but to begin marketing the event, we needed
                a cool logo. For that, we asked{" "}
                <Link href="https://www.linkedin.com/in/christianjolas">
                  Christian Jolas
                </Link>
                , Cédric&apos;s co-worker. He was nice enough to spend his
                precious time imagining different popositions for the #play14
                logo. After some hesitations, we decided to go for the simple
                and colorful logo. We never regerted it. When we saw it for the
                first time printed on the black t-shirts , we new we had made
                the right choice. When we looked at the pictures after the first
                event, we realized that Christian had not only given us a great
                logo, but a remarkable visual identity.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2014"
              month="March"
              day="14"
              title="The first event"
              image="/history/technoport.png"
              imageAlt="technoport logo"
            >
              <p>
                After only 3 months of planing, the first ever #play14 event
                welcomed 34 players in Esch/Belval, Luxembourg. Thanks to{" "}
                <Link href="/players/diego-de-biasio">Diego</Link>, CEO of the{" "}
                <Link href="http://www.technoport.lu">Technoport</Link>, we had
                our venue... for free. We also received a lot of logistical help
                from Diego, which proved pretty handy for first-time organizers
                like us. We wouldn&apos;t have done it without him. That is why
                Diego is, to this day, considered as a founding member of
                #play14.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2015"
              month="March"
              day="27"
              title="The second time in Luxembourg"
              image="/history/luxembourg.jpg"
              imageAlt="luxembourg grund photo"
            >
              <p>
                Once was not enough. We wanted more. So we decided to go again.
                We actually announced the date of the second event right at the
                end of the first one. We were so happy with how the whole thing
                turned out that we asked Diego if we could book a date for the
                next year. He said yes. That second time, a lot of people from
                the first year came back. It was also when we met Chris and
                Christina from London.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2015"
              month="September"
              day="11"
              title="The first time in Europe"
              image="/history/london.jpg"
              imageAlt="london underground photo"
            >
              <p>
                At first, we had no idea that #play14 would spread in different
                cities. In the beginning, we thought we would grow the
                Luxembourg event to bigger numbers. And then in 2015, we met{" "}
                <Link href="/players/chris-caswell">Chris Caswell</Link> and{" "}
                <Link href="/players/christina-ohanian">Christina Ohanian</Link>{" "}
                from London. Then, it became clear that with our help and their
                motivation, they could import the #play14 format and organize
                the same kind of event in the UK. The idea was to provide the
                same experience for participants, just with a slightly different
                British flavor. And it worked like a charm. The two Chrises did
                a great job at replicating what they experienced in Luxembourg,
                and we realized the players enjoyed it just as much. From there,
                #play14 started on a completely new journey. After London, a
                whole bunch of other cities became a nest for #play14.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2015"
              month="November"
              day="20"
              title="The first time in Africa"
              image="/history/beirut.jpg"
              imageAlt="beirut university photo"
            >
              <p>
                With Beirut, we started spreading not only in Europe, but on a
                new contient, Africa.{" "}
                <Link href="/players/pierre-hervouet">Pierre Hervouet</Link> was
                one of the players who participated in Luxemboug 2014 and a
                friend of the other Pierre. When he decided to experiment with
                running a #play14 event in Beirut, we supported him. The format
                was shortened to a single day. But even though, people enjoyed
                it a lot. And we started to realize that independently from the
                cultural background, learning by playing was really a universal
                concept and worked everywhere.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2019"
              month="March"
              day="1"
              title="The first time in Oceania"
              image="/history/sydney.jpg"
              imageAlt="sydney harbor photo"
            >
              <p>
                It took four more years for #play14 to get exported to a new
                continent in 2019. But everything was actually set in motion in
                2018, when{" "}
                <Link href="/players/hanna-karlsson">Hanna Karlsson</Link>, a
                Swede living in Australia came back to Europe for her summer
                tour. Looking for instersting conferences, she registered for
                both Madrid the beginning of June and Hamburg at the end of
                June. She got hooked right away and swiftly decided she wanted
                to bring the #play14 playfulness down under to Sydney. We helped
                her to make it happen and the first event in Oceania was hosted
                in March the following year.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2019"
              month="May"
              day="31"
              title="The first time in America"
              image="/history/mexico.jpg"
              imageAlt="mexico city photo"
            >
              <p>
                The same year,{" "}
                <Link href="/players/ulises-aguila">Ulises Aguila</Link> who had
                attended the London event in 2018, decided he wanted to bring
                #play14 to Mexico. We were thrilled with the idea of organizing
                the first event on the American continent. Ulises gathered a
                great team and with the help of his teammates, organized yet
                another very successful event on that side of the globe.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2019"
              month="October"
              day="25"
              title="The first time in Asia"
              image="/history/kuala-lumpur.jpg"
              imageAlt="Kuala Lumpur photo"
            >
              <p>
                <Link href="/players/frederic-ducros">Fred Ducros</Link> was one
                of the players present in Sydney. While French, he was living
                and working in Kuala Lumpur and decided it was time to bring
                #play14 to Asia. What a year was 2019 for #play14. We opened the
                year with Sydney in March, continued with Mecixo in May, and
                finished beautifully with Kuala Lumpur in October, therefore
                opening three new continent in one year. Back in Europe, our
                mentoring program was making wonders and 16 events in total were
                organized that same year. Only it did not last.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2020"
              month="February"
              title="The first COVID cancellation"
              image="/history/luxembourg.jpg"
              imageAlt="Luxembourg fortifications photo"
            >
              <p>
                Due to the COVID19 pandemic, it was with a heavy heart that we
                decided to cancel the Luxembourg event for safety reasons in
                early 2020. Turned out we were right to cancel before the
                lock-down was enforced by the authorities on March 15th.
                Unfortunately, it was only the beginning of a long series of
                cancellation.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2020"
              month="May"
              day="9"
              title="The first online event"
              image="/history/online.jpg"
              imageAlt="online"
            >
              <p>
                After a moment of freaking out, like everyone else, we all tryed
                to find some ways to reproduced online what we were doing
                &quot;in real life&quot;. So to try and restore a little
                normalcy and in order not to completely lose our momentum, we
                organized our first online event. With the help of Pierre, the
                team who was supposed to organize the event in Stuttgart got to
                it. Using Miro and Zoom, they managed to bring a bunch of
                #play14 alumni and new people together. We were all trying to
                figure out how to translate our games online. And we learned a
                lot from that day. Some of that was captured in{" "}
                <Link href="articles/first-online-play14-ever">
                  Cédric&apos;s article
                </Link>
                .
              </p>
            </HistoryItem>

            <HistoryItem
              year="2020"
              month="July"
              day="25"
              title="The BIG one"
              image="/history/bigone.jpg"
              imageAlt="big one"
            >
              <p>
                Now that we had hosting teams around the world, but since we
                could not more around anymore, we had to try something out. It
                was actually Pierre who had the idea to have a 24 hours around
                the globe online event. The event started in Sydney at 9AM AEST
                time, and finished at 4PM in Mexico and Los Angeles PDT time.
                Hosts in each time zone took turn to facilitate the whole thing.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2021"
              month="November"
              day="11"
              title="The first post-COVID event"
              image="/history/utrecht.jpg"
              imageAlt="Utrecht photo"
            >
              <p>
                It was the team from the Netherlands who took the heavy
                responsibility to maintain the first post-COVID event. A small
                window of opportunity presented, and they managed to organize a
                safe, yet joyful and obriously playful event in Utrecht at the
                end of 2021. It felt gooooooood to be back. And now we just
                wanted more.
              </p>
            </HistoryItem>

            <HistoryItem
              year="2022"
              month="and after"
              title="The story continues"
              image="/history/next.jpg"
              imageAlt="what is next"
            >
              <p>
                Fortunately, in 2022, things got (almost) back to normal and we
                managed to have 7 events through the year. We are back, and
                hungry for more.
              </p>
            </HistoryItem>
          </ol>
        </div>
      </section>
    </Page>
  );
};

export default Story;
