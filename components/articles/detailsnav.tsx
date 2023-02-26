import { useQuery } from "@apollo/client";
import { ArticleNavDocument, Article } from "../../models/graphql";
import DetailsNavigator, { NavLink } from "../layout/detailsnav";
import Loader from "../layout/loader";

const ArticlesNavigator = (props: { current: string }) => {
  const { data, loading } = useQuery(ArticleNavDocument);
  const { current } = props;

  if (loading) return <Loader size="18vh" />;

  const articles = data.articles?.data;
  const index = articles.findIndex((a) => a.attributes?.slug == current);
  const previous = index > 0 ? articles[index - 1] : null;
  const next = index < articles.length - 1 ? articles[index + 1] : null;

  return (
    <DetailsNavigator
      previous={getLink(previous?.attributes as Article)}
      next={getLink(next?.attributes as Article)}
      entity="articles"
    />
  );
};

const getLink = (game: Article): NavLink => {
  if (!game) return null;

  return {
    slug: game.slug,
    name: game.title,
    image: game.defaultImage.data.attributes,
    date: game.publishedAt!,
  };
};

export default ArticlesNavigator;
