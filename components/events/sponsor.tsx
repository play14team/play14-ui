import Link from "next/link";
import Image from "next/image";
import { Sponsor, UploadFile } from "../../models/graphql";
import SocialNetworks from "../layout/socialnetworks";

const EventSponsor = (props: { sponsor: Sponsor; category: string }) => {
  const { sponsor, category } = props;
  const url = sponsor.url || "#";
  const logo = sponsor.logo?.data?.attributes as UploadFile;

  return (
    <div className="col-lg-3 col-sm-6 col-md-6">
      <div className="single-scientist-item-box">
        <div className="image">
          {logo && (
            <Image src={logo.url} alt={logo.name} width={500} height={500} />
          )}
          {sponsor.socialNetworks && (
            <SocialNetworks socialNetworks={sponsor.socialNetworks} />
          )}
        </div>
        <div className="content">
          <Link href={url}>
            <h3>{sponsor.name}</h3>
          </Link>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default EventSponsor;
