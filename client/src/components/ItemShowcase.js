import React from "react";

function ItemShowcase() {
  return (
    <div>
      <div className="carousel-item absolute opacity-0" style={{ height: "50vh" }}>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div
          className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
              <p className="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
              <a
                className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="#"
              >
                view product
              </a>
            </div>
          </div>
        </div>
      </div>
      <label
        htmlFor="carousel-3"
        className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
      >
        ‹
      </label>
      <label
        htmlFor="carousel-2"
        className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
      >
        ›
      </label>
    </div>
  );
}

export default ItemShowcase;