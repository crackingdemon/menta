import {
  Hero,
  Notification,
  Collegesort,
  Ourteam,
  Courses,
  Blog,
  Achievments,
  Counselling2,
  Corosel,
  LoginPopUp,
  Queryformpopup,
  Videos
} from "../components";

export default function Home() {
  return (
    <>
    
      <Queryformpopup />
      <Hero />
      <LoginPopUp />
      <Counselling2 />
      <Collegesort />
      <Achievments />
      <Corosel />
      <Videos/>
      <Ourteam />
      <Courses />
    </>
  )
};