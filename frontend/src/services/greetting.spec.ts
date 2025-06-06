import GreetingService from './greeting';
import { get } from '../utils/api';
import { describe, it, expect, vi } from 'vitest'

const mockResolved = 'Success response';
vi.mock('../utils/api')
describe('Greeting service', () => {
  const greetingService = new GreetingService();

  it('should return greeting message', async () => {
    vi.mocked(get).mockResolvedValue({ status: mockResolved });
    const message = await greetingService.getGreetingMessage();
    expect(message).toEqual(mockResolved);
  });
});
