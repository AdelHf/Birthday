import React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Heart from "../images/line-heart-svgrepo-com.svg";
import TypingAnimation from "../Animations/TypingAnimation";
import Gifts from "../Componenets/Gifts";
export default function HomePage(props) {
  const x = useMotionValue(0);

  const Texts = [
    "It was a chilly December 5th when fate brought together two wandering hearts, Amidst the flurry of people coming and going, one soul's eyes were drawn to the other.It was as if she was the only person in the world, and he was fully lost in her gaze.",
    "Yet, before he could exchange a word with her, they were pulled away from each other, with his heart left heavy with regret. Days turned into weeks, the attached soul found himself returning to the same train station, hoping to catch a glimpse of the one who had captivated his heart",
    "And then, like a miracle, he saw her again. This time, he approached her  with         a sense of familiarity, and the conversation flowed effortlessly. They talked and laughed, and as the night wore on, they realized that they never wanted to let go.",
    "Even though love wasn't agreed upon at first, they kept seeing each other, spending more time together with each passing day. As they learned more about each other, the attachment they had felt grew into something more.",
    "They shared their deepest secrets and dreams, knowing that they had found someone who understood them like no one else ever had. And on a random sunny night, conversation got heavy, and after many struggles...",
    "♡ Love Sprout ♡",
  ];
  const styles = [
    "absolute mt-[62px] ml-[50px] w-[210px] h-[270px] overflow-auto font-primary text-white text-[13.5px]",
    "absolute mt-[55px] ml-[50px] w-[210px] h-[270px] overflow-auto font-primary text-white text-[12.5px]",
    "absolute mt-[60px] ml-[50px] w-[210px] h-[270px] overflow-auto font-primary text-white text-[13.5px]",
    "absolute mt-[57px] ml-[50px] w-[210px] h-[270px] overflow-auto font-primary text-white text-[14px]",
    "absolute mt-[57px] ml-[50px] w-[210px] h-[270px] overflow-auto font-primary text-white text-[14px]",
    "absolute mt-[95px] ml-[50px] w-[210px] h-[270px] overflow-auto font-primary text-white text-[28.5px]",
  ];
  const [Styles, setStyles] = React.useState(styles[0]);
  const [text, setText] = React.useState(Texts[0]);

  const pathLength = useTransform(x, [0, 1050, 1200], [0, 0, 1]);
  const background = useTransform(
    x,
    [0, 1050, 1300],
    ["#828182", "#828182", "#f59ec3"]
  );
  const opacity = useTransform(
    x,
    [
      0, 66, 133, 200, 228, 295, 361, 457, 523, 590, 666, 733, 819, 876, 942,
      1000, 1200, 1250, 1300,
    ],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1]
  );
  const GreetingTexts = [
    "Hello honey :)",
    "HAPPY BIRTHDAAAAAAAAAAY :D",
    "i know im late but late better then never haha :'D ",
    "Hope you are having a wonderful vacation ^^",
    "and now, enjoy your gifts :D",
    "You think its that easy huh :3",
    "NYO :3",
    "to open each gift",
    "You must first answer the question linked below it :3",
    "Once your answer is correct",
    "When you click the gift it will open",
    "Otherwise, nothing happens :3",
    "Now, good luck :)",
    "Their is one more gift :3",
    "But ofc its not made yet :'D",
    "it wouldnt be a Adel gift without being late :'D",
    "However..",
    "Keep checking the site from time to time",
    "Maybe one day, It will show :3",
  ];
  const [train, setTrain] = React.useState(false);
  const [key, setKey] = React.useState("circle");
  const [hide, setHide] = React.useState("");
  const [writing, setWriting] = React.useState(false);
  const [exit, setExit] = React.useState({ scale: 0 });
  const [key2, setKey2] = React.useState(50);

  const [word, setWord] = React.useState(GreetingTexts[0]);
  var i = 1;
  var j = 6;
  var k = 14;

  const [ShiftDown, setShiftDown] = React.useState(0);
  const [gifts, setGifts] = React.useState(false);
  const [firstclick, setFirstclick] = React.useState(false);
  const [quizes, setQuizes] = React.useState(false);
  const [hiddenGift, setHiddenGift] = React.useState(false);
  function myLoop() {
    setTimeout(function () {
      setWord(GreetingTexts[i]);
      setKey2(i);
      i++; //  increment the counter
      if (i < 5) {
        console.log(key2);
        myLoop();
      } else {
        setShiftDown(350);
        setGifts(true);
      }
    }, 4000);
  }
  function myLoop2() {
    setTimeout(function () {
      setWord(GreetingTexts[j]);
      setKey2(j);
      j++; //  increment the counter
      if (j < 13) {
        myLoop2();
      } else {
        setQuizes(true);
      }
    }, 4000);
  }
  function myLoop3() {
    setTimeout(function () {
      setWord(GreetingTexts[k]);
      setKey2(k);
      k++; //  increment the counter
      if (k < 19) {
        myLoop3();
      } else {
        setQuizes(true);
      }
    }, 4000);
  }

  React.useEffect(() => {
    if (writing == true) {
      myLoop();
    }
  }, [writing]);

  React.useEffect(() => {
    if (firstclick == true) {
      setWord(GreetingTexts[5]);
      setKey2(5);
      myLoop2();
    }
  }, [firstclick]);
  React.useEffect(() => {
    if (hiddenGift == true) {
      setWord(GreetingTexts[13]);
      setKey2(13);
      myLoop3();
    }
  }, [hiddenGift]);

  // function myLoop(i) {
  //   setTimeout(() => {
  //     setHide("hidden");
  //     setKey("hiddenTrain");
  //     setWriting(true);
  //     setWord(GreetingTexts[i]);
  //     setKey2(i);
  //     console.log("IIIII", i);
  //   }, 9000);
  // }

  React.useEffect(
    () =>
      x.onChange((latest) => {
        if (x.get() < 200) {
          setText(Texts[0]);
        } else if (x.get() > 200 && x.get() < 460) {
          setText(Texts[1]);
          setStyles(styles[1]);
        } else if (x.get() > 460 && x.get() < 640) {
          setText(Texts[2]);
          setStyles(styles[2]);
        } else if (x.get() > 640 && x.get() < 860) {
          setText(Texts[3]);
          setStyles(styles[3]);
        } else if (x.get() > 860 && x.get() < 1060) {
          setText(Texts[4]);
          setStyles(styles[4]);
        } else if (x.get() > 1060 && x.get() < 1250) {
          setText(Texts[5]);
          setStyles(styles[5]);
        } else if (x.get() > 1250) {
          setTimeout(() => {
            setHide("hidden");
            setKey("hiddenTrain");
            setWriting(true);
          }, 3000);
        }
      }),
    []
  );

  return (
    <motion.div
      style={{ background }}
      className="flex flex-col w-[100vw]  overflow-hidden	  h-[100vh] justify-start items-center"
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1800px"
        height="800px"
        viewBox="0 0 1920.000000 960.000000"
        preserveAspectRatio="xMidYMid meet"
        className="-mt-[200px]"
      >
        <g
          transform="translate(0.000000,960.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <motion.path
            fill="transparent"
            strokeWidth="40"
            stroke="#ffffff"
            strokeLinecap="round"
            style={{ pathLength }}
            d="M10581 7145 c-311 -70 -557 -261 -682 -530 l-31 -65 -45 63 c-172
235 -475 418 -783 473 -111 20 -322 19 -426 -1 -391 -74 -717 -357 -875 -757
-49 -124 -70 -238 -76 -398 -5 -138 -3 -170 21 -297 35 -191 91 -356 185 -548
280 -570 802 -1082 1771 -1737 96 -65 176 -123 178 -127 4 -11 -270 -118 -446
-175 -415 -133 -789 -195 -1232 -203 -511 -10 -808 32 -1840 261 -770 171
-1106 219 -1530 219 -255 0 -414 -15 -625 -58 -264 -53 -476 -131 -1015 -370
-416 -184 -574 -248 -745 -300 -252 -76 -453 -108 -680 -108 -224 1 -411 40
-591 123 -98 45 -114 48 -114 20 0 -38 224 -128 416 -167 139 -28 488 -25 649
5 321 61 536 136 1059 371 563 253 769 328 1063 385 206 40 331 50 593 50 437
-1 733 -45 1650 -248 598 -132 836 -175 1205 -218 168 -20 693 -17 877 5 450
54 883 167 1276 336 l92 40 128 -76 c670 -397 1292 -584 1866 -559 333 14 572
68 1181 266 615 201 856 250 1217 250 371 0 629 -42 1379 -225 212 -52 453
-108 535 -124 824 -165 1457 -100 1918 199 66 42 96 68 96 81 0 30 -24 23
-115 -37 -200 -130 -437 -216 -725 -261 -91 -14 -171 -18 -380 -17 -404 1
-604 32 -1328 208 -772 188 -974 221 -1372 221 -404 0 -590 -38 -1272 -259
-486 -158 -695 -211 -953 -241 -532 -62 -1103 60 -1705 366 -138 70 -277 147
-363 201 l-48 31 164 87 c263 141 477 281 697 456 170 135 497 462 614 614
383 495 574 1007 553 1485 -28 637 -394 1131 -947 1276 -110 28 -342 36 -439
14z m384 -52 c213 -40 416 -155 586 -329 173 -178 280 -388 341 -668 19 -86
22 -131 22 -311 0 -190 -3 -222 -27 -337 -173 -818 -865 -1615 -1841 -2124
-78 -40 -149 -74 -158 -74 -24 0 -400 255 -668 453 -482 357 -867 725 -1098
1051 -335 470 -480 991 -388 1388 97 418 407 762 787 872 326 94 685 32 994
-173 96 -63 240 -210 300 -304 27 -43 55 -76 62 -75 8 2 29 40 47 85 46 115
90 184 175 275 222 238 533 335 866 271z"
          />
        </g>
      </svg>
      <AnimatePresence>
        {writing ? (
          <AnimatePresence>
            {gifts ? (
              <Gifts
                firstclick={firstclick}
                setFirstclick={setFirstclick}
                quizes={quizes}
                setHiddenGift={setHiddenGift}
              ></Gifts>
            ) : null}
            <motion.div
              animate={{ y: ShiftDown }}
              className="flex flex-row w-[1500px] items-start justify-center  h-[500px]"
            >
              <h1 className="font-secondary w-full text-white text-center text-[100px] ">
                <TypingAnimation
                  text={word}
                  Keys={key2}
                  style="item inline-block text-white   text-[75px] "
                  duration={0.04}
                  stagger={0.04}
                  delay={1}
                ></TypingAnimation>
              </h1>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            key={key}
            className="absolute bottom-0 left-[0px] "
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 1300 }}
            animate={{ scale: 1 }}
            exit={exit}
            onTap={() => {
              setTrain(true);
              setKey("train");
              setExit({ x: 4000, transition: { duration: 1 } });
            }}
          >
            {train ? (
              <AnimatePresence>
                <motion.div
                  animate={{ scale: 1.5 }}
                  exit={{ scale: 0 }}
                  key={key}
                  className={`${hide} absolute bottom-[0] flex flex-col mb-[120px]  `}
                >
                  <motion.div
                    style={{ opacity }}
                    className="relative flex flex-col mb-[300px] -ml-[10px]"
                  >
                    <motion.svg
                      className="absolute "
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="300px"
                      height="300px"
                      viewBox="0 0 1183.000000 1080.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                        fill="#ffffff"
                        stroke="none"
                      >
                        <path
                          d="M6365 10766 c-199 -46 -362 -161 -443 -313 -35 -66 -62 -158 -62
-213 -1 -33 -3 -31 -43 45 -60 114 -95 162 -176 238 -118 111 -254 167 -406
167 -263 -1 -495 -165 -624 -442 -22 -45 -47 -109 -56 -142 l-17 -58 -28 48
c-75 130 -238 241 -435 296 -68 19 -105 22 -250 22 -156 0 -177 -3 -260 -28
-249 -76 -409 -226 -481 -451 -21 -64 -27 -107 -31 -217 l-6 -138 -46 35
c-295 223 -681 198 -849 -55 -60 -89 -72 -136 -82 -319 0 -2 -21 15 -46 39
-195 180 -557 130 -867 -120 -247 -198 -381 -486 -348 -748 9 -70 33 -156 66
-236 7 -16 5 -18 -11 -11 -98 41 -256 44 -354 6 -70 -27 -160 -95 -217 -163
-55 -67 -117 -192 -139 -283 -24 -97 -24 -280 0 -360 43 -144 136 -265 260
-339 l60 -36 -35 0 c-19 0 -62 -7 -94 -16 -290 -75 -413 -441 -256 -759 90
-182 244 -309 479 -395 l72 -26 -66 -13 c-260 -52 -458 -303 -472 -598 -6
-126 9 -205 53 -293 73 -145 227 -240 387 -240 26 0 48 -2 48 -4 0 -3 -16 -37
-36 -76 -87 -174 -126 -336 -126 -530 -2 -447 227 -773 629 -897 83 -25 99
-27 293 -27 225 -1 293 10 491 73 53 17 98 31 100 31 2 0 2 -38 1 -84 -6 -141
45 -272 148 -377 193 -196 498 -174 802 58 l57 43 6 -37 c60 -387 295 -604
631 -580 197 14 377 97 554 256 l68 60 26 -39 c131 -198 553 -304 929 -234
253 48 464 186 547 359 19 39 34 71 35 72 1 1 29 -24 62 -56 72 -68 190 -130
308 -162 109 -30 337 -32 440 -5 179 46 350 168 432 307 10 16 20 29 23 29 3
-1 21 -24 40 -51 46 -66 174 -185 244 -228 30 -18 84 -45 118 -60 57 -24 75
-26 193 -26 127 0 132 1 197 33 139 68 245 198 319 390 9 22 10 22 76 -29 139
-107 306 -166 498 -175 370 -19 755 161 939 440 81 122 110 201 131 357 l6 46
52 -14 c110 -28 297 -11 471 44 326 103 601 331 701 580 54 134 54 301 0 457
-14 40 -25 74 -25 77 0 2 36 3 80 1 104 -5 173 11 271 60 211 105 380 306 461
548 31 92 32 100 32 265 0 159 -2 175 -28 255 -62 189 -159 334 -335 503
l-110 105 62 38 c98 60 215 184 265 280 55 108 75 187 75 304 0 162 -52 305
-158 433 -117 142 -278 224 -478 243 l-68 6 28 18 c74 45 144 157 180 290 22
81 25 298 4 380 -24 98 -85 212 -148 276 -109 111 -233 156 -424 157 l-117 0
9 31 c5 17 9 73 9 124 0 381 -290 748 -653 827 -95 21 -279 16 -371 -9 -32 -9
-61 -15 -63 -13 -2 2 2 28 8 58 16 74 6 239 -19 309 -81 230 -257 382 -474
410 -201 25 -414 -63 -612 -253 -42 -41 -79 -70 -81 -64 -42 138 -83 211 -155
279 -93 87 -207 125 -350 115 -216 -15 -431 -152 -580 -371 l-33 -49 -18 62
c-31 117 -86 208 -179 302 -87 87 -154 129 -267 165 -68 22 -290 28 -368 10z
m369 -286 c129 -40 244 -144 319 -289 19 -36 41 -85 48 -109 l12 -43 31 53
c68 119 249 260 403 313 224 78 408 44 552 -103 67 -68 136 -183 162 -269 7
-24 15 -43 18 -43 3 0 21 15 41 34 122 118 341 249 470 282 102 26 209 16 288
-26 139 -74 240 -252 296 -525 10 -44 19 -90 22 -103 4 -20 6 -21 27 -8 12 8
58 27 102 42 101 34 245 38 340 10 200 -59 376 -216 475 -421 66 -137 84 -216
78 -352 -6 -119 -23 -179 -77 -258 -17 -25 -31 -48 -31 -50 0 -3 26 12 58 32
31 20 93 49 137 65 188 66 354 15 459 -140 66 -98 89 -174 94 -312 7 -202 -40
-332 -164 -457 -69 -70 -101 -90 -244 -151 -22 -9 -17 -11 36 -11 179 -2 391
-107 560 -275 319 -319 339 -690 46 -844 -70 -37 -109 -49 -218 -71 l-86 -16
92 -60 c111 -72 236 -200 298 -304 92 -156 134 -307 134 -486 1 -407 -263
-729 -665 -812 -70 -14 -86 -21 -81 -33 39 -102 53 -271 31 -387 -32 -167 -94
-280 -227 -413 -281 -281 -666 -330 -907 -116 -31 28 -54 43 -50 33 4 -11 12
-51 18 -90 42 -270 -126 -617 -385 -795 -89 -62 -135 -85 -228 -116 -262 -88
-565 -31 -842 159 -38 25 -69 45 -70 43 -1 -2 -10 -24 -20 -51 -47 -127 -183
-270 -324 -340 -85 -42 -86 -42 -197 -42 -109 0 -113 1 -189 38 -135 67 -257
204 -377 422 l-44 80 -7 -75 c-3 -41 -13 -95 -22 -120 -43 -116 -152 -230
-281 -291 -125 -60 -189 -74 -345 -73 -118 1 -145 4 -215 27 -152 50 -274 145
-337 261 l-32 61 -7 -40 c-43 -243 -287 -451 -609 -517 -136 -28 -313 -22
-424 16 -179 61 -283 159 -342 322 -13 36 -24 76 -24 89 0 35 -12 31 -35 -11
-10 -20 -54 -68 -96 -108 -86 -81 -229 -161 -354 -197 -98 -29 -269 -36 -358
-15 -143 34 -264 122 -337 246 -38 65 -90 211 -90 254 0 36 -11 38 -47 10
-145 -110 -434 -161 -609 -106 -184 57 -291 186 -334 403 l-11 56 -117 -23
c-300 -59 -543 -57 -747 7 -365 113 -555 436 -514 873 17 177 75 367 150 489
16 27 29 50 27 52 -2 1 -34 -1 -72 -6 -141 -17 -264 19 -347 101 -65 65 -92
139 -92 255 -1 140 44 265 145 399 86 114 260 236 397 277 l44 13 -87 17
c-314 62 -566 350 -566 644 0 210 113 367 367 510 2 1 -19 24 -46 52 -58 60
-113 167 -142 278 -29 106 -32 335 -6 439 37 147 111 258 208 311 85 46 233
46 352 -1 18 -6 18 -5 -1 32 -99 195 -69 459 78 683 226 344 629 493 994 366
39 -14 71 -23 72 -22 1 1 9 36 18 78 23 103 72 202 135 271 167 182 469 179
777 -8 40 -24 74 -44 76 -44 2 0 3 51 3 113 1 129 24 221 80 322 176 314 587
474 937 365 181 -56 326 -203 391 -397 l24 -72 12 86 c14 102 43 178 99 259
115 170 318 287 547 316 117 15 246 -5 344 -53 128 -63 237 -201 274 -348 l14
-54 11 57 c31 156 192 336 389 435 138 69 337 91 467 51z"
                        />
                        <path
                          d="M7611 2285 c-95 -21 -157 -43 -251 -90 -423 -212 -595 -666 -401
-1060 131 -265 375 -432 715 -491 117 -21 423 -14 536 11 256 57 474 168 615
310 179 182 213 443 90 702 -44 94 -82 149 -163 235 -172 182 -467 336 -736
383 -109 19 -317 19 -405 0z m479 -140 c245 -23 509 -181 664 -398 74 -104 93
-179 75 -297 -41 -274 -263 -544 -530 -644 -158 -59 -383 -76 -559 -43 -322
62 -618 251 -724 463 -136 272 56 609 462 809 138 67 256 102 397 114 78 7
104 7 215 -4z"
                        />
                        <path
                          d="M9374 1040 c-80 -11 -205 -54 -274 -93 -85 -48 -194 -162 -232 -243
-31 -65 -33 -75 -33 -179 1 -128 21 -192 85 -274 118 -149 399 -251 655 -238
134 8 205 26 310 80 199 103 309 300 276 493 -28 161 -129 291 -284 368 -150
74 -348 108 -503 86z m358 -111 c123 -26 234 -114 285 -225 22 -48 25 -66 21
-128 -6 -96 -47 -172 -138 -261 -114 -110 -260 -159 -465 -158 -231 1 -396 76
-461 208 -22 47 -26 65 -22 117 6 91 38 150 132 243 106 106 237 173 397 204
65 13 190 13 251 0z"
                        />
                      </g>
                    </motion.svg>
                    <h1 className={Styles}>{text}</h1>
                  </motion.div>
                  <motion.svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="350px"
                    height="170px"
                    viewBox="0 0 1280.000000 974.000000"
                    preserveAspectRatio="xMidYMid meet"
                    className={"cursor-pointer"}
                  >
                    <metadata>
                      Created by potrace 1.15, written by Peter Selinger
                      2001-2017
                    </metadata>
                    <g
                      transform="translate(0.000000,974.000000) scale(0.100000,-0.100000)"
                      fill="transparent"
                      stroke="none"
                    >
                      <motion.path
                        fill="transparent"
                        strokeWidth="400"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, scaleX: -1 }}
                        animate={{ pathLength: 1, scaleX: -1 }}
                        transition={{ duration: 1 }}
                        d="M3015 9726 c-100 -32 -176 -100 -227 -204 l-33 -67 0 -515 0 -515 32
           -67 c40 -85 100 -150 172 -185 l56 -28 310 -5 310 -5 0 -1280 0 -1280 -217 -3
           -218 -2 0 324 c0 203 -4 345 -11 378 -33 156 -162 284 -317 317 -34 7 -199 11
           -455 11 -438 0 -470 -3 -569 -57 -98 -53 -175 -164 -198 -283 -6 -34 -10 -797
           -10 -2192 0 -2404 -6 -2225 74 -2341 45 -66 136 -137 203 -158 21 -6 100 -14
           176 -16 l138 -5 -7 -41 c-4 -23 -7 -100 -6 -172 2 -349 140 -676 391 -926 201
           -200 443 -327 736 -386 124 -24 376 -24 500 0 294 60 535 185 736 386 229 228
           360 507 390 829 26 285 -57 606 -222 850 -16 24 -29 45 -29 48 0 2 428 4 950
           4 523 0 950 -2 950 -5 0 -3 -13 -29 -29 -58 -44 -77 -105 -239 -132 -347 -21
           -83 -24 -119 -24 -290 0 -172 3 -206 24 -290 151 -605 628 -1000 1276 -1055
           155 -14 413 29 581 95 359 142 629 403 768 743 45 107 83 249 93 342 l8 70
           342 3 c319 2 342 1 346 -15 3 -10 8 -49 12 -87 18 -183 132 -458 259 -627 320
           -424 897 -630 1421 -507 521 121 902 492 1031 1003 32 123 44 370 24 493 -44
           282 -184 565 -369 747 l-51 49 0 2063 0 2063 115 0 c62 0 138 5 167 11 123 26
           218 101 275 217 l38 76 0 500 0 501 -32 67 c-57 121 -157 201 -286 227 -37 8
           -780 11 -2507 9 -2325 -3 -2457 -4 -2500 -21 -114 -45 -201 -133 -243 -244
           -20 -55 -22 -77 -25 -482 -4 -474 2 -549 47 -639 75 -149 209 -222 408 -222
           l93 0 0 -480 0 -480 -1512 2 -1513 3 0 1280 0 1280 275 5 275 5 53 30 c67 36
           137 112 171 185 l26 55 0 520 0 520 -31 65 c-44 92 -93 143 -172 182 l-67 33
           -1100 2 c-868 1 -1108 -1 -1140 -11z"
                      />
                      <path
                        d="M345 8076 c-83 -20 -147 -56 -210 -120 -178 -178 -178 -454 -1 -632
           120 -119 276 -160 438 -116 329 92 436 505 194 748 -114 113 -268 157 -421
           120z"
                      />
                    </g>
                  </motion.svg>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div
                animate={{ scale: 1 }}
                exit={exit}
                className="ml-[50px]  flex flex-col"
              >
                <h1 className="text-white font-secondary text-center font-bold text-[50px]">
                  Tap Here
                </h1>
                <motion.h1
                  animate={{ y: [20, 0, 20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    repeatDelay: 1,
                  }}
                  className="text-white mb-[10px] font-secondary text-center font-bold text-[50px]"
                >
                  <i class="fa-solid fa-arrow-down"></i>{" "}
                </motion.h1>

                <motion.div className="w-[70px] ml-[50px] mb-[50px] h-[70px] rounded-full cursor-pointer bg-white hover:bg-pink-600"></motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
