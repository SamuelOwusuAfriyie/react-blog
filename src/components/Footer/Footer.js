import React from "react";
import FontAwesome from "react-fontawesome";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="footer">
        {
          this.props.social.map((item, index) => {
          return (
            <a href={item.url} key={item + index}>
              <FontAwesome name={item.iconName}/>
            </a>
          )
        })
}
      </div>
    )
  }
}

export default Footer;
