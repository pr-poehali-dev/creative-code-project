import React, { useState } from "react";
import Icon from "@/components/ui/icon";
import Modal from "@/components/Modal";
import TeachersTab from "@/components/tabs/TeachersTab";
import ProfileTab from "@/components/tabs/ProfileTab";
import PlaceholderTab from "@/components/tabs/PlaceholderTab";

const TabsSection = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const openModalHandler = (modalId: string) => {
    setOpenModal(modalId);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <button
          onClick={() => openModalHandler("teachers")}
          className="bg-white hover:bg-purple-50 shadow-lg rounded-xl p-4 transition-all duration-300 hover:scale-105 border hover:border-purple-200"
        >
          <Icon
            name="GraduationCap"
            size={24}
            className="mx-auto mb-2 text-purple-600"
          />
          <span className="text-sm font-medium text-gray-700">
            Для педагогов
          </span>
        </button>

        <button
          onClick={() => openModalHandler("parents")}
          className="bg-white hover:bg-pink-50 shadow-lg rounded-xl p-4 transition-all duration-300 hover:scale-105 border hover:border-pink-200"
        >
          <Icon name="Heart" size={24} className="mx-auto mb-2 text-pink-600" />
          <span className="text-sm font-medium text-gray-700">
            Для родителей
          </span>
        </button>

        <button
          onClick={() => openModalHandler("games")}
          className="bg-white hover:bg-blue-50 shadow-lg rounded-xl p-4 transition-all duration-300 hover:scale-105 border hover:border-blue-200"
        >
          <Icon
            name="Gamepad2"
            size={24}
            className="mx-auto mb-2 text-blue-600"
          />
          <span className="text-sm font-medium text-gray-700">Игры</span>
        </button>

        <button
          onClick={() => openModalHandler("about")}
          className="bg-white hover:bg-green-50 shadow-lg rounded-xl p-4 transition-all duration-300 hover:scale-105 border hover:border-green-200"
        >
          <Icon name="Info" size={24} className="mx-auto mb-2 text-green-600" />
          <span className="text-sm font-medium text-gray-700">О нас</span>
        </button>

        <button
          onClick={() => openModalHandler("profile")}
          className="bg-white hover:bg-orange-50 shadow-lg rounded-xl p-4 transition-all duration-300 hover:scale-105 border hover:border-orange-200"
        >
          <Icon
            name="User"
            size={24}
            className="mx-auto mb-2 text-orange-600"
          />
          <span className="text-sm font-medium text-gray-700">
            Личный кабинет
          </span>
        </button>
      </div>

      <Modal
        isOpen={openModal === "teachers"}
        onClose={closeModal}
        title="Для педагогов"
        size="xl"
      >
        <TeachersTab />
      </Modal>

      <Modal
        isOpen={openModal === "parents"}
        onClose={closeModal}
        title="Для родителей"
        size="lg"
      >
        <PlaceholderTab
          title="Полезные ссылки, вебинары, рекомендации"
          description="Ресурсы для родителей в помощь развитию детей"
          icon="Users"
          message="Раздел в разработке"
          submessage="Скоро здесь появятся полезные материалы для родителей"
          colors={{
            bg: "from-pink-50 to-pink-100 border-pink-200",
            text: "text-pink-800",
            iconColor: "text-pink-400",
            messageColor: "text-pink-600",
          }}
        />
      </Modal>

      <Modal
        isOpen={openModal === "games"}
        onClose={closeModal}
        title="Игры"
        size="lg"
      >
        <PlaceholderTab
          title="Игры для детей, игры для детей и родителей"
          description="Образовательные и развивающие игры"
          icon="Puzzle"
          message="Игры готовятся к запуску"
          submessage="Увлекательные образовательные игры уже скоро"
          colors={{
            bg: "from-blue-50 to-blue-100 border-blue-200",
            text: "text-blue-800",
            iconColor: "text-blue-400",
            messageColor: "text-blue-600",
          }}
        />
      </Modal>

      <Modal
        isOpen={openModal === "about"}
        onClose={closeModal}
        title="О нас"
        size="lg"
      >
        <PlaceholderTab
          title="О нашем проекте"
          description="Узнайте больше о нашей миссии и команде"
          icon="Lightbulb"
          message="Описание проекта"
          submessage="Подробная информация о проекте будет добавлена"
          colors={{
            bg: "from-green-50 to-green-100 border-green-200",
            text: "text-green-800",
            iconColor: "text-green-400",
            messageColor: "text-green-600",
          }}
        />
      </Modal>

      <Modal
        isOpen={openModal === "profile"}
        onClose={closeModal}
        title="Личный кабинет"
        size="md"
      >
        <ProfileTab />
      </Modal>
    </div>
  );
};

export default TabsSection;
