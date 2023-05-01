import Service from "./ServiceMenuItem";
import SectionTitle from "../../Components/SectionTitle";
import Link from "next/link";

export default function Services() {
  return (
    <div className="mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="grid lg:grid-rows-2 grid-rows-1 lg:grid-flow-col justify-center gap-6">
        <Link href="#" passHref>
          <Service serviceName={"Royalty HairCut 👑"} imageName={"cust1"} />
        </Link>
        <Link href="#" passHref>
          <Service serviceName={"Hair Dye"} imageName={"cust2"} />
        </Link>
        <Link href="#" passHref>
          <Service serviceName={"HairCut Design"} imageName={"cust3"} />
        </Link>
        <Link href="#" passHref>
          <Service serviceName={"Beard & Line up"} imageName={"cust4"} />
        </Link>
      </div>
    </div>
  );
}
