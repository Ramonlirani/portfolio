import React from "react";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------
interface IconifyProps {
   classes: string;
   icon: string;
}

export default function Iconify({ classes, icon }: IconifyProps) {
   return <Icon className={classes} icon={icon} />;
}
