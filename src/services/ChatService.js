export const enumType = {
  In: "in",
  Out: "out",
};

export const ChatService = {
  getChatList: function () {
    return Promise.resolve(Values);
  },
  getChatDetails: function (key) {
    const found = Values.find((it) => it.key === key);
    return Promise.resolve(found);
  },
};

export function uniqueId() {
  return new Date().getTime();
}

const Values = [
  {
    key: "@peter",
    title: "Chat with Peter",
    messages: [
      { id: 1, data: "Hi!", type: enumType.In },
      { id: 2, data: "How are you?", type: enumType.In },
    ],
  },
  {
    key: "@olivia",
    title: "Chat with Olivia",
    messages: [
      { id: 3, data: "Hello!", type: enumType.Out },
      { id: 4, data: "👋", type: enumType.Out },
    ],
  },
];
