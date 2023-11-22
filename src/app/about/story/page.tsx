import HistoryItem from "@/components/about/historyitem"
import Page from "@/components/layout/page"
import PlayerGrid from "@/components/players/grid"
import { PlayerEntity, StoryDocument } from "@/models/graphql"

import HtmlContent from "@/components/layout/html-content"
import { getClient } from "@/libs/apollo-client"

export default async function Story() {
  const { data } = await getClient().query({ query: StoryDocument })
  const founders = data?.players?.data as PlayerEntity[]
  const history = data?.history?.data?.attributes

  return (
    <Page name="Our story">
      <section className="history-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="section-title">
            {history && <h2>{history.founders || "Founders"}</h2>}
          </div>
          {history && (
            <div className="px-5">
              <HtmlContent>{history.intro!}</HtmlContent>
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
                  key={item?.id}
                  date={item?.date}
                  dateFormat={item?.dateFormat!}
                  additionalText={item?.additionalText!}
                  title={item?.title!}
                  image={item?.image.data!.attributes!.url}
                  imageAlt={item?.image.data!.attributes!.name}
                >
                  <HtmlContent>{item?.description!}</HtmlContent>
                </HistoryItem>
              ))}
          </ol>
        </div>
      </section>
    </Page>
  )
}
