import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import CodeOfConduct from "../../components/layout/codeofconduct";
import Manifesto from "../../components/layout/manifesto";
import Page from "../../components/layout/page";

const Values: NextPage = () => {
  return (
    <Page name="Our values">
      <div className="container">
        <p className="pt-70">
          Values are very important to us. They are what make #play14 what it
          is. Please, make sure you take a look at our manifesto and our code of
          conduct before you register to one of our events.
        </p>
        <p>
          Many thanks to <Link href="/players/nina-neef">Nina Neef</Link> for
          the wonderful images.
        </p>
        <div className="pt-5">
          <Manifesto />
        </div>
        <Image
          src="/values/manifesto.jpg"
          alt="manifesto"
          width={800}
          height={800}
          className="pt-5 pb-100"
        />
        <div className="pt-5">
          <CodeOfConduct />
        </div>
        <Image
          src="/values/CoC.jpg"
          alt="code of conduct"
          width={1000}
          height={500}
          className="pt-5 pb-100"
        />
      </div>
    </Page>
  );
};

export default Values;
