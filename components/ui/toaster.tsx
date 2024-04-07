"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  const getToastClassName = (title: string) => {
    switch (title) {
      case "Meeting created":
        return "bg-green-1";
      case "Failed to create meeting":
        return "bg-purple-1 text-white";
      case "Please select date and time":
        return "bg-sky-1";
      case "Link copied":
        return "bg-green-1 ";
      case "Try again later":
        return "bg-red-1 ";
      default:
        return "";
    }
  };

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const toastClassName = title ? getToastClassName(title) : "";
        return (
          <Toast
            className={`border-none justify-center font-bold ${toastClassName}`}
            key={id}
            {...props}
          >
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
