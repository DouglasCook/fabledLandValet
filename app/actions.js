export const ADD_ITEM = 'ADD_ITEM';

export const addItem = item => ({
  type: ADD_ITEM,
  item,
});

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = (item, index) => ({
  type: REMOVE_ITEM,
  item,
  index,
});

export const UPDATE_SKILL_VALUE = 'UPDATE_SKILL_VALUE';

export const updateSkillValue = (skillName, newValue) => ({
  type: UPDATE_SKILL_VALUE,
  skillName,
  newValue,
});

export const APPEND_TO_ATTRIBUTE = 'APPEND_TO_ATTRIBUTE';

export const appendToAttribute = (attr, item) => ({
  type: APPEND_TO_ATTRIBUTE,
  attr,
  item
});

export const REMOVE_FROM_ATTRIBUTE = 'REMOVE_FROM_ATTRIBUTE';

export const removeFromAttribute = (attr, index) => ({
  type: REMOVE_FROM_ATTRIBUTE,
  attr,
  index
});

export const REMOVE_CODEWORD = 'REMOVE_CODEWORD';

export const removeCodeword = codeword => ({
  type: REMOVE_CODEWORD,
  codeword,
});

export const ADD_CODEWORD = 'ADD_CODEWORD';

export const addCodeword = codeword => ({
  type: ADD_CODEWORD,
  codeword,
});

export const ADD_TICK = 'ADD_TICK';

export const addTick = (book, pageNumber) => ({
  type: ADD_TICK,
  book,
  pageNumber
});

export const REMOVE_TICK = 'REMOVE_TICK';

export const removeTick = (book, pageNumber) => ({
  type: REMOVE_TICK,
  book,
  pageNumber
});
