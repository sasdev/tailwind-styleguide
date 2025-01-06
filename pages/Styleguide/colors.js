import React from "react";
import Heading1 from "../../components/headings/heading1";
import MainContainer from "../../components/MainContainer";
<<<<<<< HEAD
import Card1 from "../../components/Cards/card1";
=======
import Card1 from "../../components/cards/card1";
>>>>>>> gh-pages

function ColorBox({ color, shade, hex }) {
  return (
    <>
      <div className="space-y-1.5">
        <div
          className={
            "w-full h-10 bg-" +
            color +
            "-" +
            shade +
            " rounded ring-1 ring-inset ring-black ring-opacity-0"
          }
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900 dark:text-gray-400">
            {shade}
          </div>
          {/* <div className="text-gray-900 dark:text-gray-400">{hex}</div> */}
        </div>
      </div>
    </>
  );
}

function ColorLine({ color }) {
  return (
    <div className="flex flex-col space-y-3 text-xs sm:flex-row sm:space-y-0 sm:space-x-4">
      <div className="flex-shrink-0 w-32">
        <div className="flex flex-col justify-center h-10">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-400">
            {color}
          </div>
          {/* <div><code className="text-xs text-gray-500">colors.{color}</code></div> */}
        </div>
      </div>

      <div className="grid flex-1 min-w-0 grid-cols-5 gap-y-3 gap-x-4 2xl:grid-cols-10 2xl:gap-x-2">
        <ColorBox color={color} shade="50" hex="#123456" />
        <ColorBox color={color} shade="100" hex="#123456" />
        <ColorBox color={color} shade="200" hex="#123456" />
        <ColorBox color={color} shade="300" hex="#123456" />
        <ColorBox color={color} shade="400" hex="#123456" />
        <ColorBox color={color} shade="500" hex="#123456" />
        <ColorBox color={color} shade="600" hex="#123456" />
        <ColorBox color={color} shade="700" hex="#123456" />
        <ColorBox color={color} shade="800" hex="#123456" />
        <ColorBox color={color} shade="900" hex="#123456" />
      </div>
    </div>
  );
}

function Colors() {
  return (
    <>
      <MainContainer heading="Colors">
        <Card1>
          <p className="pb-10">
            Tailwind includes an expertly-crafted default color palette
            out-of-the-box that is a great starting point if you don`t have your
            own specific branding in mind.
          </p>

          <ColorLine color="slate" />
          <ColorLine color="gray" />
          <ColorLine color="zinc" />
          <ColorLine color="neutral" />
          <ColorLine color="stone" />
          <ColorLine color="red" />
          <ColorLine color="orange" />
          <ColorLine color="amber" />
          <ColorLine color="lime" />
          <ColorLine color="green" />
          <ColorLine color="emerald" />
          <ColorLine color="teal" />
          <ColorLine color="cyan" />
          <ColorLine color="sky" />
          <ColorLine color="blue" />
          <ColorLine color="indigo" />
          <ColorLine color="violet" />
          <ColorLine color="purple" />
          <ColorLine color="fuchsia" />
          <ColorLine color="pink" />
          <ColorLine color="rose" />
          <ColorLine color="yellow" />
        </Card1>
      </MainContainer>
    </>
  );
}

export default Colors;
