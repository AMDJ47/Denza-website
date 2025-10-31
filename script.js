// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navLinks = document.getElementById("navLinks")

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

// Smooth scroll function
function scrollToSection(event, href) {
  event.preventDefault()
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" })
    navLinks.classList.remove("active")
  }
}

// Form submission handling
const contactForm = document.getElementById("contactForm")
const submitBtn = document.getElementById("submitBtn")

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)

  try {
    const response = await fetch("https://formspree.io/f/xanyqvpb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      submitBtn.textContent = "Message Sent!"
      contactForm.reset()
      setTimeout(() => {
        submitBtn.textContent = "Send Confidential Message"
      }, 5000)
    } else {
      alert("There was an error submitting the form. Please try again.")
    }
  } catch (error) {
    alert("There was an error submitting the form. Please try again.")
  }
})
