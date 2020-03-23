export const LikePost = (messageId) => {

  fetch(`https://technigo-thoughts.herokuapp.com/${messageId}/like`, {
    method: "POST",
    body: "", 
    headers: { "content-type": "application/json",}
  })

  .then(() => {
      window.location.reload()
    })

}