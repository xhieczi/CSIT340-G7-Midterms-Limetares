
import RepoCard from "./RepoCard";

function Repositories({
  portfolioStars,
  todoStars,
  dotfilesStars,
  handleStarPortfolio,
  handleStarTodo,
  handleStarDotfiles,
}) {
  return (
    <main className="px-20 pt-8">
      <h2 className="mb-6 text-3xl font-bold">Repositories</h2>

      <div className="grid grid-cols-3 gap-8">
        <RepoCard
          name="portfolio"
          description="My personal page built with React."
          language="JavaScript"
          commits={48}
          stars={portfolioStars}
          onStar={handleStarPortfolio}
        />

        <RepoCard
          name="todo-api"
          description="A small REST API for a to-do list."
          language="Java"
          commits={31}
          stars={todoStars}
          onStar={handleStarTodo}
        />

        <RepoCard
          name="dotfiles"
          description="My terminal and editor settings."
          language="Shell"
          commits={12}
          stars={dotfilesStars}
          onStar={handleStarDotfiles}
        />
      </div>
    </main>
  );
}

export default Repositories;
 