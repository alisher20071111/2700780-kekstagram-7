const descriptions = [
  'Красивый закат на берегу моря',
  'Прогулка по лесу',
  'Мой любимый кот',
  'Путешествие в горы',
  'Отличный день с друзьями',
  'Красота природы',
  'Незабываемое путешествие',
  'Утро в большом городе',
];

const names = [
  'Артём',
  'Александр',
  'Мария',
  'Дмитрий',
  'Анна',
  'Максим',
  'Екатерина',
  'Иван',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент!',
];

const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

let commentId = 1;

const createComment = () => {
  const commentMessages = [...messages];

  const messageCount = getRandomInteger(1, 2);
  const commentText = [];

  for (let i = 0; i < messageCount; i++) {
    const index = getRandomInteger(0, commentMessages.length - 1);
    commentText.push(commentMessages.splice(index, 1)[0]);
  }

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: commentText.join(' '),
    name: getRandomArrayElement(names),
  };
};

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: Array.from(
    { length: getRandomInteger(0, 30) },
    createComment
  ),
});

const photos = Array.from({ length: 25 }, (_, index) => createPhoto(index + 1));

export { photos };

