import { Wireframe } from './patterns';

export default function App() {
  return (
    <div className="flex flex-col h-screen font-sans">
      <main className="flex-1 overflow-y-auto relative bg-[#F9F6F0]">
        <Wireframe />
      </main>
    </div>
  );
}
