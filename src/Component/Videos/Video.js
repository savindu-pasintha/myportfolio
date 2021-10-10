import React from 'react';
import './video.css';
import a from "./a.mp4";
import b from "./b.mp4";
import c from "./c.mp4";
import d from "./d.mp4";
import e from "./e.mp4";
import f from "./f.mp4";
import g from "./g.mp4";
import h from "./h.mp4";
import i from "./i.mp4";
import j from "./j.mp4";
import k from "./k.mp4";
import l from "./l.mp4";
import m from "./m.mp4";
import n from "./n.mp4";

const Video = () => {
    return (
        <div class="videos" style={{ width: "100%", height: "auto" }}>
        <div style={{ width: "100%", height: "auto" }}>
        <video
            src={m}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
          <video
            src={j}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
         </div> 
         <div>
          <video
            src={i}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
          <video
            src={b}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
          <video
            src={f}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
        
          <video
            src={g}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
          <video
            src={d}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
          <video
            src={e}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
          <video
            src={l}
            type="video/mp4"
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
          />
        </div>
      
      </div>
    );
}

export default Video;
