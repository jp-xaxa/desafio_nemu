document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault()

  const formData = new FormData(this)

  console.log(formData)

  const searchParams = new URLSearchParams(formData)

  const url = "https://suasaudemental.com.br/?" + searchParams.toString()

  console.log(url)

  //window.location.href = url
})
