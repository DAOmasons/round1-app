import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Project } from './pages/Project';
import { RegisterProject } from './components/forms/RegisterProject';
import { Ships } from './pages/Ships';
import { GameRules } from './pages/GameRules';
import { Apply } from './pages/Apply';
import { CreateShip } from './pages/CreateShip';
import { FacilitatorDashboard } from './pages/FacilitatorDashboard';
import { Ship } from './pages/Ship';
import { ApplyFunding } from './pages/ApplyFunding';
import { Facilitators } from './pages/Faciltiators';
import { ShipOpDashboard } from './pages/ShipOpDashboard';
import { MyProjects } from './pages/MyProjects';
import { DevPanel } from './pages/DevPanel';
import { Vote } from './pages/Vote';
import { VoteProvider } from './contexts/VoteContext';
import { ADDR } from './constants/addresses';

export const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="create-project" element={<RegisterProject />} />
      <Route path="edit-project/:id" element={<RegisterProject />} />
      <Route path="create-ship" element={<CreateShip />} />
      <Route path="ships" element={<Ships />} />
      <Route path="game-rules" element={<GameRules />} />
      <Route path="apply" element={<Apply />} />
      <Route path="apply-funding/:shipId" element={<ApplyFunding />} />
      <Route
        path="resubmit-funding/:shipId/:projectId"
        element={<ApplyFunding />}
      />
      <Route path="ship/:id" element={<Ship />} />
      <Route path="project/:id" element={<Project />} />
      <Route path="facilitators" element={<Facilitators />} />
      <Route
        path="facilitator-dashboard"
        element={
          <VoteProvider
            contestAddress={ADDR.SBT_VOTE_CONTEST}
            key={ADDR.SBT_VOTE_CONTEST}
          >
            <FacilitatorDashboard />
          </VoteProvider>
        }
      />
      <Route path="ship-operator-dashboard/:id" element={<ShipOpDashboard />} />
      <Route path="my-projects/:id" element={<MyProjects />} />
      <Route path="dev-panel" element={<DevPanel />} />
      <Route
        path="vote"
        element={
          <VoteProvider
            contestAddress={ADDR.SBT_VOTE_CONTEST}
            key={ADDR.SBT_VOTE_CONTEST}
          >
            <Vote />
          </VoteProvider>
        }
      />
      <Route
        path="dao-vote"
        element={
          <VoteProvider
            contestAddress={ADDR.VOTE_CONTEST}
            key={ADDR.VOTE_CONTEST}
          >
            <Vote isHistory />
          </VoteProvider>
        }
      />
    </Routes>
  );
};
