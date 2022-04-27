function header() {
  return (
    <div className="top">
      <div className="top_top">Coding Curriculum</div>{" "}
      <div className="top_bottom">
        <div className="top_bottom_inner">
          <div className="level_divs">
            <p className="level_name">Beginner</p>
            <p className="level_sub">(Grade 1)</p>
          </div>
          <div className="level_divs">
            <p className="level_name">Intermediate</p>
            <p className="level_sub">(Grade 2-3)</p>
          </div>
          <div className="level_divs">
            <p className="level_name">Advanced</p>
            <p className="level_sub">(Grade 4-6)</p>
          </div>
          <div className="level_divs">
            <p className="level_name">Professional</p>
            <p className="level_sub">(Grade 7-9)</p>
          </div>
          <div className="level_divs">
            <p className="level_name">Applied Tech</p>
            <p className="level_sub">(Grade 10+)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
