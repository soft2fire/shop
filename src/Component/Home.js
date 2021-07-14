import offerImage from './Shop/images/x32021.png'
import bm1 from './Shop/images/1.jpg'
import bm2 from './Shop/images/2.jpg'
import bm3 from './Shop/images/3.jpg'
function Home() {
  return (
    <div className="my-2 pb-4">
      <div className="bg-gradient-to-t from-green-800 to-blue-800 rounded-b-lg shadow-2xl border-2 border-gray-600 border-opacity-25">

        <div className="flex justify-center">
          <div className="text-white p-5">
            <span className="text-center">
              <p className="text-5xl text-center mb-4">
                X3 M40i
              </p>
              <p>
                A performance-oriented adventure machine.
                The impressive engine power, handling, and M-engineered components of the 2021 BMW X3 M40i allow you to experience everything the road has to offer, no matter where it leads.
              </p>

              <p className="text-4xl mt-8">
                HIGH-PERFORMANCE PRESENCE
              </p>
              <p className="mt-10">
                Experience the spirit of BMW M in this Sports Activity Vehicle®, where increased engine power and high-performance components come together.
              </p>

              <p className="text-4xl mt-8">
                A powerful inline-6.
              </p>
              <p className="mt-10">
                The X3 M40i’s 3.0-liter M TwinPower Turbo inline 6-cylinder engine delivers breathtaking acceleration and a 0-60 mph time of just 4.4 seconds.
              </p>
            </span>
          </div>
          <img className="w-1/2 text-left" src={offerImage} alt={'x3'} />
        </div>

        <div className='flex text-center p-2 m-2 mb-0'>
          <img className="w-1/3 rounded-full p-2" src={bm1} alt='x3' />
          <img className="w-1/3 rounded-full p-2" src={bm2} alt='x3' />
          <img className="w-1/3 rounded-full p-2" src={bm3} alt='x3' />
        </div>

        <div className='flex text-center p-2 m-2 text-white'>
          <p className="text-3xl w-1/3 p-2">
            More compatibility.
            <p className="text-lg">
              Enjoy the best road trip entertainment with a year-long all-access trial of SiriusXM, now standard on all X3 models.
            </p>
          </p>
          <p className="text-3xl w-1/3 p-2">
            All-access music.
            <p className="text-lg">
              Experience wireless access to apps, entertainment, and communication features with Apple CarPlay™ – and now Android Auto™, included as standard on the X3 M40i and X3 xDrive30e.
            </p>
          </p>
          <p className="text-3xl w-1/3 p-2">
            Convenient.
            <p className="text-lg">
              The X3 boasts up to 62.7 cubic feet of cargo space, configured to carry whatever you desire with the 40/20/40 split folding rear seats.
            </p>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;
