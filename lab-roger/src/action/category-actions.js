import uuid from 'uuid/v4';

export const categoryCreate = category => {
  category._id = uuid();
  category.timestamp = new Date();
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryUpdate = category => ({
  type: 'CATEGORY_IPDATE',
  payload: category,
});

export const categoryDelete = category => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})

export const categoryReset = () => ({type: 'CATEGORY_RESET'});