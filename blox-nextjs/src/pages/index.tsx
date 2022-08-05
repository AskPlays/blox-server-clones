import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/button";
import Header from "../components/header";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="w-full flex flex-col flex-wrap sm:flex-row text-white bg-gray-900">
        <div className="order-0 flex flex-col pt-4 mx-2">
          <div className="p-4 mb-2 text-3xl">Modes</div>
          <div className="p-4 mb-2 bg-gray-700 rounded text-center">
            <Button className="block">Default</Button>
            <Button className="block">40 lines</Button>
            <Button className="block">Hyper</Button>
            <Button className="block">Digger</Button>
          </div>
          <div className="p-4 mb-2 bg-gray-700 rounded">
            <h1 className="text-lg">Singleplayer tools</h1>
            Reset time <input type="number" min="0" max="10000" value="0"/>
          </div>
          <div className="p-4 mb-2 bg-gray-700 rounded">
            <h1 className="text-lg">stats</h1>
            <p className="text-sm">
              PPS: 0<br/>
              APM: 0<br/>
              lines: 0<br/>
            </p>
          </div>
        </div>
        <div className="sm:order-1 order-[-1]">
          <div className="p-5 flex">
            <div className="sm:w-[128px] w-[64px]">Hold</div>
            <div className="sm:w-[320px] sm:h-[640px] w-[160px] h-[320px]">Game</div>
            <div className="sm:w-[160px] w-[80px]">Queue</div>
          </div>
        </div>
        <div className="order-2 flex-grow m-2 sm:m-0">Opponents</div>
        
      </div>
      <div className="p-4 bg-gray-700 rounded sm:absolute right-3 bottom-3 static m-2">
        <h1>Chat</h1>
        <div>
          <h1 className="text-center text-4xl">{hello.data?.greeting}</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
