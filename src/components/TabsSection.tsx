import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

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
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <Icon name="BookOpen" size={24} className="mr-3" />
                Ссылки на материалы, вебинары, тренинги
              </CardTitle>
              <CardDescription className="text-purple-600">
                Добавляйте полезные ресурсы для коллег
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <input
                    placeholder="Название материала"
                    className="w-full p-3 rounded-lg border border-purple-200 bg-white focus:ring-2 focus:ring-purple-300 focus:outline-none"
                  />
                  <input
                    placeholder="Ссылка на материал"
                    className="w-full p-3 rounded-lg border border-purple-200 bg-white focus:ring-2 focus:ring-purple-300 focus:outline-none"
                  />
                  <select className="w-full p-3 rounded-lg border border-purple-200 bg-white focus:ring-2 focus:ring-purple-300 focus:outline-none">
                    <option>Выберите тип</option>
                    <option>Вебинар</option>
                    <option>Тренинг</option>
                    <option>Материалы</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <textarea
                    placeholder="Краткое описание"
                    rows={4}
                    className="w-full p-3 rounded-lg border border-purple-200 bg-white focus:ring-2 focus:ring-purple-300 focus:outline-none resize-none"
                  />
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить материал
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parents" className="animate-fade-in">
          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <CardHeader>
              <CardTitle className="text-pink-800 flex items-center">
                <Icon name="Users" size={24} className="mr-3" />
                Полезные ссылки, вебинары, рекомендации
              </CardTitle>
              <CardDescription className="text-pink-600">
                Ресурсы для родителей в помощь развитию детей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Icon
                  name="Heart"
                  size={48}
                  className="mx-auto text-pink-400 mb-4"
                />
                <p className="text-pink-600 text-lg">Раздел в разработке</p>
                <p className="text-pink-500 text-sm mt-2">
                  Скоро здесь появятся полезные материалы для родителей
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="games" className="animate-fade-in">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <Icon name="Puzzle" size={24} className="mr-3" />
                Игры для детей, игры для детей и родителей
              </CardTitle>
              <CardDescription className="text-blue-600">
                Образовательные и развивающие игры
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Icon
                  name="Gamepad2"
                  size={48}
                  className="mx-auto text-blue-400 mb-4"
                />
                <p className="text-blue-600 text-lg">
                  Игры готовятся к запуску
                </p>
                <p className="text-blue-500 text-sm mt-2">
                  Увлекательные образовательные игры уже скоро
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="animate-fade-in">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Icon name="Lightbulb" size={24} className="mr-3" />О нашем
                проекте
              </CardTitle>
              <CardDescription className="text-green-600">
                Узнайте больше о нашей миссии и команде
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Icon
                  name="Info"
                  size={48}
                  className="mx-auto text-green-400 mb-4"
                />
                <p className="text-green-600 text-lg">Описание проекта</p>
                <p className="text-green-500 text-sm mt-2">
                  Подробная информация о проекте будет добавлена
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="animate-fade-in">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center">
                <Icon name="UserPlus" size={24} className="mr-3" />
                Вход и регистрация
              </CardTitle>
              <CardDescription className="text-orange-600">
                Создайте аккаунт или войдите в систему
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto space-y-4">
                <div className="space-y-3">
                  <input
                    placeholder="Email"
                    type="email"
                    className="w-full p-3 rounded-lg border border-orange-200 bg-white focus:ring-2 focus:ring-orange-300 focus:outline-none"
                  />
                  <input
                    placeholder="Пароль"
                    type="password"
                    className="w-full p-3 rounded-lg border border-orange-200 bg-white focus:ring-2 focus:ring-orange-300 focus:outline-none"
                  />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Войти
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-orange-600 text-sm">или</p>
                  <Button
                    variant="outline"
                    className="w-full mt-2 border-orange-200 text-orange-700 hover:bg-orange-50"
                  >
                    Зарегистрироваться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsSection;
