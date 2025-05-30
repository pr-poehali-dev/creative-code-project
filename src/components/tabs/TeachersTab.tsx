import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TeachersTab = () => {
  return (
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
  );
};

export default TeachersTab;
