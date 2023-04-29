import styled from "@emotion/styled";
import Image from "next/image";
export default function ServiceMenuItem({ imageName, serviceName }) {
  return (
    <ServiceBox className="relative rounded shadow-lg flex justify-center">
      <Image
        src={`/images/${imageName}.jpeg`}
        alt={serviceName + "image"}
        fill
        sizes="100vw" />
      <BackgroundBox className="absolute background-box px-10 py-2.5">
        {serviceName}
      </BackgroundBox>
    </ServiceBox>
  );
}

const ServiceBox = styled.div`
  width: 36.875rem;
  height: 27.25rem;
  background-size: cover;
  @media screen and (max-width: 550px) {
    width: 100vw;
  }
`;

const BackgroundBox = styled.p`
  background: rgba(255, 255, 255);
  box-decoration-break: clone;
  bottom: 0;
  justify-content: center;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 29px;
  color: #4c4949;
`;
