export default function Experience() {
  return (
    <section id="experience" className=" my-24 px-8 m-auto max-w-[1440px]">
      <div className="max-w-[1440px] m-auto ">
        <h3 className="text-3xl leading-[150%] my-12 border-b-2 border-accent w-fit">
          Experience
        </h3>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  color="#1DB954"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2017-2021</time>
              <div className="flex flex-row-reverse md:flex-row justify-end gap-4 items-center mb-2">
                <div>
                  <div className="text-lg font-black">
                    University of Houston
                  </div>
                  <span className="text-sm block italic">
                    Bachelors in Computer Science
                  </span>
                </div>
                <div
                  className="w-[40px] h-[40px] object-cover rounded-sm"
                  style={{
                    backgroundImage: `url('/images/uhlogo.webp')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <p className="text-lg">
                During my time at UH, I studied computer science with a minor in
                Mathematics. Some of the courses I took at UH were Data Science,
                Software Engineering, Programming Languages & Paradigms, &
                Digital Image Processing.
              </p>
            </div>
            <hr className="bg-green-200" />
          </li>
          <li>
            <hr className="bg-base-100" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  color="#1DB954"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Summer 2021</time>
              <div className="flex md:flex-row-reverse flex-row md:justify-end gap-4 items-center mb-2">
                <div>
                  <div className="text-lg font-black">
                    CAN Behavioral Health
                  </div>
                  <span className="text-sm block italic">
                    Software Engineering Intern
                  </span>
                </div>
                <div
                  className="w-[40px] h-[40px] object-cover rounded-sm"
                  style={{
                    backgroundImage: `url('/images/CANlogo.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <p className="text-lg">
                Prototyped and built a web app to be used by medical offices and
                healthcare providers to store patient information, create
                surveys/questionnaires for patients, and provide diagnosis or
                treatment plans for patients.
                <br></br>
                <br></br>
                Utilized React, Material Components, and Django to build the
                application
              </p>
            </div>
            <hr className="bg-green-200" />
          </li>
          <li>
            <hr className="bg-base-100" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2021-Present</time>
              <div className="flex flex-row-reverse md:flex-row justify-end gap-4 items-center mb-2">
                <div>
                  <div className="text-lg font-black">Credera</div>
                  <span className=" text-sm block italic">
                    Senior Front-End Engineer
                  </span>
                </div>
                <div
                  className="w-[40px] h-[40px] object-cover rounded-sm"
                  style={{
                    backgroundImage: `url('/images/credera_logo.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <p className="text-lg">
                Served as a Frontend Engineer for a Tech Consulting firm working
                on 7 different client projects. Developed several websites and
                web apps, worked closely with client stakeholders, presented
                client demos, supported junior developers, and collaborated with
                designers and backend developers.
                <br />
                <br />
                The Primary technologies I utilized at Credera were React,
                Angular, HTML/CSS, AEM, AWS, and Typescript
              </p>
            </div>
            <hr className="bg-base-100" />
          </li>
        </ul>
      </div>
    </section>
  );
}
