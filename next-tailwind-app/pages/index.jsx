import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 flex justify-center align-center">
      <div className="w-96 rounded-lg my-4 border-solid border-2 border-gray-400 px-8 py-12">
        <img className="h-10" src="/logo.svg" alt="Workation" />
        <img
          className="mt-6 w-96 rounded-lg shadow-xl"
          src="/beach-work.jpg"
          alt="beach work"
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          You can work from anywhere,{" "}
          <span className="text-indigo-500">take advantage of it!</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus odit
          doloremque sed iste eius quo autem, adipisci hic sit ducimus rem
          officiis vel tenetur culpa! Officia explicabo provident repellat
          officiis.
        </p>
        <div className="mt-4">
          <a
            className="inline-block bg-indigo-500 text-white px-5 py-3 shadow-lg rounded-lg uppercase tracking-wider font-semibold text-sm"
            href="#"
          >
            Book Your Escape
          </a>
        </div>
      </div>
    </div>
  );
}
