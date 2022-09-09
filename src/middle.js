import data from "./main.json";

function middle() {
  var arr = ["one", "two", "three"];
  function certificateAdding(val) {
    if (data[val]["certificate"] !== "") {
      return (
        <p className="sub_h">{data[val]["certificate"]}</p>
      );
    }
  }

  function addSubHeading(val) {

    if (data[val]["sub_head"] !== "") {
      return <p className="sub_h">{data[val]["sub_head"]}</p>;
    }
  }
  function addMostPopular(val) {
    if (data[val]["most_popular"] === true) {
      return <div className="ext">Most Popular</div>;
    }
  }

  function addbestValue(val){
    if (data[val]["best_value"] === true) {
      return <div className="ext2">Best Value</div>;
    } else {
      return false;
    }
  }
  return (
    <div className="main_content">
      {arr.map(function (val, key, arr) {
        console.log(data[val]["course_name"]);
        return (
          <div className="template_div" id={arr[key]}>
            <div className="template_div_inner">
              <div className="template_top">
                <p className="course_name">{data[val]["course_name"]}</p>
                <div className="bottom_info">
                  <div id="classes_div">{data[val]["classes"]} Classes</div>{" "}
                  <div id="offer_div">SAVE 50%</div>
                </div>
              </div>
              <div className="template_bottom">
                <div className="template_bottom_inner">
                  <b>
                    <p id="head_1">Curriculum Includes</p>
                  </b>
                  {addSubHeading(val)}
                  {certificateAdding(val)}

                  <p id="head_2">{data[val]["Curriculum"]}</p>
                  <p className="view_detailed">View Detailed Curriculum</p>
                </div>
              </div>
              <div className="template_price">
                {addMostPopular(val)}
              {addbestValue(val)}
                <div className="price_div">
                  <div className="price_left">
                    <div>Rs. {data[val]["price"]}</div>
                    <div id="blue_head">
                      Price Per Class Rs.{data[val]["price_per_class"]}
                    </div>
                  </div>
                  <div className="price_right">
                    <strike>Rs. {data[val]["prev_price"]}</strike>
                  </div>
                </div>
                <div className="buy_now">Buy Now</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default middle;
