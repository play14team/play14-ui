import Link from "next/link";
import Image from "next/image";
import { Sponsor, UploadFile } from "../../models/graphql";
import SocialNetworks from "./socialnetworks";

const EventSponsor = (props: { sponsor: Sponsor; category: string }) => {
  const { sponsor, category } = props;

  const logo = sponsor.logo?.data?.attributes as UploadFile;

  return (
    <div className="col-lg-4 col-sm-6 col-md-6">
      <div className="single-scientist-box">
        <div
          className="image"
          style={{
            height: 220,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={sponsor.url || "#"}>
            <Image
              src={logo.url}
              alt={logo.name}
              width={500}
              height={500}
              priority
            />
          </Link>
        </div>
        <div className="content">
          <h5>{sponsor.name}</h5>
          <span>{category}</span>
          {sponsor.socialNetworks && (
            <SocialNetworks socialNetworks={sponsor.socialNetworks} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSponsor;
