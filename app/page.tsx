
import About from "./[pages]/AboutPage";
import BeliefPage from "./[pages]/BeliefPage";
import CountsPage from "./[pages]/CountsPage";
import LandingPage from "./[pages]/LandingPage";
import ProjectsPage from "./[pages]/ProjectsPage";

const Home = () => {
  return (
    <div className="h-screen hide-scrollbar overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <LandingPage />
      <About />
      <CountsPage />
      <ProjectsPage />
      <BeliefPage />
      <section className="h-screen w-full bg-yellow-400 snap-start">Section 5</section>
    </div>
  );
};

export default Home;
