import { get } from "../utils/api";

export default class GreetingService {
  getGreetingMessage = async (): Promise<string> => {
    try {
      const message: { status: string } = await get(
        "http://localhost:3001/v1/",
      );

      return message.status;
    } catch (err) {
      console.log(`${err}`);
      throw err;
    }
  };
}
