exports.formatResponse = (status, errors, message, data) => {
  let statusCode;
  if (status === 200 || status === 201) {
    statusCode = "OK";
  } else {
    statusCode = "Failed";
  }

  return {
    errors: [errors || ""],
    status: statusCode,
    message: message || "No message",
    data: data || null,
  };
};
