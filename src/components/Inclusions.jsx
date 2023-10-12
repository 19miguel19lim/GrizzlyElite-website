function Inclusions() {
  return (
    <div className="bg-black overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-white">
          Your Grizzly Elite{" "}
          <span className="text-orangeLight">Training Includes</span>
        </h1>
        <div className="flex flex-col items-center justify-between space-y-12 max-w-6xl  py-12  px-4 lg:flex-row lg:space-y-0 lg:space-x-12 lg:py-24">
          <div className="flex  flex-col space-y-4 items-start justify-center lg:w-1/2">
            <img src="/public/assets/inlusion-img.png" alt="" />
          </div>
          <div className="flex flex-col items-start justify-center  space-y-12 text-white lg:w-1/2">
            <ul className="flex flex-col items-start justify-center space-y-2">
              {/* item 1 */}
              <li className="text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="/public/assets/bullet.png" alt="" />
                </span>
                Lifetime access with no additional fees or subscriptions{" "}
              </li>
              {/* item 1 */}
              <li className="text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="/public/assets/bullet.png" alt="" />
                </span>
                12 high-octane video training modules digitally
                <br /> accessible from anywhere 24/0/365.
              </li>
              {/* item 1 */}
              <li className="text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="/public/assets/bullet.png" alt="" />
                </span>
                Perfectly paced with one module, under 90 minutes,
                <br /> delivered per week, consumed on your schedule.
              </li>
              {/* item 1 */}
              <li className="text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="/public/assets/bullet.png" alt="" />
                </span>
                Just enough time in between each module to see
                <br /> concrete results before the next.
              </li>
              {/* item 1 */}
              <li className="text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="/public/assets/bullet.png" alt="" />
                </span>
                Surprise bonus gifts and video mentoring sessions.{" "}
              </li>
              {/* item 1 */}
              <li className="text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="/public/assets/bullet.png" alt="" />
                </span>
                Complete follow-along progressive downloadable manuals,
                <br />
                worksheets, diagnostics, assessments, and action guides.
              </li>
              {/* item 1 */}
              <li className="text-lg flex items-center justify-center space-x-6">
                <span>
                  <img src="/public/assets/bullet.png" alt="" />
                </span>
                Proprietary tools, work methods, and operating systems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inclusions;
