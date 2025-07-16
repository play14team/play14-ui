import HistoryItem from "@/components/about/historyitem"
import HtmlContent from "@/components/layout/html-content"
import Page from "@/components/layout/page"
import PlayerGrid from "@/components/players/grid"
import { attributesAs, dataAsArrayOf, query } from "@/libs/apollo-client"
import {
  Enum_Componentdefaulthistoryitem_Dateformat,
  History,
  HistoryEntityResponse,
  PlayerEntity,
  PlayerEntityResponseCollection,
  StoryDocument,
} from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Our story",
}

export default async function Story() {
  const response = (await query({ query: StoryDocument })) as {
    players?: PlayerEntityResponseCollection
    history?: HistoryEntityResponse
  }
  const founders = dataAsArrayOf<PlayerEntity>(
    response?.players || { data: [] },
  )
  const history = attributesAs<History>({ data: response.history?.data ?? {} })

  return (
    <Page name="Our story">
      <section className="history-area pt-70 pb-100">
        <div className="container  bg-fafafb pt-5 pb-70">
          <div className="section-title">
            {history && <h3>{history.founders || "Founders"}</h3>}
          </div>
          {history && (
            <div className="px-5">
              <HtmlContent>{history.intro!}</HtmlContent>
            </div>
          )}
          <div className="pt-5">
            {founders && <PlayerGrid players={founders} />}
          </div>

          <div className="section-title pt-70">
            {history && <h3>{history.keyMoments || "Key moments"}</h3>}
          </div>

          <ol className="timeline history-timeline">
            {history &&
              history.items &&
              history.items.map((item) => (
                <HistoryItem
                  key={item?.id}
                  date={item?.date}
                  dateFormat={
                    item?.dateFormat as Enum_Componentdefaulthistoryitem_Dateformat
                  }
                  additionalText={item?.additionalText || ""}
                  title={item?.title || ""}
                  image={item?.image.data!.attributes!.url}
                  imageAlt={item?.image.data!.attributes!.name}
                >
                  <HtmlContent>{item?.description || ""}</HtmlContent>
                </HistoryItem>
              ))}
          </ol>
        </div>
      </section>
    </Page>
  )
}
