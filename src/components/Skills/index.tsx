export default function Skills() {
  return (
    <section id="skills" className="max-w-[1440px] m-auto px-8 pb-12 my-12">
      <h3 className="text-3xl leading-[150%] my-12 border-b-2 border-accent w-fit">
        Skills
      </h3>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="rounded-[1rem] bg-base-100 px-6 py-4 flex gap-4 items-center justify-start md:justify-between w-full md:w-auto group hover:bg-base-300 transition-all duration-150">
          <div className="w-2 h-2 rounded-[50%] bg-cyan-300"></div>
          <div>
            <h3 className="card-title">React</h3>
            <span>NextJS, Gatsby, TailwindCSS, React Query, Redux</span>
          </div>
        </div>
        <div className="rounded-[1rem] bg-base-100 px-6 py-4 flex gap-4 items-center  justify-start md:justify-between w-full md:w-auto group hover:bg-base-300 transition-all duration-150">
          <div className="w-2 h-2 rounded-[50%] bg-red-500"></div>
          <div>
            <h3 className="card-title">Angular</h3>
            <span>NGRX, Angular Material, RXJS</span>
          </div>
        </div>
        <div className="rounded-[1rem] bg-base-100 px-6 py-4 flex gap-4 items-center justify-start md:justify-between w-full md:w-auto group hover:bg-base-300 transition-all duration-150">
          <div className="w-2 h-2 rounded-[50%] bg-yellow-300"></div>
          <div>
            <h3 className="card-title">Javascript & Typescript</h3>
            <span>ThreeJS, Framer Motion, ES6-ES9, </span>
          </div>
        </div>
        <div className="rounded-[1rem] bg-base-100 px-6 py-4 flex gap-4 items-center justify-start md:justify-between w-full md:w-auto group hover:bg-base-300 transition-all duration-150">
          <div className="w-2 h-2 rounded-[50%] bg-green-300"></div>
          <div>
            <h3 className="card-title">Web Development</h3>
            <span>
              HTML/CSS, CMS, Accessibility, Web performance, SEO,
              Authentication, OAuth
            </span>
          </div>
        </div>
        <div className="rounded-[1rem] bg-base-100 px-6 py-4 flex gap-4 items-center justify-start md:justify-between w-full md:w-auto group hover:bg-base-300 transition-all duration-150">
          <div className="w-2 h-2 rounded-[50%] bg-emerald-500"></div>
          <div>
            <h3 className="card-title">Python</h3>
            <span>Django, REST Framework, Numpy</span>
          </div>
        </div>
        <div className="rounded-[1rem] bg-base-100 px-6 py-4 flex gap-4 items-center justify-start md:justify-between w-full md:w-auto group hover:bg-base-300 transition-all duration-150">
          <div className="w-2 h-2 rounded-[50%] bg-purple-300"></div>
          <div>
            <h3 className="card-title">NodeJS/ExpressJS</h3>
            <span>REST API's, Authentication, Middleware</span>
          </div>
        </div>
        <div className="rounded-[1rem] bg-base-100 px-6 py-4 flex gap-4 items-center justify-start md:justify-between w-full md:w-auto group hover:bg-base-300 transition-all duration-150">
          <div className="w-2 h-2 rounded-[50%] bg-orange-300"></div>
          <div>
            <h3 className="card-title">Databases</h3>
            <span>MySQL, SQLite, MongoDB, Planetscale</span>
          </div>
        </div>
        <div className="rounded-[1rem] bg-base-100 px-6 py-4 flex gap-4 items-center justify-start md:justify-between w-full md:w-auto group hover:bg-base-300 transition-all duration-150">
          <div className="w-2 h-2 rounded-[50%] bg-pink-300"></div>
          <div>
            <h3 className="card-title">Cloud</h3>
            <span>EC2, API Gateway, Lambda, Docker, RDS, S3</span>
          </div>
        </div>
      </div>
    </section>
  );
}
