import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import TeachersTab from "@/components/tabs/TeachersTab";
import ProfileTab from "@/components/tabs/ProfileTab";
import PlaceholderTab from "@/components/tabs/PlaceholderTab";

const TabsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Tabs defaultValue="teachers" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg rounded-xl p-2 mb-8">
          <TabsTrigger
            value="teachers"
            className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 font-medium"
          >
            <Icon name="GraduationCap" size={16} className="mr-2" />
            Для педагогов
          </TabsTrigger>
          <TabsTrigger
            value="parents"
            className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700 font-medium"
          >
            <Icon name="Heart" size={16} className="mr-2" />
            Для родителей
          </TabsTrigger>
          <TabsTrigger
            value="games"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 font-medium"
          >
            <Icon name="Gamepad2" size={16} className="mr-2" />
            Игры
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700 font-medium"
          >
            <Icon name="Info" size={16} className="mr-2" />О нас
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 font-medium"
          >
            <Icon name="User" size={16} className="mr-2" />
            Личный кабинет
          </TabsTrigger>
        </TabsList>

        <TabsContent value="teachers" className="animate-fade-in">
          <TeachersTab />
        </TabsContent>

        <TabsContent value="parents" className="animate-fade-in">
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
        </TabsContent>

        <TabsContent value="games" className="animate-fade-in">
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
        </TabsContent>

        <TabsContent value="about" className="animate-fade-in">
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
        </TabsContent>

        <TabsContent value="profile" className="animate-fade-in">
          <ProfileTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsSection;
