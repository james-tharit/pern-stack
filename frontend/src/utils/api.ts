export const HttpStatus = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
} as const;

export type HttpStatus = (typeof HttpStatus)[keyof typeof HttpStatus];

export const get = async <T>(path: string): Promise<T> => {
  const response = await fetch(path);

  if (response.status !== HttpStatus.OK) {
    const errorData = await response
      .json()
      .catch(() => ({ message: `HTTP Error: ${response.status}` }));
    throw new Error(
      errorData.message || `Request failed with status: ${response.status}`,
    );
  }

  const responseData = await response.json();

  return responseData;
};

export const post = async <T>(path: string, reqBody: unknown): Promise<T> => {
  const request: RequestInit = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  };
  const response = await fetch(path, request);

  if (response.status !== HttpStatus.OK) {
    const errorData = await response
      .json()
      .catch(() => ({ message: `HTTP Error: ${response.status}` }));
    throw new Error(
      errorData.message || `Request failed with status: ${response.status}`,
    );
  }

  const responseData = await response.json();

  return responseData;
};
