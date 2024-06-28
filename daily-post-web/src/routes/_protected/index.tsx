import { createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_protected/')({
  component: () => (
    <div className="app">
      <div className="sidebar">
        <div className="logo">Daily Post</div>
        <div className="menu">
          <input type="text" placeholder="procurar" />
          <h3>Menu Inicial</h3>
          <div className="start-menu">
            <ul>
              <li>Dashboard</li>
              <li>Calendário</li>
              <li>Dailies</li>
            </ul>
          </div>
          <h3>Equipes de Projetos</h3>
          <div className="project-teams">
            <ul>
              <li>Projetos</li>
              <li>Projeto Teste</li>
            </ul>
          </div>
        </div>
        <h3>Notificações</h3>
        <h3>Configurações</h3>
        <div className="user">
          <img src="profile.jpg" alt="Luna Salles" />
          <span>Luna Salles</span>
        </div>
      </div>

      {/* Seção dos Cabeçalho dos Projetos */}
      <div className="main-content">
        <div className="header">
          <h1>Projeto Teste</h1>
          <div className="calendar">Daily</div>
          <div className="users">
            <img src="user1.jpg" alt="User 1" />
            <img src="user2.jpg" alt="User 2" />
            <img src="user3.jpg" alt="User 3" />
            <img src="user4.jpg" alt="User 4" />
            <div className="more">+25</div>
          </div>
        </div>
      </div>
    </div>
  )
});