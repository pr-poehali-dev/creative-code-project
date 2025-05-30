import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface PlaceholderTabProps {
  title: string;
  description: string;
  icon: string;
  message: string;
  submessage: string;
  colors: {
    bg: string;
    text: string;
    iconColor: string;
    messageColor: string;
  };
}

const PlaceholderTab: React.FC<PlaceholderTabProps> = ({
  title,
  description,
  icon,
  message,
  submessage,
  colors,
}) => {
  return (
    <Card className={`bg-gradient-to-br ${colors.bg}`}>
      <CardHeader>
        <CardTitle className={`${colors.text} flex items-center`}>
          <Icon name={icon as any} size={24} className="mr-3" />
          {title}
        </CardTitle>
        <CardDescription className={colors.text.replace("800", "600")}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <Icon
            name={icon as any}
            size={48}
            className={`mx-auto ${colors.iconColor} mb-4`}
          />
          <p className={`${colors.messageColor} text-lg`}>{message}</p>
          <p
            className={`${colors.messageColor.replace("600", "500")} text-sm mt-2`}
          >
            {submessage}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaceholderTab;
