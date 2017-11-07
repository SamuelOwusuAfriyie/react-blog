import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";

let aboutData = [
  {
  header:"About",
  para:"Cred copper mug venmo pickled banjo paleo. Next level palo santo literally, cray typewriter humblebrag food truck twee chia cred. Hell of skateboard shoreditch, hot chicken occupy offal hoodie crucifix lomo edison bulb roof party artisan celiac. Gentrify cornhole 90's freegan tote bag brunch meggings street art tilde distillery. Hoodie neutra vice, pork belly hot chicken tattooed you probably haven't heard of them forage heirloom. XOXO bicycle rights semiotics af deep v normcore ugh keffiyeh succulents 3 wolf moon everyday carry raclette viral hella. DIY messenger bag deep v portland listicle narwhal mustache biodiesel lo-fi four loko lyft neutra keffiyeh hashtag etsy. Salvia kinfolk migas fam vinyl hashtag intelligentsia crucifix marfa hella cred messenger bag flannel lumbersexual selvage. 3 wolf moon butcher authentic four dollar toast XOXO jianbing keytar helvetica craft beer enamel pin gastropub YOLO. Biodiesel narwhal lomo roof party adaptogen, single-origin coffee plaid scenester squid craft beer before they sold out Typewriter PBR&B tofu hell of VHS, tumblr la croix wolf blue bottle scenester vegan thundercats. Raw denim vexillologist woke, XOXO fixie everyday carry man bun. Biodiesel truffaut selvage locavore, kale chips hashtag edison bulb keffiyeh cloud bread quinoa schlitz next level austin meh. Bitters pabst adaptogen 3 wolf moon mumblecore man braid plaid YOLO seitan butcher pickled. Dreamcatcher butcher chia fanny pack drinking vinegar. Bespoke paleo taxidermy disrupt, seitan health goth quinoa authentic vape iceland cronut narwhal. Air plant kickstarter seitan ethical portland mixtape polaroid lo-fi. Art party 90's XOXO heirloom chicharrones etsy tumeric gluten-free intelligentsia drinking vinegar butcher literally before they sold out. Snackwave neutra aesthetic succulents, portland flexitarian pitchfork taiyaki mumblecore. Direct trade authentic copper mug, brunch pop-up put a bird on it banh mi church-key quinoa man bun. Bespoke poutine polaroid, snackwave lumbersexual scenester meditation fam Live-edge typewriter ugh heirloom, four loko gochujang vinyl wolf banjo activated charcoal butcher taxidermy pinterest gluten-free. Chia listicle street art kombucha subway tile cliche ethical pop-up photo booth poke mlkshk flexitarian tattooed roof party +1. Brooklyn bicycle rights enamel pin post-ironic ennui bespoke poke williamsburg tousled jean shorts literally.",
  date: "Published by Bliza Samuel on November 2, 2017"
},
{
header:"Skills",
para:"Cred copper mug venmo pickled banjo paleo. Next level palo santo literally, cray typewriter humblebrag food truck twee chia cred. Hell of skateboard shoreditch, hot chicken occupy offal hoodie crucifix lomo edison bulb roof party artisan celiac. Gentrify cornhole 90's freegan tote bag brunch meggings street art tilde distillery. Hoodie neutra vice, pork belly hot chicken tattooed you probably haven't heard of them forage heirloom. XOXO bicycle rights semiotics af deep v normcore ugh keffiyeh succulents 3 wolf moon everyday carry raclette viral hella. DIY messenger bag deep v portland listicle narwhal mustache biodiesel lo-fi four loko lyft neutra keffiyeh hashtag etsy. Salvia kinfolk migas fam vinyl hashtag intelligentsia crucifix marfa hella cred messenger bag flannel lumbersexual selvage. 3 wolf moon butcher authentic four dollar toast XOXO jianbing keytar helvetica craft beer enamel pin gastropub YOLO. Biodiesel narwhal lomo roof party adaptogen, single-origin coffee plaid scenester squid craft beer before they sold out Typewriter PBR&B tofu hell of VHS, tumblr la croix wolf blue bottle scenester vegan thundercats. Raw denim vexillologist woke, XOXO fixie everyday carry man bun. Biodiesel truffaut selvage locavore, kale chips hashtag edison bulb keffiyeh cloud bread quinoa schlitz next level austin meh. Bitters pabst adaptogen 3 wolf moon mumblecore man braid plaid YOLO seitan butcher pickled. Dreamcatcher butcher chia fanny pack drinking vinegar. Bespoke paleo taxidermy disrupt, seitan health goth quinoa authentic vape iceland cronut narwhal. Air plant kickstarter seitan ethical portland mixtape polaroid lo-fi. Art party 90's XOXO heirloom chicharrones etsy tumeric gluten-free intelligentsia drinking vinegar butcher literally before they sold out. Snackwave neutra aesthetic succulents, portland flexitarian pitchfork taiyaki mumblecore. Direct trade authentic copper mug, brunch pop-up put a bird on it banh mi church-key quinoa man bun. Bespoke poutine polaroid, snackwave lumbersexual scenester meditation fam Live-edge typewriter ugh heirloom, four loko gochujang vinyl wolf banjo activated charcoal butcher taxidermy pinterest gluten-free. Chia listicle street art kombucha subway tile cliche ethical pop-up photo booth poke mlkshk flexitarian tattooed roof party +1. Brooklyn bicycle rights enamel pin post-ironic ennui bespoke poke williamsburg tousled jean shorts literally.",
date: "Published by Bliza Samuel on November 2, 2017"
}
  ]
let socialLinks = [
  {
    iconName: "facebook",
    url: "https://www.facebook.com/bliza.samuel"
  },
  {
    iconName: "twitter",
    url: "https://www.facebook.com/bliza.samuel"
  },
  {
    iconName: "instagram",
    url: "https://www.instagram.com/blizasamuel/"
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <About data={aboutData}/>
        <Footer social={socialLinks}/>
      </div>
    )
  }
}
export default App;
