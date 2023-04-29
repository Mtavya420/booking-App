import Image from "next/image";
import Backdrop from "../Backdrop";
import React from "react";
export default function Booking(props) {
  return (
    <div className="justify-center flex fixed z-50 inset-x-0">
      <div className={`absolute sm:w-max z-50 bg-white container top-0 my-24`}>
        <div className="mx-auto">
          <div className="py-4 px-8 border-b-2 relative flex justify-between items-center">
            <h2 className="text-xl font-bold">Booking Policy</h2>
            <span
              className="cursor-pointer text-3xl"
              onClick={() => props.setShowBooking(false)}
            >
              &times;
            </span>
          </div>
          <div className="flex gap-4 flex-col py-6 px-8 content">
            <p className="font-bold">First-Time Clients</p>
            <p>
              Welcome to Elkpro Cut. If you are a new customer, please call us
              at{" "}
              <a href="tel:010-9539-9012" className="font-bold">
                010-9539-9012{" "}
              </a>
              so that we can better understand your needs and assign you the
              best barber.
            </p>
            <p className="font-bold">Appointment Cancellations</p>
            <p>
              We require at least 2 hours advance notice to cancel or reschedule
              any service. If you fail to provide us with the required notice,
              you will be charged 100% of the total estimated service cost.
            </p>
            <p className="font-bold">Methods of Payment</p>
            <p>
              Payment can be made via money transfer or cash upon arrival for
              your appointment.
            </p>
            <p className="font-bold">Children</p>
            <p>
              For the comfort and safety of all our customers, children must be
              accompanied by an adult.
            </p>
          </div>
          <div className="border-t-2">
            <a
              className="contents "
              target="_blank"
              rel="noopener noreferrer"
              href="https://elkpro.netlify.app/new-booking"
            >
              <button className="block mx-auto hover:opacity-75 shadow-lg my-3">
                Book Now{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <Backdrop
        toggle={props.showBooking}
        onClick={() => props.setShowBooking(false)}
        blur={true}
      />
      <style jsx>{`
        button {
          background-color: #0074d9;
          border-radius: 1rem;
          padding: 0.8rem 3rem;
          color: white;
          font-weight: bold;
          font-size: 1rem;
        }
        .content {
          height: 60vh;
          overflow-y: scroll;
        }
      `}</style>
    </div>
  );
}
