const baseUrl = 'https://api.telegram.org/bot7187558858:AAGH2G3LiRg7idhFg0EHnUhbGOHi5GpAbV4/'

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=-1002063821837&text=${message}`;
  const response = await fetch(url);
  console.log('response', response);
};