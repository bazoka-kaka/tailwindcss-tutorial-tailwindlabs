import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div class="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
      <div className="sm:max-w-xl max-w-md mx-auto xl:mr-0 my-4 px-8 py-12 lg:px-12 lg:py-24 lg:max-w-full 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img className="h-10" src="/logo.svg" alt="Workation" />
          <img
            className="mt-6 lg:hidden sm:h-64 sm:w-full sm:object-cover sm:mt-8 rounded-lg shadow-xl"
            src="/beach-work.jpg"
            alt="beach work"
          />
          <h1 className="mt-6 lg:text-3xl sm:mt-8 sm:text-4xl text-2xl font-bold text-gray-900 xl:text-4xl">
            You can work from anywhere. <br className="hidden lg:inline" />
            <span className="text-indigo-500">Take advantage of it!</span>
          </h1>
          <p className="mt-2 sm:mt-4 sm:text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus odit
            doloremque sed iste eius quo autem, adipisci hic sit ducimus rem
            officiis vel tenetur culpa! Officia explicabo provident repellat
            officiis.
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
  );
}
