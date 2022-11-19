import Head from "next/head";
import Image from "next/image";
import { ReactNode, useEffect } from "react";
import { LanyardIncomingPayload, LanyardOpcode, LanyardUser } from "../composables/types";
import { useState } from "react";

export default function render(): ReactNode {

  const [ user, setUser ] = useState<LanyardUser | null>(null);
  const [wsInstance, setWsInstance] = useState<WebSocket | null>(null);

  function connect() {
    let heartbeatInterval = -1;
    const websocket = new WebSocket('wss://api.lanyard.rest/socket');
    setWsInstance(websocket);
    websocket.onopen = () => console.info('[WS] Successfully connected');
    websocket.onerror = (event) => {
      console.error('[WS] Received error: ', event);
      websocket.close();
    };
    websocket.onclose = (event) => {
      console.error('[WS] Closed with code %d. Retrying in 1 second.', event.code);
      if (heartbeatInterval !== -1) {
        window.clearInterval(heartbeatInterval);
        heartbeatInterval = -1;
      }
      window.setTimeout(() => connect(), 1000);
    };
    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data as string) as LanyardIncomingPayload;
      switch (data.op) {
        case LanyardOpcode.Event:
          setUser(data.d);
          break;
        case LanyardOpcode.Hello: {
          if (heartbeatInterval !== -1) window.clearInterval(heartbeatInterval);
          heartbeatInterval = window.setInterval(
            () => websocket.send(JSON.stringify({ op: LanyardOpcode.Heartbeat })),
            data.d.heartbeat_interval
          );
          websocket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: "499021389572079620" } }));
          break;
        }
        default:
          console.info('[WS] Unknown message: %d', data);
      }
    };
  }

  useEffect(() => {
    if(typeof window !== "undefined") connect();
   
    return () => {
     if(wsInstance?.readyState !== 3) wsInstance?.close();
    }
   }, [])
   

  return (
    <>
      <Head>
        <title>KagChi</title>
      </Head>

      <div className="lg:flex"> 
        <div className="flex bg-slate-300 shadow-xl h-[8rem] w-auto lg:h-screen lg:w-[12rem] p-4 m-6 lg:m-14 rounded-xl">
          <div className="lg:h-[10rem] lg:w-[12rem]">
              {!user && (
                <>
                  <div className="flex h-[6rem] lg:h-[10rem] justify-center items-center space-x-2">
                    <div className="w-4 h-4 justify-center rounded-full animate-pulse bg-slate-200"></div>
                    <div className="w-4 h-4 justify-center rounded-full animate-pulse bg-slate-200"></div>
                    <div className="w-4 h-4 justify-center rounded-full animate-pulse bg-slate-200"></div>
                  </div>
                </>
              )}

              {user && (
                <>
                  <div className="flex h-[6rem] w-[6rem] lg:h-[10rem] lg:w-[10rem] relative">
                    <Image
                      className="object-cover object-center rounded-xl shadow"
                      src={`https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.${user.discord_user.avatar.startsWith("a_") ? "gif" : "png"}?size=4096`}
                      layout="fill"
                      objectFit="contain"
                  / >
                    <div className="flex grid justify-items-center relative">
                      <h3 className="ml-32 lg:ml-0 mt-0 lg:mt-44 text-3xl font-segoe-bold justify-center text-slate-700"> KagChi </h3>
                      <div className="text-center box-border ml-32 lg:ml-0 h-10 text-slate-700 w-40 mt-6 border-4 border-slate-200 rounded-full text-sl font-segoe"> <a className="flex mt-1 ml-2">Backend Developer</a> </div>
                    </div>
                  </div>
                </>
              )}

          </div>

      {
        user?.listening_to_spotify && user.spotify && (
          <>
            <nav className="flex bg-slate-300 shadow-xl h-[6rem] lg:ml-[12rem] lg:h-[8rem] w-screen m-6 p-4 rounded-xl bottom-0 fixed">
              <div className="flex h-[4rem] w-[4rem] lg:h-[6rem] lg:w-[6rem] relative">
                <Image
                  className="object-cover object-center rounded-xl shadow"
                  src={user.spotify.album_art_url}
                  layout="fill"
                  objectFit="contain"
                />
                  <div className="flex-col justify-items-center relative">
                    <h3 className="ml-32 -mt-2 lg:mt-[0.2rem] p-1 lg:p-2 text-lg justify-center w-full text-slate-700"> Listening to <a href={`https://open.spotify.com/track/${user.spotify.track_id}`} className="font-segoe-bold break-all"> {user.spotify.song.length > 14 ? user.spotify.song.slice(0, 10) + "..." : user.spotify.song} </a> </h3>
                      <div className="text-center box-border h-10 text-slate-700 w-40 p-2 ml-[7rem] lg:ml-[8.5rem] border-4 border-slate-200 rounded-full text-sl font-segoe"> 
                        <a className="flex -mt-1 justify-center">By <a className="font-segoe-bold ml-1"> {user.spotify.artist.length > 10 ? user.spotify.artist.slice(0, 10) + "..." : user.spotify.artist} </a> </a> 
                      </div>
                  </div>
              </div>
            </nav>
        </>
        )
      }
        </div>
      </div>
      
    </>
  );
}
