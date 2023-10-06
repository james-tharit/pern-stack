import { useEffect, useState } from "react";
import GreetingService from "../services/greeting";

export const useGreeting = () => {
  const greeting = new GreetingService();
  const [greetingMessage, setGreetingMessage] = useState<string>(
    "Hi! this is default greeting message",
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
