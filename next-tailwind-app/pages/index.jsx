import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import popularDestinations from "../data/popularDestination";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
        <title>Homepage</title>
      </Head>
      <div>
        <div class="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
          <div className="sm:max-w-xl max-w-md mx-auto xl:mr-0 my-4 px-8 py-12 lg:px-12 lg:py-24 lg:max-w-full 2xl:col-span-2">
            <div className="xl:max-w-xl">
              <img className="h-10" src="/img/logo-brand.svg" alt="Workation" />
              <img
                className="mt-6 lg:hidden sm:h-64 sm:w-full sm:object-cover sm:mt-8 rounded-lg shadow-xl"
                src="/beach-work.jpg"
                alt="beach work"
              />
              <h1 className="font-headline tracking-tight mt-6 lg:text-3xl sm:mt-8 sm:text-4xl text-2xl font-semibold text-gray-900 xl:text-4xl">
                You can work from anywhere. <br className="hidden lg:inline" />
                <span className="text-brand">Take advantage of it!</span>
              </h1>
              <p className="mt-2 sm:mt-4 sm:text-xl text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                odit doloremque sed iste eius quo autem, adipisci hic sit
                ducimus rem officiis vel tenetur culpa! Officia explicabo
                provident repellat officiis.
              </p>
              <div className="mt-4 sm:mt-6">
                <a
                  className="btn-primary btn shadow-lg hover:-translate-y-0.5 transform transition"
                  href="#"
                >
                  Book Your Escape
                </a>
                <a className="ml-2 btn btn-secondary" href="#">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block 2xl:col-span-3">
            <img
              className="absolute h-full w-full object-cover object-center inset-0"
              src="/beach-work.jpg"
              alt="beach work"
            />
          </div>
        </div>

        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 className="text-xl text-gray-900">Popular destinations</h2>
          <p className="mt-2 text-gray-600">
            A selection of great work-friendly cities with lots to see and
            explore.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {popularDestinations.map((destination) => (
              <Card destination={destination} key={destination.city} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
