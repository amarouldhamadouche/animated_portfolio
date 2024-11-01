import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "HEY'U",
    img: "heyu.png",
    desc: "This innovative mobile app bridges the gap between clients and guards to ensure seamless mission coordination. Clients can easily create and manage missions, which instantly notifies the relevant guards through push notifications, ensuring prompt responses and action.\n The app leverages Google Maps for real-time location tracking and navigation, making it easier for guards to reach their destinations. Payments are securely handled through Stripe integration, offering both clients and guards a smooth financial transaction process. Additionally, the app incorporates Intercom for seamless communication, ensuring that all parties stay connected and informed throughout the mission. As an employee at Developatic, \nI was responsible for developing the mobile side of this application.",
    appStore:"https://apps.apple.com/fr/app/heyu-agent-s%C3%A9curit%C3%A9-accueil/id6466315278",
    playStore:"https://play.google.com/store/apps/details?id=com.heyu.security"
  },
  {
    id: 2,
    title: "DARI FACILE",
    img: "darifacile.png",
    desc: "As an employee at Developatic, I developed a mobile app focused on facilitating sales by installment. The app is built using React Native, ensuring a seamless and responsive user experience across both iOS and Android platforms. I utilized Firebase Database to securely store and manage user data and transaction histories. Additionally, I used an awesome carousel to showcase products in an engaging and visually appealing manner, providing a reliable and efficient solution for managing installment-based sales.",
  },
  {
    id: 3,
    title: "DOCMINUTE",
    img: "docminute.png",
    desc: "As an employee at Developatic, I developed a mobile app that consists of two interconnected applications: one for patients and another for doctors. Built with React Native, the app ensures a smooth and responsive experience for users across both iOS and Android platforms. Patients can easily search for doctors, view their profiles, and book appointments directly through the app. On the other hand, doctors can access a comprehensive dashboard to view all their appointments, manage their schedules, and stay organized. To enhance user engagement, I integrated Firebase Push Notifications, allowing both patients and doctors to receive timely reminders and updates about appointments. This app streamlines the appointment process, making healthcare more accessible and efficient for both patients and healthcare providers.",
    appStore:"https://apps.apple.com/dz/app/docminute/id6449739822?l=fr-FR",
    playStore:"https://play.google.com/store/apps/details?id=com.docminute.docminute&pli=1"
  },
  {
    id: 4,
    title: "KERYA",
    img: "kerya.png",
    desc: "As developer at Developatic, I contributed to the creation of Kerya, a React Native mobile app that serves as a localized alternative to Airbnb for the Algerian market. The app enables hosts to list their properties and visitors to search and book stays, featuring an interactive map, integrated calendar for booking management, real-time chat via Socket, and Firebase push notifications for instant updates. Kerya was designed to offer a user-friendly experience tailored specifically to Algeria, ensuring smooth communication and easy navigation for both hosts and visitors.",
  },
];

const detectOS = () => {
  const { userAgent } = navigator;
  if (/Android/i.test(userAgent)) return "Android";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";

  return false;
};

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const handleClick = (url) => {
    window.location.href = url;
  };
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
            <div className="imageRef" ref={ref}/>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.playStore ?(
            <div className="button-container">
              {detectOS()?(
                <button
                  onClick={()=>handleClick(detectOS()=="Android"? item.playStore: item.appStore)}
                >
                  Download the app
                </button>
              ):(
                <>
                <button
                  onClick={()=>handleClick(item.playStore)}
                >
                  <img src="/playStore.png" />
                  Play Store
                </button>

                <button
                  onClick={()=>handleClick(item.appStore)}
                >
                  <img src="/appStore.png" />
                  App store
                </button>
                </>
              )}
            </div>):(
              <span>The app is not published yet in the stores</span>
            )}
          </motion.div>
        </div>
      </div>
      <hr/>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
     {/*<div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
  </div>*/}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
