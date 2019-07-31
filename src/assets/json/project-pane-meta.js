import Innovate1 from "../images/screenshots/InnovateWithinAbout.png";
import Innovate2 from "../images/screenshots/InnovateWithinLogin.png";
import Innovate3 from "../images/screenshots/InnovateWithinMap.png";
import Multisite1 from "../images/screenshots/Multisite.png";
import Multisite2 from "../images/screenshots/Multisite(1).png";
import OnlineOrientation1 from "../images/screenshots/OnlineOrientation.png";
import OnlineOrientation2 from "../images/screenshots/OnlineOrientation(2).png";
import OnlineOrientation3 from "../images/screenshots/OnlineOrientation(3).png";
import OnlineOrientation4 from "../images/screenshots/OnlineOrientation(4).png";
import Transportation from "../images/screenshots/TransportationWidget.png";
import ComingSoon from "../images/screenshots/ComingSoon.jpeg";

const projectPaneMeta = [
    {
        "title" : "Innovate Within",
        "images" : [Innovate1, Innovate2, Innovate3],
        "description": `This site was created for the Department of Educations
        Innovate Within pitch competition. The client asked us to create a site
        where they could keep track of important dates, have students register to
        compete with appropriate parental consent, upload their materials, colaborate with other students to pitch as 
        a team and allow judges to look over pitches to determin who advances.`
    },

    {
        "title" : "Blue Roots Project Website",
        "images" : [ComingSoon],
        "description": `This site was for the Blue Roots Project.
        They are a non-profit that raises awareness for the water crisis
        in the world. We used a Javascript library called Cesium that allowed
        us to render a 3D globe. The users would upload stories from around the world
        which the admins would aprove or deny then assign to geographical locations 
        refered to as hotspots. These hotspots would be rendered on the globe as little 
        circles and when the user clicked on one, a panorama associated with that location
        would pop up with markers for every story that is associated with that hotspot.
        When one of the markers is clicked a modle appears showing the story that it is 
        associated with.`
    },

    {
        "title" : "BSU Online Orientation",
        "images" : [OnlineOrientation1, OnlineOrientation2, OnlineOrientation3, OnlineOrientation4],
        "description": `This site was for Ball State's Online Students program. We redisigned a wordpress
        site where various types of students could go and participate in their online orientation. They
        did this by watching a series of videos and completing quizes for each section. The site was able to track
        the progress for each individual user.`
    },

    {
        "title": "Transportation Calculator",
        "images" : [Transportation],
        "description": `This was a simple calculator widget I made for the Ball State Transportation Services.
        They came to us asking for a way for users to be able to calculate the cost of a rental based on the vehicle,
        the number of miles traveled, and the number of days they would have the car.`
    },

    {
        "title" : "Multisite",
        "images" : [Multisite1, Multisite2],
        "description" : `This project was creating multiple wordpress themes for a multisite system. Bal State 
        faculty would then be able to create sites as they needed to and they could all be managed from one central 
        location.`
    },

    {
        "title" : "Mutt Board Running Game",
        "images" : [ComingSoon],
        "description" : `In this project me an a team developed a game for a giant touch screen moniter that sits
        outside the Digital Corps office called the Mutt Board. It is a Ball State themed running game where you need 
        to jump and duck under obstacles. `
    }

]

export default projectPaneMeta;