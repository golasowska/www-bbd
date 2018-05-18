import * as emailjs from "emailjs-com";
import ActiveCampaign from "activecampaign";

export const ADD_TO_NEWSLETTER = "add_to_newsletter";
export const ADD_TO_MESSAGES = "add_to_messages";
export const SHOW_MARKER = "show_marker";

const ac = new ActiveCampaign(
  "https://bbod.api-us1.com",
  "0178f4ac013e80b247726fcc0341fbf033bd7fb97413c1f91736aaac87c3efd14c65ef38"
);

export function addToNewsletterList(values, callback) {
  let contact = {
    email: values.email,
    "p[1]": 1
  };

  let contact_add = ac.api("contact/add", contact);
  contact_add
    .then(
      function(result) {
        // successful request
        console.log(result);
      },
      function(result) {
        // request error
      }
    )
    .then(() => callback());
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
