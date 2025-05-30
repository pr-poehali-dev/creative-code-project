import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProjectDescription = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-none shadow-xl">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-full">
                <Icon name="Code" size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
              Описание проекта
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Здесь будет размещено подробное описание проекта "Наш код вашей
                креативности"
              </p>
              <p>
                Платформа для педагогов, родителей и детей, объединяющая
                образовательные ресурсы, игры и инструменты развития
                креативности
              </p>
              <div className="flex justify-center mt-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto">
                      <Icon
                        name="Users"
                        size={24}
                        className="text-purple-600"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Сообщество
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto">
                      <Icon
                        name="BookOpen"
                        size={24}
                        className="text-pink-600"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Обучение
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                      <Icon
                        name="Sparkles"
                        size={24}
                        className="text-blue-600"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Креативность
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDescription;
