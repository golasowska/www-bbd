export const ADD_TO_NEWSLETTER = "add_to_newsletter";
export const ADD_TO_MESSAGES = "add_to_messages";

export function addToNewsletterList(values, callback) {
  callback();
  return {
    type: ADD_TO_NEWSLETTER,
    payload: values
  };
}

export function addToMessages(values, callback) {
  callback();
  return {
    type: ADD_TO_MESSAGES,
    payload: values
  };
}
