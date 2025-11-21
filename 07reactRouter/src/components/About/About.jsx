import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQHTviRefsDLkA/feedshare-shrink_800/B56ZdBQisBGoAg-/0/1749146545851?e=2147483647&v=beta&t=ozJ2sMwvA-Zwxrs_VlqUmXsa0n3V3WolrXTEymqaOo0"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Masterji App: Learn React the Smarter Way
            </h2>
            <p className="mt-6 text-gray-600">
              <span className="text-orange-500">MasterJi</span> App makes React
              learning smarter and more structured by giving you daily
              challenges, guided tasks, and a supportive community that keeps
              you consistent. Instead of jumping between random tutorials, you
              get a clear path that strengthens your fundamentals and helps you
              think like a real developer. Every challenge improves your
              problem-solving skills, your project quality, and your confidence
              making React development feel more practical and achievable.
            </p>
            <p className="mt-4 text-gray-600">
              With <span className="text-orange-500">MasterJi</span>, you don’t just learn React you build the discipline
              and clarity needed to grow as a developer every single day. 🔥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
