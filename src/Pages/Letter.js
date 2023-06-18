import React from "react";
import Bg from "../images/pink-g7767ccc68_1920.png";
import TextAnimation from "../Animations/TextAnimation";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

import TypingAnimation from "../Animations/TypingAnimation";

export default function Letter() {
  const [key1, setKey1] = React.useState(0);
  const titles = [
    "Dear Honey",
    "Golden Week",
    "Heaven On Earth",
    "The Hug Of Dreams",
    "Thank You",
    "I Love You",
    "Happy Birthday Hobi",
  ];
  const [title, setTitle] = React.useState(titles[0]);
  const Texts = [
    "Hello :) so i decided that i will make the birthday letter a way of reminising on my favorite moment of last year and  recollect our best  memories from that year  and save them so we never forget anything.So, last years birthday i gave you Lop, and got one of the most best cutest warmest videos and reaction ever, its one of my favorite videos of you how much you get hyped with everything and how much you value anything, i cant wait for when i can get your reaction live and kiss you on the lips as you smile.",
    "My next memory that comes into mind is our heavinly week, most likely and without a doubt the best second, minutes hours days and week of my life, ah how much i would pay to have it again, and how much im willing to do to make it happen each week of our life's, and for the heaven week to become heaven life, and i get to live and breath it with you, what a week it was, spending most of the day with you in library, studying and doing random things, seeing your smile and big as... i mean big eyes :D touching your hand and feeling its warmth, all of that was heavinly enough for me to consider it best week of my life, but then to have a deto, and what a deto it was..",
    "Our deto, isnt it a bit disrespectful to call it a deto though? cause it defintely exceeded any deto and any normal thing on earth in the way it made me feel, it was something heavinly and anything less is low for it, what a deto, from first moment to last moment, every second of it was sweet and wonderful, every moment of it made me feel like i have achieved peak happiness, from the second we met on train station and how cute you looked to the way you held my hand and showed me around metro station and guided me, to how we went babzouar helding hands all the way, even thoughtt it was a sweat fest in our hands xD to the lunch we had, testing perfumes and getting to learn a new taste about yours i didnt know before, to feeling death in train station and how you revived me with your massage :')...",
    "To then going to hama with you, experiencing great joy of discovering a wonderful place with you while being dumb and having great fun, while of course holding hands and then, then huggggggggg TTTTTTTTTTTTTTTTTTTTTT, give me that hug again my god TT and i even kissed your forhead TT what a day it was TT feeling your heart beat as im hugging u and feeling your warmth and love and being the closest i have ever being to you, what else to describe this day but heaven x) i really cant wait to have it everyday, i really cant.. then to end this heavenly day, we have probably my second best moment of the day after the hug which is when we leaned our heads on each other fl train, ya imene the way you looked, and the way you made me feel, no word will be able to describe, it was magical, it was wonderful it was amusing, it was all the mafumafu words on earth combied, it was heaven..",
    "Thank you imene, thank you for giving me that week, and thank you for giving me your love and trust, the feeling of appreciation towards you is infinite, i will never wake up and not feel like i got the luckiest with you, you are the comfort of my life, the calm of my heart, the focus of my brain, you are the one who filled every corner of my heart, the one who makes me feel like life and god rewarded me, yes i dont have many friends, yes im not the most social or normal  person, nor am i fit or the most good looking, but who care about all of that when i got someone like you? i dont care and i dont remember last time i cared, if i cared its just to look better in your eyes, but otherwise having you is all i care for and having you for the rest of ny life is all i want and would work hard for, any effort i do in my life you are always the drive for it..",
    "you have lived all the important of my life with me, from getting my license, to getting my master, to studying online and getting a job, you were there in all of them, and im not sure they would've happened if you werent, atleast im sure they wouldnt feel this easy, cause trust me you made them all soooo much easier then they should've being, you always drove me forward and never left me fail, nor did i ever think of giving up at any stage, giving up means not getting the life i want with you and who would dare give up on suching thing, thank you imene, from the most bottom point of my heart thank you, thank you for what you gave me, thank you for what you are giving me and thank you for what you will give me, i will always keep thanking you, either by words or doings, and i will always strive to make you have the life you deserve, i love you, i adore you...",
    "Happy late birthday :') i wish i wouldve gave you it on time, but oh well late better then never right :') happy birthday hobi, and i hope that i will be able to tell you it from the comfort of our home soon, hope you have a wonderful life with me imene and that i get to be the husband you deserver, i hope nothing but the best for you and i wish i can be the one that gives you that best, because you gave me the best, and the best deserves the best.",
  ];

  const [text, setText] = React.useState(Texts[0]);
  const [i, setI] = React.useState(0);
  function previous() {
    if (i > 0) {
      setI(i - 1);
    }
  }
  function next() {
    if (i < 6) {
      setI(i + 1);
    }
  }

  React.useEffect(() => {
    setText(Texts[i]);
    setTitle(titles[i]);
    setKey1(i);
  }, [i]);

  return (
    <motion.div className="relative w-[100vw] bg-cover mx-auto overflow-hidden h-[100vh] bg-Main flex flex-col items-center">
      <h1 className="absolute font-primary w-[1300px] text-center text-pink-600 text-[100px] mt-[50px]  overflow-hidden">
        <AnimatePresence>
          <TypingAnimation
            text={title}
            Keys={key1}
            style="item inline-block text-pink-600 h-[180px]  "
            duration={0.04}
            stagger={0.04}
            delay={0.7}
          ></TypingAnimation>
        </AnimatePresence>
      </h1>
      <p className="absolute top-[200px] font-secondary text-white text-[40px] mt-[50px] w-[1300px] h-[600px]">
        <AnimatePresence>
          <TypingAnimation
            text={text}
            Keys={key1}
            style="item inline-block text-black   "
            duration={0.04}
            stagger={0.04}
            delay={0.7}
          ></TypingAnimation>
        </AnimatePresence>
      </p>
      <div className="relatve flex flex-row w-[100vw] ">
        <button
          onClick={() => {
            previous();
          }}
          className="absolute text-[60px] text-pink-600 hover:text-black left-[50px] bottom-[0]"
        >
          <h1>
            <i class="fa-solid fa-backward"></i>
          </h1>
        </button>
        <button
          onClick={() => {
            next();
          }}
          className="absolute text-[60px] text-pink-600 hover:text-black right-[50px] bottom-[0]"
        >
          <h1>
            <i class="fa-solid fa-forward"></i>{" "}
          </h1>
        </button>
      </div>
    </motion.div>
  );
}
