import { useEffect, useState } from "react";
import GreetingService from "../services/greeting";

export const useGreeting = () => {
  const greeting = new GreetingService();
  const [greetingMessage, setGreetingMessage] = useState<string>(
    "failed",
  );

  const getGreetingMessage = async () => {
    const message = await greeting.getGreetingMessage();
    setGreetingMessage(message);
  };

  useEffect(() => {
    getGreetingMessage();
  }, []);

  return {
    greetingMessage,
  };
};
