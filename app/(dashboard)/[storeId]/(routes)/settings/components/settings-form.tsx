"use cilent";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

interface SettingsFormProps {
  initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Settings" description="Manage store" />
      <Button variant="destructive" size="sm" onClick={() => {}}></Button>

      <Trash className="h-4 w-4"></Trash>
    </div>
  );
};
