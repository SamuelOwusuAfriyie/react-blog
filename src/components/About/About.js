import React from "react";
import "./About.css";
import FontAwesome from "react-fontawesome";
console.log(this.props);
class About extends React.Component {
  render() {
    return (
      <div className="articles">
        {this.props.data.map((item, index) => {
          return (
            <div className="container" key={item.header + index}>
              <h1>{item.header}</h1>
              <hr/>
              <div className="row">
                <div className="col-5">
                  <div className="card">
                    <img className="card-img-top" src="./images/me.jpg" alt="Card image cap"/>

                  </div>
                </div>
                <div className="col-7">
                  <p className="first">{item.para}</p>
                </div>
                <p className="second justify-content-center">{item.date}</p>

              </div>
              <button id="mailBtn" type="button" className="btn btn-primary">Email<FontAwesome name="envelope"/></button>

            </div>
          )
        }
        )}


      </div>

    )
  }
}
export default About;
