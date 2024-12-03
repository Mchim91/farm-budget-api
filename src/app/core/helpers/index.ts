export const successResponse = (
  res: any,
  message = 'Operational successful',
  data?: any,
  meta?: any
) => {
  return res.status(200).json({
    status: true,
    message,
    payload: data,
    meta,
  });
};

export const errorResponse = (
  res: any,
  message = 'An error occured',
  data?: any
) => {
  return res.status(400).json({
    status: false,
    message,
    payload: data,
  });
};

export const notFoundResponse = (
  res: any,
  message = 'record not found',
  data?: any
) => {
  const status = data?.constructor === Array ? true : false;
  return res.status(404).json({
    status,
    message,
    payload: data,
  });
};

export const serviceResponse = ({
  status,
  message,
  data,
}: {
  status: boolean;
  message: string;
  data?: any;
}) => {
  return { status, message, data };
};
