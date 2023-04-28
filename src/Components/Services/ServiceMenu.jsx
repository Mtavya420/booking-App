import Service from "./ServiceMenuItem";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";

export default function Services() {
  return (
    <div className="mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="grid lg:grid-rows-2 grid-rows-1 lg:grid-flow-col justify-center gap-6">
        <Link href="#" passHref>

          <Service service={"Royalty HairCut 👑"} background={"haircare"} />

        </Link>
        <Link href="#" passHref>

          <Service service={"Hair Dye"} background={"skincare"} />

        </Link>
        <Link href="#" passHref>

          <Service service={"HairCut Design"} background={"nails"} />

        </Link>
        <Link href="#" passHref>

          <Service service={"Beard & Line up"} background={"waxing"} />

        </Link>
      </div>
   
    </div>
  );
}
