import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Gift from "../images/Daily-Boxes-6.png";
import { useFormik } from "formik";
import Controller from "../images/Controller.png";
import Ram from "../images/Ram.png";
import HDD from "../images/HDD.png";
import Money from "../images/Money.png";

export default function Gifts(props) {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        delayChildren: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const formik = useFormik({
    initialValues: {
      Answer1: "",
      email: "",
      information: "",
    },
  });

  const item = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.1 } },
  };
  const [Answer1, setAnserw1] = React.useState("");
  const [Answer2, setAnserw2] = React.useState("");
  const [Answer3, setAnserw3] = React.useState("");
  const [Gift1, setGift1] = React.useState(false);
  const [Gift2, setGift2] = React.useState(false);
  const [Gift3, setGift3] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  //   React.useEffect(() => {
  //     console.log("Answer:", formik.initialValues.Answer1);
  //   }, [formik.initialValues.Answer1]);
  function handleChange(event) {
    setAnserw1(event.target.value);
  }
  function handleChange2(event) {
    setAnserw2(event.target.value);
  }
  function handleChange3(event) {
    setAnserw3(event.target.value);
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-row items-center justify-around space-x-[100px]"
    >
      <motion.div
        whileHover={{ width: 800 }}
        variants={item}
        className="item shadow-lg hover:shadow-2xl hover:shadow-white shadow-white w-[400px] -mb-[400px] -mt-[200px] h-[450px] border-[5px] border-white"
      >
        <AnimatePresence>
          {Gift1 ? (
            <motion.div
              key={"gift1"}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=" flex flex-col  items-center justify-start rounded-[2%]"
            >
              <h2 className="text-[30px] mt-[30px]  text-pink-600 font-medium font-third ">
                Gifts 1 is this website :DDD
              </h2>
              <p className="font-secondary text-[25px] text-white mt-[50px] text-center">
                Listen :"D i know its usless BUT :"D as a philosopher named
                aymen ibno outhmane once said "It aint usless if its cute" and
                me i follow his word :3 well this website with how meh it looks
                toke me so much time for god knows why :"D i hope you find it
                cute atleast :"D love you :"D"
              </p>
            </motion.div>
          ) : (
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.1 } }}
              className=" flex flex-col  items-center justify-start rounded-[2%]"
            >
              <h1 className="font-primary text-[50px] text-pink-600">Gift 1</h1>
              <button
                onClick={() => {
                  if (props.firstclick == false) {
                    props.setFirstclick(true);
                  } else if (
                    props.firstclick == true &&
                    Answer1.toUpperCase() == "BELLY"
                  ) {
                    setGift1(true);
                  }
                }}
              >
                <motion.img
                  animate={{ x: 0, y: 0 }}
                  whileHover={{
                    scale: 1,
                    x: [-3, 3, -3],
                    y: [-1, 1, -1],
                    transition: {
                      repeat: Infinity,
                      duration: 0.3,
                      repeatDelay: 0,
                    },
                  }}
                  src={Gift}
                  className={"mt-[50px]"}
                />
              </button>
              {props.quizes ? (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <label>
                    <h2 className="text-[20px] mt-[30px]  text-white font-medium font-primary ">
                      What is Adel's favorite body part ? :3
                    </h2>
                  </label>
                  <input
                    onChange={handleChange}
                    id="Answer1"
                    type={"text"}
                    name={"Answer1"}
                    placeholder="..."
                    className={`text-center mt-[20px] font-primary rounded-[5%] border-[3px] border-pink-400 h-[40px]  w-[300px]  ${
                      formik.touched.Name ? "border-white" : ""
                    }`}
                  ></input>
                </motion.div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        whileHover={{ width: 800 }}
        variants={item}
        className="item shadow-lg hover:shadow-2xl hover:shadow-white shadow-white w-[400px] -mb-[400px] -mt-[200px] h-[450px] border-[5px] border-white"
      >
        <AnimatePresence>
          {Gift2 ? (
            <motion.div
              key={"gift2"}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" flex flex-col  items-center justify-start rounded-[2%]"
            >
              <h2 className="text-[30px] mt-[30px] text-center text-pink-600 font-medium font-third ">
                Gifts 2 is a birthday letter :DDD
              </h2>
              <p className="font-secondary text-[25px] text-white mt-[50px] text-center">
                what is a birthday without a letter am i right ? :"D click the
                button bellow to proceed to your lovely letter :3"
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="Letter"
                className=" px-[20px] py-[10px] rounded-[10%] mt-[40px] scale-[1.2] bg-white font-third hover:bg-pink-600 hover:text-white text-black text-[20px] text-center"
              >
                Letter
              </a>
            </motion.div>
          ) : (
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.1 } }}
              className=" flex flex-col  items-center justify-start rounded-[2%]"
            >
              <h1 className="font-primary text-[50px] text-pink-600">Gift 2</h1>
              <button
                onClick={() => {
                  if (props.firstclick == false) {
                    props.setFirstclick(true);
                  } else if (
                    props.firstclick == true &&
                    Answer2.toUpperCase() == "LAUGH OUT PROUDLY"
                  ) {
                    setGift2(true);
                  }
                }}
              >
                <motion.img
                  animate={{ x: 0, y: 0 }}
                  whileHover={{
                    scale: 1,
                    x: [-3, 3, -3],
                    y: [-1, 1, -1],
                    transition: {
                      repeat: Infinity,
                      duration: 0.3,
                      repeatDelay: 0,
                    },
                  }}
                  src={Gift}
                  className={"mt-[50px]"}
                />
              </button>
              {props.quizes ? (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <label>
                    <h2 className="text-[20px] mt-[30px]  text-white font-medium font-primary ">
                      What does Lop mean ? :3
                    </h2>
                  </label>
                  <input
                    onChange={handleChange2}
                    id="Answer2"
                    type={"text"}
                    name={"Answer2"}
                    placeholder="..."
                    className={`text-center mt-[20px] font-primary rounded-[5%] border-[3px] border-pink-400 h-[40px]  w-[300px]  ${
                      formik.touched.Name ? "border-white" : ""
                    }`}
                  ></input>
                </motion.div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        whileHover={{ width: 800 }}
        variants={item}
        className="item shadow-lg hover:shadow-2xl hover:shadow-white shadow-white w-[400px] -mb-[400px] -mt-[200px] h-[450px] border-[5px] border-white"
      >
        <AnimatePresence>
          {Gift3 ? (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={"gift3"}
              className=" flex flex-col  items-center justify-start overflow-x-hidden rounded-[2%]"
            >
              <h2 className="text-[30px] mt-[30px] text-center text-pink-600 font-medium font-third ">
                Gifts 3 is an actual gift yaaay :DDD
              </h2>
              <p className="font-secondary text-[25px] text-white mt-[20px] text-center">
                out of the list below, pick one gift to have and tell it to adel
                (i have no backend dev so cant make it fancy :"D")
              </p>
              <div className="flex flex-row text-center justify-around space-x-[6px] w-full  mt-[50px] ">
                <button
                  onClick={() => {
                    setSelected(1);
                    props.setHiddenGift(true);
                  }}
                >
                  <div
                    className={`flex flex-col py-[5px] px-[20px] items-center ${
                      selected == 1 ? "bg-pink-600" : "bg-white"
                    }  rounded-[10%] scale-[1]`}
                  >
                    <h3
                      className={`${
                        selected == 1 ? "text-white" : "text-black"
                      } font-third text-[20px] text-black mt-[10px]`}
                    >
                      HDD 500GB
                    </h3>
                    <img
                      src={
                        "https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/product-content/momentus-fam/momentus-thin/_shared/images/laptop-hdd-left-hero-270x270.png"
                      }
                      className="w-[150px]"
                    />
                  </div>
                </button>
                <button
                  onClick={() => {
                    setSelected(2);
                    props.setHiddenGift(true);
                  }}
                >
                  <div
                    className={`flex flex-col py-[5px] px-[20px] items-center ${
                      selected == 2 ? "bg-pink-600" : "bg-white"
                    }  rounded-[10%] scale-[1]`}
                  >
                    <h3
                      className={`${
                        selected == 2 ? "text-white" : "text-black"
                      } font-third text-[20px] text-black mt-[10px]`}
                    >
                      Controller
                    </h3>
                    <img
                      src={
                        "https://www.dareu.com/public/uploads/images/20220622/1078016e004b7da19766a4639e4e9b73.png"
                      }
                      className="w-[150px] "
                    />
                  </div>
                </button>
                <button
                  onClick={() => {
                    setSelected(3);
                    props.setHiddenGift(true);
                  }}
                >
                  <div
                    className={`flex flex-col py-[15px] px-[20px] items-center ${
                      selected == 3 ? "bg-pink-600" : "bg-white"
                    }  rounded-[10%] scale-[1]`}
                  >
                    <h3
                      className={`${
                        selected == 3 ? "text-white" : "text-black"
                      } font-third text-[20px] text-black`}
                    >
                      Ram 8gb
                    </h3>
                    <img
                      src={
                        "https://deltapage.com/image/cache/catalog/New_images/Crucial/CT8G4DFS824A-1-550x550.png"
                      }
                      className="w-[150px]"
                    />
                  </div>
                </button>
                <button
                  onClick={() => {
                    setSelected(4);
                    props.setHiddenGift(true);
                  }}
                >
                  <div
                    className={`flex flex-col py-[25px] px-[20px] items-center ${
                      selected == 4 ? "bg-pink-600" : "bg-white"
                    }  rounded-[10%] scale-[1]`}
                  >
                    <h3
                      className={`${
                        selected == 4 ? "text-white" : "text-black"
                      } font-third text-[20px] text-black mt-[10px]`}
                    >
                      5000da
                    </h3>
                    <img
                      src={
                        "https://assets.materialup.com/uploads/729ddd0b-3e18-47ea-a6c4-b9d4ae641f73/preview.png"
                      }
                      className="w-[150px]  "
                    />
                  </div>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.1 } }}
              className=" flex flex-col  items-center justify-start rounded-[2%]"
            >
              <h1 className="font-primary text-[50px] text-pink-600">Gift 3</h1>
              <button
                onClick={() => {
                  if (props.firstclick == false) {
                    props.setFirstclick(true);
                  } else if (
                    props.firstclick == true &&
                    Answer3.toUpperCase() == "FRENKIE DE JONG"
                  ) {
                    setGift3(true);
                  }
                }}
              >
                <motion.img
                  animate={{ x: 0, y: 0 }}
                  whileHover={{
                    scale: 1,
                    x: [-3, 3, -3],
                    y: [-1, 1, -1],
                    transition: {
                      repeat: Infinity,
                      duration: 0.3,
                      repeatDelay: 0,
                    },
                  }}
                  src={Gift}
                  className={"mt-[50px]"}
                />
              </button>
              {props.quizes ? (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <label>
                    <h2 className="text-[20px] mt-[30px] ml-[10px]  text-white font-medium font-primary ">
                      What is Adel's favorite barca player :3?copy his fullname
                      directly from google
                    </h2>
                  </label>
                  <input
                    onChange={handleChange3}
                    id="Answer3"
                    type={"text"}
                    name={"Answer3"}
                    placeholder="..."
                    className={`text-center mt-[20px] font-primary rounded-[5%] border-[3px] border-pink-400 h-[40px]  w-[300px]  ${
                      formik.touched.Name ? "border-white" : ""
                    }`}
                  ></input>
                </motion.div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
