import { get, HttpStatus } from "../utils/api";

export default class GreetingService {
  async getGreetingMessage(): Promise<string> {
    try {
      const message: { status: string } = await get("http://localhost:3001/", [
        HttpStatus.OK,
      ]);
      return message.status;
    } catch (err) {
      console.log(`api err:${err}`);
      return "err";
    }
  }
}
