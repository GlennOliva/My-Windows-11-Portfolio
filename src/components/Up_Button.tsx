import { ArrowUp } from "lucide-react"; // Arrow-up icon

const Up_Button = () => {
  const scrollToTop = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className="fixed bottom-[50px] right-[200px] bg-[#564F4F] text-white p-3 rounded-full shadow-lg hover:bg-[#6E6262] transition duration-300"
      onClick={scrollToTop}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default Up_Button;
