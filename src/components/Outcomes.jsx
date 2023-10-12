function Outcomes() {
  return (
    <div className="bg-black overflow-hidden">
      <div className="container mx-auto w-full  ">
        <div className="flex flex-col items-center justify-between space-y-12  max-w-6xl mx-auto py-24  lg:flex-row lg:space-y-0 lg:space-x-12">
          <div className="flex flex-col items-center justify-center space-y-12   text-white  lg:w-1/2 lg:justify-start">
            <h1 className="text-5xl font-bold">Outcomes</h1>
            <ul className="flex flex-col items-start justify-center space-y-6 lg:space-y-2">
              {/* item 1 */}
              <li className="text-md md:text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="assets/bullet.png" alt="" />
                </span>
                AchieveLongTermMonstrousGoals
              </li>
              {/* item 1 */}
              <li className="text-md md:text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="assets/bullet.png" alt="" />
                </span>
                PeaceofMindKnowingYouHaveCriticalAdvantage
                <br />
                over99.999%ofStudents
              </li>
              {/* item 1 */}
              <li className="text-md md:text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="assets/bullet.png" alt="" />
                </span>
                Free Time to Pursue Passions/Hobbies/ HighSchool
              </li>
              {/* item 1 */}
              <li className="text-md md:text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="assets/bullet.png" alt="" />
                </span>
                Developer Insane Laser Focus
              </li>
              {/* item 1 */}
              <li className="text-md md:text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="assets/bullet.png" alt="" />
                </span>
                Permanent Change in Thinking and Life Skills
              </li>
              {/* item 1 */}
              <li className="text-md md:text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="assets/bullet.png" alt="" />
                </span>
                Eliminate Stress and Conquer Mental Health
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-12  items-start justify-center lg:w-1/2 ">
            <img src="assets/outcome-img.png" alt="" className="" />

            <p className="text-lg relative text-gray-400 ml-12 max-w-sm lg:ml-0">
              Aliquam quis tincidunt lectus, vitae aliquam metus. Donec congue
              euismod orci non varius. Ut convallis a mi in suscipit
              <div className="absolute top-0 left-[-15%]">
                <img src="assets/Vector.png" alt="" />
              </div>
            </p>
            <img
              src="assets/Outcome-lines.png"
              alt=""
              className="ml-12 lg:ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outcomes;
