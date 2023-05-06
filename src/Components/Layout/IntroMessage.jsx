import React from 'react'

const IntroMessage = () => {
  return (
    <section className="bg-blue-100 text-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center uppercase tracking-wide">
          Welcome to <span className="text-blue-600">Elkpro Cut</span>
        </h1>
        <p className="text-lg leading-loose text-center">
          A Good Look Reflects Your Story And Your Spirit
        </p>
        <p className="bg-white text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors block mx-auto max-w-max mt-8">
          Need to look fabulous fast? Book your next hair cut today!
        </p>
      </div>
    </section>
  );
}

export default IntroMessage