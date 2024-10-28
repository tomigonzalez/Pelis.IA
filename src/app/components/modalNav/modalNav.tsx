export default function ModalNav({ isModalOpen }: { isModalOpen: boolean }) {
  return (
    <div
      className={`relative transition-transform z-[3] ${
        isModalOpen ? "animate-slideDown" : ""
      }`}
    >
      {/* Contenido del modal */}
      <div className="relative bg-black opacity-[0.8] min-h-screen w-full z-[1]"></div>
    </div>
  );
}
