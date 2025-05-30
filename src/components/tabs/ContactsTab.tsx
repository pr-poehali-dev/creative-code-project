import React from "react";
import Icon from "@/components/ui/icon";

const ContactsTab = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Icon name="Phone" size={48} className="mx-auto mb-4 text-indigo-500" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Свяжитесь с нами
        </h3>
        <p className="text-gray-600">
          Мы всегда готовы помочь и ответить на ваши вопросы
        </p>
      </div>

      <div className="grid gap-4">
        <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <Icon name="Mail" size={20} className="text-indigo-600" />
          <div>
            <p className="font-medium text-gray-800">Email</p>
            <p className="text-indigo-600">info@example.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <Icon name="Phone" size={20} className="text-indigo-600" />
          <div>
            <p className="font-medium text-gray-800">Телефон</p>
            <p className="text-indigo-600">+7 (123) 456-78-90</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <Icon name="MapPin" size={20} className="text-indigo-600" />
          <div>
            <p className="font-medium text-gray-800">Адрес</p>
            <p className="text-indigo-600">г. Москва, ул. Примерная, д. 123</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <Icon name="Clock" size={20} className="text-indigo-600" />
          <div>
            <p className="font-medium text-gray-800">Часы работы</p>
            <p className="text-indigo-600">Пн-Пт: 9:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsTab;
