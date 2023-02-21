import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Link from "next/link";
import HistoryItem from "../../components/about/historyitem";
import ErrorMessage from "../../components/layout/error";
import Html from "../../components/layout/html";
import Loader from "../../components/layout/loader";
import Page from "../../components/layout/page";
import PlayerGrid from "../../components/players/grid";
import { StoryDocument, PlayerEntity } from "../../models/graphql";

const Story: NextPage = () => {
  const { data, loading, error } = useQuery(StoryDocument);
  const founders = data?.players?.data as PlayerEntity[];
  const history = data?.history?.data?.attributes;

  return (
    <Page name="Our story" loading={loading} error={error}>
      <section className="history-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="section-title">
            {history && <h2>{history.founders || "Founders"}</h2>}
          </div>
          {history && (
            <div className="px-5">
              <Html>{history.intro}</Html>
            </div>
          )}
          <div className="pt-5">
            {founders && <PlayerGrid players={founders} />}
          </div>

          <div className="section-title">
            {history && <h2>{history.keyMoments || "Key moments"}</h2>}
          </div>

          <ol className="timeline history-timeline">
            {history &&
              history.items &&
              history.items.map((item) => (
                <HistoryItem
                  key={item.id}
                  date={item.date}
                  dateFormat={item.dateFormat}
                  additionalText={item.additionalText}
                  title={item.title}
                  image={item.image.data!.attributes!.url}
                  imageAlt={item.image.data!.attributes!.name}
                >
                  <Html>{item.description}</Html>
                </HistoryItem>
              ))}
          </ol>
        </div>
      </section>
    </Page>
  );
};

export default Story;
