import Reviews from "./Reviews";

function Community() {
  return (
    <div className=" bg-black flex flex-col space-y-12 pb-24 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto  text-white space-y-24 pt-44 ">
        <h1 className="text-4xl lg:text-6xl font-bold  max-w-6xl">
          Join an Elite <span className="text-orangeLight">Community</span> of
          Winners.
        </h1>
        {/* item 1 */}
        <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-24 lg:space-y-0">
          <div className="relative">
            <img src="assets/Sam-Purcell.png" alt="" />
            <div className="absolute top-[35%] left-[40%] ">
              <img
                src="assets/orange-play-button.png"
                alt=""
                className="hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <img src="assets/sam-small.png" alt="" />
              <p className="text-md text-left">
                Sam Pucell
                <br />
                <span className="text-sm text-gray-500">Grade 11 Student</span>
              </p>
            </div>
            <img src="assets/stars.png" alt="" />
            <p className="max-w-md text-left">
              "Grizzly Elite made me realize that I had this huge chasm of
              untapped potential. It was not just a minor improvement but a
              complete change of how I thought and performed. Grizzly Elite
              taught me how to differentiate what actually gives me the best
              results to succeed in my future. As an end result, I overachieved
              5,000 times my initial goal with Grizzly Elite."
            </p>
          </div>
        </div>
        {/* item 2 */}
        <div className="flex flex-col-reverse items-center justify-center space-y-6 lg:flex-row lg:space-x-24 lg:space-y-0">
          <div className="flex flex-col items-start justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <img src="assets/nahshon-small.png" alt="" />
              <p className="text-md text-left">
                Nahshon Weissberg
                <br />
                <span className="text-sm text-gray-500">Grade 11 Student</span>
              </p>
            </div>
            <img src="assets/stars.png" alt="" />
            <p className="max-w-md text-left">
              "Participating in Joaquin Revello's Grizzly Elite program is the
              best decision I have ever made.
              <br /> In just the first couple of sessions with Joaquin, I've
              been able to increase my productivity 10 fold. I know what I'm
              getting is legit, and everything he gives is value. In fact, i'd
              go as far as to say that every session with him is worth more than
              the price of the entire course itself! The way I work now, school
              has basically become a side project."
            </p>
          </div>
          <div className="relative pb-6 lg:pb-0">
            <img src="assets/nahshon weissberg.png" alt="" />
            <div className="absolute top-[35%] left-[40%] ">
              <img
                src="assets/red-play-button.png"
                alt=""
                className="hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* item 3 & 4 */}
        <div className="flex flex-col items-center justify-between space-y-12 lg:flex-row lg:space-x-24 lg:space-y-0">
          <div className="flex items-center justify-between max-w-md space-x-4">
            <img src="assets/Anderson-irawan.png" alt="" />
            <div className="flex flex-col items-start justify-center">
              <p className="text-md text-left">
                "Joaquin is an inspiration and has helped me with my studies. I
                feel more productive overall."
              </p>
              <p className="text-sm text-gray-500">
                Anderson Putra Irawan - Grade 11 Student
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between max-w-md space-x-4">
            <img src="assets/Shunsuke-Tsutsui.png" alt="" />
            <div className="flex flex-col items-start justify-center">
              <p className="text-md text-left">
                "Grizzly Elite makes great content which helped me a lot in
                studying. Would absolutely recommend Joaquin as he gives great
                useful advice."
              </p>
              <p className="text-sm text-gray-500">
                Shunsuke Tsutsui - Grade 10 Student
              </p>
            </div>
          </div>
        </div>
        {/* item 5 */}
        <div className="flex flex-col items-center justify-center max-w-lg px-2 lg:max-w-4xl  space-y-6 ">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold">Gloria Mariwa</h1>
            <p className="text-sm text-gray-500">Grade 11 Student</p>
          </div>
          <p className="text-left lg:text-center">
            "Joaquin really helped me a lot! My goal was to succeed in the WSC
            academic competition. In my first year of the competition, I left
            the regional round ashamed of barely qualifying for the global
            rounds. This was before I found Joaquin's [productivity] training
            and resources.
          </p>
          <p className="text-left lg:text-center">
            The next year I took part in the competition once again and, using
            Joaquin's resources and having his support, I managed to get 10 gold
            medals [10X results]: holding the record of most medals received
            during the competition in my school. I remember leaving the
            competition with tons of pride after the positive change I made in a
            year's time with help from Joaquin! Till today I'm proud of my
            achievement and I thank Joaquin for all his help!"
          </p>
        </div>

        {/* item 6 */}
        <h1 className="text-4xl lg:text-6xl font-bold px-2  max-w-4xl">
          What other <span className="text-orangeLight">Counselors</span> Say
          about this Opportunity.
        </h1>
        {/* item bibi */}
        <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-24 lg:space-y-0">
          <div className="relative">
            <img src="assets/bibi.png" alt="" />
          </div>
          <div className="flex flex-col items-start justify-center space-y-6 px-2">
            <h1 className="text-2xl font-bold">Meet Bibi</h1>
            <p className="max-w-md text-left">
              At my request, Joaquin Revello, hosted a virtual presentation for
              my current students in January of 2022. He is a wonderful
              results-oriented public speaker and hearing his tips and personal
              experiences, which eventually led to his success in gaining
              admission to his top choice university, were eye-opening for my
              students. These included novel frameworks, strategies, and
              concepts.
            </p>
            <p className="max-w-md text-left">
              In any given year, I work with a handful of students targeting
              elite institutions, including Ivy League universities. While
              ambitious, I still felt some were not fully living up to their
              potential. After Joaquin’s presentation, the change in the mindset
              and attitude of the students who attended his event was evident in
              their progress. The feedback I received from parents and students
              has been extraordinarily positive. The difference he has made is
              evidence of his genuine interest in the power of productivity and
              how modifications in attitude and work ethic can change lives. I
              wholeheartedly endorse Joaquin, knowing the value that he brings
              to the young people he sets out to inspire.
            </p>
          </div>
        </div>
      </div>
      <Reviews />
      {/* item 1 */}
      <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-24 lg:space-y-0">
        <div className="relative">
          <img src="assets/asian-lady.png" alt="" />
          <div className="absolute top-[35%] left-[40%] ">
            <img
              src="assets/red-play-button.png"
              alt=""
              className="hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center px-2 space-y-6">
          <div className="flex items-center space-x-4">
            <img src="assets/Vector.png" alt="" />
          </div>
          <h1 className="text-xl font-bold text-white">
            There’s now a fire in them. Their eyes are sparkling.
          </h1>
          <p className="max-w-md text-left text-white px-2">
            "Grizzly Elite made me realize that I had this huge chasm of
            untapped potential. It was not just a minor improvement but a
            complete change of how I thought and performed. Grizzly Elite taught
            me how to differentiate what actually gives me the best results to
            succeed in my future. As an end result, I overachieved 5,000 times
            my initial goal with Grizzly Elite."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Community;
