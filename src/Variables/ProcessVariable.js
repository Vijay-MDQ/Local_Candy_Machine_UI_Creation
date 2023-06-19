const appendData = (data) => {
    const serverData = new FormData()
    for (var key in data) {
        serverData.append(key, data[key]);
    }
    return serverData
  }

  export {appendData}