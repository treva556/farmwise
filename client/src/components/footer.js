import React from "react";

function Footer() {
  return (
    <div>
      <footer className="w-5/5 m-auto p-10 mt-6 bg-green-800">
        <div className="md:flex grid grid-cols-2 gap justify-between items-start my-10">
          <div className="space-y-5 py-5 border-b">
            <h1 className="text-3xl font-bold">Farm Wise</h1>
          </div>
          <div className="flex flex-col space-y-3">
            <h1>Company</h1>
            <a className="text-sm text-gray-400" href="/">
              About us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Contact Us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Blog
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <h1>Company</h1>
            <a className="text-sm text-gray-400" href="/">
              About us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Contact Us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Blog
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <h1>Company</h1>
            <a className="text-sm text-gray-400" href="/">
              About us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Contact Us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Blog
            </a>
          </div>
        </div>
        <div className="border-t py-2">
          <p>
            copy &copy;2022 <span className="font-bold">Farm Wise</span> All
            Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;