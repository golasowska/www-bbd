import * as emailjs from "emailjs-com";

export const ADD_TO_NEWSLETTER = "add_to_newsletter";
export const ADD_TO_MESSAGES = "add_to_messages";
export const SHOW_MARKER = "show_marker";

console.log("emailjs", emailjs);

export function addToNewsletterList(values, callback) {
  callback();
  return {
    type: ADD_TO_NEWSLETTER,
    payload: values
  };
}

export function addToMessages(values, callback) {
  (function() {
    emailjs.init("user_3ieuUIdnmjaxSKgpbxG49");
  })();
  const templateParams = {
    to_name: values.name,
    message_html: values.message,
    from_name: "BBOD",
    to_email: values.email,
    cc: "no-reply@bbod.io"
  };

  emailjs
    .send("smtp_server", "hello_from_bbod", templateParams)
    .then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function(err) {
        console.log("FAILED...", err);
      }
    )
    .then(() => callback());
  return {
    type: ADD_TO_MESSAGES,
    payload: values
  };
}

export function showMarker(values) {
  return {
    type: SHOW_MARKER,
    payload: values
  };
}
