import { Sidebar, useProSidebar } from "react-pro-sidebar";

function CustomSidebar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%", position: "absolute", right: 0, flexDirection: "row-reverse"}}>
      <Sidebar collapsedWidth="0" width="40%">
        <p>
          Benanas is hot off a busy music festival season that took him all over
          Alberta, British Columbia, and Saskatchewan. With original productions
          under his belt, a record label of his own, and a few years off to hone
          his style on the decks, make beats on his MPC, and sharpen his
          library, Benanas made waves on dancefloors across the west coast music
          festival scene day and night.
        </p>
        <p>
          But this banana ain’t green... he’s be en attending west coast
          festivals for the last 20 years, during which he’s amassed a track
          pool deeper than an Olympic high dive. Benanas has been performing,
          hosting, and promoting in Calgary’s best venues for the past decade.
          His entirely unique blend of Bass music, Halftime, Hip - Hop, House,
          Funk, Footwork and everything in between crafts a vibey flow that has
          kept crowds moving at Canadian west coast clubs and music festivals
          for years!{" "}
        </p>
        <p>
          He’s a seasoned DJ and developing producer that can read a crowd and
          give them exactly what they needed with a creative flair sprinkled on
          top. You’re sure to get four things when seeing a live set: balanced
          blends, tasteful turntablism, viscous vibes, and of course, that
          sweet, sweet potassium.
        </p>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()} style={{fontSize: "4vh", opacity: 0.7}}>Bio &gt;</button>
      </main>
    </div>
  );
}

export default CustomSidebar;
