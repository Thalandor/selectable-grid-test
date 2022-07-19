const useRequestBin = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const request = (body: any) =>
    process.env.REACT_APP_REQUESTBIN_URL &&
    fetch(process.env.REACT_APP_REQUESTBIN_URL, {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify(body)
    });
  return { request };
};

export default useRequestBin;
