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

const ProfileTab = () => {
  return (
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
  );
};

export default ProfileTab;
