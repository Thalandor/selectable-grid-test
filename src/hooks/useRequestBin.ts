const useRequestBin = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const sendData = (body: unknown) =>
    process.env.REACT_APP_REQUESTBIN_URL &&
    fetch(process.env.REACT_APP_REQUESTBIN_URL, {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify(body)
    });
  return { sendData };
};

export default useRequestBin;
