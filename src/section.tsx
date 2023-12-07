import "./App.css";

function Section(props: { sectionimage: string; text: string; id: string }) {
  return (
    <div className="Section" id={props.id}>
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBlock: "10em",
          backgroundImage: 'url("/team-dots.jpg")',
          backgroundSize: "cover",
          width: "100%",
          height: "100vh"
        }}
      >
        <h2 style={{color: "black", fontSize:"3000%", textShadow:"0px 0px 10000px white"}}>{props.text}</h2>
        {/* <p style={{color: "black"}}>
          When in the Course of human events, it becomes necessary for one
          people to dissolve the political bands which have connected them with
          another, and to assume among the powers of the earth, the separate and
          equal station to which the Laws of Nature and of Nature's God entitle
          them, a decent respect to the opinions of mankind requires that they
          should declare the causes which impel them to the separation.
        </p> */}
      </div>
    </div>
  );
}

export default Section;
