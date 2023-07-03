import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { HashLoader } from "react-spinners";

function LoginComp() {
  const [loading, setLoading] = useState(false);
  const [blinkingIndex, setBlinkingIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkingIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="md:h-screen h-[93vh]  md:pt-20 pt-20 text-gray-500">
      <main
        className={`max-w-full  h-full    grid justify-center md:grid-cols-2 text-center  md:overflow-hidden `}
      >
        <div className=" m-auto w-full  md:block hidden  ">
          <div className="flex justify-center md:pt-0   ">
            {/* <div className="m-auto h-full text-white ">TalentConnect360</div> */}
            <h1 className="md:text-[40px] text-2xl text-white pt-5 pb-[10px]">
              {" "}
              Welcome Back !
            </h1>
          </div>

          <div className="w-full flex justify-center mt-5 py-3">
            <div className="m-auto w-full relative">
              <img src="/" alt="" />
            </div>
          </div>

          <div>
            <p className="hidden md:block text-normal text-sm  pb-[20px]">
              Start searching the right away !
            </p>
            <div className="  hidden  md:flex justify-center gap-2 ">
              <div
                className={`w-[50px] h-[7px] rounded ${
                  blinkingIndex === 0 ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
              <div
                className={`w-[50px] h-[7px] rounded ${
                  blinkingIndex === 1 ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
              <div
                className={`w-[50px] h-[7px] rounded ${
                  blinkingIndex === 2 ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="m-auto  md:mt-15 md:w-[35vw] ">
          <div className="rounded-[25px] w-full    px-5  space-y-2 ">
            <h1 className="md:text-[40px] text-2xl text-white pt-5 md:hidden block">
              {" "}
              Welcome Back !
            </h1>
            <button
              //   onClick={() => createWithGoogle(router)}
              className="flex w-[90%] bg-teal-700 md:w-[80%] m-auto text-white p-1 md:p-2  md:text-sm text-xs  items-center justify-center gap-2 xl:p-[2px] lg:p-1.5px  border-[1px]  border-white rounded-lg"
            >
              <img src={"/_Google.svg"} alt="" className="w-10 h-8" />{" "}
              <span>Continue with Google</span>
            </button>

            <div className="flex w-[80%] m-auto items-center gap-1">
              <div className="w-[48%] border border-[#696969] "></div>
              <h5 className=" text-xs">or</h5>
              <div className="w-[48%] border border-[#696969]"></div>
            </div>
            <div className=" md:pb-5 md:px-10  ">
              <form method="post" action="#" z>
                <p className="flex flex-start text-sm ml-2 mt-1">Email</p>
                <div
                  style={{
                    "background-image":
                      "linear-gradient(177.81deg, rgba(255, 255, 255, 0.11) 1.84%, rgba(255, 255, 255, 0) 123.81%)",
                  }}
                  className="  flex rounded-[15px]  bg-[#ffffff05] items-center "
                >
                  <AiOutlineMail
                    size={"2.5vh"}
                    style={{
                      color: "green",
                      width: "30px",
                      marginLeft: "2vh",
                      marginRight: "2vh",
                    }}
                  />

                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input  md:p-3 p-[10px] pr-10 cursor-pointer  focus:border-transparent focus:outline-none    rounded-lg  bg-transparent  w-[100%] text-sm "
                  />
                </div>
                <p className="flex flex-start text-sm ml-2 mt-3">Password</p>
                <div
                  style={{
                    "background-image":
                      "linear-gradient(177.81deg, rgba(255, 255, 255, 0.11) 1.84%, rgba(255, 255, 255, 0) 123.81%)",
                  }}
                  className="   flex rounded-[15px]   mb-6 bg-[#ffffff05] items-center "
                >
                  <FaLock
                    size={"2.5vh"}
                    style={{
                      color: "blue",
                      width: "30px",
                      marginLeft: "2vh",
                      marginRight: "2vh",
                    }}
                  />
                  <input
                    required
                    type="password"
                    placeholder="Enter your password"
                    className="input  md:p-3 p-[10px] pr-10 cursor-pointer focus:border-transparent focus:outline-none  rounded-lg  bg-transparent  w-[100%] text-sm"
                  />
                </div>
                <div className="text-xs flex justify-between px-4  pb-2">
                  <div className="flex gap-2">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div>Remember Me</div>{" "}
                  </div>
                  <div>Forget Password?</div>
                </div>

                <button
                  type="submit"
                  className="bg-teal-700 md:w-[100%] w-[50%] py-2  text-white rounded-[10px]"
                >
                  {loading ? (
                    <span className="text-base">Logging In ...</span>
                  ) : (
                    "Log In"
                  )}
                </button>
              </form>
              <p className="  text-xs pb-5 pt-2">
                Don’t have an account ?{" "}
                <span>
                  <a href={"/"}> Start for free </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginComp;
