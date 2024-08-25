import { useState } from "react";
import "./App.css";
import Button from "./assets/Components/buttons";
import landingPageData from "./assets/constant/webData";
import ecomerceData from "./assets/constant/eComercedata";

function App() {
  const [count, setCount] = useState(0);
  const openPopup = (url) => {
    // Open the exact image URL in a new popup window
    window.open(url, '_blank', 'width=600,height=400,scrollbars=yes');
  };
  

  return (
    <>
      <div>
        {/* headeer started */}

        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                className="h-20 w-20 rounded-full"
                src={landingPageData.header.logo}
                alt="logo"
              />
              <span className="ml-3 text-xl">
                {landingPageData.header.title}
              </span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">Home</a>
              <a className="mr-5 hover:text-gray-900">Contact Link</a>
            </nav>
            <Button
              label="login"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            ></Button>
          </div>
        </header>

        {/* hero started  */}

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {landingPageData.hero.title}
              </h1>
              <p className="mb-8 leading-relaxed">
                {landingPageData.hero.description}
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={landingPageData.hero.image}
              />
            </div>
          </div>
        </section>
        {/* ecomerce started  / */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            
           
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
             {landingPageData.carddata.map((data)=>(
              <div key={data.id}
              onClick={() => openPopup(data.image)}

               className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={data.image}
              

                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                {data.title}
              </h2>
              <p className="text-base leading-relaxed mt-2">
                {data.description}
              
              </p>
              <a className="text-yellow-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
             ))}
             
            </div>
          </div>
        </section>

        {/* features started  */}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
              {landingPageData.header.title}
              <br className="hidden sm:block" />
              {landingPageData.header.subtitle}
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 text-start space-y-6">
              {landingPageData.features.map((data) => (
                <div key={data.id} className="p-4 md:w-1/3 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 flex-shrink-0">
                    {data.icon}
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                      {data.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {data.description}
                    </p>
                    <a className="mt-3 text-yellow-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* testimonial started  */}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Testimonials
            </h1>
            <div className="flex flex-wrap -m-4">
              {landingPageData.testimonials.map((data) => (
                <div key={data.id} className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                    </svg>
                    <p className="leading-relaxed mb-6">{data.feedback}</p>
                    <a className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={data.avatar}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          {data.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          UI DEVELOPER
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <Button label = 'home' bgcolor={"bg-lime-800"} textcolor={"text-green-400"} />
     <Button label = 'contactus' /> */}
      </div>
    </>
  );
}

export default App;
