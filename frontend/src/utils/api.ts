export enum HttpStatus {
  OK = 200,
}

export const get = async <T>(
  path: string,
  acceptedResponseCodes: HttpStatus[],
): Promise<T> => {
  const response = await fetch(path);
  const responseData = await response.json();

  if (acceptedResponseCodes.indexOf(response.status) === -1) {
    throw new Error(responseData.message);
  }

  return responseData;
};

export const post = async <T>(
  path: string,
  reqBody: unknown,
  acceptedResponseCodes: HttpStatus[],
): Promise<T> => {
  const request: RequestInit = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  };
  const response = await fetch(path, request);
  const responseData = await response.json();

  if (acceptedResponseCodes.indexOf(response.status) === -1) {
    throw new Error(responseData.message);
  }

  return responseData;
};
