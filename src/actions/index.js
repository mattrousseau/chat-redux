export function fetchMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url)
    .then(response => response.json());
  console.log(`https://wagon-chat.herokuapp.com/${channel}/messages`);
  return {
    type: 'SET_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { channel: channel, author: author, content: content, created_at: Date.now() };
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'NEW_MESSAGE',
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  };
}
