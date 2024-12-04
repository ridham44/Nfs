// Function to check if the cookie consent has already been given
function hasCookieConsent() {
  const consentGiven = document.cookie
    .split(';')
    .some((item) => item.trim().startsWith('cookieConsent='));
  console.log('Cookie consent given:', consentGiven);
  return consentGiven;
}

// Function to set the cookie consent
function setCookieConsent(value) {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 1); // Set to expire in 1 minute
  document.cookie = `cookieConsent=${value}; expires=${expires.toUTCString()}; path=/`;
  console.log(`Cookie set: cookieConsent=${value}`);
}

// Function to remove the cookie consent popup
function removeConsentPopup() {
  const consentPopup = document.getElementById('cookie-consent-popup');
  console.log('Removing consent popup:', consentPopup); // Log for debugging
  if (consentPopup) {
    document.body.removeChild(consentPopup);
    console.log('Popup removed successfully');
  }
}

// Function to show the cookie consent popup
function showCookieConsent() {
  if (document.getElementById('cookie-consent-popup')) {
    // Prevent showing multiple popups
    return;
  }

  const consentPopup = document.createElement('div');
  consentPopup.className = 'cookie-consent';
  consentPopup.id = 'cookie-consent-popup'; // Added ID to track the popup

  consentPopup.innerHTML = `
    <div class="cookie-content">
      <h2>We use cookies!</h2>
      <p>This website uses cookies to enhance the user experience.</p>
      <button id="accept-all-btn">Accept All</button>
      <button id="reject-btn">Reject</button>
      <button id="customize-btn">Customize</button>
      <button id="reset-consent-btn">Reset Consent</button>
    </div>
  `;

  document.body.appendChild(consentPopup);

  document.getElementById('accept-all-btn').onclick = () => {
    setCookieConsent('accepted');
    removeConsentPopup(); // Close popup after accepting
  };

  document.getElementById('reject-btn').onclick = () => {
    setCookieConsent('rejected');
    removeConsentPopup(); // Close popup after rejecting
  };

  document.getElementById('customize-btn').onclick = () => {
    alert('Customize your cookie settings.');
  };

  // Reset button to clear the cookie
  document.getElementById('reset-consent-btn').onclick = () => {
    document.cookie = "cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    removeConsentPopup();
    showCookieConsent();
  };
}

// Initialization function for cookie consent
export function initCookieConsent() {
  console.log('Checking for cookie consent...');
  if (!hasCookieConsent()) {
    console.log('Showing cookie consent popup...');
    showCookieConsent();
  } else {
    console.log('Cookie consent already given.');
  }
}
