import React from "react";
import sectionTitle from "../sectionTitle";
import Map from "./GoogleMap";
import Reviews from "./Reviews";
// import Backdrop from "../../Components/Backdrop";
import Backdrop from '../Backdrop';


export default function Contact() {
  const [openReview, setOpenReview] = React.useState(false);
  return (
    <div className="container mx-auto md:max-w-90">
      <sectionTitle title={"Contact"} />
      {/* contact section grid*/}
      <div className="pt-6 grid grid-row-2 grid-flow-row gap-4 sm:grid-flow-row md:grid-flow-col-row lg:grid-flow-col-dense xl:grid-flow-col md:justify-items-center">
        {/* left side info grid */}
        <div className="map text-left w-screen md:w-full lg:w-full xl:w-full sm:w-3/4 grid grid-row-2 grid-flow-row gap-4 mx-auto">
          {/* location */}
          <div className="grid grid-flow-col grid-cols-5">
            <picture className="w-10 h-10 inline mx-auto">
              <source type="image/webp" srcSet="location.webp" />
              <source type="image/png" srcSet="location.png" />
              <img src="location.png" alt="Location" />
            </picture>
            <div className="col-span-4">
              <p className="inline">
                <b>Elkpro-Cut Salon </b>
                <br />
                765-26 Hannam-dong, Yongsan-gu, Seoul
              </p>
            </div>
          </div>
          {/* phone */}
          <div className="grid grid-flow-col grid-cols-5">
            <picture className="w-10 mx-auto inline">
              <source type="image/webp" srcSet="phone-contact.webp" />
              <source type="image/png" srcSet="phone-contact.png" />
              <img src="phone-contact.png" alt="Phone" />
            </picture>
            <div className="col-span-4">
              <p className="inline"> 010-9539-9012</p>
            </div>
          </div>
          {/* hours */}
          <div className="grid grid-flow-col grid-cols-5">
            <picture className="w-10 mx-auto inline">
              <img src="clock-regular.svg" alt="Hours" className="icon" />
            </picture>
            <div className="col-span-4 leading-relaxed">
              <p className="font-bold">Hours of Operation:</p>
              <p className="pt-3">
                Monday: 9am - 10pm <br />
                Tuesday: 9am - 10pm <br />
                Wednesday: 9am - 10pm <br />
                Thursday: 9am - 11pm <br />
                Friday: 9am - 11pm <br />
                Saturday: 9am - 11pm <br />
                Sunday: 10am - 11pm <br />
              </p>
            </div>
          </div>
          {/* social media and direction button */}
          <div className="grid grid-flow-col grid-cols-5">
            <span className="md:block hidden"></span>
            <div className="md:col-span-4 col-span-5">
              <picture>
                <source type="image/webp" srcSet="google.webp" />
                <source type="image/png" srcSet="google.png" />
                <img
                  onClick={() => setOpenReview((prevState) => !prevState)}
                  src="google.png"
                  alt="Google rating"
                  className="w-48 mx-auto md:mr-12 mr-5 ml-2 md:ml-0 inline my-4 hover:opacity-75 cursor-pointer"
                />
              </picture>
              {openReview && (
                <>
                  <Reviews />
                  <Backdrop
                    toggle={openReview}
                    onClick={() => setOpenReview((prevState) => !prevState)}
                    blur={true}
                  />
                </>
              )}

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/elkpro_cut/"
                className="contents"
              >
                <picture>
                  <source type="image/webp" srcSet="instagram-contact.webp" />
                  <source type="image/png" srcSet="instagram-contact.png" />
                  <img
                    src="instagram-contact.png"
                    alt="Instagram"
                    className="w-10 h-10 mx-auto inline mr-5 my-auto hover:opacity-75"
                  />
                </picture>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/elkpro_cut"
                className="contents"
              >
                <picture>
                  <source type="image/webp" srcSet="facebook.webp" />
                  <source type="image/png" srcSet="facebook.png" />
                  <img
                    src="facebook.png"
                    alt="Facebook"
                    className="w-10 h-10 mx-auto inline my-auto mr-2 hover:opacity-75"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="w-screen md:w-full map md:max-w-full sm:max-w-3/4 sm:mx-auto text-center sm:max-w-90">
          <Map />
        </div>
      </div>
      <style jsx>{`
        .icon {
          filter: invert(40%) sepia(12%) saturate(1409%) hue-rotate(330deg)
            brightness(92%) contrast(94%);
        }
        @media screen and (max-width: 500px) {
          .map {
            width: 100vw;
          }
          .contact {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
