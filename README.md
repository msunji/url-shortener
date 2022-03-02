# Frontend Mentor Challenges: URL Shortening Landing Page

<p align="center">
<img src="https://res.cloudinary.com/dxzcdb0pm/image/upload/v1646206235/fem-compilation/url-shortener_kqz45u.png" alt="URL Shortening Landing Page Preview" />
</p>
<br />
<div style="text-align: center;">
  <div>
  <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G">View Challenge</a> | <a href="https://url-shortener-msunji.vercel.app/">View Live Site</a>
  </div>
</div>

<br >

Users should be able to: 
- View the optimal layout depending on their screen size
- Shorten any valid URL
- See a list of their shortened links even after refreshing their browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the form is submitted if the input field is left empty

---

## Quick Project Notes
- I opted to go with SCSS to style this project, just to try something a bit different from the usual CSS-in-JS solutions that I usually tend to do.
- I learned a good chunk about working with [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and getting state to persist on page reload. Also learned a bit more about the Clipboard API and using the [Constraint validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation) for form validation.

## Built with
- React (bootstrapped with CRA)
- SCSS
- Hosted with Vercel