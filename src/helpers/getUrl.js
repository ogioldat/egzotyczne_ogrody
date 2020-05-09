const getUrl = imageRef => {
  return new Promise(res => {
    imageRef.getDownloadURL()
      .then(url => {
        res(url);
      })
      .catch(console.log);
  });
};

export default getUrl;