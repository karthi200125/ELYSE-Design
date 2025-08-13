
import About from "./[pages]/AboutPage";
import AmenetisPage from "./[pages]/AmenetisPage";
import BeliefPage from "./[pages]/BeliefPage";
import CountsPage from "./[pages]/CountsPage";
import LandingPage from "./[pages]/LandingPage";
import ProjectsPage from "./[pages]/ProjectsPage";
import WeDoPage from "./[pages]/WeDoPage";

const Home = () => {
  return (
    <div className="h-screen hide-scrollbar overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <LandingPage />
      <About />
      <CountsPage />
      <ProjectsPage />
      <BeliefPage />
      <WeDoPage />
      <AmenetisPage />
    </div>
  );
};

export default Home;
